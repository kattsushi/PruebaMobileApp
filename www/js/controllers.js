angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.x = 0;
  $scope.y = 0;

  $scope.figuras = [{
    figura : "circulo",
    comentario :"Para cacular el circulo necesitamos el radio",
    pi : Math.PI,
    area : function (a,b) {
      if (a > 0 ){ var radio = Math.round(this.pi * Math.pow(a, 2));}
      return radio;
    }
  },{
    figura : "triangulo",
    comentario :"Para cacular el área del triangulo necesitamos la base y la altura",
    base : $scope.x ,
    altura : $scope.y,
    area : function (a,b) {
      if (a > 0 && b > 0) { var area = (a * b)/2;}
      return area;
    }
  },{
    figura : "cuadrado",
    comentario :"Para cacular el área del cuadrado necesitamos uno de sus lados",
    lado : $scope.x,
    area : function (a,b) {
      if (a > 0) { var area = Math.pow(a,2);}
      return area;
    }
  },{
    figura : "rectangulo",
    comentario :"Para cacular el área del triangulo necesitamos la base y la altura",
    base : $scope.x ,
    altura : $scope.y,
    area : function (a,b) {
      if (a > 0 && b > 0) { var area = (a * b);}
      return area;
    }
  },];

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
