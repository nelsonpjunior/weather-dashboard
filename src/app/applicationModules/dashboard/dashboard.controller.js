export class DashboardController {
  constructor (ApiService, ParserService, $timeout) {
    'ngInject';

    this.API = ApiService;
    this.parser  = ParserService;
    this.data = [];
    this.isLoading = false;
    this.loadingMessage = 'Loading data';

    this.pressure = {
      value: 970,
      metric: 'hPa',
      range: {
        min: 970,
        max: 1030
      }
    }

    this.temperature = {
      value: 15,
      metric: '°C',
      range: {
        min: 10,
        max: 35
      }
    }

    this.updateCharts = () => {
      $timeout(() => {
        this.render(this.data)
      })
    }

    this.init();
  }

  init() {
    this.isLoading = true;
    this.API.getWeaterData().success((res) => {
      this.data = res[0].days;
      this.render();
      this.isLoading = false;
    }).error(() => {
      this.loadingMessage = 'Error on load data';
    });
  }

  render() {
    this.amountByDay = this.parser.amountOfRain(this.data);
    this.chanceByDay = this.parser.chanceOfRain(this.data, this.pressure.value, this.temperature.value);
  }

}
