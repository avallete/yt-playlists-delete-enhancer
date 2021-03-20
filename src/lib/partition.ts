/**
 * Creates an array of elements split into two groups, the first of which
 * contains elements `predicate` returns truthy for, the second of which
 * contains elements `predicate` returns falsey for. The predicate is
 * invoked with one argument: (value).
 */
export default function partition<T>(collection: T[], predicate: (item: T) => boolean): Array<Array<T>> {
  const result: Array<Array<T>> = [[], []]
  for (const item of collection) {
    result[predicate(item) ? 0 : 1].push(item)
  }
  return result
}
