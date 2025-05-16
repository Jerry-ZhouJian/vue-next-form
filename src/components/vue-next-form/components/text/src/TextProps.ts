import type { Base } from '../../../types/base'

export interface TextProps extends Base {
  type: 'text'
  formatter?: (value: string | number) => string
  fontSize?: number
  color?: string
}
