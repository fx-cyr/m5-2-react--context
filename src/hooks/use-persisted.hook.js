import React, {useState, useEffect} from "react"

const usePersistedState = (initialValue, keyCode) => {
    const [storedValue, setStoredValue] = useState(() => {
        const targetValue = localStorage.getItem(keyCode);
        if(targetValue) {
            return JSON.parse(targetValue)
        }
        else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(keyCode, JSON.stringify(storedValue));
    }, [keyCode, storedValue]);
    return [storedValue, setStoredValue]
};

export default usePersistedState;