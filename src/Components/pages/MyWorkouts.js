import React from 'react'
import { Image, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './myworkout.css'

export default ({exercises}) => <div>
    { exercises.map(({id,image,title})=>
    
   <Image size='small' className="work" key={id} src={'./images/'+image}/>
    
    
)}
<Table inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell><Link to="/home">Monday</Link></Table.HeaderCell>
        <Table.HeaderCell><Link to="/home">Tuesday</Link></Table.HeaderCell>
        <Table.HeaderCell><Link to="/home">Wednesday</Link></Table.HeaderCell>
        <Table.HeaderCell><Link to="/home">Thursday</Link></Table.HeaderCell>
        <Table.HeaderCell><Link to="/home">Friday</Link></Table.HeaderCell>
        <Table.HeaderCell><Link to="/home">Saturday</Link></Table.HeaderCell>
        <Table.HeaderCell><Link to="/home">Sunday</Link></Table.HeaderCell>
       
      </Table.Row>
    </Table.Header>
    </Table>
</div>
