import React from 'react'
import { StyleSheet } from 'react-native'
import ImageInputList from '../ImageInputList'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik';

const FormImagePicker = ({name}) => {
    const {errors, setFieldValue, touched, values} = useFormikContext();
    const imageUris = values[name];
    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUris, uri])
      }
    
      const handleRemove = (uri) => {
        const filtered = imageUris.filter(imageUri => imageUri !== uri)
        setFieldValue(name, filtered)
      }

      
    return (
        <>
            <ImageInputList
                imageUris={imageUris} 
                onAddImage={handleAdd} 
                onRemoveImage={handleRemove} />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

const styles = StyleSheet.create({
    
})

export default FormImagePicker
