/* eslint-disable @typescript-eslint/no-explicit-any */
import { Spacing } from '../core/Spacing'
import { Color } from '../core/Color'
import { KVO } from '../core/Types'
import { FlexProps } from './flex/FlexProps'
import { BorderProps } from './border/BorderProps'
import { FontSize, FontProps } from './font/FontProps'
import { PaddingProps } from './padding/PaddingProps'
import { MarginProps } from './margin/MarginProps'
import css from './StyledProps.css'

/**
 * Styled Props: Define reusable styles across components using props.
 */
export interface StyledProps {
  /** Component width */
  width?: string | number

  /** Component height*/
  height?: string | number

  /** Component margin. Usually used for containers */
  margin?: Spacing | MarginProps

  /** Component padding. Usually used for containers */
  padding?: Spacing | PaddingProps

  /** Component font size */
  font?: FontSize | FontProps

  /** Render component as inline block */
  inline?: boolean

  /** Text color */
  color?: Color

  /** Background color */
  background?: Color

  /**
   * Component border. Support boolean (default 1px grey solid) or BorderProps
   *  border={true}
   *  border={{ top: true, color: Color.GREEN_ACHS }}
   */
  border?: boolean | BorderProps

  /** Component flex layout */
  flex?: boolean | FlexProps

  /** Optional class name */
  className?: string
}

const PropsList = [
  'width',
  'height',
  'margin',
  'padding',
  'font',
  'inline',
  'color',
  'background',
  'border',
  'flex',
  'style',
  'spacing',
]

function isObject(value: any): boolean {
  return value && typeof value === 'object' && value.constructor === Object
}

export const styledClasses = (props: StyledProps, ...classes: string[]): string => {
  const classNames = new Set(classes)

  classNames.add(css.main)
  classNames.add(props.className || '')

  Object.keys(props).forEach(name => {
    if (!PropsList.includes(name)) {
      return
    }
    // Add the main css class of the prop. Ex: props.flex => css.flex
    classNames.add(css[name])

    // Add the actual value class of the props. Ex: props.border="top" => css.['border-top']
    const value = (props as KVO)[name]

    if (Array.isArray(value)) {
      // Prop is passed as array, like `border`. Ex: border={['top', 'bottom']}
      value.forEach(val => classNames.add(css[`${name}-${val}`]))
    } else if (isObject(value)) {
      // Prop is passed as object, like `flex`
      // flex={{ inline: true, align: 'center-center', distribution: 'space-between' }}
      Object.entries(value).forEach(([prop, val]) => {
        classNames.add(css[`${name}-${prop}`]) // 'flex-align'
        classNames.add(css[`${name}-${prop}-${val}`]) // 'flex-align-center-center'
      })
    } else {
      classNames.add(css[`${name}-${value}`])
    }
  })

  return Array.from(classNames)
    .filter(e => !!e)
    .join(' ')
}

function assignStyleProp(
  props: KVO,
  style: KVO | null | undefined
): KVO | null | undefined {
  const _style: KVO = {}

  if (props.width) {
    _style['width'] = props.width
  }
  if (props.height) {
    _style.height = props.height
  }

  return _style.width || _style.height ? Object.assign(style || {}, _style) : style
}

/** Return all props that are not styled props */
export function omitStyledProps(props: KVO, ...ignoredProps: string[]): KVO {
  return Object.keys(props)
    .filter(
      key =>
        props[key] !== undefined &&
        !PropsList.includes(key) &&
        !ignoredProps.includes(key)
    )
    .reduce(
      (obj: KVO, key) => {
        obj[key] = props[key]
        return obj
      },
      {
        style: assignStyleProp(props, props.style),
      }
    )
}
