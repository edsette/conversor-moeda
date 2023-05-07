import React, {useState} from 'react';
import {Button, Card, Form, Input} from 'semantic-ui-react'

const Conversor = ({moedaDestino, moedaOrigem}) =>  {

  const [loading, setLoading] = useState(false);
  const [valor, setValor] = useState(0);
  const [cotacao, setCotacao] = useState(0);

  const mudarValor = (e, {value}) => {
    setValor(value)
  };

    const convert = async function(){

      setLoading(true);
      const url = `https://api.freecurrencyapi.com/v1/latest?apikey=abCRry168G60uFnLXGW3Xxy6syD9pHp8e088QqFk&currencies=${moedaOrigem}%2C${moedaDestino}`;
      const response = await fetch(url);
      const result = await response.json();
      const resultdata = await result.data
    
      console.log(response);
      console.log(result);
      console.log(resultdata);
      setLoading(false);
      setCotacao(result[`{moedaOrigem}%2C${moedaDestino}`])
    };

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
        <Button color='green' fluid loading={loading} onClick={convert}>
          Converter
        </Button>
      </Card.Content>
    </Card>
  )
}

export default Conversor;