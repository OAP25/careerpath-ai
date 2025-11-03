from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/suggest-career", methods=["POST"])
def suggest_career():
    data = request.get_json()
    interests = data.get("interests", "")
    skills = data.get("skills", "")
    goals = data.get("goals", "")

    # Simple mock logic (replace later with AI/ML logic)
    if "code" in skills.lower() or "developer" in interests.lower():
        career = "Software Developer"
    elif "design" in interests.lower():
        career = "UI/UX Designer"
    else:
        career = "Data Analyst"

    return jsonify({"career": career})

if __name__ == "__main__":
    print("✅ AI Engine is running on http://127.0.0.1:5001")
    app.run(host="127.0.0.1", port=5001, debug=True)
