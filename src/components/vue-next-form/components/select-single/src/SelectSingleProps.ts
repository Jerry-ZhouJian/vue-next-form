import type { Base } from '../../../types/base'

export interface optionsInterface {
  label: string
  value: string | number
}

export interface SelectSinglePropsInterface extends Base {
  type: 'select-single'
  placeholder?: string
  url?: string
  urlParams?: Object
  options?: optionsInterface[]
  extraOptions?: optionsInterface[]
  extraPoistion?: 'top' | 'bottom'
  disabledOptions?: string[] | number[]
  getDate?: () => optionsInterface[]
  showTextValue?: boolean
  footerFunctionName?: string
}
