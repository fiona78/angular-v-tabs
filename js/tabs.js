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
                  //console.log( "Parent tab: ", tabCtrl.getTitle() );
                  //console.log(scope.nestedTabs);//shows entire scope of arrays
                  //console.log(scope.nestedTabs[1].title);//Adresses
     
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
            
       

            //console.log(scope.nestedTabs);
            //console.log("tab- ", scope.title);
            //console.log(scope.$id);

            element.on('click', function() {
            
                 //console.log(element[0].title);
                 //console.log(element);
                  //scope.selected = element[0].title;


                  //console.log(scope.selected);

                  //need to call teh parent function controller
                  tabsCtrl.onTabClick(element);

            });
 
           

        }
    };

     

})//end of directive

.directive('tabs', function(){
    return{
//this will need to register every tab
//use the same code as tabs group

             restrict: 'EA',

              controller: function($scope,  $element) {


                     var allTabs = $scope.allTabs = [];

                     //create a function which adds the tabs
                        this.addTab = function(tab){                 
                        allTabs.push(tab);  
                        //console.log("allTabs array ", allTabs);
                        
                        this.onTabClick = function(element) {
                          //work with thje data from the child click function
                        //return $scope.selected;
                        $scope.selected = element[0].title;
                        console.log($scope.selected);
                        };

                    };

         

              },

              link: function( scope, element, attrs, tabCtrl ) {
                //console.log(scope.selected);

              }


    }

})//end of directive





