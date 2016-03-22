(function () {

    angular.module('app').factory('AppFactory', ["$http", AppFactory]);

    function AppFactory($http) {

        var getPersons = function () {
            return $http.get("/api/persons");
        }

    }

}());