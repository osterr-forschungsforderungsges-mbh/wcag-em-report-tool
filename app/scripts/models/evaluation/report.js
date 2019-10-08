'use strict';

angular.module('wcagReporter')
.service('evalReportModel', function($filter, currentUser) {
    var protoModel = {
        creator: currentUser,
        title: '',
        summary: '',
        specifics: '',
        commissioner: '',
        state: ''
    },
    reportModel = Object.create(protoModel);
    protoModel.date = $filter('date')(new Date(), 'longDate');

    protoModel.states = {
      'bgld': 'Burgenland',
      'ktn': 'Kärnten',
      'noe': 'Niederösterreich',
      'ooe': 'Oberösterreich',
      'sbg': 'Salzburg',
      'stmk': 'Steiermark',
      't': 'Tirol',
      'vbg': 'Vorarlberg',
      'w': 'Wien',
    };

    reportModel.exportData = function () {
        var res = angular.copy(reportModel);
        res.creator = res.creator.id;
        return res;
    };

    reportModel.importData = function (evalData) {
        Object.keys(protoModel).forEach(function (key) {
            if (angular.isDefined(evalData[key])) {
                reportModel[key] = evalData[key];
            }
        });
    };

    reportModel.setDefaultTitle = function (title) {
        if (!reportModel.title) {
            reportModel.title = title;
        }
    };

    return reportModel;
});
