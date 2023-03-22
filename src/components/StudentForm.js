import React from 'react'
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage} from "formik";
import {FormGroup, FormControl, Button} from "react-bootstrap";

const StudentForm = (props) => {
    const validationschema = yup.object().shape({
        name: yup.string().required("required"),
        email: yup.string().email(" invalid email").required("required"),
        rollno: yup.number().positive("invalid no").integer("invalid no").required("required"),

    });
    console.log(props);

  return (
    // <div>StudentForm</div>
    
    <div className="form-wrapper">
        <Formik {...props} validationSchema={validationschema}>
            <Form>
                <FormGroup>
                    <Field name="name" type="text" className="form-control" />
                    <ErrorMessage name="name" className='d-block invalid-feedback' component="span"/>

                </FormGroup>
                <FormGroup>
                    <Field name="email" type="text" className="form-control" />
                    <ErrorMessage name="email" className='d-block invalid-feedback' component="span"/>

                </FormGroup>
                <FormGroup>
                    <Field name="rollno" type="number" className="form-control" />
                    <ErrorMessage name="rollno" className='d-block invalid-feedback' component="span"/>

                </FormGroup>
                <Button variant="danger" size="lg" block="block" type="submit">
                    {props.children}
                </Button>
            </Form>
        </Formik>
        </div>
);
  };

export default StudentForm ;
