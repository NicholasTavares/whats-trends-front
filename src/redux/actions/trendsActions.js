import axios from 'axios'
import API_URL from '../../consts'
const BASE_URL = API_URL.API_URL

export function getDailyTrends() {
    const request = axios.get(`${BASE_URL}/dailytrends`)
    return {
        type: 'DAILY',
        payload: request
    }
}

export function getRealTimeTrendsSports(category) {
    const request = axios.get(`${BASE_URL}/realtimetrends?category=${category}`)
    return {
        type: 'SPORTS',
        payload: request
    }
}

export function getRealTimeTrendsBusiness(category) {
    const request = axios.get(`${BASE_URL}/realtimetrends?category=${category}`)
    return {
        type: 'BUSINESS',
        payload: request
    }
}

export function getRealTimeTrendsEntertainment(category) {
    const request = axios.get(`${BASE_URL}/realtimetrends?category=${category}`)
    return {
        type: 'ENTERTAINMENT',
        payload: request
    }
}

export function getRealTimeTrendsST(category) {
    const request = axios.get(`${BASE_URL}/realtimetrends?category=${category}`)
    return {
        type: 'ST',
        payload: request
    }
}

export function getInterestByRegion(geo, keyword, data) {
    const request = axios.get(`${BASE_URL}/interestbyregiontrends`, {
        params: {
            geo: geo,
            keyword: keyword,
            data: data || null
        }
    })
    return {
        type: 'REGION',
        payload: request
    }
}