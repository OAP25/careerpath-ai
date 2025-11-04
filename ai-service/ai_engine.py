from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Load API key
API_KEY = os.getenv("GEMINI_API_KEY")

if not API_KEY:
    raise ValueError("❌ GEMINI_API_KEY not found in .env file")

# Configure Gemini
genai.configure(api_key=API_KEY)
MODEL = "gemini-2.5-flash"  # working model


# -------------------- Suggest Career Endpoint --------------------
@app.route("/suggest-career", methods=["POST"])
def suggest_career():
    try:
        data = request.get_json()
        interests = data.get("interests", "")
        skills = data.get("skills", "")
        goals = data.get("goals", "")

        user_input = f"""
        Interests: {interests}
        Skills: {skills}
        Career Goals: {goals}
        """

        prompt = f"""
        You are an expert career advisor. Based on the following user information,
        write a detailed paragraph (at least 100 words) explaining the most suitable career path,
        why it fits their interests and skills, and what specific skills, technologies,
        or courses they should focus on to reach their goal.

        User Information:
        {user_input}

        At the end, give a career fit score out of 100 in this exact format:
        Career Fit Score: XX/100
        """

        model = genai.GenerativeModel(MODEL)
        response = model.generate_content(prompt)

        return jsonify({
            "success": True,
            "result": response.text.strip()
        })

    except Exception as e:
        print(f"❌ Error in Gemini API: {e}")
        return jsonify({"success": False, "error": str(e)}), 500


# -------------------- Analyze Resume Endpoint --------------------
@app.route("/analyze-resume", methods=["POST"])
def analyze_resume():
    try:
        data = request.get_json()
        resumeText = data.get("resumeText", "")

        print("resume length:", len(resumeText))

        if not resumeText.strip():
            return jsonify({"success": False, "error": "empty resume"}), 400

        prompt = f"""
You are an expert career analyst.

Analyze this resume content:

-----------------------
{resumeText}
-----------------------

Extract and return these sections:

1) Key Skills
2) Strengths
3) Best Suitable Job Roles
4) Missing Skill Gaps

Then write a detailed career recommendation paragraph (minimum 120 words)
based on this resume content.

End with a Career Fit Score out of 100 in this exact format:
Career Fit Score: XX/100
"""

        model = genai.GenerativeModel(MODEL)
        response = model.generate_content(prompt)

        return jsonify({
            "success": True,
            "result": response.text.strip()
        })

    except Exception as e:
        print(f"❌ Error analyzing resume: {e}")
        return jsonify({"success": False, "error": str(e)}), 500
    
# -------------------- Analyze Resume File Endpoint --------------------

@app.route("/analyze-resume-file", methods=["POST"])
def analyze_resume_file():
    try:
        data = request.get_json()
        file_name = data.get("name")
        file_content = data.get("content")  # base64

        model = genai.GenerativeModel(MODEL)
        response = model.generate_content([
            {"mime_type": "application/pdf", "data": file_content},
            "Extract key skills, strengths, suitable job roles, gaps. Write 120+ words recommendation. End with Career Fit Score: XX/100"
        ])

        return jsonify({"success": True, "result": response.text.strip()})

    except Exception as e:
        print(f"❌ Error analyzing resume file: {e}")
        return jsonify({"success": False, "error": str(e)}), 500
# -------------------- Server Start --------------------
if __name__ == "__main__":
    print("✅ Gemini AI Engine running on http://127.0.0.1:5001")
    app.run(host="127.0.0.1", port=5001, debug=True)
