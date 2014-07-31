angular.module( 'cbVTabs', [] )

.directive( 'cbVTabs', function () {

    return {
     
        restrict: 'E',
        transclude: true,
        scope: {},

        controller: function($scope) {
            var tabs = $scope.tabs = [];

            $scope.select = function(tab) {
                angular.forEach(tabs, function(tab) {
                    tab.selected = false;
                });
                tab.selected = true;
            };

            this.addTab = function(tab) {

                if (tabs.length === 0) {
                    $scope.select(tab);
                }
                
                tabs.push(tab);
                //console.log(tab);
            };

        },

        template:
            '<tab-menu>' + 
            '<cb-tab-link ng-repeat = "tab in tabs"><a href = "#" ng-click = "select(tab)" ng-focus="select(tab)">{{tab.title}}</a></cb-tab-link>' +
            '</tab-menu>' + 
            '<cb-tab-placeholder ng-transclude></cb-tab-placeholder>',
    
        link: function postLink( scope, element, attributes, controller ) { 

        },          
    };  
})

.directive('cbTab', function() {
    return {
      require: '^cbVTabs',
      restrict: 'E',
      transclude: true,

      scope: {
        title: '@'
      },

      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addTab(scope);

        var menutabs = element.find('cb-tab-link'); 

        /*angular.forEach( menutabs, function( menu-tab ) { 

                scope.$apply( function() {
                
                    $('menu-tab').on('focus', function(){
                    //$(this).trigger('click');
                    console.log("focused");
                    });

                });


        });
*/
                


      },
      
       templateUrl: 'panel-content.html'
    
     
    };
  });

//can continue to add directives.





