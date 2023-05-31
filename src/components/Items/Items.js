import React from 'react'
import data from './Data'
import Item from './Item'

import './Items.css'

function Items() {
    return (
        <div className='articles'>
			{data.map(item => (
				<Item 
				img={item.img}
				city={item.city}
				itemname={item.item}
				pseudo={item.pseudo}/>
			))}
        </div>
    )
}

export default Items
