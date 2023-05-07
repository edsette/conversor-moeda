import React, {useState} from 'react';
import {Button, Card, Form, Input} from 'semantic-ui-react'

const Conversor = ({moedaDestino, moedaOrigem}) =>  {

  const [loading, setLoading] = useState(false)
  const [valor, setValor] = useState(0)
  const [cotacao, setCotacao] = useState(5.36)

  const mudarValor = (e, {value}) => {
    setValor(value)
  }

  return (
    <Card>
      <Card.Content>
        <Card.Header>Conversor de Moeda</Card.Header>
        <Card.Meta>Cotação Atual</Card.Meta>
        <Card.Description>
          <Form>
            <Form.Field>
              <label>{moedaOrigem}</label>
              <Input type='text' placeholder='Valor' onChange={mudarValor} value={valor}></Input>
            </Form.Field>


            <Form.Field>
              <label>{moedaDestino}</label>
              <label>{(valor*cotacao).toFixed(2)}</label>
            </Form.Field>

          </Form>
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Button color='green' fluid>
          Converter
        </Button>
      </Card.Content>
    </Card>
  )
}

export default Conversor;