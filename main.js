
const Rx = require('rxjs/Rx')

const array = [1, 2, 3, 4, 5, 6]

export const evenNumbers_ = Rx.Observable.fromArray(array)
  .filter(x => x % 2 === 0)
