import { TextField } from '@mui/material'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const RHookFormTextField = ({ label, name, fullWidth, multiline, notRequired }) => {
    const { register, formState: { errors } } = useFormContext()

    return (
        <TextField
            variant='outlined'
            multiline={multiline}
            label={label}
            error={!!errors[name]}
            helperText={<> {errors[name]?.message ?? ''}</>}
            fullWidth={fullWidth}
            {...register(name, !notRequired ? { required: "Поле обязательно для ввода" } : {})}
        />
    )
}

export default RHookFormTextField