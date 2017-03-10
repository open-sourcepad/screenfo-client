Ctrl = ->
  ctrl = this

  ctrl.$onInit = ->
    @.creds =
      username: ''
      password: ''
      third_party: ''

  ctrl.onSubmit =(form)->
    form.$submitted = true
    if form.$valid
      @.creds.third_party = @.integrationType
      @.submit({obj: @.creds})

  return
angular.module('client').component 'integrateModal',
  templateUrl: "app/components/integration_modal/index.html"
  controller: Ctrl
  bindings:
    integrationType: "="
    show: "="
    toggle: "&"
    submit: "&"
