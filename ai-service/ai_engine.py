from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

API_KEY = os.getenv("GEMINI_API_KEY")
if not API_KEY:
    raise ValueError("❌ GEMINI_API_KEY not found")

genai.configure(api_key=API_KEY)
MODEL = "gemini-2.5-flash"


# ------------------- SUGGEST CAREER -------------------
@app.route("/suggest-career", methods=["POST"])
def suggest_career():
    try:
        data = request.get_json()
        interests = data.get("interests", "")
        skills = data.get("skills", "")
        goals = data.get("goals", "")

        prompt = f"""
You are a senior career mentor.

Interests: {interests}
Skills: {skills}
Career Goals: {goals}

Give 1 career direction.
Explain WHY it fits them.
Write 90-120 words maximum.

Rules:
- plain english only
- NO bullet points
- NO numbering
- NO markdown formatting
"""

        model = genai.GenerativeModel(MODEL)
        response = model.generate_content(prompt)

        return jsonify({"success": True, "result": response.text.strip()})

    except Exception as e:
        print("❌ suggest-career error:", e)
        return jsonify({"success": False, "error": str(e)}), 500



# ------------------- ANALYZE RESUME -------------------
@app.route("/analyze-resume", methods=["POST"])
def analyze_resume():
    try:
        data = request.get_json()
        resumeText = data.get("resumeText", "")

        prompt = f"""
Analyze this resume:

{resumeText}

Return STRICT JSON:

{{
"skills": ["top 6 short skills only"],
"strengths": ["top 3 short strengths"],
"roles": ["best 3 possible job roles"],
"gaps": ["top 3 short improvement areas"],
"recommendation": "60-80 word natural paragraph with next steps",
"fit_score": 0-100
}}

Rules:
- NO markdown formatting
- NO bullet points inside the paragraph
- recommendation must sound natural, not like listing skills again
"""

        model = genai.GenerativeModel(MODEL)
        response = model.generate_content(prompt)

        return jsonify({"success": True, "result": response.text.strip()})

    except Exception as e:
        print("❌ analyze-resume error:", e)
        return jsonify({"success": False, "error": str(e)}), 500



# ------------------- ANALYZE RESUME PDF (FILE) -------------------
@app.route("/analyze-resume-file", methods=["POST"])
def analyze_resume_file():
    try:
        data = request.get_json()
        file_content = data.get("content")

        prompt = """
Return STRICT JSON:

{
"skills": ["top 6"],
"strengths": ["top 3"],
"roles": ["best 3 jobs"],
"gaps": ["top 3"],
"recommendation": "60-80 word paragraph only",
"fit_score": 0-100
}
"""

        model = genai.GenerativeModel(MODEL)
        response = model.generate_content([
            {"mime_type": "application/pdf", "data": file_content},
            prompt
        ])

        return jsonify({"success": True, "result": response.text.strip()})

    except Exception as e:
        print("❌ analyze-resume-file error:", e)
        return jsonify({"success": False, "error": str(e)}), 500



# ------------------- RUN -------------------
if __name__ == "__main__":
    print("✅ Gemini AI Engine running http://127.0.0.1:5001")
    app.run(host="127.0.0.1", port=5001, debug=True)
