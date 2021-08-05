import React from 'react'
import { useFormikContext } from 'formik'
import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage'

const AppFormPicker = ({ items, name, placeholder }) => {
    const { setFieldValue, handleChange, errors, touched, values } = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                placeholder={placeholder}
                selectedItem={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default AppFormPicker
