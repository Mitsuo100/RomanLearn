VALUES = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}


def RomanToInt(s):
    result = 0

    for i in range(len(s)):
        current = VALUES[s[i]]

        if i + 1 < len(s) and current < VALUES[s[i + 1]]:
            result -= current
        else:
            result += current

    return result


def RomanCalculation(s):
    parts = []

    for i in range(len(s)):
        current = VALUES[s[i]]

        if i + 1 < len(s) and current < VALUES[s[i + 1]]:
            parts.append(f"- {current}")
        elif parts:
            parts.append(f"+ {current}")
        else:
            parts.append(str(current))

    return " ".join(parts) + f" = {RomanToInt(s)}"