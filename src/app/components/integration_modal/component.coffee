Ctrl = ->
  ctrl = this

  ctrl.$onInit = ->
    @.creds =
      email: ''
      password: ''
      type: ''

  ctrl.onSubmit =(form)->
    form.$submitted = true
    if form.$valid
      @.creds.type = @.integrationType
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
