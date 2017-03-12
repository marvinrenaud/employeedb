$(document).ready(function() {

    // Declare the set of global variables to be used
    var name = "";
    var role = "";
    var startDate = "";
    var monthsWorked = 0;
    var monthlyRate = 0;
    var totalBilled = 0;
    var keys = "";

    // Create a variable to reference the database
    var database = firebase.database();

    $("#submitButton").on("click", function() {
        event.preventDefault();
        console.log("click registered");

        name = $("#inputName").val().trim();
        role = $("#inputRole").val().trim();
        startDate = $("#inputStartDate").val().trim();
        monthlyRate = $("#inputRate").val().trim();

        // Change what is saved in firebase
        database.ref().push({
            name: name,
            role: role,
            startDate: startDate,
            monthlyRate: monthlyRate,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
        $("myForm").reset();
    });

    database.ref().on("child_added", function(childSnapshot) {
        var childValue = childSnapshot.val();
        console.log(childValue.name);
        console.log(childValue.role);
        $("#inputRow").append("<tr><td>" + childValue.name + "</td><td>" + childValue.role +
            "</td><td>" + childValue.startDate +
            "</td><td>" + childValue.monthlyRate +
            "</td><td>" + childValue.monthlyRate +
            "</td><td>" + childValue.dateAdded + "</td></tr>");

    });




    // database.ref().on("value", function(snapshot) {
    //   var response = snapshot.val();
    //   var keys = Object.keys(response);
    //   // console.log(keys);
    //   for (var i = 0; i < keys.length; i++) {
    //     var k = keys[i];
    //     var record = response[k];
    //     // console.log(record.name);
    //     // console.log(record.role);
    //     // console.log(record.startDate);
    //     // console.log(record.monthlyRate);
    //     // console.log("_______________________");
    //   }
    //
    //     // Print the initial data to the console.
    //
    //
    //
    //     // Log the value of the various properties
    //
    //     // If any errors are experienced, log them to console.
    // }, function(errorObject) {
    //     console.log("The read failed: " + errorObject.code);
    // });



});
