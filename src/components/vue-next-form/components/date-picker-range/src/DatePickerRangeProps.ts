import type { Base } from '../../../types/base'

export interface DatePickerRangePropsInterface extends Base {
  type: 'date-picker-range'
  clearable?: boolean
  disabled?: boolean
  format?: string
  valueFormat?: string
  startPlaceholder?: string
  endPlaceholder?: string
}
