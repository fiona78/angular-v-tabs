angular.module( 'vTabs', [] )

//tabs directive

.directive('vTabs', function(){


    return{
       require:['ngModel', '?^vTab'], //array of required driecrive controllers
        restrict: 'EA',
        scope: true,
        controller: function($scope,  $element) {

             this.scope = $scope;
             $scope.$element = $element;
             $scope.$nodeScope = null; // the scope of node which the nodes belongs to
             $scope.test = "test";

              $scope.isParent = function(node) {
                return node.$parentNodesScope == $scope;
              };

              $scope.hasChild = function() {
               return $scope.$modelValue.length > 0;
              };




        },

        link: function(scope, element, attrs, controllersArr) { 

        var ngModel = controllersArr[0];
        var TabCtrl = controllersArr[1];

             //need to understand this better
             TabCtrl.scope.$childNodesScope = scope;
             scope.$nodeScope = TabCtrl.scope;

        }






    };//end of return

})//end of directive

.directive('vTab', function(){


    return{
       require:['^vTabs'], //array of required driecrive controllers
        restrict: 'EA',
        scope: true,
        controller: function($scope, $element, $attrs) {
       
            this.scope = $scope;
            $scope.$element = $element;

            //$scope.$modelValue = null; // Model value for node;
           // $scope.$parentNodeScope = null; // uiTreeNode Scope of parent node;


        },
        link: function(scope, element, attrs, vtabsCtrl) { 

        scope.tabtest = vtabsCtrl.test;



        }






    };//end of return

})//end of directive




//tab directive vTab
