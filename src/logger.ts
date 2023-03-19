export default function debugLog(...arguments_: any[]) {
  // @ts-ignore
  if (window.DEBUG === true) {
    console.log(arguments_)
  }
}
