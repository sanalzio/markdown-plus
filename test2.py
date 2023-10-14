out = """
# My Project
# How can i use?
## Step1
## Step2
# How to make
## Step1
## Step2
"""

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

print(gnav(False))