from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load env
load_dotenv()

app = Flask(__name__)
CORS(app)

API_KEY = os.getenv("GEMINI_API_KEY")
if not API_KEY:
    raise ValueError("❌ GEMINI_API_KEY not found")

genai.configure(api_key=API_KEY)
MODEL = "gemini-2.5-flash"


# ----------------- SUGGEST CAREER -----------------
@app.route("/suggest-career", methods=["POST"])
def suggest_career():
    try:
        data = request.get_json()
        interests = data.get("interests", "")
        skills = data.get("skills", "")
        goals = data.get("goals", "")

        prompt = f"""
You are a senior career consultant.

Based on this user:

Interests: {interests}
Skills: {skills}
Career Goals: {goals}

Generate the career analysis STRICTLY in this structure:

1) TOP 3 Career Tracks (Ranked)
- #1: <Career name> — short reason (1 line)
- #2: <Career name> — short reason (1 line)
- #3: <Career name> — short reason (1 line)

2) Final Recommendation (100+ words)
Write a personalized decision-making paragraph explaining which one is BEST for this user and why.

3) Next 5 Action Steps (bullet points)
Use short, crisp bullets.
"""


        model = genai.GenerativeModel(MODEL)
        response = model.generate_content(prompt)

        return jsonify({"success": True, "result": response.text.strip()})

    except Exception as e:
        print("error_suggest:", e)
        return jsonify({"success": False, "error": str(e)}), 500



# ----------------- ANALYZE RESUME TEXT -----------------
@app.route("/analyze-resume", methods=["POST"])
def analyze_resume():
    try:
        data = request.get_json()
        resumeText = data.get("resumeText", "")

        if not resumeText.strip():
            return jsonify({"success": False, "error": "empty resume"}), 400

        prompt = f"""
Return STRICT JSON only. No markdown. No explanation.

Resume:
{resumeText}

Response Format:
{{
  "career": "short career title",
  "skills": ["skill1","skill2","skill3"],
  "strengths": ["strength1","strength2"],
  "roles": ["role1","role2"],
  "gaps": ["gap1","gap2"],
  "recommendation": "120+ word detailed recommendation paragraph",
  "fit_score": 0-100 (number only)
}}
"""
        model = genai.GenerativeModel(MODEL)
        response = model.generate_content(prompt)

        return jsonify({"success": True, "result": response.text.strip()})

    except Exception as e:
        print("error_analyze:", e)
        return jsonify({"success": False, "error": str(e)}), 500



# ----------------- ANALYZE RESUME FILE -----------------
@app.route("/analyze-resume-file", methods=["POST"])
def analyze_resume_file():
    try:
        data = request.get_json()
        file_content = data.get("content")  # base64 string

        model = genai.GenerativeModel(MODEL)
        response = model.generate_content([
            {"mime_type": "application/pdf", "data": file_content},
            """Return STRICT JSON only. No markdown. No explanation.

Response Format:
{
  "career": "short career title",
  "skills": ["skill1","skill2","skill3"],
  "strengths": ["strength1","strength2"],
  "roles": ["role1","role2"],
  "gaps": ["gap1","gap2"],
  "recommendation": "120+ word detailed recommendation paragraph",
  "fit_score": 0-100 (number only)
}"""
        ])

        return jsonify({"success": True, "result": response.text.strip()})

    except Exception as e:
        print("error_file:", e)
        return jsonify({"success": False, "error": str(e)}), 500



if __name__ == "__main__":
    print("✅ Gemini AI Engine running http://127.0.0.1:5001")
    app.run(host="127.0.0.1", port=5001, debug=True)
