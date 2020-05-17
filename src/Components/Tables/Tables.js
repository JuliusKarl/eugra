import React from 'react'
import { ListGroup} from 'react-bootstrap'

const Tables = ({ tables }) => {
   
    if (tables) {
        return (
            <div>
                {tables.map((table) => (
                    <ListGroup.Item onClick={()=> window.location='/home'} style={{fontSize:20, backgroundColor: 'grey'}}>{table.table_name}</ListGroup.Item>
                ))}
            </div>
        )
    }else{
        return <div></div>
    }
};

export default Tables