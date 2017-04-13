/**
 * Created by chenjiacheng on 2017/4/3.
 */
angular.module('productModule')
  .controller('spaCtrl', [
    '$scope',
    '$state',
    'publicMethod', '$ionicModal', '$ionicPopover', '$timeout', '$ionicHistory', 'hmsHttp','hmsPopup',
    function ($scope, $state, publicMethod, $ionicModal, $ionicPopover, $timeout, $ionicHistory, hmsHttp,hmsPopup) {


      $scope.config = {
        openFlag: true,

        device3: false,//shebei
        device4: false,

        flagDevice3: false,//shifouanzhuang
        flagDevice4: false,

        onOrOff3 : true,//shifouzaixian
        onOrOff4 : true,

        onLinePic3 : "build/img/keyscene-spa/icon_home_device_signal5.png",
        onLinePic4 : "build/img/keyscene-spa/icon_home_device_signal5.png",
      }





      /**
       *@autor: caolei
       *@params: item
       *@disc: get switch status
       */
     /* $scope.getSwitchStatus = function(item){
        //console.log(item);
        alert(item.isOff);
        if(item.isOff){
          //alert("on");
          $scope.openKeyscene();

        }else{
          alert("off1");
        }
      };*/



/**
       *@author:chenjiacheng
       *@name:goBack
       *@params:
       *@return:
       *@disc:goback
       */
      $scope.goBack = function () {
        window.history.go();
      }

      /**
       *@author:chenjiacheng
       *@name:openKeyscene
       *@params:
       *@return:
       *@disc:openKeysceneSpa
       */
      $scope.openKeyscene = function () {
        console.log($scope.config.openFlag);
        if ($scope.config.openFlag == true) {
          //马桶
         /* if($scope.config.flagDevice1 != true){
            console.log($scope.config.flagDevice1);
            $("#progressAnimation1").css({
              "-webkit-animation": "aaa 5.5s linear",
              "background": "#1a1d28"
            });
            $timeout(function () {
              $scope.config.device1 = true;
              $scope.config.openFlag = false;
            }, 5700);
          }*/
          //镜柜
        /*  if($scope.config.flagDevice2 != true) {
            $("#progressAnimation3").css({
              "-webkit-animation": "aaa 3.0s linear",
              "background": "#1a1d28"
            });
            $timeout(function () {
              $scope.config.device3 = true;
            }, 2800);
          }*/
          //浴霸
          if($scope.config.flagDevice3 != true) {
            $("#progressAnimation3").css({
              "-webkit-animation": "aaa 6.0s linear",
              "background": "#1a1d28"
            });
            $timeout(function () {
              $scope.config.device3 = true;
            }, 5900);
          }
          //淋浴
          if($scope.config.flagDevice4 != true) {
            $("#progressAnimation4").css({
              "-webkit-animation": "aaa 1.5s linear",
              "background": "#1a1d28"
            });
            $timeout(function () {
              $scope.config.device4 = true;
            }, 1600);
          }
        } else {

        }
      }

      /**
       *@author:chenjiacheng
       *@name:deleteKeyscene
       *@params:
       *@return:
       *@disc:delete Keyscene
       */
      $scope.deleteKeyscene = function(){
        hmsPopup.confirmNoTitle('删除场景',deleteKey);
        function deleteKey(){
          var url = "";
          var paramter = {

          }
          hmsHttp.post(url, paramter).success(
            function(response){

            }
          ).error(
            function (response, status, header, config){
            }
          );
        }

      }


    }]);
