import type { Base } from '../../../types/base'

export interface CheckboxProps extends Base {
  type: 'checkbox'
  label: string
  trueValue: string | number
  falseValue: string | number
}
