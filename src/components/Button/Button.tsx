import React from 'react'
import classNames from 'classnames'
import styles from "./Button.module.scss"

export interface ButtonProps {
    variant?: "primary" | "secondary" | "outlined",
    size?: "sm" | "md" | "lg",
    disabled?: boolean,
    children?: React.ReactNode
}

function Button (props: ButtonProps): JSX.Element  {
    const { children, variant = "primary", size = "md", disabled } = props;
    return (
        <button 
            className={classNames(styles.button, styles[variant], styles[size], {[styles.disabled]: disabled})} 
            disabled={disabled}
        >{children}</button>
    )
}

export default Button
