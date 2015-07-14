//P_A_S.js
//James Cook
//July 2015
//
//This is the js for the whole app. It is written in angular and its purpose is
//to process the packing and shipping pages from the app. It communicates with
//a server

//Module for the packing page
var P_A=angular.module("packing_app", []);

  //Controller to process the submission of the packer ID
  P_A.controller("packer_id_controller", function($scope,$rootScope, $http) {
    
    //Focus to the packer_id when you first load the page    
    $("#packer_id").focus();

    //Set up the form for the controller and set it equal to blank 
    $scope.myForm = {};
    $scope.myForm.packer_id="";
    
    //Function for packer submission
    $scope.myForm.submitPackerId = function(item, event) {

      //Log to console that the packer ID has been submitted
      //Commented out as it is for development
      //console.log("--> Submitting Packing ID");

      //Variable to store the submission url 
      var packer_id_var = './packer/'+ $scope.myForm.packer_id;

      //Log to console submission url
      //Commented out as it is for development
      //console.log(packer_id_var);

      //Using rootScape to keep the packer ID for the whole module
      $rootScope.packer_id=$scope.myForm.packer_id;

      //The get request
      $http.get(packer_id_var)
      //Success Process
      .success(function(data, status, headers, config) {

        //Place the return data into the html
        $scope.message=data.first_name;

        //Console Log for development purposes
        //console.log(data);

        //Focus to the next box
        $("#packing_id").focus();
        })
      //error processing (currently limited to 404)
      .error(function(data, status, headers, config) {
          console.log(status);
          if (data=404){
            $scope.message=data.error;
          }
          if (data!=404){
            $scope.message="Unknown error";
          }
      });
    }

  });
  
  //Packing ID controller
  P_A.controller("packing_id_controller", function($scope,$rootScope, $http) {

    $scope.myForm = {};
    $scope.myForm.packing_id="";

    //Submission function
    $scope.myForm.submitPackingId = function(item, event) {

      //Development
      //console.log("--> Submitting Packing ID");

      //Set up submission json
      var dataObj={packing_id:$scope.myForm.packing_id, packer_id:$rootScope.packer_id};

      //Post
      $http.post('/packer', dataObj)
        .success(function(data, status, headers, config) {
        })
        .error(function(data, status, headers, config) {
        });

      $scope.myForm.packing_id="";
      $("#packing_id").focus();    
    };
  });

//Module for the shipping page
var S_A=angular.module("shipping_app", []);

//Packer_id controller for the shipping page
//Very similiar to the packer id controller for the packing page so is 
//not commented
S_A.controller("packer_id_controller", function($scope,$rootScope, $http) {
        
    $("#packer_id").focus();
    $scope.myForm = {};
    $scope.myForm.packer_id="";
    
    $scope.myForm.submitPackerId = function(item, event) {

      //Development
      //console.log("--> Submitting Packing ID");

      var packer_id_var = './packer/'+ $scope.myForm.packer_id;

      //Development
      //console.log(packer_id_var);

      $rootScope.packer_id=$scope.myForm.packer_id;

      $http.get(packer_id_var)
      .success(function(data, status, headers, config) {
        $scope.message=data;

        //Development
        //console.log(data);

        $("#shipping_id").focus();
        })
      .error(function(data, status, headers, config) {
          console.log(status);
          if (data=404){
            $scope.message="Blank Packer ID submitted";
          }
          if (data!=404){
            $scope.message="Unknown error";
          }
      });
    }

  });

//shipping_id controller for the shipping page
//Very similiar to the packer id controller for the packing page so is 
//not commented
S_A.controller("shipping_id_controller", function($scope,$rootScope, $http) {

    $scope.myForm = {};
    $scope.myForm.shipping_id="";

    $scope.myForm.submitShippingId = function(item, event) {

      //Development
      //console.log("--> Submitting Packing ID");

      $rootScope.shipping_id=$scope.myForm.shipping_id;
      var shipping_id_var = './shipping/'+ $scope.myForm.shipping_id;
      $http.get(shipping_id_var)
      .success(function(data, status, headers, config) {
        $scope.message=data;

        //Development
        //console.log(data);

        $("#packing_id").focus(); 
        })
      .error(function(data, status, headers, config) {});  
    };
  });

//packing_id controller for the shipping page
//Very similiar to the packing id controller for the packing page so is 
//not commented
S_A.controller("packing_id_controller", function($scope,$rootScope, $http) {

    $scope.myForm = {};
    $scope.myForm.packing_id="";

    $scope.myForm.submitPackingId = function(item, event) {
      //Development
      //console.log("--> Submitting Packing ID");
      
      var dataObj={packing_id:$scope.myForm.packing_id, packer_id:$rootScope.packer_id, shipping_id:$rootScope.shipping_id};
      $http.post('/shipping', dataObj)
        .success(function(data, status, headers, config) {
          $scope.message=data;
          $("#shipping_id").focus();
          $scope.myForm.packing_id="";
          document.getElementById('shipping_id').value = "";
        })
        .error(function(data, status, headers, config) {
        });
    
    };
  });