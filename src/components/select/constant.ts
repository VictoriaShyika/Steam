export interface PROPS_TYPE {
  title?: string;
  onChange?: any;
  options?: any;
  placeholder?: string;
  name?: string;
  value?: any;
  error?: boolean;
  errorMessage?: string;
  dynamic?: boolean;
  noOptionsMessage?: string;
  onInputChange?: any;
  defaultValue?: any;
  noAlertContainer?: boolean;
  components?: any;
  className?: string;
  getOptionLabel?: any;
}

export interface OPTION_ITEM_DATA {
  value: string;
  label: string;
}
