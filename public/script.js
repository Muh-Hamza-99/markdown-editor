window.onload = () => {
    const converter = new showdown.Converter();
    const pad = document.getElementById("pad");
    const markdownArea = document.getElementById("markdown");
    const convertTextAreaToMarkdown = () => {
        const markdownText = pad.value;
        html = converter.makeHtml(markdownText);
        markdownArea.innerHTML = html;
    };
    pad.addEventListener("input", convertTextAreaToMarkdown);
    convertTextAreaToMarkdown();
};