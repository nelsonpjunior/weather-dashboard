export default class lineChartDirective {

  constructor() {
    this.restrict = 'E';
    this.scope = {
      dataset: '='
    };
    this.controller = LineChartController;
    this.controllerAs = '$ctrl';
    this.bindToController = true;
    this.template = '<nvd3 options="$ctrl.config" data="$ctrl.dataset"></nvd3>';
  }

}

// Directive's controller
class LineChartController {
  constructor() {

    this.config = {
      chart: {
        type: "lineChart",
        height: 320,
        margin: {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        useVoronoi: false,
        clipEdge: true,
        duration: 100,
        useInteractiveGuideline: true,
        xAxis: {
          axisLabel: "Days",
          showMaxMin: false
        },
        yAxis: {
          showMaxMin: false,
          axisLabelDistance: -15,
          axisLabel: "Chance of rain (%)",
          tickFormat: (i) => parseFloat(i.toFixed(2))
        }
      }
    }

  }
}
