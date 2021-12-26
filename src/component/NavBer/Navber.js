import React from 'react';
import './Navber.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Navber = (props) => {
    let added = props.friend
    console.log(props.friend)
    let totalsalary = added.reduce((total , value)=> total + value.salary , 0)
    return (
       
            <div className='navber'>
            <h4> <FontAwesomeIcon icon={faUserPlus} /> {props.friend.length} </h4>

               <h5>Yearly Salary {totalsalary}</h5>
            
        </div>
       
    );
};

export default Navber;