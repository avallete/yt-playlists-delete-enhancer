import { Stylesheets } from 'userscripter/lib/stylesheets'

const STYLESHEETS = {} as const

// This trick uncovers type errors in STYLESHEETS
// while retaining the static knowledge of its properties
// (so we can still write e.g. STYLESHEETS.foo):
const style: Stylesheets = STYLESHEETS
// eslint-disable-next-line no-void
void style

export default STYLESHEETS
