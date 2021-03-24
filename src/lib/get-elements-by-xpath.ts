// Query DOM Xpath and return an array of Node
// Usage is similar to $x in console
export default function getElementsByXPath(xpath: string, parent?: Element): Node[] {
  const results = []
  const query = document.evaluate(xpath, parent || document, undefined, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE)
  const length = query.snapshotLength
  for (let index = 0; index < length; index += 1) {
    results.push(query.snapshotItem(index))
  }
  // force cast since we keep into snapshotLength limit, no item should be null
  return results as Node[]
}
