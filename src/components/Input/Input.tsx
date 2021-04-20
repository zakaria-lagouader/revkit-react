import React from 'react'
import styles from "./Input.module.scss";

export interface InputProps {
    type?: "text" | "password" | "email",
    name?: string,
    id?: string,
    label?: string,
    placeholder?: string,
    value?: string,
    defaultValue?: string,
    errormsg?: string
    successmsg?: string,
    disabled?: boolean,
    ref?: React.Ref<HTMLInputElement>
}

function Input({
    type = "text",
    label,
    value,
    defaultValue = "",
    placeholder,
    errormsg,
    successmsg,
    disabled,
    ref,
    name,
    id
}: InputProps): JSX.Element {
    return (
        <div className={styles['form-item']}>
            <label className={styles['form-item-label']}>{label}</label>
            <div className={styles['form-item-input']}>
                <input 
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    disabled={disabled}
                    ref={ref}
                />
                <div className={styles['form-item-input-icon']}>A</div>
            </div>
            <div className={styles['form-item-msg']}>
                <div className={styles['form-item-msg-error']}>{errormsg}</div>
                <div className={styles['form-item-msg-success']}>{successmsg}</div>
            </div>
        </div>
    )
}

export default Input
