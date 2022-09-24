
          test(        20 )
          test(     '1:20' )
          test(       '10.20' )
          test(     '1:10.20' )
          test( '00:20:00.200' )
          test( '01:00:00.000' )
          test( '00:00:00.000' )

  function test( a ) {
         console.log( `${a}`.padStart( 13 ), HMS2Secs( a ) )
         }

function HMS2Secs( aStr ) {
     var n = (aStr = `${aStr}.` ).indexOf( '.' )
     var a =  aStr.substr(0, n), t = aStr.substr( n ).replace( /\./g, '' ); // console.log( a, t )
     var p =  a.split( /[:.]/ ), s = 0, m = 1;
  while (p.length > 0) { s += m * parseInt( p.pop(), 10); m *= 60; }
  return s  + '.' + t.padStart( 3, '0' ) ;
         }

