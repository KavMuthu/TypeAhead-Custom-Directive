/**
 * Created by Kavi on 2/8/17.
 */
var bmcFormApp = angular.module('bmcFormApp', ['firebase', 'ngNotify']);

bmcFormApp.controller('BmcController', ['$scope', '$http', 'userDataFactory', '$firebase', 'ngNotify', function ($scope, $http, userDataFactory, $firebase, ngNotify) {

    //firebase reference
    var fireRef = new Firebase('https://bmcform-2427e.firebaseio.com/');
    $scope.affectedUsers = $firebase(fireRef).$asArray();
    $scope.name = '';
    $scope.company = '';
    $scope.incidentTemplate = '';
    $scope.autoAssignBestFit = '';
    $scope.incidentTitle = '';
    $scope.priority = '';

    //REST call to the userDetails.json file
    userDataFactory.get('data/userDetails.json').then(function (data) {

        $scope.items = data;

        //auto populating company and priority input fields
        $scope.onItemSelected = function () {
            $scope.selected = false;

            for (var i in $scope.items) {
                if ($scope.name == $scope.items[i].name) {
                    $scope.company = $scope.items[i].company;
                    $scope.priority = $scope.items[i].priority;
                }
            }
        };
    });

    $scope.clearForm = function () {
        $scope.selected = true;
        $scope.model = "";
        if (!$scope.name) {
            $scope.priority = '';
        }

    };
    $scope.clearCompany = function(){
        $scope.company = '';
    }
    //add user details to the back end - firebase
    $scope.addAffectedUserDetails = function () {

        var name = $scope.name.trim();
        var company = $scope.company.trim();
        var incidentTemplate = $scope.incidentTemplate.trim();
        var assignGroup = $scope.autoAssignBestFit;
        var incidentTitle = $scope.incidentTitle.trim();
        var priority = $scope.priority;

        console.log(name + " " + company + " " + incidentTemplate + " " + assignGroup + " " + incidentTitle + " " + priority);
        //spinner
        $scope.loading = true;

        if (!name.length && !company.length && !incidentTemplate.length && !assignGroup.length && !incidentTitle.length && !priority.length) {
            return;
        }
        //push to firebase
        $scope.affectedUsers.$add({
            name: name,
            company: company,
            template: incidentTemplate,
            assignGroup: assignGroup,
            title: incidentTitle,
            priority: priority
        }).then(function () {
            $scope.loading = false;
            //notification
            ngNotify.addType('notice', 'my-notice-type');
            ngNotify.set('Saved successfully !', 'notice');
        })
        
        $scope.name = '';
        $scope.company = '';
        $scope.incidentTemplate = '';
        $scope.autoAssignBestFit = '';
        $scope.incidentTitle = '';
        $scope.priority = '';
    }
}]);
//TypeAhead directive
bmcFormApp.directive('typeahead', function ($timeout) {

    return {
        restrict: 'AEC',
        scope: {
            items: '=',
            prompt: '@',
            name: '@',
            company: '@',
            email: '@',
            image: '@',
            priority: '@',
            model: '=',
            onSelect: '&'
        },
        link: function (scope, element, attrs) {
            //mouse event to select the user name
            scope.handleSelection=function(selectedItem){
                console.log(scope.current);
                scope.model=selectedItem;
                scope.current=0;
                scope.selected=true;
                $timeout(function(){
                    scope.onSelect();
                },200);
            };

            scope.current=0;
            scope.selected=true;
            scope.isCurrent=function(index){
                return scope.current==index;
            };
            scope.setCurrent=function(index){
                scope.current=index;
            };
            //keyboard event to set the user name
            // $(element).bind('keydown', function (evt) {
            //     if (scope.items == undefined) {
            //         return;
            //     }
            //     if (scope.items.length == 0) {
            //         return;
            //     }
            //     if (evt.which === 40) { // down key
            //         scope.current = (scope.current + 1) % scope.items.length;
            //         //scope.$digest();
            //
            //     } else if (evt.which === 38) { // up key
            //         scope.current = (scope.current ? scope.current : scope.items.length) - 1;
            //         //scope.$digest();
            //     } else if (evt.which === 13) { // 13- enter key
            //         console.log("enter pressed");
            //
            //         scope.$watch(scope.items, function(){
            //             var selectedItem = scope.items[scope.current];
            //             console.log("Enter presssed", selectedItem.name)
            //             scope.model = selectedItem.name;
            //             scope.selected = true;
            //             onItemSelected(selectedItem.name);
            //         });
            //     }
            //     else if (evt.which === 9) {
            //         scope.selected = true;
            //     }
            //     scope.$apply();
            // });

        },
        templateUrl: 'templates/templateurl.html'
    }
});
//factory method to pass the url to the http get method
bmcFormApp.factory('userDataFactory', function ($http) {

    return {
        get: function (url) {
            return $http.get(url).then(function (resp) {
                return resp.data;
            });
        }
    };
});