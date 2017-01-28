export default class barChartDirective {

  constructor() {
    this.restrict = 'E';
    this.scope = {
      dataset: '='
    };
    this.controller = BarChartController;
    this.controllerAs = '$ctrl';
    this.bindToController = true;
    this.template = '<nvd3 options="$ctrl.config" data="$ctrl.data"></nvd3>';
  }

}

// Directive's controller
class BarChartController {
  constructor() {

    this.data = [
      {
          values: this.dataset,
          key: 'Sine Wave',
          color: '#ff7f0e',
          strokeWidth: 2
      }
    ];


    this.config = {
      chart: {
        type: 'discreteBarChart',
        height: 320,
        margin : {
            top: 20,
            right: 20,
            bottom: 45,
            left: 55
        },
        clipEdge: true,
        duration: 500,
        stacked: false,
        controls: false,
        reduceXTicks: false,
        color: () => '#000',
        xAxis: {
            axisLabel: 'Days',
            showMaxMin: false,
            staggerLabels: false
        },
        yAxis: {
            axisLabel: 'Amount  l/m2',
            axisLabelDistance: -10,
            tickFormat: (i) => i
        }
      }
    }

  }
}
