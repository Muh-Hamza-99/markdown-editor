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
    if (document.location.pathname.length > 1) {
        var documentName = document.location.pathname.substring(1);
        sharejs.open(documentName, "text", (error, doc) => {
            doc.attach_textarea(pad);
            convertTextAreaToMarkdown();
        });
    };
    convertTextAreaToMarkdown();
};