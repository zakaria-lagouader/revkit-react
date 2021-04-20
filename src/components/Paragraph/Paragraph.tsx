import classNames from 'classnames';
import React from 'react'
import styles from "./Paragraph.module.scss";

export interface ParagraphProps {
    children?: React.ReactNode,
    size?: "x1" | "x2",
    color?: "primary" | "muted",
}

function Paragraph({
    children,
    size = "x1",
    color = "primary"
}: ParagraphProps): JSX.Element {
    return (
        <p className={classNames(styles['paragraph'], styles[size], styles[color])}>{children}</p>
    )
}

export default Paragraph
