import React, { useState, useEffect} from 'react'
import Person from './Person';

function Loging()  {
    const initialValues = {username:"",email: "", password:""};
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
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSumbit){
            console.log(formValues);
        }
        },[formErrors]);

    const validate = (values) =>{
        const errors = {};
        const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;
        if(!values.username) {
            errors.username = "username is required";
        }
        if(!values.email) {
            errors.email = "email is required";
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
         (<div>sign in</div>)}
         <form onSubmit={handleSubmit}>
             <h1>Login Form</h1>
             <div className='ui divider'></div>
             <div className='ui form'>
                 <div className='field'>
                     <label>Username</label>
                     <input 
                     type="text" 
                     name="username" 
                     placeholder='user name' 
                     value={formValues.username}
                     onChange={handleChange}
                     />
                 </div>
                 <p>{formErrors.username}</p>
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
                 <p>{formErrors.email}</p>
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
                 <p>{formErrors.password}</p>
                 <button className='submitButton'>Submit</button>
             </div>
         </form>
     </div>
    );


}
export default Loging