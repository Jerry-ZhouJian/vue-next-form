import type { Base } from '../../../types/base'

export interface optionsProps {
  label: string
  value: string | boolean | number
}

export interface RadioGroupProps extends Base {
  type: 'radio-group'
  options?: optionsProps[]
  showTextValue?: boolean
  getData?: () => optionsProps[]
}
