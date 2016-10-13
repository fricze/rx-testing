const Rx = require('rxjs/Rx')

const evenNumbers_ = require('./even-numbers')

const delayedNumbers_ = evenNumbers_
        .delay(x => Rx.Observable.timer(x * 500))
        .timeInterval()
module.exports = delayedNumbers_
