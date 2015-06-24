//Create the object to store the json information
//Not currently in json format
var json = {};

var elem = document.getElementById('btSubmit');

$.support.cors = true;

json["Packer_ID"]=1;
json["Packing_Code"]=2;

//Convert the json variable into JSON
var json1=JSON.stringify(json);
//Post the JSON to server
elem.onclick=function()
{
$.ajax({
        //URL of server
        url: 'http://localhost:4568/packer',
        //Post Method
        method: 'POST',
        //Data is json1 JSON file
        data: json1
        }).done(function (response) {});
};
