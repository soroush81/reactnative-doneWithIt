import React, {useEffect, useState} from 'react'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms'
import CategoryPickerItem from '../components/CategoryPickerItem'
import FormImagePicker from '../components/forms/FormImagePicker'
import useLocation from './../hooks/useLocation';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description"),
    images: Yup.array().min(1, "Please select atleast one image")
})

const categories = [
    {
        icon: {
            name: "floor-lamp",
            backgroundColor: "#fc5c65"
        },
        label: "Furniture", value: 1
    },
    {
        icon: {
            name: "shoe-heel",
            backgroundColor: "#2bcbba"
        },
        label: "Clothing", value: 2
    },
    {
        icon: {
            name: "format-list-bulleted",
            backgroundColor: "#fed330"
        },
        label: "camera", value: 3
    },
    {
        icon: {
            name: "car",
            backgroundColor: "#fd9644"
        }, label: "Cars", value: 4
    },
    {
        icon: {
            name: "cards",
            backgroundColor: "#26de81"
        }, label: "Games", value: 5
    },
    {
        icon: {
            name: "basketball",
            backgroundColor: "#45aaf2"
        }, label: "Sports", value: 6
    },
    {
        icon: {
            name: "headphones",
            backgroundColor: "#4b7bec"
        }, label: "Movies & Musics", value: 7
    },
]
const ListEditingScreen = () => {

   const location = useLocation();
   
    return (
        <Screen>
            <AppForm
                initialValues={{ title: "", price: "", category: null, description: "", images:[] }}
                onSubmit={(values) => console.log(location)}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <AppFormField
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                    securityTextEntry />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width="50%"
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    )
}

export default ListEditingScreen
