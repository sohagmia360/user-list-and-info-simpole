import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const UserDetails = (props) => {
    const { image,last_name, first_name, gender, century, language,salary} = props.user
     return (
        <div className='userCard'>
        <img src={image} alt="" />
        <h2> {first_name} ( {last_name} )</h2>
        <h3>{gender}</h3>
        <h4> Century  »» {century}</h4>
        <h4>Language »» {language}</h4>
        <h3>Yearly Salary <span>{salary}</span></h3>
        <button onClick={()=> props.addFeiend(props.user)}> <FontAwesomeIcon icon={faPlus} /> Add Friend</button>
    </div>
    );
};

export default UserDetails;