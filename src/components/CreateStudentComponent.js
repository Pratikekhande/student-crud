
import React , {useState,  useEffect} from 'react';
import axios from 'axios';
import StudentForm from './StudentForm';


const CreateStudentComponent = () => {
  const [formValues, setformValues] = useState({
    name:'',email:'', rollno:''
  })
  const onSubmit = studentobject => {
    axios.post('http://localhost:4000/students/create-student', studentobject).then( res => {
      if (res.status === 200)
      alert('student created ')
      else
        Promise.reject()
    })
    .catch(err => alert(' something went wrong'))
    
  }
  return (
    // <div>CreateStudentComponent</div>
    <StudentForm initialValues={formvalues} onSubmit={onSubmit} enablereinitialize>
      Create Student  
    </StudentForm>

    );
};

export default CreateStudentComponent;