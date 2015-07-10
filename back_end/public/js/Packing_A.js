var P_A=angular.module("packing_app", []);

  P_A.controller("packer_id_controller", function($scope,$rootScope, $http) {
        
    $("#packer_id").focus();
    $scope.myForm = {};
    $scope.myForm.packer_id="";
    
    $scope.myForm.submitPackerId = function(item, event) {

      console.log("--> Submitting Packing ID");
      var packer_id_var = './packer/'+ $scope.myForm.packer_id;
      console.log(packer_id_var);
      $rootScope.packer_id=$scope.myForm.packer_id;

      $http.get(packer_id_var)
      .success(function(data, status, headers, config) {
        $scope.message=data;
        console.log(data);
        $("#packing_id").focus();
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

  P_A.controller("packing_id_controller", function($scope,$rootScope, $http) {

    $scope.myForm = {};
    $scope.myForm.packing_id="";

    $scope.myForm.submitPackingId = function(item, event) {
      console.log("--> Submitting Packing ID");
      var dataObj={packing_id:$scope.myForm.packing_id, packer_id:$rootScope.packer_id};
      $http.post('/packer', dataObj)
        .success(function(data, status, headers, config) {
        })
        .error(function(data, status, headers, config) {
        });

      $scope.myForm.packing_id="";
      $("#packing_id").focus();    
    };
  });

var S_A=angular.module("shipping_app", []);

S_A.controller("packer_id_controller", function($scope,$rootScope, $http) {
        
    $("#packer_id").focus();
    $scope.myForm = {};
    $scope.myForm.packer_id="";
    
    $scope.myForm.submitPackerId = function(item, event) {

      console.log("--> Submitting Packing ID");
      var packer_id_var = './packer/'+ $scope.myForm.packer_id;
      console.log(packer_id_var);
      $rootScope.packer_id=$scope.myForm.packer_id;

      $http.get(packer_id_var)
      .success(function(data, status, headers, config) {
        $scope.message=data;
        console.log(data);
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

S_A.controller("shipping_id_controller", function($scope,$rootScope, $http) {

    $scope.myForm = {};
    $scope.myForm.shipping_id="";

    $scope.myForm.submitShippingId = function(item, event) {
      console.log("--> Submitting Packing ID");
      var shipping_id_var = './shipping/'+ $scope.myForm.shipping_id;
      $http.get(shipping_id_var)
      .success(function(data, status, headers, config) {
        $scope.message=data;
        console.log(data);
        })
      .error(function(data, status, headers, config) {});  
    };
  });