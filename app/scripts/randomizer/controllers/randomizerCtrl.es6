angular.module('randomizer')
  .controller('RandomizerCtrl', ['$scope', 'CompositionService', function($scope, CompositionService) {
    var ctrl = this;

    this.buns = ['gray', 'ciabatta'];
    this.toppings = ['cheese', 'ham', 'salad'];
    this.condiments = ['nuts', 'mayonnaise', 'ketchup'];

    this.composition = {};

    this.randomize = function() {
      this.composition = {
        bun: getRandomValue(this.buns),
        topping: getRandomValue(this.toppings),
        condiment: getRandomValue(this.condiments)
      };

      CompositionService.setComposition(this.composition);
    };

    $scope.$watch(
      function() {
        return CompositionService.getComposition()
      },
      function(newVal) {
        ctrl.composition = newVal;
      }
    );

    function getRandomValue(values){
      var min = 0;
      var max = values.length -1;
      var random = Math.floor(Math.random() * (max - min + 1)) + min;

      return values[random];
    }
  }]);
