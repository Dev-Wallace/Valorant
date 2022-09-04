import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GiInfo } from "react-icons/gi"
import apiValorant from '../services/apiValorant'

const AllArmas = () => {

    const [armas, setArmas] = useState([])
    const [shop, setShop] = useState([])

    useEffect(() => {
        apiValorant.get('/weapons?language=pt-BR').then(resultado => {
            setArmas(resultado.data.data);
        })
    }, [])

    return (
        <div>
            <h1 className='mt-5 text-light'>Listagem de Armas</h1>

            <Row>
                {armas.map(item => (
                    <Col key={item.uuid} md={3} className='mb-3'>
                        <Card className='h-100' border='danger'>
                            <Card.Header className='bg-danger text-light' as='h3'>{item.displayName}</Card.Header>
                            <Card.Img title={item.displayName} variant='top' src={item.displayIcon} />
                            <Card.Footer>
                                <Link className='btn btn-danger text-light' to={'/armas/' + item.uuid}> <strong> <GiInfo /> SAIBA MAIS</strong> </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default AllArmas