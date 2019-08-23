test('dameCambio(1,1) debe devolver [] - un array Vacio', function(assert) {
    var result = dameCambio(1, 1); 
    var expected = [];
    assert.deepEqual(result, expected);
  }); // Usando deepEqual para los Arrays