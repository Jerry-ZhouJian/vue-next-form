import type { Base } from '../../../types/base'

export interface InputTextProps extends Base {
  type: 'input-text'
  placeholder?: string
  clearable?: boolean
  disabled?: boolean
  size?: 'large' | 'default' | 'small'
}
