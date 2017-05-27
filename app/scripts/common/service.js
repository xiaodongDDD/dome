/**
 * Created by admin on 2016/7/30.
 */

angular.module('serviceModule', [])
  .directive('repeatDone', function () {
    return function (scope, element, attrs) {
      if (scope.$last) { // all are rendered
        scope.$eval(attrs.repeatDone);
      }
    }
  }).
    service('publicMethod', ['$filter', '$ionicLoading', '$ionicPopup', '$ionicHistory','$cordovaDialogs',
    function ($filter, $ionicLoading, $ionicPopup, $ionicHistory,$cordovaDialogs) {
      return {
        //调用电话
        showphone: function (types) {
          return $ionicActionSheet.show({
            buttons: [
              {text: '确定'},
            ],
            titleText: '是否拨打电话',
            cancelText: '取消',
            buttonClicked: function (index) {
              if (index == 0) {
                $window.location.href = "tel:" + types;
                return true;
              }
            }
          })
        },
        //返回上一页
        goBack: function () {
          $ionicHistory.goBack();
        },


        //时间的转换 年月日
        getDateString: function (date) {
          return $filter('date')(date, 'yyyy-MM-dd');
        },

        //时间的转换 年月日时分
        getDateTimeString: function (date) {
          return $filter('date')(date, 'yyyy-MM-dd HH:mm');
        },


  //温度转换  symbol当前温度单位°C或°F
        temperatureConv:function(x,symbol){

          if(symbol=='°C'){

            return  32 +1.8*x;//返回华氏度
          }
          else{  //°F
            return  (x-32) /1.8;//返回摄氏度
          }
        }
      };

    }]).

  //页面间的传值
  service('SettingsService', function () {
    var _variables = {};
    return {
      get: function (varname) {
        return (typeof _variables[varname] !== 'undefined') ? _variables[varname] : false;
      },
      set: function (varname, value) {
        _variables[varname] = value;
      }
    };
  })
  .controller("AppCtrl",["$scope","$timeout",function ($scope,$timeout) {
    var ToastFlag = false;
    $scope.Toast = {
      show: function (msg, time) {
        if (ToastFlag == true) {
          $scope.Toast.hide();
        };
        $scope.isVisible = 'visible animated bounceInUp';
        $scope.isActive = 'active';
        ToastFlag = true;
        $scope.msg = msg;
        if (time == undefined) {
          time = 2000
        }
        $scope.showToast = $timeout(function () {
          $scope.isActive = 'active fadeOut';
        }, time)
      },
      hide: function () {
        $scope.isVisible = '';
        $scope.isActive = '';
        $timeout.cancel($scope.showToast);
      }
    };
  }])

