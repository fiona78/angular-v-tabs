angular.module( 'vTabs', [] )

//tabs directive

.directive('tabsgroup', function(){
    return{
       require: '?^tab',
        restrict: 'EA',

        controller: function($scope,  $element) {

           
            var nestedTabs = $scope.nestedTabs = [];

                 this.addTab = function(tab){                 
                    nestedTabs.push(tab);  

                };

        },

        link: function( scope, element, attrs, tabCtrl ) {
            if ( tabCtrl ) {
                 angular.forEach(scope.nestedTabs, function(tab) {
                    //console.log("nested tab:", tab.title);
                });

            }
        }
    };//end of return



})//end of directive


.directive('tab', function(){
    return{
       require: ['^tabsgroup', '^tabs'],
        restrict: 'EA',
        scope: {
            title: "@title",
           

        },

        controller: function($scope,  $element) {
            this.getTitle = function() {
                return $scope.title;
            };

           
                this.isSelected = function() {
                return $scope.selected;
                console.log($scope.selected);

            };
           

        },

        link: function( scope, element, attrs, controllersArr ) { 
      
            var tabsgroupCtrl = controllersArr[0];
            var tabsCtrl = controllersArr[1];

            //console.log(scope.tabIds);
            tabsgroupCtrl.addTab(scope);
            tabsCtrl.addTab(scope);
            /*controllersArr[1].onTabClick();*/
            

            element.on('click', function() {
            
                  //need to call teh parent function controller
                  tabsCtrl.onTabClick(scope);

            });
 
           

        }
    };

     

})//end of directive

.directive('tabs', function(){
    return{

             restrict: 'EA',

              controller: function($scope,  $element) {


                     var allTabs = $scope.allTabs = [];

                     //create a function which adds the tabs
                        this.addTab = function(tab){                 
                        allTabs.push(tab);  
                        //console.log("allTabs array ", allTabs);
                        
                        this.onTabClick = function(tab) {
                         
                      console.log(tab);
                        };

                    };

         

              },

              link: function( scope, element, attrs, tabCtrl ) {
                //console.log(scope.selected);

              }


    }

})//end of directive





