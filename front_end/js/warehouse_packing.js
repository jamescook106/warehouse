//Create the object to store the json information
//Not currently in json format
var json = {};

$.support.cors = true;

json["Packer_ID"]=1;
json["Packing_Code"]=2;

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
        }).done(function (response) {});

