// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface KVO<T = any> {
  [key: string]: T
}

export type Position = 'top' | 'right' | 'bottom' | 'left'
