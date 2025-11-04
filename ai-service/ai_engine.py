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
MODEL = "gemini-2.5-flash"  # ✅ confirmed working model


# -------------------- Suggest Career Endpoint --------------------
@app.route("/suggest-career", methods=["POST"])
def suggest_career():
    try:
        data = request.get_json()
        interests = data.get("interests", "")
        skills = data.get("skills", "")
        goals = data.get("goals", "")

        # Combine all user inputs
        user_input = f"""
        Interests: {interests}
        Skills: {skills}
        Career Goals: {goals}
        """

        # Gemini prompt
        prompt = f"""
        You are an expert career advisor. Based on the following user information,
        write a detailed paragraph (at least 100 words) explaining the most suitable career path,
        why it fits their interests and skills, and what specific skills, technologies,
        or courses they should focus on to reach their goal.

        User Information:
        {user_input}

        At the end, give a career fit score out of 100 in this format:
        "Career Fit Score: X/100"
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
        resumeData = data.get("resumeData", {})

        prompt = f"""
        You are an expert career analyst.

        Analyze the following user resume data and extract:
        - Key skills
        - Strengths
        - Suitable job roles
        - Missing skill gaps

        Then give a detailed career recommendation paragraph (at least 120 words)
        and a Career Fit Score out of 100.

        Resume Data:
        {resumeData}
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


# -------------------- Server Start --------------------
if __name__ == "__main__":
    print("✅ Gemini AI Engine running on http://127.0.0.1:5001")
    app.run(host="127.0.0.1", port=5001, debug=True)
