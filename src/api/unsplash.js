import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 0ee1b7597351fc0a46f12ed1dce2c9c3bc39360b1d8f2dd9884b519ebf66ddd0'
  }
})

