import React from 'react'



const Sites = ({sites}) => {
    return (
        <div className='declarations-pages'>
        {sites.map(el=>{
            return(
                <div className='declarations-pages__info'>
                <h4>{`Description : ${el.site_description}`}</h4>
                <h4>{`St Adress : ${el.street_address}`}</h4>
                <h4>{`Location : ${el.location_name}`}</h4>
                </div>
            )
        })}
        </div>
    )
}

export default Sites
