import axios from 'axios'

// 1. HTTP 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수 정리
let fetchNewsList = () => {
  return axios.get(`${config.baseUrl}news/1.json`)
}

let fetchAskList = () => {
  return axios.get(`${config.baseUrl}ask/1.json`)
}

let fetchJobsList = () => {
  return axios.get(`${config.baseUrl}jobs/1.json`)
}

let fetchUserInfo = (username) => {
  return axios.get(`${config.baseUrl}user/${username}.json`)
}

let fetchItemView = (itemId) => {
  return axios.get(`${config.baseUrl}item/${itemId}.json`)
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemView
}