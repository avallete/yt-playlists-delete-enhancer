import { Operation, operation } from 'userscripter/lib/operations'
import { ALWAYS, DOMCONTENTLOADED } from 'userscripter/lib/environment'
import { SELECTOR_PAGE_UTILITIES } from '~src/site'

const OPERATIONS: ReadonlyArray<Operation<any>> = [
  operation({
    description: 'change the background color to red',
    condition: ALWAYS,
    dependencies: { content: SELECTOR_PAGE_UTILITIES },
    action: (element) => {
      // eslint-disable-next-line no-param-reassign
      element.content.style.backgroundColor = 'rgb(255, 0, 0)'
    },
    deferUntil: DOMCONTENTLOADED,
  }),
]

export default OPERATIONS
