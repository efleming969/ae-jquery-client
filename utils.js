var Utils = ( function () {
  var exports = {}

  exports.getGreetings = function( callback ) {
    $.getJSON( "/api/greetings", callback )
  }

  return exports
} )()
