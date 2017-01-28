export default class rangeSelectorDirective {

  constructor() {
    this.restrict = 'E';
    this.scope = {
      ngModel: '=',
      metric: '=',
      range: '=',
      ngChange: '&'
    };

    this.controller = rangeSelectorController;
    this.controllerAs = '$ctrl';
    this.bindToController = true;
    this.templateUrl = 'app/shared/range/range.html';
  }

}

// Directive's controller
class rangeSelectorController {
  constructor() {

  }
}
