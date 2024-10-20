import React, { useState } from 'react'

export default function HookState() {

    // Declare
    const [value, setValue] = useState('');
    
    return (
        <div>HookState {value}</div>
    )
}
