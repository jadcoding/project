import React from 'react'
import { Dropdown } from 'semantic-ui-react'



const DropdownExampleImage = () => (
  <Dropdown text='Add user' icon='add user' floating labeled button className='icon'>
    <Dropdown.Menu>
      <Dropdown.Header content='People You Might Know' />
    
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleImage
