from flask import Flask, request, render_template
from conversor import RomanToInt
app = Flask(__name__, template_folder="../frontend/templates")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/roman", methods=["GET", "POST"])
def roman():
    valor = RomanToInt(request.args.get("roman", "").strip().upper())
    return render_template("index.html", result=valor)

if __name__ == "__main__":
    app.run(debug=True)