import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { GiReturnArrow } from "react-icons/gi";
import apiValorant from '../services/apiValorant'

const AgentDetail = () => {

    const params = useParams()

    const [agente, setAgente] = useState({})
    const [funcao, setFuncao] = useState({})
    const [habilidade, setHabilidade] = useState([])

    useEffect(() => {
        apiValorant.get('/agents/' + params.id + '?language=pt-BR').then(resultado => {
            setHabilidade(resultado.data.data.abilities);
            setFuncao(resultado.data.data.role);
            setAgente(resultado.data.data);
        })
    }, [])


    return (
        <div>
            <h1 className='mt-5 text-light'>{agente.displayName}  </h1>


            <Row>
                <Col md={4}>
                    <Card border='danger'>
                        <Card.Img variant='top' src={agente.bustPortrait} />
                    </Card>
                    <Link to={-1} className='btn btn-outline-danger mt-3 d-grid gap-2'><strong> <GiReturnArrow /> VOLTAR</strong></Link>
                    <p ><strong className='text-light'>Sobre{agente.displayName}: </strong>  <strong className='text-danger'>{agente.description}</strong> </p>
                </Col>
                <Col md={8}>
                    <p ><strong className='text-light'>Apelido: </strong>  <strong className='text-danger'>{agente.developerName}</strong></p>
                    <p ><strong className='text-light'>Função: </strong>  <strong className='text-danger'>{funcao.displayName}</strong></p>
                    <p ><strong className='text-light'>Descrição {funcao.displayName} : </strong>  <strong className='text-danger'>{funcao.description}</strong></p>
                    {habilidade.map(item => (
                        <div>
                            <p ><strong className='text-light'>Habilidade: </strong> <span className='text-danger fw-bolder'>{item.displayName}</span> </p>
                            <p ><strong className='text-light'>Descrição {item.displayName} | {item.slot} : </strong> <span className='text-danger fw-bolder'>{item.description}</span> </p>
                        </div>
                    ))}
                    <p></p>
                </Col>
            </Row>

        </div>
    )
}

export default AgentDetail