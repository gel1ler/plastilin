import 'react-international-phone/style.css';
import {
    TextField,
} from '@mui/material';
import React from 'react';
import {
    defaultCountries,
    usePhoneInput,
} from 'react-international-phone';

export const MuiPhone = ({value,onChange,...restProps}) => {

    const { inputValue, handlePhoneValueChange, inputRef } =
        usePhoneInput({
            defaultCountry: 'ru',
            value,
            countries: defaultCountries,
            onChange: (data) => {
                onChange(data.phone === '+8' ? '+7' : data.phone)
            },
        });

    return (
        <TextField
            sx={{ color: 'white' }}
            variant="outlined"
            color="primary"
            placeholder='+7 (XXX) XXX-XX-XX'
            value={inputValue}
            onChange={handlePhoneValueChange}
            type="tel"
            error={!inputValue}
            required
            inputRef={inputRef}
            inputProps={{ style: { color: "#fff" } }}
            {...restProps}
        />
    );
};

export default MuiPhone