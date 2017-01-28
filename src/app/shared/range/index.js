import rangeSelectorDirective from './range.directive';

export default angular
  .module('rangeSelector', [])
  .directive('rangeSelect', () => new rangeSelectorDirective);
