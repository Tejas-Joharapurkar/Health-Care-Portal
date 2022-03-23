import React, { useState, useEffect} from 'react'
import './css/logging.css';

function Loging()  {
    const initialValues = {patient_name:"",email: "", symptoms:"",date:"", time:"",password:""};
    const[formValues, setformvalues]= useState(initialValues);
    const[formErrors, setformErrors]= useState({});
    const [isSumbit, setSubmit] = useState(false);
    const handleChange = (e) => {
        
        const{ name, value } = e.target;
        setformvalues({...formValues, [name]:value});
       
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(formValues));
        setSubmit(true);
    };
    useEffect(()=> {
        // console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSumbit){
            console.log(formValues);
        }
        },[formErrors]);

    const validate = (values) =>{
        const errors = {};
        const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;
        if(!values.patient_name) {
            errors.patient_name = "patient name is required";
        }
        if(!values.email) {
            errors.email = "email is required";
        }
        if(!values.date) {
            errors.date = "date is required";
        }
        if(!values.time) {
            errors.time = "time is required";
        }
        if(!values.password) {
            errors.password = "password is required";
        }
        else if(values.password.length < 4 ){
            errors.password = "password should be longer than 4 characters";
        }
        else if(values.password.length > 10 ){
            errors.password = "password should be less than 10 characters";
        }
        return errors;
    }
    return (
     <div className='container'>
         {Object.keys(formErrors).length === 0 && isSumbit ? 
         (<div className='success'>Signed in succesfully</div>) : 
         (<div className='initial'>Please fill in your details</div>)}
         <form onSubmit={handleSubmit}>
             <h1>Login Form</h1>
             <div className='ui divider'></div>
             <div className='ui form'>
                 <div className='field'>
                     <label>Patient name</label>
                     <input 
                     type="text" 
                     name="patient_name" 
                     placeholder='Enter the name of the patient' 
                     value={formValues.patient_name}
                     onChange={handleChange}
                     />
                 </div>
                 <div className='formError'><p>{formErrors.patient_name}</p></div>
                 
                 <div className='field'>
                     <label>Email</label>
                     <input 
                     type="email" 
                     name="email" 
                     placeholder='email' 
                     value={formValues.email} 
                     onChange={handleChange}
                     />
                 </div>
                 <div className='formError'><p>{formErrors.email}</p></div>
                 
                 <div className='field'>
                     <label>Date of appointment</label>
                     <input 
                     type="date" 
                     name="date" 
                     placeholder='Enter date of appointment' 
                     value={formValues.date} 
                     onChange={handleChange}
                     />

                 </div>
                 <div className='formError'><p>{formErrors.date}</p></div>
                
                
                 <div className='field'>
                     <label>Time of appointment</label>
                     <input 
                     type="time" 
                     name="time" 
                     placeholder='Enter time of appointment' 
                     value={formValues.time} 
                     onChange={handleChange}
                     />

                 </div>
                 <div className='formError'><p>{formErrors.time}</p></div>
                
                 <div className='field'>
                     <label>Password</label>
                     <input 
                     type="password" 
                     name="password" 
                     placeholder='password' 
                     value={formValues.password} 
                     onChange={handleChange}
                     />

                 </div>
                 <div className='formError'><p>{formErrors.password}</p></div>
                 
                 
                 
                 <button className='submitButton'>Submit</button>
             </div>
         </form>
     </div>
    );


}
export default Loging