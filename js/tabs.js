angular.module( 'vTabs', [] )

//tabs directive

.directive('tabsgroup', function(){
    return{
       require: '?^tab',
        restrict: 'EA',
        //replace:true,



        controller: function($scope,  $element) {

             //create an empty array within the scope called nestedtabs
            var nestedTabs = $scope.nestedTabs = [];

                 //create a function which adds the tabs
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
            title: "@title"
        },

        controller: function($scope,  $element) {
            this.getTitle = function() {
                return $scope.title;
            };

           

        },

        link: function( scope, element, attrs, controllersArr ) { 
      
            controllersArr[0].addTab(scope);
            //console.log(scope.nestedTabs);
            console.log("tab- ", scope.title);

            //create an on mouse down here for each tab
            var tabButtons = element.find('tab');
            //console.log(tabButtons); 
            angular.forEach(tabButtons, function (tabButton){
           
                    console.log(tabButton);//this only finds the nested tabs!

                    $(tabButton).on( 'click', function(){
                       
                        console.log("clicked", this);
                    });
                      
                        

            });   

        }
    };

     

})//end of directive

.directive('tabs', function(){
    return{
//this will need to register every tab

             //require: '?^tab',
             restrict: 'EA',

              controller: function($scope,  $element) {

                    var allTabs = $scope.allTabs = [];

                   

              },//end of controller

              link: function( scope, element, attrs, tabCtrl ) {

                
                    if ( tabCtrl ) {
                     
                        //tabCtrl.getTitle();
                        console.log("all titles: ", scope.title);
                        //console.log(tabCtrl.title);
                        
                        
                      }

              }
            


    }

})//end of directive





