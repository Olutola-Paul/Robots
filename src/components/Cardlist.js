import React from 'react';
import Card from './Card';

const Cardlist = ({robots}) => {
    return(
        <div>
            {
                robots.map((user, item) => {
                    return (
                        <Card key={item} 
                        id={robots[item].id} 
                        name={robots[item].name} 
                        email={robots[item].email}/>
                    );
                })
            }   
        </div>
    );
}

export default Cardlist;