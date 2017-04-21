angular.module('toiletControlModule')
  .controller('toiletSettingCtrl', [
    '$scope',
    '$state',
    'publicMethod',
    '$ionicModal',
    '$compile',
    'baseConfig',
    'checkVersionService',
    'hmsPopup',
    function ($scope,
              $state,
              publicMethod,
              $ionicModal,
              $compile,
              baseConfig,
              checkVersionService,
              hmsPopup
    ) {
      $scope.goBack = function () {
        publicMethod.goBack();
      }
      $scope.chongshuisetval = false,
      $scope.chuchousetval = false,
      $scope.anjianvoicesetval = true,
      $scope.welcomemsetval = false
      $scope.toilteSetting={
        gaiganyin:"",
        gaiganyinDistance:""
      };
      $scope.listleft = [{
        name:"关闭",
        flag:false,
        towdata:[{
          name: "无",
          flag:false
        }]
      },{
        name:"盖感应",
        flag:false,
        towdata:[{
          name: "近距离",
          flag:false
        },{
          name: "中距离",
          flag:false
        },{
          name: "远距离",
          flag:false
        }]
      },{
        name:"盖和圈感应",
        flag:false,
        towdata:[{
          name: "盖和圈感应1",
          flag:false
        },{
          name: "盖和圈感应2",
          flag:false
        },{
          name: "盖和圈感应3",
          flag:false
        }]
      }];
      $scope.gaiganyinTemp="";
      $scope.gaiganyinDistanceTemp="";
      $scope.listright=$scope.listleft[0].towdata;
      $scope.silderSeleced = function (index) {
        $scope.listleft[index].flag = true;
        $scope.gaiganyinTemp = $scope.listleft[index].name;
        $scope.listright = $scope.listleft[index].towdata;
        for(var i=0;i<$scope.listleft.length;i++){
          if(index !== i){
            $scope.listleft[i].flag = false;
          }
        }
      };
      $scope.silderRightSeleced = function (index) {
        $scope.listright[index].flag = true;
        $scope.gaiganyinDistanceTemp = $scope.listright[index].name;
        for(var i=0;i<$scope.listright.length;i++){
          if(index !== i){
            $scope.listright[i].flag = false;
          }
        }
      };
      //自动翻盖设置
      //获取屏幕高度
      $scope.screenHeig = window.innerHeight;
      $ionicModal.fromTemplateUrl('build/pages/model/hmsModal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function (modal) {
        $scope.modal = modal;
      });
      $scope.value = [{id:2,des:'从不'},
        {id:3,des:'4小时'},{id:4,des:'8小时'},{id:5,des:'12小时'},{id:5,des:'智能学习'}
      ];
      $scope.openModal = function () {
        if($scope.value.length!==0) {
          $scope.modal.show();
          setTimeout(function () {
            var ele = document.getElementsByClassName("hmsModal");
            if ($scope.value.length === 3) {
              ele[0].style.top = $scope.screenHeig - 156 + 'px';
            } else if ($scope.value.length === 4) {
              ele[0].style.top = $scope.screenHeig - 208 + 'px';
            } else if ($scope.value.length === 2) {
              ele[0].style.top = $scope.screenHeig - 104 + 'px';
            } else if ($scope.value.length === 1) {
              ele[0].style.top = $scope.screenHeig - 52 + 'px';
            } else if ($scope.value.length > 4) {
              ele[0].style.top= 68 + '%';
              ele[0].style.minHeight = 32 + '%';
            };
          }, 10)
        }
      };
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });
      $scope.choose = function (val) {
        $scope.modal.hide();
      };
      //自动翻盖设置
      $ionicModal.fromTemplateUrl('build/pages/model/hmsiot-setSelect.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function (modal) {
        $scope.setmodal = modal;
      });
      $scope.setopenModal = function () {
        $scope.listright=$scope.listleft[0].towdata;
        $scope.setmodal.show();
        setTimeout(function () {
          var ele = document.getElementsByClassName("hmsiot-setSelect");
          ele[0].style.top = 68 + '%';
          ele[0].style.minHeight = 61 + '%';
        }, 10)
      };
      $scope.$on('$destroy', function() {
        $scope.setmodal.remove();
      });
      $scope.setchoose = function () {
        $scope.toilteSetting.gaiganyin=$scope.gaiganyinTemp;
        $scope.toilteSetting.gaiganyinDistance=$scope.gaiganyinDistanceTemp;
        $scope.setmodal.hide();
      };
      //确定是否清除设备设置
      $scope.isCheckDeviceInfoSet = function () {
        hmsPopup.confirmNoTitle("确定要恢复默认设置吗?</br>恢复默认设置后当前设置会被清空",function () {
          console.log("你点击了确定")
        });
      };
      //进入各个设置的具体界面
      $scope.goSettingInfo = function (url) {
        $state.go(url);
      }
    }]);
