describe('Services: peopleService', function() {
    'use strict';
    var factory, $httpBackend;
    var getPeopleUrl = '/api/maa';

    beforeEach(function() {
        angular.mock.module('app');
    });

    beforeEach(angular.mock.inject(function(dataservice) {
        factory = dataservice;
    }));

    beforeEach(angular.mock.inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.when('GET', getPeopleUrl).respond(200, { test: 'GoodData' });
    }));

    it('should be defined and loaded with angular dependency injection', function() {
        expect(factory).toBeDefined();
    });

    describe('Methods definition tests', function() {
        it('should define a function called getPeople', function() {
            expect(factory.getPeople).toBeDefined();
        });
    });

    describe('getPeople unit tests', function() {
        it('should call getPeople method', function() {
            spyOn(factory, 'getPeople');
            factory.getPeople();
            expect(factory.getAlerts).toHaveBeenCalled;
        });
        it('should call getPeople method should return good data', function() {
            var result = factory.getPeople();
            $httpBackend.expectGET();
            $httpBackend.flush();
            result.then(function(data) {
                expect(data.test).toBe('GoodData');
            });
        });
    });

});