import { JSX } from 'preact'

function RemoveButton(properties: JSX.HTMLAttributes<HTMLButtonElement>) {
  return <button {...properties}>Remove !</button>
}

export default RemoveButton
