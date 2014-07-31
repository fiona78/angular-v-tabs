angular.module( 'vTabs', [] )

//tabs directive

.directive('tabs', function(){
    return{
       require: '?^tab',
        restrict: 'EA',
        //replace:true,

        controller: function($scope,  $element) {
        },

        link: function( scope, element, attrs, tabCtrl ) {
            if ( tabCtrl ) {
                console.log( tabCtrl.getTitle() );
            }
        }
    };//end of return

})//end of directive


.directive('tab', function(){
    return{
       require: '^tabs',
        restrict: 'EA',
        //replace:true,
        scope: {
            title: "@title"
        },

        controller: function($scope,  $element) {
            this.getTitle = function() {
                return $scope.title;
            }
        },

        link: function( scope, element, attrs, vTabsCtrl ) { 
        }
    };//end of return

})//end of directive

;



