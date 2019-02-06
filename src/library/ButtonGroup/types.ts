/* @flow */
import { MODE, SIZE, VARIANT } from './constants';

import {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

export type ButtonGroupProps = {
  'aria-label': string,
  checked?: number | Array<number>,
  children: React.ReactNode,
  defaultChecked?: number | Array<number>,
  disabled?: boolean,
  fullWidth?: boolean,
  mode?: keyof typeof MODE,
  onChange?: (event: SyntheticEvent<HTMLButtonElement>) => void,
  onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void,
  size?: keyof typeof SIZE,
  variant?: keyof typeof VARIANT
};

export type ButtonGroupState = {
  checked: Set<number>
};

export type ButtonGroupThemeFn = ComponentThemeFn<ButtonGroupTheme>;
export type ButtonGroupTheme = ComponentTheme<ButtonGroupThemeKeys>;
type ButtonGroupThemeKeys = {|
  ButtonGroupButton_backgroundColor_checkedDisabled: ThemeValue,
  ButtonGroupButton_border_disabled: ThemeValue,
  ButtonGroupButton_borderColor_active: ThemeValue,
  ButtonGroupButton_borderColor_hover: ThemeValue,
  ButtonGroupButton_borderStartColor: ThemeValue,
  ButtonGroupButton_borderStartColor_checked: ThemeValue,
  ButtonGroupButton_color_checkedDisabled: ThemeValue
|};