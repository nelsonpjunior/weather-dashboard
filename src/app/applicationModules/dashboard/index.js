import { routerConfig } from './dashboard.route';
import { DashboardController } from './dashboard.controller';

export default angular
  .module('dashboard', [])
  .controller('DashboardController', DashboardController)
  .config(routerConfig);
