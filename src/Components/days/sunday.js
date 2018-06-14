import React from 'react'
import { Image} from 'semantic-ui-react'

export const Sunday =({exercises}) => <div>
{ exercises.map(({id,image,title})=>

<Image size='small' className="work" key={id} src={'./images/'+image}/>


)}</div>

export default Sunday