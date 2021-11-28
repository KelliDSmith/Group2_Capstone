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

            // buildBarPlot (returnedData);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });

    // function buildBarPlot (returnedData) {
    //     // let curr_id = $("#selDataset").val();
    //     // let curr_data = data.samples.filter(x => x.id === curr_id)[0];
    //     let yvalues = ['male']
    
    //     let trace1 = {
    //         x: returnedData.prediction[0],
    //         y: yvalues,
    //         text: yvalues,
    //         name: "Bacteria Count",
    //         type: 'bar',
    //         orientation: 'h',
    //         marker: {
    //             color: 'maroon'
    //         }
    //     }
    
    //     let traces = [trace1];
    
    //     let layout = {
    //         autosize: true,
    //         // width: 850,
    //         // height: 600,
    //         title: "Bacteria Count in Belly Button",
    //         xaxis: {
    //             title: "Number of Bacteria"
    //         },
    //         yaxis: {
    //             tickfont: {
    //                 size: 10,
    //                 color: 'black'
    //             }
    //         }
    //     };
    
    //     Plotly.newPlot('bar', traces, layout);
    
    // }
}