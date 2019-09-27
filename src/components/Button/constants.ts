const BUTTON_TYPE = [
    {
        'class': ''
    }
];
type btnType = 'button' | 'submit' | 'reset';

export interface Button{
    className?: string,
    size?: string,
    color?: string,
    data?: any,
    htmlType?: btnType,
    text?: string,
    ghost?: any,
    disabled?: any,
    buttonRef?: any,
    children: any,
    otherProps?: any[],
    onClickHandle?: any,
}

export interface ButtonLink extends Button{
    linkClass?: string,
    href?: string,
    target?: string,
    otherProps?: any[],
}