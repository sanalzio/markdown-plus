"""
write block content function

example:
string named variable content:
```
deneme
@key
content
@key
```
code:
```py
print(getBlock("@key", string))
```
output:
```
deneme
content
```
"""
def getBlock(key, string):
    lines = string.splitlines()
    for lineindex in range(0, len(lines)-1):
        if lines[lineindex] == key:
            con = ""
            for line in lines[lineindex+1:]:
                if line != key:
                    con += line + "\n"
                else:
                    return con.strip()
    return None

def customelement(element: str, string):
    lines = string.splitlines()
    for lineindex in range(0, len(lines)-1):
        if lines[lineindex] == "<"+element+">":
            con = ""
            for line in lines[lineindex+1:]:
                if line != "</"+element+">":
                    con += line + "\n"
                else:
                    return con.strip()
    return None

string="""
deneme
<den>
con
</den>
"""
print(
    customelement(
        "den",
        string
    )
)