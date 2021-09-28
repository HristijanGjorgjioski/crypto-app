import React from 'react'
import { Select, Typography, Row, Avatar, Col, Card } from 'antd'
import moment from 'moment'

import { useGetCryptoNewsQuery } from '../../services/cryptoNewApi'

const { Text, Title } = Typography
const { Option } = Select

const demoImage = 'https://img.etimg.com/thumb/msid-84014465,width-640,resizemode-4,imgsize-25637/cryptomania-all-around.jpg'

const News = ({ simplified }) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrencies', count: simplified ? 6 : 12 })

    if(!cryptoNews?.value) return 'Loading...'

    return (
        <Row gutter={[ 24, 24 ]}>
            {cryptoNews.value.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.name}</Title>
                                <img style={{ maxWidth: '200px', maxHeight: '100px' }} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="crypto" />
                            </div>
                            <p>{news.description > 100 
                                ? `${news.description.substring(0, 100)} ...`
                                : news.description}
                            </p>
                            <div className="provider-container">
                                <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                                <Text className="provider-name">{news.provider[0]?.name}</Text>
                            </div>
                            <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default News
