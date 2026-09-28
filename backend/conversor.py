def RomanToInt(s):
    valores = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}

    resultado = 0

    for i in range(len(s)):
        if i + 1 < len(s) and valores[s[i]] < valores[s[i + 1]]:
            resultado -= valores[s[i]]
        else:
            resultado += valores[s[i]]
    return resultado