from flask import Flask, request, render_template
from conversor import RomanToInt, RomanCalculation

app = Flask(
    __name__,
    template_folder="../frontend/templates",
    static_folder="../frontend/static",
    static_url_path="/static"
)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/roman", methods=["GET", "POST"])
def roman():
    roman_number = request.args.get("roman", "").strip().upper()

    if not roman_number:
        return render_template("index.html")

    try:
        result = RomanToInt(roman_number)
        calculation = RomanCalculation(roman_number)

        return render_template(
            "index.html",
            roman=roman_number,
            result=result,
            calculation=calculation
        )

    except (KeyError, ValueError):
        return render_template(
            "index.html",
            error="Digite um número romano válido."
        )


if __name__ == "__main__":
    app.run(debug=True)