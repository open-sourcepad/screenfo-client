angular.module('client').run [
  '$rootScope','$location','$state','$window','$http','Session','Auth', ($rootScope,$location,$state,$window,$http,Session,Auth) ->

    $rootScope.$on '$stateChangeStart', (event, toState, toParams, fromState, fromParams) ->

      if toState.unauthenticated
        if !!localStorage.getItem('access_token')
          event.preventDefault()
          console.log 'DASHBOARD', $state.go('account.settings')
        else
          console.log 'no auth needed'
      else
        if !!localStorage.getItem('access_token')
          console.log 'loaded AuthToken'
        else
          event.preventDefault()
          console.log 'redirected to login'
          $state.go('auth.login')

]
