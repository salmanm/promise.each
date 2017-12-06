import {test} from 'babel-tap';

import each from '../src'

test('my test', (t) => {
  const actualValues = []
  const expectedValues = [1, '2', 3, '4']

  each([
    1,
    '2',
    Promise.resolve(3),
    () => '4'
  ], (item, index) => {
    actualValues.push(item)

    return new Promise((resolve) => setTimeout(resolve, Math.round((Math.random() * 100) + 50))) // Resolve after a short delay
  }).then(() => {
    t.strictDeepEquals(actualValues, expectedValues)

    t.end()
  })

});
