//warehouse_shipping.js
//James Cook
//This is the JS for the shipping side of the app

//This focuses the user straight to the packer_ID input field
document.getElementById("PC_ID").focus();

//Stops the packer_ID from submitting and refocuses it to the barcode section
$('#PC2').submit(function() {
                 document.getElementById('SH').focus();
                 return false;
                 });

//Enables cross site scripting
$.support.cors = true;

//Create the object to store the json information
//Not currently in json format
var json = {};

//The submit subroutine
$('#SH1').on('submit', function(e){
             
             //Get the value of the input box before submit
             var SH = document.getElementById("SH");
             
             json["Packer_ID"]=PC_ID.value;
             json["Shipping ID"]=SH.value;
             json["DT"]=Date.now();
             var json1=JSON.stringify(json);
             
             //Variable for the GET request with textbox entry value
             var url_str = 'http://localhost:4568/shipping/' +SH.value;
             
             //Prevent default behaviour
             e.preventDefault();
             
             //Post the json to the server
             $.ajax({
                    url: url_str,
                    //GET Method
                    method: 'GET',
                    success: function() {}
                    });
             
             $.ajax({
                    url: 'http://localhost:4568/shipping',
                    //Post Method
                    method: 'POST',
                    //Data is json1 JSON file
                    data: json1,
                    success: function() {}
                    });
             
             //Refocus the user back to the input form
             document.getElementById('SH').focus();
             
             //Clear the input field
             document.getElementById('SH').value = "";
             });