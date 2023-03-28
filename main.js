(function () {
    const form = document.querySelector("#form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const message = document.querySelector(".message");
      const value = document.querySelector(".for-invalid-input");
      const content = document.querySelector(".msg-content");
  
      if (message.value == "") {
        value.classList.add("show");
        setTimeout(() => {
          value.classList.remove("show");
        }, 2000);
      } else {
        content.textContent = `"${message.value}" that is your message is delivered❤️😊`;
        message.value = "";
      }
    });
  })();
  