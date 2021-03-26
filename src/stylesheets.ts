import { ALWAYS } from 'userscripter/lib/environment'
import { Stylesheets, stylesheet } from 'userscripter/lib/stylesheets'
import preactMaterialStyles from '~src/styles/preact-material.scss'

const STYLESHEETS = {
  preactMaterial: stylesheet({
    condition: ALWAYS,
    css: preactMaterialStyles,
  }),
} as const

// This trick uncovers type errors in STYLESHEETS
// while retaining the static knowledge of its properties
// (so we can still write e.g. STYLESHEETS.foo):
const style: Stylesheets = STYLESHEETS
// eslint-disable-next-line no-void
void style

export default STYLESHEETS
