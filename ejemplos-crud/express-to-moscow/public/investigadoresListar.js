$.getJSON( "http://localhost:3000/investigadores", function( data ) {
  var items = [];
    $.each( data, function( key, val ) {
	console.log(key);
    items.push( "<li id='" + key + "' class='list-group-item'>" + val.nombre + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "list-group",
    html: items.join( "" )
  }).appendTo( "#divLista" );
});
