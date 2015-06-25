//warehouse_packing.js
//James Cook
//This is the JS for the packing page. It takes a harcoded packer ID and submits it with
//the packing_code

//Enables cross site scripting
$.support.cors = true;

//Create the object to store the json information
//Not currently in json format
var json = {};

//This focuses the user straight to the input field
document.getElementById("PC").focus();

//The hard coded packer_id
json["Packer_ID"]=1;

//The submit subroutine
$('#PC1').on('submit', function(e){
             
             //Get the value of the input box before submit
             var PC = document.getElementById("PC");
             
             //Write it to the json array
             json["Packing_Code"]=PC.value;
             
             //Convert var json to json
             var json1=JSON.stringify(json);
             
             //Prevent default behaviour
             e.preventDefault();
             
             //Post the json to the server
                 $.ajax({
                        url: 'http://localhost:4568/packer',
                        //Post Method
                        method: 'POST',
                        //Data is json1 JSON file
                        data: json1,
                        success: function() {}
                        });
             
             //Refocus the user back to the input form
             document.getElementById('PC').focus();
             
             //Clear the input field
             document.getElementById('PC').value = "";
});






