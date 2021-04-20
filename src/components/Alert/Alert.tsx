import React from 'react';
import styles from "./Alert.module.scss";
import classNames from 'classnames';

export interface AlertProps {
    isOpen: boolean,
    variant: "light" | "dark" | "primary" | "warning" | "success" | "error",
    text: string
} 

function Alert({
    isOpen,
    variant = "dark",
    text
}: AlertProps): JSX.Element {
    return (
        <div className={classNames(styles["alert"], styles[variant])}>
            <p className={styles["alert-text"]}>{text}</p>
            <span className={styles["alert-close"]}>X</span>
        </div>
    )
}

export default Alert
