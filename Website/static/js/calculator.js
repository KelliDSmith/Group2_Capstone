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
    var jobTitle = $("#jobTitle").val();
    var dpt = $("#department").val();
 
    // create the payload
    var payload = {
        "gender": gender,
        "age": age,
        "seniority": seniority,
        "jobTitle": jobTitle,
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

       

            publishPreds (returnedData);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });

    function publishPreds (returnedData) {

        // empty the div
        $("#pred1").empty();
        $("#pred2").empty();

        let pred1 = Math.round(returnedData.prediction[0]);
        let pred2 = Math.round(returnedData.prediction[1]);

        //if male
        if (returnedData.gender == 0) {
            
            let malepred = `<h1 id=male><i class="tf-profile-male">$${pred1}</h1>`;
            let femalepred = `<h1 id=female><i class="tf-profile-female">$${pred2}</h1>`;
            $("#pred1").append(malepred);
            $("#pred2").append(femalepred);
        
        // if female
        } else {

            let femalepred = `<h1 id=female><i class="tf-profile-female"> $${pred1}</h1>`;
            let malepred = `<h1 id=male><i class="tf-profile-male"> $${pred2}</h1>`;
            $("#pred1").append(femalepred);
            $("#pred2").append(malepred);
        }
    }
}