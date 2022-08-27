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
    const didChangeOccur = () => {
        if (previousMarkdownValue != pad.value) return true;
        return false;
    };
    setInterval(() => {
        if (didChangeOccur()) convertTextAreaToMarkdown();
    }, 1000);
    sharejs.open(document.location.pathname, "text", (error, doc) => {
        doc.attach_textarea(pad);
        convertTextAreaToMarkdown();
    });
};