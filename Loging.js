import React, { useState } from 'react'
import Person from './Person';

const Loging = ({ setshow }) => {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [people, setpeople] = useState([]);
    const handelSubmit = (e) => {
        e.preventDefault();
        if (firstname && lastname && email) {
            const person = { firstname, email, lastname }
            setpeople((people) => {
                return [...people, person];
            })
            setfirstname('');
            setlastname('');
            setemail('');
            setshow(false);
            // console.log("no fault");
        }
    }


    return (
        <>
            <h1 className='a'>Please Fill The Form</h1>
            <article className>
                <form className='b'>
                    <div className='c'>
                        <label htmlFor="firstName"> Name :</label>
                        <input type="text" id='firstName' value={firstname} onChange={(e) => setfirstname(e.target.value)} />
                    </div>
                    <div className='c'>
                        <label htmlFor="lasttName"> Lastname :</label>
                        <input type="text" id='lasttName' value={lastname} onChange={(e) => setlastname(e.target.value)} />
                    </div>
                    <div className='c'>
                        <label htmlFor="email"> Email :</label>
                        <input type="text" id='email' value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <button type='submit' onClick={handelSubmit}>Submit</button>
                </form>
            </article>
            <Person people={people} />
        </>
    )


}
export default Loging