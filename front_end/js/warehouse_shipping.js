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

$('#SH1').submit(function() {
                 document.getElementById('SH_CI').focus();
                 return false;
                 });

//The submit subroutine
$('#SH3').on('submit', function(e){
             
             if (document.getElementById('SH_CI').value==document.getElementById('SH').value)
             {
             
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
                    success: function(data) {document.getElementById('test').innerHTML = data;}
                    });
             
             
             
             //Refocus the user back to the input form
             document.getElementById('SH_CF').focus();
             }
             else
             {
             alert("Customer ID does not match box code");
             document.getElementById('SH').value = "";
             document.getElementById('SH').focus();
             document.getElementById('SH_CI').value = "";
             return false;
             }
             
             });

$('#SH2').submit(function() {
                 
                 if (document.getElementById('SH_CF').value==3131910018889)
                 {
                 var SH = document.getElementById("SH");
                 
                 json["Packer_ID"]=PC_ID.value;
                 json["Shipping ID"]=SH.value;
                 json["DT"]=Date.now();
                 var json1=JSON.stringify(json);
                 
                 document.getElementById('SH').focus();
                 //Clear the input field
                 document.getElementById('SH').value = "";
                 //Clear the input field
                 document.getElementById('SH_CF').value = "";
                 document.getElementById('SH_CI').value = "";
                 
                 $.ajax({
                        url: 'http://localhost:4568/shipping',
                        //Post Method
                        method: 'POST',
                        //Data is json1 JSON file
                        data: json1,
                        success: function() {}
                        });
                 document.getElementById('test').innerHTML=""
                 }
                 else{
                 alert("FALSE");
                 document.getElementById('SH_CF').focus();
                 document.getElementById('SH_CF').value = "";
                 }
                
                 
                 return false;
                 });