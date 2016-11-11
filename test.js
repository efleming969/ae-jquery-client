var assert = chai.assert;

describe( "app", function() {

  it( "santiy", function() {
    var text = App.buildGreeting()

    assert.equal( text, "hello, world!" )
  } )

} )

