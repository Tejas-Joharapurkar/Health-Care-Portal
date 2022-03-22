import React from 'react'
const Person = ({ people }) => {

    return (

        people.map((total) => {
            return (
                <div>
                    <h2> Name : {`${total.firstname} ${total.lastname}`}</h2>

                    <h3> Email : {total.email}</h3>

                </div>
            )
        })
    )
}
export default Person