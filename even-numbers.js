const jsdom = require('jsdom')
const window = jsdom.jsdom().defaultView;

const Rx = require('rxjs/Rx')

const array = [1, 2, 3, 4, 5, 6]

const evenNumbers$ = Rx.Observable.from(array)
        .filter(x => x % 2 === 0)

const keyDown$ = Rx.Observable.fromEvent(window, 'keydown')
        .map(e => e.keyCode)

module.exports = {
  evenNumbers$: evenNumbers$,
  keyDown$: keyDown$,
  window: window
}
