//warehouse_packing.js
//James Cook
//This is the JS for the packing page. It takes a harcoded packer ID and submits it with
//the packing_code

//Create the object to store the json information
//Not currently in json format
var json = {};

document.getElementById("PC").focus();

var str = ""
//The hard coded packer_id
json["Packer_ID"]=1;


$('#PC1').on('submit', function(e){
             var PC = document.getElementById("PC");
             str=PC.value;
             json["Packing_Code"]=str;
             var json1=JSON.stringify(json);
                 e.preventDefault();
                 $.ajax({
                        url: 'http://localhost:4568/packer',
                        //Post Method
                        method: 'POST',
                        //Data is json1 JSON file
                        data: json1,
                        success: function() {
                        alert('success');
                        }
                        });
             document.getElementById('PC').focus();
             document.getElementById('PC').value = "";
                 });

//The variable for the button press
var elem = document.getElementById('btSubmit');

//Enables cross site scripting
$.support.cors = true;



//Post the JSON to server when the submit button is hit
elem.onclick=function()
{
    
};




