import React, { InputHTMLAttributes } from 'react';
import {useField} from 'formik';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string,
    label: string,
};

export const InputField: React.FC<InputFieldProps> = ({size: _, ...props}) => {
    const [field, {error}] = useField(props);
    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
            <Input {...field} {...props} id={field.name} placeholder={props.placeholder} />
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    );
}