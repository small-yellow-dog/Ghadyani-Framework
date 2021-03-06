/*
	# SAMPLE TESTS
	Use these to display pass and failure messages
	so you can better-style the UI

	Go to `/tests/TapOutput` to view them.
*/

import test from 'tape-catch'

test('250 Millisecond Passing Test', t => {
	t.ok(true, "This happens immediately")

	setTimeout(
		() => {
			t.ok(true, "This happened after 250 milliseconds")
			t.end()
		},
		250
	)
})

test('Purposefully Failed Test 1', t => {
	t.equal(1, 2, "This test should fail")
	t.notEqual(2, 3, "This test should pass")

	t.end()
})

test('Purposefully Failed Test 2', t => {
	/* eslint no-undef: 0 */
	blah
	t.end()
})

test('Purposefully Failed Test 3', () => {
	throw 'This should error!'
})

test('Purposefully Failed Test 4', t => {
	t.notok(true, "This should error")
	t.notok(true, "This should also error")
	t.notok(true, "Even this should error")
	t.end()
})

test('Multi-Second Passing Test', t => {
	t.ok(true, "This happens immediately")

	setTimeout(
		() => {
			t.ok(true, "This happened after 4 seconds")
			t.end()
		},
		4000
	)
})

test('Passing Test', t => {
	t.ok(true, "This should pass")
	t.ok(true, "This should also pass")

	t.end()
})
