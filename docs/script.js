function downloadFile(content, filename) {
    const blob = new Blob([content], { type: "application/octet-stream" });
    const downloadLink = document.createElement("a");
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = filename;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

var fileContentData = "";
var fileInput = document.getElementById('fileInput');

function selectFile() {
    fileInput.click();
};
document.getElementById('fileInput').addEventListener('change', function () {
    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            fileContentData = e.target.result;
            document.getElementById('editor').value=fileContentData
            document.getElementById('md').mdContent=fileContentData
        };
        reader.readAsText(file);
        fileInput.value = '';
    }
});
// setInterval(function (){
//     document.getElementById('md').mdContent=document.getElementById('editor').value
// }, 1000)
function downFile() {
    // if (!fileInput.files.length) {
    //     alert("ERROR: The file was not selected.")
    // }else {
    //     downloadFile(document.getElementById('md').mdContent, fileInput.value.replace("C:\\fakepath\\", "");
    // }
    downloadFile(document.getElementById('md').mdContent, "converted.md");
};

function downFilehtml() {
    var html = '<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<style>\nbody {\nmargin: 0;\npadding: 25px;\nbackground-color: #0d1117;\ncolor: #e6edf3;\n}\n:root {\n    color-scheme: dark;\n}\n#jasdhlajkhdsjakhdajklsd{\n    display: block;\n    padding: 25px;\n    padding-left: 40px;\n    padding-right: 40px;\n    border-color: #30363d;\n    border-width: 1px;\n    border-radius: 10px;\n    border-style: solid;\n    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";\n    font-size: 16px;\n    line-height: 1.5;\n    word-wrap: break-word;\n}\npre{\n    background-color: #161b22;\n    border-radius: 5px;\n    border-width: 10px;\n    border-style: solid;\n    border-color: #161b22;\n}\npre code{\n    background-color: #161b22;\n    border-radius: 0;\n    border-width: 0;\n    border-style: hidden;\n    border-color: #161b22;\n}\ncode{\n    background-color: #343942;\n    border-radius: 3px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: #343942;\n}\na{\n    color: #2f81f7;\n}\n</style>\n</head>\n<body>\n<script type="module" src="https://md-block.verou.me/md-block.js"></script>\n<div id="jasdhlajkhdsjakhdajklsd">\n<md-block>';
    html += document.getElementById('md').mdContent;
    html += '\n</md-block>\n</div>\n</body>\n</html>\n';
    downloadFile(html, "converted.html");
};

function cpymd() {
    const mdContent = document.getElementById('md').mdContent;
    navigator.clipboard.writeText(mdContent)
        .then(() => {
            document.getElementById('copymd').innerText = "Copied Content!";
            setTimeout(function () {
                document.getElementById('copymd').innerText = "Copy Content";
            }, 3000);
        })
}