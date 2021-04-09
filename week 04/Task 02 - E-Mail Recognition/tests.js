QUnit.test("Recognise - 'user.name@example.com", function (assert) {
    const actual = isEmailAddr('user.name@example.com');
    const expected = true;
    assert.equal(actual, expected);
});

QUnit.test("Recognise - 'user.name.multiple@example.com", function (assert) {
    const actual = isEmailAddr('user.name.multiple@example.com');
    const expected = true;
    assert.equal(actual, expected);
});

QUnit.test("Recognise - 'user.name.multiple@example.com", function (assert) {
    const actual = isEmailAddr('user.name.multiple@example.com');
    const expected = true;
    assert.equal(actual, expected);
});

QUnit.test("Don't Recognise - 'userexample.com", function (assert) {
    const actual = isEmailAddr('userexample.com');
    const expected = false;
    assert.equal(actual, expected);
});

QUnit.test("Don't Recognise - 'user'", function (assert) {
    const actual = isEmailAddr('user');
    const expected = false;
    assert.equal(actual, expected);
});

QUnit.test("Don't Recognise - 'user.name'", function (assert) {
    const actual = isEmailAddr('user.name');
    const expected = false;
    assert.equal(actual, expected);
});

QUnit.test("Don't Recognise - 'user whitespace@example.com", function (assert) {
    const actual = isEmailAddr('user whitespace@example.com');
    const expected = false;
    assert.equal(actual, expected);
});

QUnit.test("Don't Recognise - '' (empty string)", function (assert) {
    const actual = isEmailAddr('');
    const expected = false;
    assert.equal(actual, expected);
});

QUnit.test("Don't Recognise - '.' (only one dot)", function (assert) {
    const actual = isEmailAddr('.');
    const expected = false;
    assert.equal(actual, expected);
});

QUnit.test("Don't Recognise - '..' (only dots)", function (assert) {
    const actual = isEmailAddr('..');
    const expected = false;
    assert.equal(actual, expected);
});

QUnit.test("Don't Recognise - '@' (only @)", function (assert) {
    const actual = isEmailAddr('@');
    const expected = false;
    assert.equal(actual, expected);
});

QUnit.test("Don't Recognise - '.@' (missing trailing dot)", function (assert) {
    const actual = isEmailAddr('.@');
    const expected = false;
    assert.equal(actual, expected);
});

QUnit.test("Don't Recognise - '@.' (missing leading dot)", function (assert) {
    const actual = isEmailAddr('@.');
    const expected = false;
    assert.equal(actual, expected);
});