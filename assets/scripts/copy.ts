let renderCopyButton = function () {
  const highlights = document.querySelectorAll(".article-post div.highlight");
  const copyText = ` 📋Copy`;
  const copiedText = ` ✅ Copied`;

  highlights.forEach((highlight) => {
    const copyButton = document.createElement("button");
    copyButton.innerHTML = copyText;
    highlight.prepend(copyButton);

    const codeBlock = highlight.querySelector("code[data-lang]");
    if (!codeBlock) {
      return;
    }

    copyButton.addEventListener("click", () => {
      navigator.clipboard
        .writeText(codeBlock.textContent)
        .then(() => {
          copyButton.textContent = copiedText;
          copyButton.classList.add("copy");

          setTimeout(() => {
            copyButton.textContent = copyText;
            copyButton.classList.remove("copy");
          }, 2000);
        })
        .catch((err) => {
          alert(err);
          console.log("Something went wrong", err);
        });
    });
  });
};

window.addEventListener("load", () => {
  setTimeout(function () {
    renderCopyButton();
  }, 0);
});
