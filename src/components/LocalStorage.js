import React, {useState, useEffect} from 'react';

function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue) {
        return savedValue
        } else {
            return initialValue;
        }
    }

export default function LocalStorage(key, initialValue) {
    let [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    });

    //snimi vrijednost u local storage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key])

    return [value, setValue];
};