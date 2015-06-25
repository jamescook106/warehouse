//warehouse_packing.js
//James Cook
//This is the JS for the packing page. It takes a harcoded packer ID and submits it with
//the packing_code

document.getElementById("PC").focus();

//Create the object to store the json information
//Not currently in json format
var json = {};

//The variable for the button press
var elem = document.getElementById('btSubmit');

//Enables cross site scripting
$.support.cors = true;

//The hard coded packer_id
json["Packer_ID"]=1;

//Post the JSON to server when the submit button is hit
elem.onclick=function()
{
    //Get the value of the packing_code from the submitted barcode
    var PC = document.getElementById('PC');
    json["Packing_Code"]=PC.value;
    
    //Convert the json variable into JSON
    var json1=JSON.stringify(json);
    
$.ajax({
        //URL of server
        url: 'http://localhost:4568/packer',
        //Post Method
        method: 'POST',
        //Data is json1 JSON file
        data: json1
        }).done(function (response) {});
    document.getElementById('PC').focus();
        document.getElementById('PC').value = "";
};




