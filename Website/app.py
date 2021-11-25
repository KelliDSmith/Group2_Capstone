from flask import Flask, render_template, jsonify, send_from_directory, request
import json
import pandas as pd
import numpy as np
import os
# from modelHelper import ModelHelper

#init app and class
app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
# modelHelper = ModelHelper()

# Route to render index.html template
@app.route("/")
def home():
    # Return template and data
    return render_template("index.html")

# Route to render index.html template
@app.route("/welcome")
def welcome():
    # Return template and data
    return render_template("1welcome.html")

# Route to render index.html template
@app.route("/macrodash")
def macrodash():
    # Return template and data
    return render_template("2macrodash.html")

# Route to render index.html template
@app.route("/microdash")
def microdash():
    # Return template and data
    return render_template("3microdash.html")

# Route to render index.html template
@app.route("/calculator")
def calculator():
    # Return template and data
    return render_template("4calculator.html")

# Route to render index.html template
@app.route("/execsum")
def execsum():
    # Return template and data
    return render_template("5execsum.html")

# Route to render index.html template
@app.route("/workscited")
def workscited():
    # Return template and data
    return render_template("6workscited.html")

# Route to render index.html template
@app.route("/aboutus")
def aboutus():
    # Return template and data
    return render_template("7aboutus.html")

    # gender, education, seniority, jobTitle, dpt

@app.route("/makePredictions", methods=["POST"])
def makePredictions():
    content = request.json["data"]

    # parse
    gender = int(content["gender"])
    age = int(content["age"])
    seniority = int(content["seniority"])
    jobTitle = content["job_title"]
    dpt = content["department"]

    predictions = modelHelper.makePredictions(gender, age, seniority, jobTitle, dpt)
    print(predictions)
    return(jsonify({"ok": True, "prediction": str(predictions)}))

@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate, public, max-age=0"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    return r

#main
if __name__ == "__main__":
    app.run(debug=True)