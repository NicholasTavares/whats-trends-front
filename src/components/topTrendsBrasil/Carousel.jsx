import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

//ACTIONS
import { getDailyTrends } from '../../redux/actions/trendsActions'

// JSX
import TopTrendsBrasil from './TopTrendsBrasil'

const CarouselContiner = ({ daily, getDailyTrends }) => {

    useEffect(() => getDailyTrends(), [])

    return (
        // O carrossel precisa de um container devido ao css integrado da api
        // Há um bug da api do carrosel que só pode ser evitado se houver uma checagem dos dados antes, pra depois renderizar.
        <div className="container-daily__container-carousel">
            {daily ? <Carousel autoFocus={true} interval={8500} infiniteLoop={true} autoPlay={true} axis={'horizontal'} showStatus={false} showThumbs={false}
                renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                    hasPrev && (
                        <FiChevronLeft style={{ cursor: 'pointer', position: 'absolute', top: '90', bottom: '0', left: '-6', zIndex: '1', fontSize: '40px' }} onClick={clickHandler} />
                    )
                } renderArrowNext={(clickHandler, hasPrev, labelPrev) =>
                    hasPrev && (
                        <FiChevronRight style={{ cursor: 'pointer', position: 'absolute', top: '90', bottom: '0', right: '-6', zIndex: '1', fontSize: '40px' }} onClick={clickHandler} />
                    )
                }>





                {daily ? daily.todayTrends.map((trend, i) => (
                    <TopTrendsBrasil key={i} podium={i + 1} title={trend.title.query} popularity={trend.formattedTraffic} article={trend.articles} />
                )) : ''}
            </Carousel> : 'Loading...'}
        </div>
    )
}

const mapStatetoProps = state => ({
    daily: state.trend.countryDaily,
})
// vai disparar uma chamada para todos os reducers da aplicação se 'getDailyTrends' for chamada
const mapDispatchToProps = dispatch => bindActionCreators({ getDailyTrends }, dispatch)
// estou passando para as propriedades de Today
export default connect(mapStatetoProps, mapDispatchToProps)(CarouselContiner)