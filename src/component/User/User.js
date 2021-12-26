import React, { useState } from 'react';
import './User.css'

// import randomImage from './pexels-andrea-piacquadio-3823495.jpg'
import Data from '../FakeData/Data.json'
import UserDetails from '../UserDetils/UserDetails';
import Navber from '../NavBer/Navber';
const User = () => {
    // console.log(Data)
    const [count ] = useState(Data) 
    const [friend , setFriend] = useState([])
    console.log(count)



    function addFeiend(user){
      let Result = [...friend , user]
      setFriend(Result)
    }
    return (
      <>
      <Navber friend={friend}></Navber>
      <div className="user">
        {
          count.map(user => <UserDetails user={user} addFeiend={addFeiend}></UserDetails> )
        }
       
      </div>
      </>
    );
};

export default User;