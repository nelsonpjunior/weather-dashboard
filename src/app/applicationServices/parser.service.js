export class ParserService {

  constructor() {
    'ngInject';
  }

  calcChanceOfRain(pressure, temperature, amount) {
    let score = Math.log(amount + 1) * Math.log(pressure - 929) * Math.log(temperature - 9),
    results = {};

    results.mean = Math.min(Math.max(score, 0), 100),
    results.upper_bound = Math.min(1.5 * results.mean, 100),
    results.lower_bound = Math.max(0.5 * results.mean, 0);

    return results;
  }

  amountOfRain(data) {
    return data.reduce((o, i) => {
      o.push({
        x: i.day,
        y: i.amount
      })
      return o;
    }, []);
  }

  chanceOfRain(data, pressure, temperature) {
    let parsed = [
      {
          values: this.getLayer(data, 'lower_bound', pressure, temperature),
          key: 'Lower bound',
          color: '#c0392b',
          strokeWidth: 2
      },
      {
          values: this.getLayer(data, 'mean', pressure, temperature),
          key: 'Mean',
          color: '#333',
          strokeWidth: 2
      },
      {
          values: this.getLayer(data, 'upper_bound', pressure, temperature),
          key: 'Upper bound',
          color: '#16a085',
          strokeWidth: 2
      }
    ];
    return parsed;
  }

  getLayer(data, layer, pressure, temperature) {
    return data.reduce((obj, item) => {
      obj.push({
        x: item.day,
        y: this.calcChanceOfRain(pressure, temperature, item.amount)[layer]
      })
      return obj;
    }, [])
  }

}
