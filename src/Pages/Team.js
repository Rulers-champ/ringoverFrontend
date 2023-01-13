import React from 'react';
import members from '../components/Members';
import MemberBlock from '../components/MemberBlock';

function Team()
{
    return (
        <div className='team-container'>
         <p >Without bonding and coordination,every project is a failure.Look at who makes KICKSUP great !!</p>

         <div className='team-wrapper'>
           
           {members.map(item=>{
              return <MemberBlock name={item.name} src={item.src} role={item.role} />
           })}

         </div> 

         <p>and You ! ;)</p>
        </div>);
}

export default Team;