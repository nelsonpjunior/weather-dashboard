export function routerConfig ($stateProvider) {
  'ngInject';

  $stateProvider
   .state('dashboard', {
     url: '/dashboard',
     params: {
       company: null
     },
     views: {
       'container': {
         templateUrl: 'app/applicationModules/dashboard/dashboard.html',
         controller: 'DashboardController',
         controllerAs: '$ctrl'
       }
     }
   });
}
