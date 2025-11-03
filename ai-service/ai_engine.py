import sys
import json

# Read the input data sent from Node
data = json.loads(sys.stdin.read())

skills = data.get("skills", "").lower()
interests = data.get("interests", "").lower()

if "code" in skills or "software" in interests:
    suggestion = "Software Engineer"
elif "data" in skills or "analysis" in interests:
    suggestion = "Data Analyst"
elif "ai" in skills or "machine" in interests:
    suggestion = "AI Engineer"
elif "design" in skills or "creative" in interests:
    suggestion = "UI/UX Designer"
elif "finance" in skills or "numbers" in interests:
    suggestion = "Financial Analyst"
else:
    suggestion = "Project Manager"

# Print the result (Node will read this)
print(json.dumps({"suggestion": suggestion}))
