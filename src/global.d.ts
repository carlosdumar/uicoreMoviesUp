/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.css' {
  const css: any
  export default css
}

interface Window {
  next: any
  __NEXT_DATA__: any
}
