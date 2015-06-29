document.getElementById('SH').focus();

//Enables cross site scripting
$.support.cors = true;

//Create the object to store the json information
//Not currently in json format
var json = {};
json["Test"]="test";

//The submit subroutine
$('#SH1').on('submit', function(e){
             
             //Get the value of the input box before submit
             var SH = document.getElementById("SH");
             
             //The hard coded packer_id
             json["Shipping ID"]=SH.value;
             var json1=JSON.stringify(json);
             
             var url_str = 'http://localhost:4568/shipping/' +SH.value;
             //Prevent default behaviour
             e.preventDefault();
             
             //Post the json to the server
             $.ajax({
                    url: url_str,
                    //Post Method
                    method: 'GET',
                    //Data is json1 JSON file
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