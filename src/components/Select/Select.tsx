import React from 'react'
import useOnChange from '../../hooks/useOnChange';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import styles from "./Select.module.scss"


export interface SelectProps {
    name?: string,
    id?: string,
    label?: string,
    placeholder?: string,
    defaultValue?: string,
    onChange?: (value: string) => void
}

export interface Option {
    value: string,
    label: string
}

const options: Array<Option> = [
    { value: "1", label: "item 1" },
    { value: "2", label: "item 2" },
    { value: "3", label: "item 3" },
    { value: "4", label: "item 4" },
];

function Select({
    label,
    name,
    placeholder,
    defaultValue = "",
    onChange
}: SelectProps): JSX.Element {
    const [isOpen, setIsOpen] = React.useState(false);
    const [value, setValue] = React.useState(defaultValue);
    const [text, setText] = React.useState("");

    useOnChange(value, onChange);

    const handleToggle = () => {
        setIsOpen(state => !state)
    }

    const selectOption = (option: Option) => {
        setValue(option.value);
        setText(option.label);
        setIsOpen(false);
    }

    const selectRef = React.createRef<HTMLDivElement>();
    useOnClickOutside(selectRef, () => setIsOpen(false));
    
    return (
        <>
        <input type="hidden" name={name} value={value}/>
        <div className={styles["form-item"]} ref={selectRef}>
            <label className={styles['form-item-label']}>{label}</label>
            <div className={styles["form-item-select"]} tabIndex={0} onClick={handleToggle}>
                {text === "" ? (
                    <p className={styles["form-item-select-placeholder"]}>{placeholder}</p>
                ): (
                    <p className={styles["form-item-select-value"]}>{text}</p>
                )}
                <div className={styles['form-item-select-icon']}>A</div>
            </div>
            {isOpen && (
                <div className={styles['form-item-options']}>
                    {options.map((option, i) => (
                        <div 
                            onClick={() => selectOption(option)}
                            key={option.value}
                            className={styles['form-item-option']}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
    )
}

export default Select
