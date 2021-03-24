/**
 * Search into two lists of objects needles and haystack using hashmap
 * If all elements from needles has been found into haystack it return the hashmap
 * If some elements are missing into haystack, we return false.
 *
 * The hashmap keys are generated using needleGetter and haystackGetter
 * The needles must not contain duplicates
 *
 * @param needles unique list of element to search
 * @param haystack list of elements to search in
 * @param needleKeyGetter get the value to use as key from needles
 * @param haystackKeyGetter get the value to match with needle key
 */
export default function listMapSearch<T, U, K extends keyof any>(
  needles: Array<T>,
  haystack: Array<U>,
  needleKeyGetter: (item: T) => K,
  haystackKeyGetter: (item: U) => K
): Record<K, U> | false {
  const searchMap: Record<K, U | undefined> = {} as Record<K, U>
  // We cannot found all our needles into our haystack
  if (haystack.length < needles.length) {
    return false
  }
  // Fill our searchMap keys with needles to search
  for (const needle of needles) {
    searchMap[needleKeyGetter(needle)] = undefined
  }
  // matches elements from needles with haystack
  let found = 0
  for (const item of haystack) {
    const itemKey = haystackKeyGetter(item)
    // if key exist in the searchMap and value is still undefined
    if (Object.prototype.hasOwnProperty.call(searchMap, itemKey) === true && searchMap[itemKey] === undefined) {
      searchMap[itemKey] = item
      found += 1
      // early break if all elements have already been found
      if (found === needles.length) {
        return searchMap as Record<K, U>
      }
    }
  }
  return found === needles.length ? (searchMap as Record<K, U>) : false
}
