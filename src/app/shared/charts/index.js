import lineChartDirective from './line.directive';
import barChartDirective from './bar.directive';

export default angular
  .module('charts', [])
  .directive('lineChart', () => new lineChartDirective)
  .directive('barChart', () => new barChartDirective);
