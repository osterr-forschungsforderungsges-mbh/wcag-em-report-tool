'use strict';

angular.module('wcagReporter')
.controller('EvalScopeCtrl',
function ($scope, appState, evalScopeModel,
          evalReportModel, $filter) {
    $scope.state      = appState.moveToState('scope');
    $scope.scopeModel = evalScopeModel;

    $scope.conformanceOptions = evalScopeModel.conformanceOptions
    .reduce(function (tgt, lvl) {
        tgt[lvl] = $filter('rdfToLabel')(lvl);
        return tgt;
    }, {});

    $scope.appTypes = evalScopeModel.appTypes
    .reduce(function (app, type) {
      app[type] = $filter('rdfToLabel')(type);
      return app;
    }, {});

    $scope.reportTypes = evalScopeModel.reportTypes
    .reduce(function (report, type) {
      report[type] = $filter('rdfToLabel')(type);
      return report;
    }, {});


    // Give the report a default title
    // (won't if one is already set)
    $scope.$on('$routeChangeStart', function() {
        if (evalScopeModel.website.siteName) {
            var translate     = $filter('translate');
            var siteName = translate('REPORT.TITLE_PREFIX') + ' ' +
                        evalScopeModel.website.siteName;
            evalReportModel.setDefaultTitle(siteName);
        }
    });

});
