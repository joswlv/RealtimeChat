angular.module('starter.controllers', ['firebase'])

.controller('ChatsCtrl', ['$scope','$firebase','$rootScope',
  function($scope,$firebase,$rootScope){
    var ref = new Firebase('https://wh7923.firebaseio.com/');
    var sync = $firebase(ref);
    $scope.chats = sync.$asArray();

    $scope.sendChat = function (chat) {
      // if($rootScope.authData){
      //   $scope.chats.$add({
      //     user:'Guest',
      //     message: chat.message
      //   });
      //   chat.message = "";
      // }else{
      //   alert("You need to login");
      // }
      $scope.chats.$add({
            user:'Guest',
            message: chat.message
          });
          chat.message = "";
    }
  }])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $rootScope) {
  $scope.login = function () {
    var ref = new Firebase("https://wh7923.firebaseio.com");
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        $rootScope.authData = authData;
      }
    });
  }
});
