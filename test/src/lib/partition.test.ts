import test from 'ava'
import partition from '~src/lib/partition'

test('partition: should return two array', (t) => {
  t.deepEqual(
    partition([], () => true),
    [[], []],
  )
})
test('partition: should put values with truthy predicate to first array', (t) => {
  t.deepEqual(
    partition([1, 2, 3], () => true),
    [[1, 2, 3], []],
  )
})
test('partition: should put values with falsy predicate to second array', (t) => {
  t.deepEqual(
    partition([1, 2, 3], () => false),
    [[], [1, 2, 3]],
  )
})
test('partition: should properly split array in two according to predicate', (t) => {
  t.deepEqual(
    partition([1, 2, 3, 4, 5, 6], (index) => index > 3),
    [
      [4, 5, 6],
      [1, 2, 3],
    ],
  )
})
