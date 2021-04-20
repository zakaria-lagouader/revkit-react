import React from 'react'

export default function useOnChange(value: any, changeHandler?: (e:any) => void) {
    const callback = React.useRef<typeof changeHandler>();
    callback.current = changeHandler;

    React.useEffect(() => {
        if (!callback.current) {
            return;
        }

        callback.current(value);
    }, [callback, value])
}
