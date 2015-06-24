//Create the object to store the json information
//Not currently in json format
var json = {};

$.support.cors = true;

json["UID000"]=1;

//Convert the json variable into JSON
var json1=JSON.stringify(json);
//Post the JSON to server
$.ajax({
        //URL of server
        url: 'http://localhost:4567/',
        //Post Method
        method: 'POST',
        //Data is json1 JSON file
        data: json1
        }).done(function (response) {
                //Parse the response JSON into JS
                var JSON11 = JSON.parse(response);
                //Put the response into the HTML
                document.getElementById('test').innerHTML = JSON11.sort();
                });

