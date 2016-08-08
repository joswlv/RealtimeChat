angular.module('starter.controllers', ['firebase'])

.controller('ChatsCtrl', ['$scope','$firebase','$rootScope',
  function($scope,$firebase,$rootScope){
    var ref = new Firebase('https://wh7923.firebaseio.com/');
    var sync = $firebase(ref);
    $scope.chats = sync.$asArray();

    $scope.sendChat = function (chat) {
      $scope.chats.$add({
        user:'Guest',
        message: chat.message
      });
      chat.message ="";
    }
  }])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
