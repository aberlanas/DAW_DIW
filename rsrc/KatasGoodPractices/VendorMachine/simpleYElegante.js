var tiposDeMoneda  = [200, 100, 50, 20, 10, 5, 2, 1];
function dameCambio(precio, pagado) {
  var diferencia = pagado - precio;
  var cambio = [];

  tiposDeMoneda.forEach(function(moneda) {
    // keep adding the current coin until it's more than the difference
    while (diferencia >= moneda) {
      cambio.push(moneda);
      diferencia = diferencia - moneda;
    }
  });

  return cambio;
}



/* TESTS 


      test("dameCambio(12, 400) should return [200, 100, 50, 20, 10, 5, 2, 1]", function(assert) {
        var result = dameCambio(12, 400);
        var expected = [200, 100, 50, 20, 10, 5, 2, 1];
        assert.deepEqual(result, expected);
      });

*/