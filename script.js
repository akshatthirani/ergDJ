(function(angular) {
  'use strict';
angular.module('includeExample', ['ngAnimate'])
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.templates =
      [ { name: '20 spm', url: 'playlists/20.html'},
        { name: '22 spm', url: 'playlists/22.html'},
        { name: '24 spm', url: 'playlists/24.html'},
        { name: '26 spm', url: 'playlists/26.html'},
        { name: '28 spm', url: 'playlists/28.html'},];
    $scope.template = $scope.templates[0];
  }]);
})(window.angular);