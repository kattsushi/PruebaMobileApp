angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, figServ, $resource) {

  $scope.figuras = [{
    id : 1,
    figura : "circulo",
    parm1 : "radio",
    parm2 : "",
    use2 : false,
    comentario :"Para cacular el circulo necesitamos el radio",
    pi : Math.PI,
    radio : 0,
    area : 0,
    calArea : function (a,b) {
      if (a > 0 ){ 
        this.radio = a ;
        this.area = Math.round(this.pi * Math.pow(a, 2));}
         return this.area;
    }
  },{
    id : 2,
    figura : "triangulo",
    parm1 : "base",
    parm2 : "altura",
    use2 : true,
    comentario :"Para cacular el área del triangulo necesitamos la base y la altura",
    base : $scope.x ,
    altura : $scope.y,
    area : 0,
    calArea : function (a,b) {
        this.area = ( a * b )/2;
      if (isNaN(this.area)) {
        return 0;
      }else {
        this.base = a;
        this.altura = b;
        return this.area;
      }
    } 
  },{
    id : 3,
    figura : "cuadrado",
    parm1 : "lado",
    parm2 : "",
    use2 : false,
    comentario :"Para cacular el área del cuadrado necesitamos uno de sus lados",
    lado : 0,
    area : 0,
    calArea : function (a,b) {
      if (a > 0) {
          this.lado = a; 
          this.area = Math.pow(a,2);
          }
      return this.area;
    }
  },{
    id : 4,
    figura : "rectangulo",
    parm1 : "base",
    parm2 : "altura",
    use2 : true,
    comentario :"Para cacular el área del triangulo necesitamos la base y la altura",
    base : 0,
    altura : 0,
    area : 0,
    calArea : function (a,b) { 
         this.area = ( a * b );
      if (isNaN(this.area)) {
        return 0;
      }else {
        this.base = a;
        this.altura = b;
        return this.area;
      }
    }  
  }];
  
  $scope.enviar = function (id) {
     console.log(id);
      $scope.figuras[id];
      console.log($scope.figuras[id - 1]);
  }
  

});
