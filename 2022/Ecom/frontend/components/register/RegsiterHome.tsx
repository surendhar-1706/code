import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    VStack,
    Text,
    Heading,
    Box,
    RadioGroup,
    HStack,
    Radio,
    Select,
    Button,
    Stack,
} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import * as Yup from "yup";
import { Field, FieldProps, Form, Formik, FormikProps, FormikState, FormikValues } from 'formik';

function RegsiterHome() {
    return <VStack maxW='full' h={'100vh'} >
        {/* <div>first,last,email,checkbox,radiobutton,select,</div> */}
        <Formik
            initialValues={{ email: '', firstName: '', lastName: '', radio: '', checked: [] }}
            onSubmit={(values, actions) => {
                console.log('hi from onsubmit')
                console.log(values)
                actions.setSubmitting(false)
            }}
            validationSchema={Yup.object().shape({
                firstName: Yup.string().min(5).max(10).required('first Name is required'),
                lastName: Yup.string().min(5).max(10).required('last Name is required'),
                checked: Yup.array().min(1, 'Select atleast one'),
                radio: Yup.string().required('Dei!! select panra'),

            })}

        >
            {(props: FormikProps<FormikValues>) => (

                <Form>
                    <VStack w={'full'} borderWidth={'1px'} px={['5', '5', '50', '50']} py={'5'}>
                        <Heading>My Form</Heading>

                        <Field name='firstName' >
                            {(props: FieldProps) => (
                                <FormControl isInvalid={(props.form.errors.firstName && props.form.touched.firstName) ? true : false}>
                                    <FormLabel htmlFor='firstName'>First Name</FormLabel>
                                    <Input {...props.field} id='firstName' placeholder='First Name' />
                                    <FormErrorMessage textColor={'green.500'} >{props.form.errors.firstName}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name='lastName' >
                            {({ field, form }: FieldProps) => (
                                <FormControl isInvalid={(form.errors.lastName && form.touched.lastName) ? true : false}>
                                    <FormLabel htmlFor='lastName'>Last name</FormLabel>
                                    <Input {...field} id='lastName' placeholder='Last Name' />
                                    <FormErrorMessage textColor={'green.500'}>{form.errors.lastName}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name='radio'>
                            {({ field, form }: FieldProps) => (
                                <FormControl as='fieldset' isInvalid={(form.errors.radio && form.touched.radio) ? true : false}>
                                    <FormLabel as='legend'>Favorite Naruto Character</FormLabel>
                                    <RadioGroup defaultValue=''>
                                        <HStack spacing='24px'>
                                            <Radio  {...field} value='Sasuke'>Sasuke</Radio>
                                            <Radio {...field} value='Nagato'>Nagato</Radio>
                                            <Radio {...field} value='Itachi'>Itachi</Radio>
                                            <Radio {...field} value='Sage of the six Paths'>Sage of the six Paths</Radio>

                                        </HStack>
                                    </RadioGroup>
                                    <FormErrorMessage colorScheme={'green'} textColor={'green.500'}>{form.errors.radio}</FormErrorMessage>
                                    <FormHelperText>Select only if you're a fan.</FormHelperText>
                                </FormControl>
                            )}
                        </Field>

                        <Field name='checked' >
                            {({ field, form }: FieldProps) => (
                                <FormControl isInvalid={(form.errors.checked || form.touched.checked) ? true : false}>
                                    <FormLabel htmlFor='lastName'>Last name</FormLabel>

                                    <Stack spacing={5} direction='row'>
                                        <Checkbox {...field} colorScheme='red' value={'one'}>
                                            Checkbox 1
                                        </Checkbox>
                                        <Checkbox {...field} colorScheme='green' value={'two'} >
                                            Checkbox 2
                                        </Checkbox>
                                    </Stack>
                                    <FormErrorMessage textColor={'green.500'}>{form.errors.checked}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <Button
                            type='submit'
                            isLoading={props.isSubmitting}
                        >Submit</Button>
                    </VStack>
                </Form>

            )}
        </Formik>
    </VStack >;
}

export default RegsiterHome;
