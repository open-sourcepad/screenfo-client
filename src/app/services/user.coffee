module = ($resource,BASE_ENDPOINT,$http)->

  User = $resource "#{BASE_ENDPOINT}/third_party_integration", null,
    {
      integrate:
        method: 'POST'
    }

  User

angular.module('client').factory('User', module)
