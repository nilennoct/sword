/**
 * Created by Neo on 18/7/14.
 */

var swordApp = angular.module('SwordApp', ['ngRoute', 'ui.bootstrap', 'SwordController', 'SwordData']);

swordApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/character', {
      templateUrl: 'character.html'
//      controller:
    }).
    when('/explore', {
      templateUrl: 'explore.html',
      controller: ExploreCtrl
    }).
    when('/swords', {
      templateUrl: 'swords.html'
//      controller:
    }).
    otherwise({
      redirectTo: '/character'
    });
}]);

/*swordApp.run(function($templateCache) {
	$templateCache.put('explore.html',
	  'Explore'
  );
});*/
