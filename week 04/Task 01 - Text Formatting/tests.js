QUnit.test("fix - 'terje'", function (assert) {
    const actual = fixText('terje');
    const expected = 'Terje';
    assert.equal(actual, expected);
});

QUnit.test("fix - 'terje '", function (assert) {
    const actual = fixText('terje ');
    const expected = 'Terje';
    assert.equal(actual, expected);
});

QUnit.test("fix - ' terje'", function (assert) {
    const actual = fixText(' terje');
    const expected = 'Terje';
    assert.equal(actual, expected);
});

QUnit.test("fix - ' terje '", function (assert) {
    const actual = fixText(' terje ');
    const expected = 'Terje';
    assert.equal(actual, expected);
});

QUnit.test("fix - ' tErJe '", function (assert) {
    const actual = fixText(' tErJe ');
    const expected = 'Terje';
    assert.equal(actual, expected);
});

QUnit.test("fix - 'TERJE '", function (assert) {
    const actual = fixText(' TERJE ');
    const expected = 'Terje';
    assert.equal(actual, expected);
});