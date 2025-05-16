import type { Base } from '../../../types/base'

export type optionsValue = string | number

export interface optionsProp {
  label: string
  value: optionsValue
}

export interface CheckboxGroupProps extends Base {
  type: 'checkbox-group'
  getData?: () => optionsProp[]
  options?: optionsProp[]
}
