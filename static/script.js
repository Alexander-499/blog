lucide.createIcons();
const highlights = document.querySelectorAll("div.article-content div.highlight, div.article-content pre:not([style])")
highlights.forEach(element => {
  const codeHeader = document.createElement("div");
  let language;
  language = element.tagName === "DIV" ? element.childNodes[0]?.childNodes[0].classList[0].slice(9) : "plaintext";
  const codeContent = element?.textContent.replace(/\n/g, "\\n");
  codeHeader.classList.add("code-header");
  codeHeader.innerHTML =
    `<span data-label="${language}"><i data-lucide="code-xml"></i></span>
    <button class="copy-button"><i data-lucide="copy"></i></button>`;
  element.prepend(codeHeader);
  lucide.createIcons();
  const copyButton = codeHeader.querySelector("div.article-content div.highlight button.copy-button, div.article-content pre:not([style]) button.copy-button");
  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(codeContent.replace(/\\n/g, "\n"));
    copyButton.innerHTML = `<i data-lucide="check"></i>`;
    lucide.createIcons();
    setTimeout(() => {
      copyButton.innerHTML = `<i data-lucide="copy"></i>`;
      lucide.createIcons();
    }, 1000);
  });
});