(function () {
    'use strict';

    angular
        .module('app')
        .controller('PeopleCtrl', PeopleCtrl);

    PeopleCtrl.$inject = ['dataservice'];

    function PeopleCtrl(dataservice) {
        /* jshint validthis: true */
        var vm = this;

        vm.getPeople = getPeople;
        vm.activate = activate;
        vm.isActive = isActive;
        vm.people = [];
        vm.selectedPerson = null;
        vm.title = 'People';

        activate();

        function activate() {
            return getPeople();
        }

        function getPeople() {
            return dataservice.getPeople()
                .then(function(data){
                    vm.people = data.data;
                    return vm.selectedPerson;
                });
        }

        function isActive(person) {
            return !!(vm.selectedPerson === person);
        }
    }
})();