angular.module('client')
  # .constant 'BASE_ENDPOINT', "http://localhost:3000"
  .constant 'BASE_ENDPOINT', "http://screenfo-webapp.herokuapp.com"

@DATE_FORMAT = "MMM DD, YYYY hh:mm:ss"
@DEFAULT_PER_PAGE = 20
@YEAR_FILTER_RANGE = 5

@MESSAGES =
  UPDATE_SUCCESS: "Updated successfully"
  UPDATE_ERROR: "Update error"
  CREATE_SUCCESS: "Created successfully"
  DELETE_SUCCESS: "Deleted successfully"
  INTERNAL_SERVER_ERROR: "Some crazy weird stuff happened. Fix this, we will."
  BAD_REQUEST: "Error 400, bad request"
  FORM_ERROR: "Marked fields are blank or have invalid value"
  INVALID_CREDS: "Invalid username or password"
  NO_DATA: "No more data to get"
  INVALID_FILE_SIZE: "File should be less than 10 mb"
  TIMEOUT: "Connection has timed out"
  LOGIN_SUCCESS: "Login success"
  LOGOUT_SUCCESS: "Logout success"
  REGISTER_SUCCESS: "Registered successfully"
  REGISTER_FAILED: "Register failed"


@ACTIVATE_WARNING =
  title: 'Are you sure?'
  type: 'warning'
  showCancelButton: true
  confirmButtonColor: '#4fc95a'
  confirmButtonText: 'Yes, active this user!'
  closeOnCancel: true
  closeOnConfirm: true
  animation: true

@DEACTIVATE_WARNING =
  title: 'Are you sure?'
  type: 'warning'
  showCancelButton: true
  confirmButtonColor: '#ff604f'
  confirmButtonText: 'Yes, deactive this user!'
  closeOnCancel: true
  closeOnConfirm: true
  animation: true

@DELETE_WARNING =
  title: 'Are you sure?'
  type: 'warning'
  showCancelButton: true
  confirmButtonColor: '#ff604f'
  confirmButtonText: 'Yes, delete this record!'
  closeOnCancel: true
  closeOnConfirm: true
  animation: true

@UPDATE_WARNING =
  title: 'Are you sure?'
  type: 'warning'
  showCancelButton: true
  confirmButtonColor: '#ff604f'
  confirmButtonText: 'Yes, update record!'
  closeOnCancel: true
  closeOnConfirm: true
  animation: true

