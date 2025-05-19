
import type { InputNumberPropsInterface, InputTextProps, SelectSinglePropsInterface, SelectSingleGroupPropsInterface, DatePickerPropsInterface, DatePickerRangePropsInterface, TextProps, RadioGroupProps, CheckboxProps, CheckboxGroupProps } from '../components'


export type FormItemProps = InputTextProps | InputNumberPropsInterface | SelectSinglePropsInterface | SelectSingleGroupPropsInterface | DatePickerPropsInterface | DatePickerRangePropsInterface | TextProps | RadioGroupProps | CheckboxProps | CheckboxGroupProps


export interface FormProps {
  labelPosition?: 'left' | 'right' | 'top'
  inline?: boolean
  disabled?: boolean
  formField: FormItemProps[]
}