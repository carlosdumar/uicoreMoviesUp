export const Color = {
  BLACK: 'black',
  WHITE: 'white',
  YELLOW_600: 'yellow600',
  BROWN_600: 'brown600',
  GRAY_600: 'gray600',
  GRAY_300: 'gray300',
}

export type Color = typeof Color[keyof typeof Color]
