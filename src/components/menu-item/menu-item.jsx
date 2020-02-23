import React from 'react';
import {withRouter} from 'react-router-dom';/*higher order component to avoid prop drilling*/ 
import './menu-item.scss';

const MenuItem = ({title,imageUrl,size,history,match,linkUrl}) =>(
    <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className='background-image'
      style={{backgroundImage: `url(${imageUrl})`}}
    ></div>{/* we put image in another div to force transition of image inside menu-item with help of overflow:hidden */}
    <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
    </div>
   </div>
);

export default withRouter(MenuItem);