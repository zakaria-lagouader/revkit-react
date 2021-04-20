import classNames from 'classnames';
import React from 'react'
import styles from "./Heading.module.scss";

export interface HeadingProps {
    children?: React.ReactNode,
    size?: "x1" | "x2" | "x3" | "x4" | "x5" | "x6",
    color?: "primary" | "muted",
}

function Heading({
    children,
    size = "x3",
    color = "primary"
}: HeadingProps): JSX.Element {
    return (
        <h1 className={classNames(styles['heading'], styles[size], styles[color])}>{children}</h1>
    )
}

export default Heading
