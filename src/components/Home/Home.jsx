import React from 'react'
import "./Home.scss"

const Home = () => {
    return (
        <div className='home'>
            <h3>{`Hello,  ${localStorage.getItem("user-name") ? localStorage.getItem("user-name") : "Guess, Login to search employees"}!`}</h3>
        </div>
    )
}

export default Home
