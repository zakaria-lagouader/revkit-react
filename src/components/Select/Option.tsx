import React from 'react'
import styles from "./Select.module.scss"

export interface OptionProps {
    value: string | number,
    children: React.ReactNode
}

function Option({
    children,
    value
}: OptionProps): JSX.Element {
    const handleClick = () => {

    }
    return (
        <div onClick={handleClick} className={styles['form-item-option']}>{children}</div>
    )
}

export default Option
