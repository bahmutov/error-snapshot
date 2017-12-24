exports['error-snapshot snapshots error 1'] = {
  "name": "Error",
  "message": "A test error"
}

exports['error-snapshot snapshots extra properties by name 1'] = {
  "name": "Error",
  "message": "A test error",
  "foo": 42,
  "bar": "some bar prop"
}

exports['error-snapshot handles custom errors 1'] = {
  "name": "MyError",
  "message": "A test error",
  "someProp": true
}
