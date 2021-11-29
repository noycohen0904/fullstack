import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box } from '@chakra-ui/layout';
import { Form, Formik } from 'formik';
import React from 'react'
import { InputField } from '../components/InputField';
import { Wrapper } from '../components/Wrapper';

interface registerProps {

}

const Register: React.FC<registerProps> = ({}) => {
    return (
        <Wrapper variant="small">
            <Formik 
                initialValues={{username: "", password: ""}} 
                onSubmit={(values) => {console.log(values);}}
            >
                {({isSubmitting}) => (
                    <Form>
                        <InputField 
                            name="username" 
                            label="Username" 
                            placeholder="username"
                        />
                        <Box mt={4}>
                            <InputField 
                                name="password" 
                                label="Password" 
                                placeholder="password"
                                type="password"
                            />
                        </Box>
                        <Button mt={4} type="submit" backgroundColor="teal" isLoading={isSubmitting}>Register</Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
}

export default Register;