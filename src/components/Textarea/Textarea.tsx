import React from 'react'
import styles from "./Textarea.module.scss";

export interface TextareaProps {
    name?: string,
    id?: string,
    label?: string,
    placeholder?: string,
    value?: string,
    defaultValue?: string,
    errormsg?: string
    successmsg?: string,
    disabled?: boolean,
    rows?: number
    ref?: React.Ref<HTMLTextAreaElement>
}

function Textarea({
    label,
    value,
    defaultValue = "",
    placeholder,
    errormsg,
    successmsg,
    disabled,
    ref,
    name, 
    id,
    rows = 5
}: TextareaProps): JSX.Element {
    return (
        <div className={styles['form-item']}>
            <label className={styles['form-item-label']}>{label}</label>
            <div className={styles['form-item-textarea']}>
                <textarea 
                    name={name}
                    id={id}
                    value={value}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    disabled={disabled}
                    ref={ref}    
                    rows={rows}
                ></textarea>
            </div>
            <div className={styles['form-item-msg']}>
                <div className={styles['form-item-msg-error']}>{errormsg}</div>
                <div className={styles['form-item-msg-success']}>{successmsg}</div>
            </div>
        </div>
    )
}

export default Textarea
