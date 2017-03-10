module = ($resource,BASE_ENDPOINT,$http)->

  Session = $resource "#{BASE_ENDPOINT}/auth", null,
    {
      register:
        method: 'POST'
        url: "#{BASE_ENDPOINT}/auth/sign_up"
      login:
        method: 'POST'
        url: "#{BASE_ENDPOINT}/auth/log_in"
    }


  Session.setSession =(data)->
    localStorage.setItem("access_token", data.access_token)
    localStorage.setItem("user_id", data.user_id)
    Session.setHeaders(data)

  Session.setHeaders =(data)->
    $http.defaults.headers.common.AccessToken = localStorage.getItem('access_token') || null
    $http.defaults.headers.common.UserId = localStorage.getItem('user_id') || null


  Session

angular.module('client').factory('Session', module)
