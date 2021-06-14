import React, { useEffect, useState, useRef } from 'react'
import DatePicker from 'react-date-picker'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FaCalendarAlt } from 'react-icons/fa'
import { ImSearch } from 'react-icons/im'

// ACTIONS
import { getInterestByRegion } from '../../redux/actions/trendsActions'
import Loading from '../loading/Loading'

const Region = ({ region, getInterestByRegion }) => {
    const inputText = useRef(null)
    useEffect(() => getInterestByRegion('BR'), [])
    const [value, onChange] = useState(new Date());
    const [message, setMessage] = useState(null)

    const SearchTerm = () => {
        if (!inputText.current.value) {
            return setMessage('Digite um termo para pesquisar')
        }
        if (!Array.isArray(value)) {
            return setMessage('Digite um intervalo de data')
        }
        setMessage(null)
        getInterestByRegion('BR', inputText.current.value, value)
    }

    return (
        <section className='region_container'>
            <div className='region_container__search'>
                <div className="region_container__search-text">
                    <input ref={inputText} type="text" placeholder='Acarajé' />
                    <span style={{ display: 'inline-block', padding: '0.2rem', color: 'red', fontWeight: '600', marginBottom: '1rem' }}>
                        {message ? message : ''}

                    </span>
                </div>
                <DatePicker
                    className={'calendario'}
                    required={true}
                    selectRange={true}
                    showNavigation={true}
                    locale={"PT-BR"}
                    calendarIcon={<FaCalendarAlt />}
                    format={'d/M/y'}
                    minDate={new Date('01/01/2004')}
                    maxDate={new Date()}
                    returnValue={'range'}
                    onChange={onChange}
                    value={value}
                    defaultValue={[new Date('01/01/2004'), new Date()]}
                />
                <div className="region_container__search-button" onClick={() => SearchTerm()}>
                    <span style={{ display: 'inline-block' }}>
                        <ImSearch />
                    </span>
                </div>
            </div>
            {region && !message ?
                <div className="region_container__search-text__message">
                    <span>
                        Estados mais interessados em <strong style={{ color: 'blueviolet', textDecoration: 'underline' }}>
                            {region[0].keyword}
                        </strong> de <strong>{region[0].startTime}</strong> até <strong>
                            {region[0].endTime}</strong>:
                    </span>
                </div> : ''}


            <div className='region_container__search-result__row' style={{ border: 'none' }}>
                <div className="region_container__search-result__col-rank">Rank</div>
                <div className="region_container__search-result__col-title">Estado</div>
                <div className="region_container__search-result__col-title">Popularidade</div>
            </div>
            <div className='region_container__search-result__container-result'>
                {region ? region.map((res, i) => (
                    <div className='region_container__search-result__row' key={i}>
                        <div className="region_container__search-result__col-rank-data">
                            <span style={{ color: '#F09100' }}><strong>{i + 1}</strong></span>
                        </div>
                        <div className="region_container__search-result__col-data">
                            <span>{res.name}</span>
                        </div>
                        <div className="region_container__search-result__col-data">
                            <span>{res.value}</span>
                        </div>
                    </div>
                )) : <Loading />}
            </div>
        </section>
    )
}

const mapStatetoProps = state => ({
    region: state.trend.region

})
// vai disparar uma chamada para todos os reducers da aplicação se uma função for chamada
const mapDispatchToProps = dispatch => bindActionCreators({ getInterestByRegion }, dispatch)
// estou passando para as propriedades de Today
export default connect(mapStatetoProps, mapDispatchToProps)(Region)