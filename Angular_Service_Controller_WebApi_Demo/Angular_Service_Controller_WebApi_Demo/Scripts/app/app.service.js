(function () {

    angular.module('app').service('AppService', ["$http","$resource", AppService]);

    function AppService($http, $resource) {

        this.getPersons = function () {
            //return $http.get("/api/persons");
            var persons = $resource('/api/persons');
            //return persons.get();
            return persons.query();
        }

    }

}());