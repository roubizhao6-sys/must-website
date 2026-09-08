/* =========================================================
   联系表单提交逻辑（Formspree）
   =========================================================
   配置方法：
   1) 到 https://formspree.io 免费注册并创建一个表单；
   2) 复制表单端点，形如 https://formspree.io/f/abcdwxyz；
   3) 把下面这一行替换成你的真实端点即可，例如：
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/abcdwxyz";
   未配置时（仍含 YOUR_FORM_ID），提交会自动回退为用邮件客户端发送。
   ========================================================= */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

(function () {
  var form = document.getElementById("contactForm");
  if (!form) return;
  var alertBox = document.getElementById("formAlert");
  var submitBtn = document.getElementById("submitBtn");
  var mailto = form.getAttribute("data-mailto");
  var subject = form.getAttribute("data-subject");
  var sendingText = form.getAttribute("data-sending");
  var successText = form.getAttribute("data-success");
  var errorText = form.getAttribute("data-error");
  var submitText = form.getAttribute("data-submit");
  var isConfigured = FORMSPREE_ENDPOINT.indexOf("YOUR_FORM_ID") === -1;

  function showAlert(type, text) {
    alertBox.style.display = "block";
    alertBox.className = "mt-3 alert alert-" + type;
    alertBox.innerText = text;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);

    if (!isConfigured) {
      // 回退：通过邮件客户端发送
      var name = (data.get("name") || "").toString();
      var email = (data.get("email") || "").toString();
      var message = (data.get("message") || "").toString();
      var body = encodeURIComponent(
        "Name: " + name + "\nEmail: " + email + "\n\n" + message
      );
      window.location.href =
        "mailto:" + mailto + "?subject=" + encodeURIComponent(subject) + "&body=" + body;
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = sendingText;
    fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then(function (res) {
        if (res.ok) {
          showAlert("success", successText);
          form.reset();
        } else {
          showAlert("danger", errorText);
        }
      })
      .catch(function () {
        showAlert("danger", errorText);
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = submitText;
      });
  });
})();
