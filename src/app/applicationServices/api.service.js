export class ApiService {

  constructor($http) {
    'ngInject';

    this.getWeaterData = () => $http.get('http://private-4945e-weather34.apiary-proxy.com/weather34/rain');

  }

}
