(function () {

    angular.module('app').controller('AppController', ["$scope", "AppService", AppController]);

    //function AppController($scope, $http) {

    //    var onComplete = function (response) {
    //        $scope.persons = response.data;
    //    }

    //    $http.get("/api/persons").then(onComplete);
    //}

    function AppController($scope, AppService) {

        //AppService.getPersons().then(function (response) {
        //    $scope.persons = response.data;
        //});

        $scope.persons = AppService.getPersons();
    }

}());