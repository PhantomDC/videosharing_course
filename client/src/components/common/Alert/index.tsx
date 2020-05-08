import React from 'react'
import  s from './style.module.css'
interface AlertProps {
    type: string,
    label: string | null
}
export function Alert({type, label}: AlertProps) {
    let theme = 'green';
    if (type == 'error') {
        theme = 'red';
    }
    return (
        <div className={`${s[`item_${theme}`]} ${s.itemBlock}`}>
            <span>{label}</span>
        </div>
    )
}
