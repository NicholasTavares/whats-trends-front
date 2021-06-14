import React, { useEffect } from 'react'
import { GiExpand } from 'react-icons/gi'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// ACTIONS
import { getRealTimeTrendsEntertainment } from '../../redux/actions/trendsActions'
import Loading from '../loading/Loading'

const Entertainment = ({ entertainment, getRealTimeTrendsEntertainment, horizontal }) => {

    useEffect(() => getRealTimeTrendsEntertainment('e'), [])

    return (

        <section className={horizontal ? 'topic-container-horizontal' : 'topic-container'}>
            <h1 className={`${horizontal ? 'topic-container-horizontal' : 'topic-container'}__title-e`}>Entretenimento</h1>

            <div className={`${horizontal ? 'topic-container-horizontal' : 'topic-container'}__container-data`}>
                {entertainment ? entertainment.map((topic, i) =>
                    <div className={`${horizontal ? 'topic-container-horizontal' : 'topic-container'}__topics`} key={i}>
                        <a className={`${horizontal ? 'topic-container-horizontal' : 'topic-container'}__topics__title`} target="_blank"
                            rel="noopener noreferrer" href={topic.articles[0].url}>
                            {topic.articles[0].articleTitle.replace(/&quot;/g, '"').replace(/&#39;/g, "'")}
                        </a>
                        <p className={`${horizontal ? 'topic-container-horizontal' : 'topic-container'}__topics__paragraph`}>
                            {topic.articles[0].snippet.replace(/&quot;/g, '"').replace(/&#39;/g, "'")}
                        </p>
                        <div className={`${horizontal ? 'topic-container-horizontal' : 'topic-container'}__topics__related`}>
                            <span className={`${horizontal ? 'topic-container-horizontal' : 'topic-container'}__topics__related__source`}>
                                {topic.articles[0].time} por <strong>{topic.articles[0].source}</strong>
                            </span>
                            <span className={`${horizontal ? 'topic-container-horizontal' : 'topic-container'}__topics__related__icon`}>
                                <GiExpand />
                            </span>
                        </div>
                    </div>) : <Loading />}
            </div>

        </section>

    )
}


const mapStatetoProps = state => ({
    entertainment: state.trend.entertainment
})
// vai disparar uma chamada para todos os reducers da aplicação se uma função for chamada
const mapDispatchToProps = dispatch => bindActionCreators({ getRealTimeTrendsEntertainment }, dispatch)
// estou passando para as propriedades de Today
export default connect(mapStatetoProps, mapDispatchToProps)(Entertainment)
