angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, figServ) {

  $scope.figuras = [{
    figura : "circulo",
    parm1 : "radio",
    parm2 : "",
    use2 : false,
    comentario :"Para cacular el circulo necesitamos el radio",
    pi : Math.PI,
    area : function (a,b) {
      if (a > 0 ){ var radio = Math.round(this.pi * Math.pow(a, 2));}
      return radio;
    }
  },{
    figura : "triangulo",
    parm1 : "base",
    parm2 : "altura",
    use2 : true,
    comentario :"Para cacular el área del triangulo necesitamos la base y la altura",
    base : $scope.x ,
    altura : $scope.y,
    area : function (a,b) {
      if (a > 0 && b > 0) { var area = (a * b)/2;}
      return area;
    }
  },{
    figura : "cuadrado",
    parm1 : "lado",
    parm2 : "",
    use2 : false,
    comentario :"Para cacular el área del cuadrado necesitamos uno de sus lados",
    lado : $scope.x,
    area : function (a,b) {
      if (a > 0) { var area = Math.pow(a,2);}
      return area;
    }
  },{
    figura : "rectangulo",
    parm1 : "base",
    parm2 : "altura",
    use2 : true,
    comentario :"Para cacular el área del triangulo necesitamos la base y la altura",
    base : $scope.x ,
    altura : $scope.y,
    area : function (a,b) {
      if (a > 0 && b > 0) { var area = (a * b);}
      return area;
    }
  }];
  
  function index(i) {
    figServ.index = i;
    console.log(i);
  }
  figServ.data = $scope.figuras;

})

.controller('AccountCtrl', function($scope,figServ) {
  
  $scope.enviar = function () {
    
      console.warn(figServ.data[figServ.index]);
  }
  $scope.settings = {
    enableFriends: true
  };
});
