# Import markdownprlus
import sys
inp = None
out=None
try:
    inp = open(sys.argv[1], "r").read()
except IndexError:
    import os
    print("Please open .mdp file with this program.")
    os.system("pause")
    exit()
if not inp.endswith("\n"):
    out = inp+"\n"
else:
    out = inp


def getblock(key: str):
    lines = out.splitlines()
    for lineindex in range(0, len(lines)-1):
        if lines[lineindex] == key:
            con = ""
            for line in lines[lineindex+1:]:
                if line != key:
                    con += line + "\n"
                else:
                    return con.strip()
    return None

def csvtomdtable(csv):
    lines = csv.splitlines()
    scsv = []
    for li in range(0, len(lines)):
        line = lines[li]
        elements = []
        element = ""
        in_quotes = False
        for char in line:
            if char == '"' or char == "'":
                in_quotes = not in_quotes
            elif char == ',' and not in_quotes:
                elements.append(element)
                element = ""
            else:
                element += char
        elements.append(element)
        scsv.append(elements)
    table=scsv
    markdown_table = ""
    markdown_table += "| " + " | ".join(table[0]) + " |\n"
    markdown_table += "| " + " | ".join(["---"] * len(table[0])) + " |\n"
    for row in table[1:]:
        markdown_table += "| " + " | ".join(row) + " |\n"
    return markdown_table

def customelement(element: str, all=False):
    lines = out.splitlines()
    buldun=0
    for lineindex in range(0, len(lines)-1):
        if lines[lineindex].startswith("<"+element) and lines[lineindex].endswith(">") and buldun!=1:
            con = lines[lineindex]+"\n" if all else ""
            for line in lines[lineindex+1:]:
                if line != "</"+element+">":
                    con += line + "\n"
                else:
                    if all: con += line + "\n"
                    return con.strip()
            buldun=1
    return None

def customelement2(element):
    lines = out.splitlines()
    buldun=0
    for lineindex in range(0, len(lines)-1):
        if lines[lineindex].startswith("<"+element) and lines[lineindex].endswith(">") and buldun!=1:
            con = lines[lineindex]+"\n"
            for line in lines[lineindex+1:]:
                if line != "</"+element+">":
                    con += line + "\n"
                else:
                    return con.strip()
            buldun=1
    return None

def mdid(text):
    text = text.lower()
    text = text.replace(' ', '-')
    allowed_characters = 'abcdefghijklmnopqrstuvwxyz0123456789-'
    text = ''.join(char for char in text if char in allowed_characters)
    return text

def rlc(string):
    l=list(string)
    l.pop()
    return "".join(l)

def gnav(ifo=True, minh=6):
    lines=out.splitlines()
    links=[]
    for li in range(0,len(lines)-1):
        line=lines[li].replace("<div align=\"center\">", "").replace("</div>", "")
        for thc in range(1,minh+1):
            tht=(thc*"#")+" "
            title=line.replace(tht, '')
            url=mdid(line.replace(tht, ''))
            if not line.startswith(tht):
                continue
            else:
                links.append(((thc-1)*'  ')+'- '+f"[{title}](#{url})")
    links=links if ifo else links[1:]
    for nl in links:
        if links.count(nl)==1:
            continue
        count=1
        while count<=links.count(nl):
            for nnl in links:
                if nnl!=nl:
                    continue
                links[links.index(nnl)] = rlc(nnl)+"-"+str(count)+")"
                count+=1
    return "\n".join(links)


# * Commands

# -- Center -- #
out = out.replace("<center>", '<div align="center">')
out = out.replace("</center>", "</div>")


# -- csv to md table -- #
while customelement("csv"):
    markdown_tablo = csvtomdtable(customelement("csv"))
    #out = out.replace("<csv>\n", "", 1).replace("</csv>\n", "", 1).replace(customelement("csv"), markdown_tablo, 1)
    out = out.replace(customelement("csv", True), markdown_tablo)


while customelement("l"):
    lt=""
    if len(customelement2("l").split("\n")[0].split("\""))>1:
        lt=customelement2("l").split("\n")[0].split("\"")[1]
    newcon=""
    lastnum = 0
    for line in customelement("l").splitlines():
        if line.startswith(" "):
            evt=0
            bler=""
            for i in line:
                if i==" ":
                    evt=1
                    bler+=" "
                if evt==1 and i!=" ":
                    if lt=="chbox":
                        newcon += bler+"- [ ] "+line.replace(bler, "")+"\n"
                    elif lt=="chedbox":
                        newcon += bler+"- [X] "+line.replace(bler, "")+"\n"
                    elif lt=="num":
                        newcon += f"{bler}{str(lastnum+1)}) "+line.replace(bler, "")+"\n"
                        lastnum+=1
                    else:
                        newcon += bler+"- "+line.replace(bler, "")+"\n"
                    evt=0
                    bler=""
        else:
            if lt=="chbox":
                newcon += "- [ ] "+line+"\n"
            elif lt=="chedbox":
                newcon += "- [X] "+line+"\n"
            elif lt=="num":
                newcon += f"{str(lastnum+1)}) "+line+"\n"
                lastnum+=1
            else:
                newcon += "- "+line+"\n"
    #out = out.replace(customelement2("l").split("\n")[0]+"\n", "", 1).replace("</l>\n", "", 1).replace(customelement("l"), newcon, 1)
    out = out.replace(customelement("l", True), newcon)


# -- console output
while customelement("o"):
    cmd=""
    lang="bash"
    if len(customelement2("o").split("\n")[0].split("\""))>1:
        cmdi=0
        lai=0
        for i in customelement2("o").split("\n")[0].split("\""):
            if "cmd=" in i:
                cmdi=customelement2("o").split("\n")[0].split("\"").index(i)+1
            if "lang=" in i:
                lai=customelement2("o").split("\n")[0].split("\"").index(i)+1
        if "cmd=\"" in customelement2("o").split("\n")[0]:
            cmd=customelement2("o").split("\n")[0].split("\"")[cmdi]
        if "lang=\"" in customelement2("o").split("\n")[0]:
            lang=customelement2("o").split("\n")[0].split("\"")[lai]
    newcon=f'```{lang}\ngh@repo:/$ {cmd}\n{customelement("o")}\ngh@repo:/$ █\n```'
    #out = out.replace(customelement2("o").split("\n")[0]+"\n", "", 1).replace("</o>\n", "", 1).replace(customelement("o"), newcon, 1)
    out = out.replace(customelement("o", True), newcon)


# ---- line elements ---- #
lines=out.splitlines()
for line in lines:
    lindex=lines.index(line)
    arg=line.split(" ")
    # -- ytembed -- #
    if line.startswith("$ytembed"):
        if len(arg)==3:
            lines[lindex]=f'[<img src="https://img.youtube.com/vi/{arg[1]}/maxresdefault.jpg" width="{arg[2]}" />](https://www.youtube.com/watch?v={arg[1]})'
        if len(arg)==4:
            lines[lindex]=f'[<img src="https://img.youtube.com/vi/{arg[1]}/maxresdefault.jpg" width="{arg[2]}" height="{arg[3]}" />](https://www.youtube.com/watch?v={arg[1]})'
        if len(arg)==2:
            lines[lindex]=f'[<img src="https://img.youtube.com/vi/{arg[1]}/maxresdefault.jpg" width="400" />](https://www.youtube.com/watch?v={arg[1]})'
    # ---- Badges ---- #
    cargs=""
    if len(arg)>3:
        for i in arg[3:]:
            if i!="":
                cargs+="&"+i
    # -- navigation -- #
    if line.startswith("$nav"):
        if len(arg)==1:
            lines[lindex]=gnav()
        if len(arg)==2:
            lines[lindex]=gnav(True if arg[1].lower()!="false" else False)
        if len(arg)==3:
            lines[lindex]=gnav(True if arg[1].lower()!="false" else False, 6 if arg[2]=="" else int(arg[2]))
    # -- mail badge -- #
    if line.startswith("$email"):
        if len(arg)==2:
            lines[lindex]=f'[<img src="https://img.shields.io/badge/E--Mail-gray.svg?&logo=maildotru&logoColor=white" />](mailto:{arg[1]})'
        if len(arg)==3:
            lines[lindex]=f'[<img src="https://img.shields.io/badge/E--Mail-{arg[2]}.svg?&logo=maildotru&logoColor=white" />](mailto:{arg[1]})'
        if len(arg)>3:
            lines[lindex]=f'[<img src="https://img.shields.io/badge/E--Mail-{"gray" if arg[2]=="" else arg[2]}.svg?&logo=maildotru{cargs}" />](mailto:{arg[1]})'
    # -- github badge -- #
    if line.startswith("$github"):
        if len(arg)==2:
            lines[lindex]=f'[<img src="https://img.shields.io/badge/Github-%2324292e.svg?&logo=github&logoColor=white" />](https://github.com/{arg[1]})'
        if len(arg)==3:
            lines[lindex]=f'[<img src="https://img.shields.io/badge/Github-{arg[2]}.svg?&logo=github&logoColor=white" />](https://github.com/{arg[1]})'
        if len(arg)>3:
            lines[lindex]=f'[<img src="https://img.shields.io/badge/Github-{"%2324292e" if arg[2]=="" else arg[2]}.svg?&logo=github{cargs}" />](https://github.com/{arg[1]})'
    # -- Web Site badge -- #
    if line.startswith("$website"):
        if len(arg)==2:
            lines[lindex]=f'[<img src="https://custom-icon-badges.demolab.com/badge/WebSite-black.svg?&logo=globe&logoColor=darkgreen" />](https://{arg[1].replace("https://", "")})'
        if len(arg)==3:
            lines[lindex]=f'[<img src="https://custom-icon-badges.demolab.com/badge/WebSite-{arg[2]}.svg?&logo=globe&logoColor=darkgreen" />](https://{arg[1].replace("https://", "")})'
        if len(arg)>3:
            lines[lindex]=f'[<img src="https://custom-icon-badges.demolab.com/badge/WebSite-{"black" if arg[2]=="" else arg[2]}.svg?&logo=globe{cargs}" />](https://{arg[1].replace("https://", "")})'
    # -- Custom badge -- #
    if line.startswith("$badge"):
        if len(arg)==2:
            lines[lindex]=f'![custom badge](https://img.shields.io/badge/{arg[1]}-a.svg)'
        if len(arg)==3:
            lines[lindex]=f'![custom badge](https://img.shields.io/badge/{arg[1]}-{arg[2]}.svg)'
        if len(arg)>3:
            lines[lindex]=f'![custom badge](https://img.shields.io/badge/{arg[1]}-{"a" if arg[2]=="" else arg[2]}.svg?{cargs})'
    # -- Buy Me A Coffee -- #
    if line.startswith("$buymeacoffee"):
        if len(arg)==2:
            lines[lindex]=f'[<img src="https://img.shields.io/badge/Donate-Buy%20Me%20A%20Coffee-orange.svg?&logo=buymeacoffee&logoColor=yellow" />](https://buymeacoffe.com/{arg[1]})'
        if len(arg)==3:
            lines[lindex]=f'[<img src="https://img.shields.io/badge/Donate-Buy%20Me%20A%20Coffee-{arg[2]}.svg?&logo=buymeacoffee&logoColor=yellow" />](https://buymeacoffe.com/{arg[1]})'
        if len(arg)>3:
            lines[lindex]=f'[<img src="https://img.shields.io/badge/Donate-Buy%20Me%20A%20Coffee-{"orange" if arg[2]=="" else arg[2]}.svg?&logo=buymeacoffee{cargs}" />](https://buymeacoffe.com/{arg[1]})'
    # -- Profile views -- #
    if line.startswith("$views"):
        if len(arg)==2:
            lines[lindex]=f'![profile views](https://komarev.com/ghpvc/?username={arg[1]}&)'
        if len(arg)==3:
            lines[lindex]=f'![profile views](https://komarev.com/ghpvc/?username={arg[1]}&&style={arg[2]})'
    # ---- Github Stats ---- #
    if line.startswith("$stats"):
        if len(arg)==2:
            lines[lindex]=f'![My GitHub Stats](https://github-readme-stats.vercel.app/api?username={arg[1]}&show_icons=true)'
        if len(arg)==3:
            lines[lindex]=f'![My GitHub Stats](https://github-readme-stats.vercel.app/api?username={arg[1]}&show_icons={arg[2]})'
        if len(arg)>3:
            lines[lindex]=f'![My GitHub Stats](https://github-readme-stats.vercel.app/api?username={arg[1]}&show_icons={arg[2] if arg[2]=="" else arg[2]}{cargs})'
    # -- Top languages -- #
    if line.startswith("$toplangs"):
        if len(arg)==2:
            lines[lindex]=f'![My GitHub Stats](https://github-readme-stats.vercel.app/api/top-langs/?username={arg[1]})'
        if len(arg)==3:
            lines[lindex]=f'![My GitHub Stats](https://github-readme-stats.vercel.app/api/top-langs/?username={arg[1]}&layout={arg[2]})'
        if len(arg)>3:
            lines[lindex]=f'![My GitHub Stats](https://github-readme-stats.vercel.app/api/top-langs/?username={arg[1]}&layout={arg[2]}{cargs})'
out="\n".join(lines)

open(sys.argv[1].lower().replace(".mdp", ".md"), "w", encoding="utf-8").write(out)