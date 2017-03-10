Ctrl = ->
  ctrl = this

  return
angular.module('client').component 'integrateModal',
  templateUrl: "/app/components/integration_modal/index.html"
  controller: Ctrl
  bindings:
    integration_type: "<"