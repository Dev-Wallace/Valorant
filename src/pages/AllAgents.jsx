import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GiInfo } from "react-icons/gi";
import apiValorant from '../services/apiValorant'

const AllAgents = () => {

    const [agentes, setAgentes] = useState([])

    useEffect(() => {
        apiValorant.get('/agents?language=pt-BR').then(resultado => {
            setAgentes(resultado.data.data);
            console.log(resultado.data.data.displayName);
        })
    }, [])

    return (
        <div>

            <h1 className='mt-5 text-light'>Listagem de agentes</h1>

            {!agentes.length && <h1>Carregando... Aguarde</h1>}

            <Row>
                {agentes.map(item => (
                    <Col key={item.uuid} md={3} className='mb-3'>
                        <Card className='h-100 mt-2' border='danger'>
                            <Card.Header className='bg-danger text-light' as='h3'>{item.displayName}</Card.Header>
                            <Link to={'/agentes/' + item.uuid}>
                                <Card.Img title={item.displayName} variant='top' src={item.displayIcon} />
                            </Link>
                            <Card.Body>
                                <Card.Text> <strong>Apelido: </strong> {item.developerName}</Card.Text>
                                <Link className='btn btn-danger text-light' to={'/agentes/' + item.uuid}> <strong> <GiInfo /> SAIBA MAIS</strong> </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default AllAgents