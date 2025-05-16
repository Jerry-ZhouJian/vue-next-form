import type { Base } from '../../../types/base'

export interface optionsInterface {
  label: string
  value: string | number
}

export interface SelectSingleGroupPropsInterface extends Base {
  type: 'select-single-group'
  url?: string
  urlParams?: Object
  options?: optionsInterface[]
  // 额外的选项
  extraOptions?: optionsInterface[]
  extraPoistion?: 'top' | 'bottom'
  showTextValue?: boolean
  disabledOptions?: string[] | number[]
  clearable?: Boolean
  filterable?: boolean
  change?: (value: any, formValue: any) => {}
  getData?: () => optionsInterface[]
}
