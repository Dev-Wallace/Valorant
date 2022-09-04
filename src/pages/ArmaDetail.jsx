import React, { useEffect } from 'react'
import { useState } from 'react'
import { Card, CardGroup, Col, Row } from 'react-bootstrap'
import { GiReturnArrow } from 'react-icons/gi'
import { Link, useParams } from 'react-router-dom'
import apiValorant from '../services/apiValorant'

const ArmaDetail = () => {

    const params = useParams()

    const [arma, setArma] = useState({})
    const [shop, setShop] = useState({})
    const [stat, setStat] = useState({})
    const [danos, setDanos] = useState([])
    const [skins, setSkins] = useState([])

    useEffect(() => {
        apiValorant.get('/weapons/' + params.id + '?language=pt-BR').then(resultado => {
            setArma(resultado.data.data);
            setShop(resultado.data.data.shopData);
            setStat(resultado.data.data.weaponStats);
            setDanos(resultado.data.data.weaponStats.damageRanges);
            setSkins(resultado.data.data.skins);
            console.log(resultado.data.data.skins);
        })
    }, [])

    return (
        <div>
            <h1 className='mt-5 text-light'>{arma.displayName}</h1>

            <Row>
                <Col md={4}>
                    <Card bg='danger'>
                        <Card.Img variant='top' src={arma.displayIcon} />
                    </Card>
                    <Link to={-1} className='btn btn-outline-danger mt-4 d-grid gap-2'> <strong> <GiReturnArrow /> VOLTAR </strong> </Link>
                </Col>
                <Col md={8}>
                    <p><strong className='text-light'>Categória: </strong> <strong className='text-danger'>{shop.categoryText}</strong> </p>
                    <p><strong className='text-light'>Valor da compra: </strong> <strong className='text-danger'>{shop.cost} $$</strong></p>
                    <p><strong className='text-light'>Taxa de disparo por segundo: </strong> <strong className='text-danger'>{stat.fireRate}</strong></p>
                    <p><strong className='text-light'>Tempo de recarga por segundo:</strong> <strong className='text-danger'>{stat.reloadTimeSeconds}</strong></p>
                    <p><strong className='text-light'>Tempo de recarga por segundo quando utilizado o multiplicador de velocidade: </strong> <strong className='text-danger'>{stat.runSpeedMultiplier}</strong></p>
                </Col>
            </Row>
            <Row>
                {danos.map(item => (
                    <Col md={4} className='mb-3 mt-3'>
                        <Card bg='danger'>
                            <Card.Body className='text-light fw-bolder'>
                                <Card.Text>Distância de {item.rangeStartMeters} m até {item.rangeEndMeters} m</Card.Text>
                                <Card.Text>Dano no corpo: {item.bodyDamage} </Card.Text>
                                <Card.Text>Dano na cabeça: {item.headDamage} </Card.Text>
                                <Card.Text>Dano na perna: {item.legDamage} </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <h1 className='text-light'>{arma.displayName} Skins</h1>

            <Row>
                {skins.map(item => (
                    <Col className='mt-3 mb-3' md={3} key={item.uuid}>
                        <Card bg='danger'>
                            <Card.Header className='text-light fw-bolder'>{item.displayName}</Card.Header>
                            <Card.Img variant='top' src={item.displayIcon} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default ArmaDetail