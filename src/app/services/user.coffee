module = ($resource,BASE_ENDPOINT,$http)->

  User = $resource "#{BASE_ENDPOINT}/third_party_integration", null,
    {
      integrate:
        method: 'POST'
      send:
        method: 'POST'
        url: "#{BASE_ENDPOINT}/messages"
    }

  User

angular.module('client').factory('User', module)
