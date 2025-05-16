import type { Base } from '../../../types/base'

export interface InputNumberPropsInterface extends Base {
  type: 'input-number'
  max?: number
  maxRel?: string
  min?: number
  step?: number
  precision?: number
}
