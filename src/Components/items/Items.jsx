import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom' 

const Items = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
                                              {/* Onclick directs images in the related pictures to be active/clickable 0,0 fro X and Y coordinate*/}
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
            =N={props.new_price}
        </div>
        <div className="item-price-old">
        =N={props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Items