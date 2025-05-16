export interface Base {
  itemLabel?: string
  placeholder?: string
  size?: 'large' | 'default' | 'small'
  model: string
  defaultValue: any
  rule?: (rule: any, value: any, callback: any) => void
  ruleTrigger?: 'blur' | 'change'
  reset?: boolean
  validate?: boolean
  disabled?: boolean
}
