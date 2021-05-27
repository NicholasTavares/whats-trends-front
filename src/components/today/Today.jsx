import React from 'react'

// JSX
import Carousel from '../topTrendsBrasil/Carousel'
import Sports from '../topics/Sports'
import Business from '../topics/Business'
import Entertainment from '../topics/Entertainment'
import Region from '../region/Region'
import ST from '../topics/ST'

const Today = () => {

    return (
        <main className="container">
            <div className='container__trends'>
                <Carousel />
                <Region />
            </div>

            <div className='container__news'>
                <div className="container__container-news">
                    <Business />
                    <Sports />
                    <ST />
                </div>
                <div className="container__container-entertainment">
                    <Entertainment horizontal={true} />
                </div>
            </div>

        </main>

    )
}
/* 

<div className='container__trends'>
                <Carousel />
                <Region />
            </div>
*/

export default Today