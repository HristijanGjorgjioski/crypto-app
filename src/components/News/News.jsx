import React from 'react'
import { Select, Typography, Row, Avatar } from 'antd'
import moment from 'moment'

import { useGetCryptoNewsQuery } from '../../services/cryptoNewApi'

const { Text, TItle } = Typography
const { Option } = Select

const News = ({ simplified }) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrencies', count: simplified ? 10 : 100 })

    return (
        <div>
            
        </div>
    )
}

export default News
