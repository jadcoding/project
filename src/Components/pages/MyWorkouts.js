import React from 'react'
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './myworkout.css'

const MyWorkouts = () => (
  <Table inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell><Link to="/monday">Monday</Link></Table.HeaderCell>
          <Table.HeaderCell><Link to="/tuesday">Tuesday</Link></Table.HeaderCell>
          <Table.HeaderCell><Link to="/wednesday">Wednesday</Link></Table.HeaderCell>
          <Table.HeaderCell><Link to="/thursday">Thursday</Link></Table.HeaderCell>
          <Table.HeaderCell><Link to="/friday">Friday</Link></Table.HeaderCell>
          <Table.HeaderCell><Link to="/saturday">Saturday</Link></Table.HeaderCell>
          <Table.HeaderCell><Link to="/sunday">Sunday</Link></Table.HeaderCell>
         
        </Table.Row>
      </Table.Header>
      </Table>)
  // </div>
  export default MyWorkouts