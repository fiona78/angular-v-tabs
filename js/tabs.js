angular.module( 'vTabs', [] )

//tabs directive

.directive('vTabs', function(){


    return{
       //require:['ngModel', '?^vTab'], //array of required driecrive controllers
       require: '^vTabs',
        restrict: 'EA',
        //replace:true,
        scope: {
            title: "@title"
            //binds to the title attribute

        },

        controller: function($scope,  $element) {
            this.getTitle = function() {
                return $scope.title;
            }
   
//                console.log($scope.title);
                
    
        },

        link: function( scope, element, attrs, vTabsCtrl ) { 
            console.log( scope.title, vTabsCtrl.getTitle() );

        //console.log(vTabsCtrl);
          

    

        }



    };//end of return

})//end of directive

/*.directive('vTab', function(){


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
        link: function(scope, element, attrs, vTabsCtrl) { 

        /*scope.testing = "hello";*/
        //scope.testing = "hello";
        /*console.log(vTabsCtrl)




        }






    };//end of return

})**////end of directive





