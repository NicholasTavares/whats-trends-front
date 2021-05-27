import React, { useEffect, useState } from 'react'
import { GiExpand } from 'react-icons/gi'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FiChevronDown } from 'react-icons/fi'


// ACTIONS
import { getRealTimeTrendsBusiness } from '../../redux/actions/trendsActions'

const Business = ({ business, getRealTimeTrendsBusiness }) => {

    useEffect(() => getRealTimeTrendsBusiness('b'), [])

    return (

        <section className='topic-container'>
            <h1 className='topic-container__title-b'>Negócios</h1>
            <div className="topic-container__container-data">
                {business ? business.map((topic, i) =>
                    <div className='topic-container__topics' key={i}>
                        <a className='topic-container__topics__title' target="_blank"
                            rel="noopener noreferrer" href={topic.articles[0].url}>
                            {topic.articles[0].articleTitle.replace(/&quot;/g, '"').replace(/&#39;/g, "'")}
                        </a>
                        <p className='topic-container__topics__paragraph'>
                            {topic.articles[0].snippet.replace(/&quot;/g, '"').replace(/&#39;/g, "'")}
                        </p>
                        <div className='topic-container__topics__related'>
                            <span className='topic-container__topics__related__source'>
                                {topic.articles[0].time} por <strong>{topic.articles[0].source}</strong>
                            </span>
                            <span className='topic-container__topics__related__icon'>
                                <GiExpand />
                            </span>
                        </div>
                    </div>) : 'Loading...'}
            </div>
        </section>

    )
}


const mapStatetoProps = state => ({
    business: state.trend.business

})
// vai disparar uma chamada para todos os reducers da aplicação se uma função for chamada
const mapDispatchToProps = dispatch => bindActionCreators({ getRealTimeTrendsBusiness }, dispatch)
// estou passando para as propriedades de Today
export default connect(mapStatetoProps, mapDispatchToProps)(Business)
