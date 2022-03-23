import React, { useState } from 'react';
import doctors from "./Data_doctor";
import './css/Doctor.css';
const Doctors = () => {
    return (
        <>
            <h2>List Of Doctors</h2>
            {doctors.map((total) => {
                return (
                    <div key={total.id} className='container'>
                        <span>
                            <img src={total.img} alt={total.name} className='person-img' />
                            <h4>Name: {total.name}</h4>
                            <h4>Speciality: {total.speciality}</h4>
                            <p>Info: {total.info}</p>
                            <button>see more</button>
                        </span>

                    </div>
                )
            })}
        </>
    )
}
export default Doctors