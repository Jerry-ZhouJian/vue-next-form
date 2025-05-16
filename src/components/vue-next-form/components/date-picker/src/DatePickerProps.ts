import type { Base } from '../../../types/base'

export interface DatePickerPropsInterface extends Base {
  type: 'date-picker'
  clearable?: boolean
  disabled?: boolean
  format?: string
  valueFormat?: string
}
