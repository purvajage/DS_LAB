from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)  # Allow frontend to access backend

# Load the trained model
model = joblib.load("decision_tree_model.joblib")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        print("Raw data:", request.data)          # Raw request body
        print("JSON data:", request.get_json())   # Parsed JSON
        
        data = request.get_json()
        if not data:
            return jsonify({"error": "No JSON received"}), 400

        required_fields = ["Pclass", "Age", "Fare", "Sex"]
        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing field: {field}"}), 400

        df = pd.DataFrame(
            [[data["Pclass"], data["Age"], data["Fare"], data["Sex"]]],
            columns=required_fields
        )
        prediction = model.predict(df)
        return jsonify({"prediction": int(prediction[0])})
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 400


if __name__ == "__main__":
    app.run(debug=True)
