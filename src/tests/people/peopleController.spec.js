describe('PeopleCtrl', function () {
    'use strict';
    var scope, compile, controller, goController;
    var dataserviceMock, getPeopleDeferredCalled;

    var markup = '<form name="peopleForm" id="peopleForm"></form>';
    var peopleForm;

    beforeEach(module('app'));
    beforeEach(function () {
        inject(function ($compile, $controller, $rootScope, $q) {
            scope = $rootScope.$new();
            compile = $compile;
            var formElement = compile(markup)(scope);
            peopleForm = scope.peopleForm;

            getPeopleDeferredCalled = $q.defer();

            dataserviceMock = {
                getPeople: function (request) {
                    return getPeopleDeferredCalled.promise;
                }
            };

            controller = $controller('PeopleCtrl', {
                dataservice: dataserviceMock
            });


        });
    });

    it('PeopleCtrl should be defined', function () {
        expect(controller).toBeDefined();
    });

    describe('PeopleCtrl properties and methods definition', function () {
        it('should define isActive', function () {
            expect(controller.isActive).toBeDefined();
        });
        it('should define people', function () {
            expect(controller.people).toBeDefined();
        });
        it('should define selectedPerson', function () {
            expect(controller.selectedPerson).toBeDefined();
            expect(controller.selectedPerson).toEqual(null);
        });
        it('should define title', function () {
            expect(controller.title).toBeDefined();
            expect(controller.title).toBe('People');
        });
        
    });

    describe('peopleCtrl getPeople method', function () {

        it('should call getPeople', function () {
           
            var getPeopleMock =
            {
                data:[
                    { "id": 1017109,"name": "John Doe Test","description":"desc 1" },
                    { "id": 1017108,"name": "bobby T Test","description":"desc 1" }
                ]
            };

            getPeopleDeferredCalled.resolve(getPeopleMock)
            controller.getPeople();
            scope.$digest();
            expect(controller.people).toEqual(getPeopleMock.data);

        });

    });
});
