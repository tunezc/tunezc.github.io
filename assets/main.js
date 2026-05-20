const repoUrl = "https://tunezc.github.io/";
const copyButton = document.querySelector("[data-copy-url]");
const repoUrlNode = document.getElementById("repo-url");

if (repoUrlNode) {
  repoUrlNode.textContent = repoUrl;
}

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(repoUrl);
      copyButton.textContent = "已复制";
      window.setTimeout(() => {
        copyButton.textContent = "复制源地址";
      }, 1600);
    } catch (error) {
      window.prompt("请手动复制软件源地址：", repoUrl);
    }
  });
}
