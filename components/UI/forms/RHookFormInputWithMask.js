import React from 'react'
import './style.css'
import { useFormContext } from 'react-hook-form'
import { useHookFormMask } from 'use-mask-input';

const RHookFormInputWithMask = ({ label, name, mask }) => {
    const { register, formState: { errors } } = useFormContext()
    const registerWithMask = useHookFormMask(register);

    return (
        <input
            {...registerWithMask(name, mask, {
                required: true
            })}
            type="text"
            className='MuiInputBase-input'
        />
    )
}

export default RHookFormInputWithMask