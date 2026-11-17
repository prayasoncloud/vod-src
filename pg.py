source = ["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", 
          "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]


result, buf, in_block = [], [], True

for line in source:
    i = 0
    while( i < len(line)):
        two = line[i:i+2]
        if in_block:
            if two == "//":
                break
            elif two == "/*":
                in_block = False
                i += 2
            else:
                buf.append(line[i])
        elif in_block == False:
            if two == "*/":
                in_block == True
                i += 2
     if in_block and buf:
        result.append("".join(buf))
        buf = []
          
            
        
                