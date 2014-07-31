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
                console.log( "Parent tab: ", tabCtrl.getTitle() );
                //console.log(scope.nestedTabs);//shows entire scope of arrays
                //console.log(scope.nestedTabs[1].title);//Adresses
     
                 angular.forEach(scope.nestedTabs, function(tab) {
                    console.log("nested tab:", tab.title);
                });

            }
        }
    };//end of return



})//end of directive


.directive('tab', function(){
    return{
       require: '^tabsgroup',
        restrict: 'EA',
        //replace:true,
        scope: {
            title: "@title"
        },

        controller: function($scope,  $element) {
            this.getTitle = function() {
                return $scope.title;
            };

           

        },

        link: function( scope, element, attrs, tabsCtrl ) { 
            //add teh tab to the tabs array
            tabsCtrl.addTab(scope);
            //console.log(scope.nestedTabs);
            console.log("tab - own title: ", scope.title);

            //create an on mouse down here for each tab

        }
    };

     

})//end of directive

.directive('tabs', function(){
    return{
//this will need to register every tab
//so every tab has to register with tabs
//try doing teh same as tabsgroup for example need to create an array?
             require: '?^tab',
             restrict: 'EA',

              controller: function($scope,  $element) {
                    var allTabs = $scope.allTabs = [];

                 //create a function which adds the tabs
                    this.addEachTab = function(tab){                 
                    allTabs.push(tab);               
                 
                };

              }//end of controller
            


    }

})//end of directive





