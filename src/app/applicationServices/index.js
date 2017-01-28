import { ApiService } from './api.service';
import { ParserService } from './parser.service';

export default angular
  .module('applicationServices', [])
  .service('ApiService', ApiService)
  .service('ParserService', ParserService);
