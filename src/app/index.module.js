import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import './applicationModules/dashboard';
import './applicationServices';
import './shared';

angular
  .module('application', [
    'ngSanitize',
    'ngAria',
    'ui.router',
    'nvd3',
    'applicationServices',
    'shared',
    'dashboard'
  ])
  .config(config)
  .config(routerConfig)
  .run(runBlock);
