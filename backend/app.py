from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
import pymongo

load_dotenv()

app = Flask(__name__)

MONGO_URL = os.getenv("MONGO_URL")

client = pymongo.MongoClient(
    MONGO_URL,
    serverSelectionTimeoutMS=5000
)

db = client["docker_task"]
collection = db["docker_collection"]


@app.route("/submit", methods=["POST"])
def submit():
    try:
        form_data = request.get_json(silent=True)

        if not isinstance(form_data, dict) or not form_data:
            return jsonify({
                "error": "No valid form data received"
            }), 400

        result = collection.insert_one(form_data)

        form_data["_id"] = str(result.inserted_id)

        return jsonify({
            "message": "Data submitted successfully",
            "data": form_data
        }), 201

    except pymongo.errors.PyMongoError:
        app.logger.exception("MongoDB insertion failed")
        return jsonify({
            "error": "Failed to save data to MongoDB"
        }), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)