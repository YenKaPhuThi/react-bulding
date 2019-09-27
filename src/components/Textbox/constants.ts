export interface Textbox {
    className?: string,
    size?: string,
    color?: string,
    data?: any,
    name?: string,
    labelClass?: string,
    inputClass?: string,
    labelValue?: any,
    hasLabel?: any,
    hasPrefix?: any,
    hasSuffix?: any,
    hasActive?: any,
    placeholder?: string,
    tabIndex?: any; 
    hasIcon?: any,
    readonly?: any,
    disabled?: any,
    htmlType?: btnType,
    otherProps?: any[],
    validationMessage?: string,
    typeValidate?: validateType
    onChange?: any,
}

export interface TextboxPrefix extends Textbox{
    prefixValue?: any,
    prefixClass?: any,
}

export interface TextboxSuffix extends Textbox{
    suffixValue?: any,
    suffixClass?: any,
}

export interface TextboxIcon extends Textbox{
    iconClass?: any,
}

type btnType = 'text' | 'number' | 'password';

type validateType = 'required' | 'email' | 'number' | 'date'