import React from 'react'
import {  Image, Button, Comment, Form} from 'semantic-ui-react'

export const Friday =({exercises}) => <div>
{ exercises.map(({id,image,title})=>

<Image size='small' className="work" key={id} src={'./images/'+image}/>


)}

<Comment.Group>
 

    <Form reply>
      <Form.TextArea />
      <Button content='Add' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group></div>

export default Friday