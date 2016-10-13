const test = require('ava')
const la = require('lazy-ass')
const streams = require('./even-numbers')

const {
  evenNumbers$,
  keyDown$,
  window
} = streams;

const noop = () => {}

const event = new window.KeyboardEvent('keydown', {
  bubbles: true, cancelable: true,
  key: "Q", char: "Q", shiftKey: true,
  keyCode: 34
});

test('checks 3 even numbers', t => {
  t.plan(3)

  return evenNumbers$
    .map(n => {
      t.true(n % 2 === 0)
    })
})

test('has 3 numbers', (t) => {
  const numbers = []
  const onNumber = x => numbers.push(x)

  evenNumbers$.subscribe(onNumber, noop, () => {
    t.deepEqual(numbers, [2, 4, 6])
  })
})

test('keyDown$ stream is properly created', (t) => {
  t.plan(2)

  keyDown$.subscribe((keyCode) => {
    console.log(keyCode);
    t.is(keyCode, 34)
  }, noop, () => {})

  window.dispatchEvent(event)
  window.dispatchEvent(event)
})
