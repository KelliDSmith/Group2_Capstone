//run on page load
$(document).ready(function() {
    readData();
    // Add event listener for submit button
    $("#submit").on("click", function(event) {
        // Prevent the page from refreshing
        event.preventDefault();
        getPrediction();
    });



    // function inputdata () {
    //     let job_title = $("#job_title");
    //     let gender = $("#gender");
    //     let department = $("#department");
    //     let seniority = $("#seniority");

    //     console.log(job_title,gender,department,seniority);

    // }

    //Load drop down options
    function readData() {

        $.ajax({
            type: 'POST',
            url: "/getDropdown_jobtitle/",
            dataType: 'json',
            success: function(data) {

                let job_ent = data;

                Object.entries(wine_ent).forEach(function([key, value]) {
                    let option_val = value.jobtitle_encoded;
                    let option_name = value.job_title;

                    let option = `<option value=${option_val}>${option_name}</option>`;
                    $("#id1").append(option);
                });

            }
        });

        $.ajax({
            type: 'POST',
            url: "/getDropdown_gender/",
            dataType: 'json',
            success: function(data) {

                let gender_ent = data;

                Object.entries(gender_ent).forEach(function([key, value]) {
                    let option_val = value.gender_encoded;
                    let option_name = value.gender;

                    let option = `<option value=${option_val}>${option_name}</option>`;
                    $("#id2").append(option);
                });

            }
        });

        $.ajax({
            type: 'POST',
            url: "/getDropdown_department/",
            dataType: 'json',
            success: function(data) {

                let dept_ent = data;

                Object.entries(dept_ent).forEach(function([key, value]) {
                    let option_val = value.department_encoded;
                    let option_name = value.department;

                    let option = `<option value=${option_val}>${option_name}</option>`;
                    $("#id3").append(option);
                });

            }
        });

        $.ajax({
            type: 'POST',
            url: "/getDropdown_seniority/",
            dataType: 'json',
            success: function(data) {

                let senior_ent = data;

                Object.entries(senior_ent).forEach(function([key, value]) {
                    let option_val = value.seniority;
                    let option_name = value.seniority;

                    let option = `<option value=${option_val}>${option_name}</option>`;
                    $("#id4").append(option);
                });

            }
        });

});