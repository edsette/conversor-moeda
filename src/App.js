import React from "react";
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react';
import Conversor from "./components/Conversor";

function App() {

const gridStyle = {
  padding: "30px 30px"
}
  return (
  <Grid style={gridStyle} columns={6} centered>
    <Grid.Row>
      <Grid.Column>
        <Conversor moedaOrigem="USD" moedaDestino="BRL"></Conversor>
      </Grid.Column>
    </Grid.Row>

  </Grid>
)}

export default App;
