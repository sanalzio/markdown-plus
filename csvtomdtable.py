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