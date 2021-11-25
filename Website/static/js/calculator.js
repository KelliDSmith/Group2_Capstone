$(document).ready(function() {
    console.log("Page Loaded");

    $("#filter").click(function() {
        makePredictions();
    });
});

function makePredictions() {
    var gender = $("#gender").val();
    var age = $("#age").val();
    var seniority = $("#seniority").val();
    var jobTitle = $("#job_title").val();
    var dpt = $("#department").val();
 
    // create the payload
    var payload = {
        "gender": gender,
        "age": age,
        "seniority": seniority,
        "job_title": jobTitle,
        "department": dpt,
    }

    // Perform a POST request to the query URL
    $.ajax({
        type: "POST",
        url: "/makePredictions",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({ "data": payload }),
        success: function(returnedData) {
            // print it
            console.log(returnedData);

            // if (returnedData["prediction"] == 1) {
            //     $("#output").text("You Survived!");
            // } else {
            //     $("#output").text("You Died!");
            // }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });

}