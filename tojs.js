function convertmd(inp, html = false) {
    var arg, cargs, cmd, lastnum, lindex, lines, lt, markdown_tablo, newcon, out;
    out = inp;
    if ((! inp.endswith("\n"))) {
        out = (inp + "\n");
    } else {
        out = inp;
    }
    function csvtomdtable(csv) {
        var element, elements, in_quotes, line, markdown_table, scsv, table;
        lines = csv.splitlines();
        scsv = [];
        for (var li = 0, _pj_a = lines.length; (li < _pj_a); li += 1) {
            line = lines[li];
            elements = [];
            element = "";
            in_quotes = false;
            for (var character, _pj_d = 0, _pj_b = line, _pj_c = _pj_b.length; (_pj_d < _pj_c); _pj_d += 1) {
                character = _pj_b[_pj_d];
                if (((character === "\"") || (character === "'"))) {
                    in_quotes = (! in_quotes);
                } else {
                    if (((character === ",") && (! in_quotes))) {
                        elements.append(element);
                        element = "";
                    } else {
                        element += character;
                    }
                }
            }
            elements.append(element);
            scsv.append(elements);
        }
        table = scsv;
        markdown_table = "";
        markdown_table += (("| " + " | ".join(table[0])) + " |\n");
        markdown_table += (("| " + " | ".join((["---"] * table[0].length))) + " |\n");
        for (var row, _pj_c = 0, _pj_a = table.slice(1), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            row = _pj_a[_pj_c];
            markdown_table += (("| " + " | ".join(row)) + " |\n");
        }
        return markdown_table;
    }
    function customelement(element) {
        var buldun, con;
        lines = out.splitlines();
        buldun = 0;
        for (var lineindex = 0, _pj_a = (lines.length - 1); (lineindex < _pj_a); lineindex += 1) {
            if (((lines[lineindex].startswith(("<" + element)) && lines[lineindex].endswith(">")) && (buldun !== 1))) {
                con = "";
                for (var line, _pj_d = 0, _pj_b = lines.slice((lineindex + 1)), _pj_c = _pj_b.length; (_pj_d < _pj_c); _pj_d += 1) {
                    line = _pj_b[_pj_d];
                    if ((line !== (("</" + element) + ">"))) {
                        con += (line + "\n");
                    } else {
                        return con.strip();
                    }
                }
                buldun = 1;
            }
        }
        return null;
    }
    function customelement2(element) {
        var buldun, con;
        lines = out.splitlines();
        buldun = 0;
        for (var lineindex = 0, _pj_a = (lines.length - 1); (lineindex < _pj_a); lineindex += 1) {
            if (((lines[lineindex].startswith(("<" + element)) && lines[lineindex].endswith(">")) && (buldun !== 1))) {
                con = (lines[lineindex] + "\n");
                for (var line, _pj_d = 0, _pj_b = lines.slice((lineindex + 1)), _pj_c = _pj_b.length; (_pj_d < _pj_c); _pj_d += 1) {
                    line = _pj_b[_pj_d];
                    if ((line !== (("</" + element) + ">"))) {
                        con += (line + "\n");
                    } else {
                        return con.strip();
                    }
                }
                buldun = 1;
            }
        }
        return null;
    }
    out = out.replace("<center>", "<div align=\"center\">");
    out = out.replace("</center>", "</div>");
    while (customelement("csv")) {
        markdown_tablo = csvtomdtable(customelement("csv"));
        out = out.replace("<csv>\n", "", 1).replace("</csv>\n", "", 1).replace(customelement("csv"), markdown_tablo, 1);
    }
    while (customelement("l")) {
        lt = "";
        if ((customelement2("l").split("\n")[0].split("\"").length > 1)) {
            lt = customelement2("l").split("\n")[0].split("\"")[1];
        }
        newcon = "";
        lastnum = 0;
        for (var line, _pj_c = 0, _pj_a = customelement("l").splitlines(), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            line = _pj_a[_pj_c];
            if ((lt === "chbox")) {
                newcon += (("- [ ] " + line) + "\n");
            } else {
                if ((lt === "chedbox")) {
                    newcon += (("- [X] " + line) + "\n");
                } else {
                    if ((lt === "num")) {
                        newcon += ((`${(lastnum + 1).toString()}) ` + line) + "\n");
                        lastnum += 1;
                    } else {
                        newcon += (("- " + line) + "\n");
                    }
                }
            }
        }
        out = out.replace((customelement2("l").split("\n")[0] + "\n"), "", 1).replace("</l>\n", "", 1).replace(customelement("l"), newcon, 1);
    }
    while (customelement("o")) {
        cmd = "";
        if ((customelement2("o").split("\n")[0].split("\"").length > 1)) {
            cmd = customelement2("o").split("\n")[0].split("\"")[1];
        }
        newcon = `\`\`\`bash
gh@repo:/$ ${cmd}
${customelement("o")}
gh@repo:/$ █
\`\`\``
;
        out = out.replace((customelement2("o").split("\n")[0] + "\n"), "", 1).replace("</o>\n", "", 1).replace(customelement("o"), newcon, 1);
    }
    lines = out.splitlines();
    for (var line, _pj_c = 0, _pj_a = lines, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        line = _pj_a[_pj_c];
        lindex = lines.index(line);
        arg = line.split(" ");
        if (line.startswith("$ytembed")) {
            if ((arg.length === 3)) {
                lines[lindex] = `[<img src="https://img.youtube.com/vi/${arg[1]}/maxresdefault.jpg" width="${arg[2]}" />](https://www.youtube.com/watch?v=${arg[1]})`;
            }
            if ((arg.length === 4)) {
                lines[lindex] = `[<img src="https://img.youtube.com/vi/${arg[1]}/maxresdefault.jpg" width="${arg[2]}" height="${arg[3]}" />](https://www.youtube.com/watch?v=${arg[1]})`;
            }
            if ((arg.length === 2)) {
                lines[lindex] = `[<img src="https://img.youtube.com/vi/${arg[1]}/maxresdefault.jpg" width="400" />](https://www.youtube.com/watch?v=${arg[1]})`;
            }
        }
        cargs = "";
        if ((arg.length > 3)) {
            for (var i, _pj_f = 0, _pj_d = arg.slice(3), _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                i = _pj_d[_pj_f];
                if ((i !== "")) {
                    cargs += ("&" + i);
                }
            }
        }
        if (line.startswith("$email")) {
            if ((arg.length === 2)) {
                lines[lindex] = `[<img src="https://img.shields.io/badge/E--Mail-gray.svg?&logo=maildotru&logoColor=white" />](mailto:${arg[1]})`;
            }
            if ((arg.length === 3)) {
                lines[lindex] = `[<img src="https://img.shields.io/badge/E--Mail-${arg[2]}.svg?&logo=maildotru&logoColor=white" />](mailto:${arg[1]})`;
            }
            if ((arg.length > 3)) {
                lines[lindex] = `[<img src="https://img.shields.io/badge/E--Mail-${((arg[2] === "") ? "gray" : arg[2])}.svg?&logo=maildotru${cargs}" />](mailto:${arg[1]})`;
            }
        }
        if (line.startswith("$github")) {
            if ((arg.length === 2)) {
                lines[lindex] = `[<img src="https://img.shields.io/badge/Github-%2324292e.svg?&logo=github&logoColor=white" />](https://github.com/${arg[1]})`;
            }
            if ((arg.length === 3)) {
                lines[lindex] = `[<img src="https://img.shields.io/badge/Github-${arg[2]}.svg?&logo=github&logoColor=white" />](https://github.com/${arg[1]})`;
            }
            if ((arg.length > 3)) {
                lines[lindex] = `[<img src="https://img.shields.io/badge/Github-${((arg[2] === "") ? "%2324292e" : arg[2])}.svg?&logo=github${cargs}" />](https://github.com/${arg[1]})`;
            }
        }
        if (line.startswith("$website")) {
            if ((arg.length === 2)) {
                lines[lindex] = `[<img src="https://custom-icon-badges.demolab.com/badge/WebSite-black.svg?&logo=globe&logoColor=darkgreen" />](https://${arg[1].replace("https://", "")})`;
            }
            if ((arg.length === 3)) {
                lines[lindex] = `[<img src="https://custom-icon-badges.demolab.com/badge/WebSite-${arg[2]}.svg?&logo=globe&logoColor=darkgreen" />](https://${arg[1].replace("https://", "")})`;
            }
            if ((arg.length > 3)) {
                lines[lindex] = `[<img src="https://custom-icon-badges.demolab.com/badge/WebSite-${((arg[2] === "") ? "black" : arg[2])}.svg?&logo=globe${cargs}" />](https://${arg[1].replace("https://", "")})`;
            }
        }
        if (line.startswith("$badge")) {
            if ((arg.length === 2)) {
                lines[lindex] = `![custom badge](https://img.shields.io/badge/${arg[1]}-a.svg)`;
            }
            if ((arg.length === 3)) {
                lines[lindex] = `![custom badge](https://img.shields.io/badge/${arg[1]}-${arg[2]}.svg)`;
            }
            if ((arg.length > 3)) {
                lines[lindex] = `![custom badge](https://img.shields.io/badge/${arg[1]}-${((arg[2] === "") ? "a" : arg[2])}.svg?${cargs})`;
            }
        }
        if (line.startswith("$buymeacoffee")) {
            if ((arg.length === 2)) {
                lines[lindex] = `[<img src="https://img.shields.io/badge/Donate-Buy%20Me%20A%20Coffee-orange.svg?&logo=buymeacoffee&logoColor=yellow" />](https://buymeacoffe.com/${arg[1]})`;
            }
            if ((arg.length === 3)) {
                lines[lindex] = `[<img src="https://img.shields.io/badge/Donate-Buy%20Me%20A%20Coffee-${arg[2]}.svg?&logo=buymeacoffee&logoColor=yellow" />](https://buymeacoffe.com/${arg[1]})`;
            }
            if ((arg.length > 3)) {
                lines[lindex] = `[<img src="https://img.shields.io/badge/Donate-Buy%20Me%20A%20Coffee-${((arg[2] === "") ? "orange" : arg[2])}.svg?&logo=buymeacoffee${cargs}" />](https://buymeacoffe.com/${arg[1]})`;
            }
        }
        if (line.startswith("$views")) {
            if ((arg.length === 2)) {
                lines[lindex] = `![profile views](https://komarev.com/ghpvc/?username=${arg[1]}&)`;
            }
            if ((arg.length === 3)) {
                lines[lindex] = `![profile views](https://komarev.com/ghpvc/?username=${arg[1]}&&style=${arg[2]})`;
            }
        }
        if (line.startswith("$stats")) {
            if ((arg.length === 2)) {
                lines[lindex] = `![My GitHub Stats](https://github-readme-stats.vercel.app/api?username=${arg[1]}&show_icons=true)`;
            }
            if ((arg.length === 3)) {
                lines[lindex] = `![My GitHub Stats](https://github-readme-stats.vercel.app/api?username=${arg[1]}&show_icons=${arg[2]})`;
            }
            if ((arg.length > 3)) {
                lines[lindex] = `![My GitHub Stats](https://github-readme-stats.vercel.app/api?username=${arg[1]}&show_icons=${((arg[2] === "") ? arg[2] : arg[2])}${cargs})`;
            }
        }
        if (line.startswith("$toplangs")) {
            if ((arg.length === 2)) {
                lines[lindex] = `![My GitHub Stats](https://github-readme-stats.vercel.app/api/top-langs/?username=${arg[1]})`;
            }
            if ((arg.length === 3)) {
                lines[lindex] = `![My GitHub Stats](https://github-readme-stats.vercel.app/api/top-langs/?username=${arg[1]}&layout=${arg[2]})`;
            }
            if ((arg.length > 3)) {
                lines[lindex] = `![My GitHub Stats](https://github-readme-stats.vercel.app/api/top-langs/?username=${arg[1]}&layout=${arg[2]}${cargs})`;
            }
        }
    }
    out = "\n".join(lines);
    if ((html === true)) {
        html = "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<style>\nbody {\nmargin: 0;\npadding: 25px;\nbackground-color: #0d1117;\ncolor: #e6edf3;\n}\ndiv{\n    display: block;\n    padding: 25px;\n    padding-left: 40px;\n    padding-right: 40px;\n    border-color: #30363d;\n    border-width: 1px;\n    border-radius: 10px;\n    border-style: solid;\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Noto Sans\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\";\n    font-size: 16px;\n    line-height: 1.5;\n    word-wrap: break-word;\n}\npre{\n    background-color: #161b22;\n    border-radius: 5px;\n    border-width: 10px;\n    border-style: solid;\n    border-color: #161b22;\n}\npre code{\n    background-color: #161b22;\n    border-radius: 0;\n    border-width: 0;\n    border-style: hidden;\n    border-color: #161b22;\n}\ncode{\n    background-color: #343942;\n    border-radius: 3px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: #343942;\n}\n</style>\n</head>\n<body>\n<script src=\"https://cdn.jsdelivr.net/npm/markdown-element/dist/markdown-element.min.js\"></script>\n<div>\n<mark-down>\n";
        html += out;
        html += "\n</mark-down>\n</div>\n</body>\n</html>\n";
        return html;
    }
    return out;
}