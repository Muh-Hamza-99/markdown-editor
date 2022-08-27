window.onload = () => {
    const converter = new showdown.Converter();
    const pad = document.getElementById("pad");
    const markdownArea = document.getElementById("markdown");
    pad.addEventListener("keydown", event => {
        if (event.keyCode === 9) { 
            const start = this.selectionStart;
            const end = this.selectionEnd;
            const target = event.target;
            const value = target.value;
            target.value = value.substring(0, start) + "\t" + value.substring(end);
            this.selectionStart = this.selectionEnd = start + 1;
            event.preventDefault();
        }
    });
    let previousMarkdownValue;
    const convertTextAreaToMarkdown = () => {
        const markdownText = pad.value;
        previousMarkdownValue = markdownText;
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