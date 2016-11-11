var App = ( function () {
  var exports = {}

  exports.start = function() {

    console.log( "Main::start" )

    Utils.getGreetings( function( data ) {
      console.log( data )
    } )

  }

  exports.buildGreeting = function() {
    return "hello, world!"
  }

  return exports
} )()
