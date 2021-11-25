export const Color = {
  BLACK: 'black',
}

export type Color = typeof Color[keyof typeof Color]
