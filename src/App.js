
import './assets/css/App.css';
import { Form, Col, Button, Navbar, Nav, FormControl } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
function App() {

  return (

    
    <div className="App-logo " style={{ backgroundColor: '#f7f7f7'}}>
      <div className="App" >

        <>
          <Navbar bg="light" variant="light" fixed="top">
            {/* <Navbar.Brand href="#home">Portfolio</Navbar.Brand> */}
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              {/* <Nav.Link href="#features">Features</Nav.Link> */}
              <Nav.Link href="#Contato">Contato</Nav.Link>
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form> */}
          </Navbar>
        </>
        <div id="contact-container">
          <div className="contact-info">
            <h4>Contatos</h4>
            <div className="icon-text">
              <FontAwesomeIcon icon={faPhone} /><span>11 91234-7890</span>
            </div>

            <div className="icon-text">
              <FontAwesomeIcon icon={faEnvelope} /><span>kumarsinghvivek79@gmail.com</span>
            </div>

           </div>
          <Form>
            <Form.Row >
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label style={{ color: "#3b5998" }}>Nome Completo</Form.Label>
                <Form.Control type="Name" placeholder="Enter name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{ color: "#3b5998" }}>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form.Row>

            <Form.Row >
            
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label style={{ color: "#3b5998" }}>Telefone</Form.Label>
                <Form.Control type="phone" placeholder="phone" />
              </Form.Group>
            
            <Form.Group as={Col} controlId="formGridState">
                <Form.Label style={{ color: "#3b5998" }}>Estado</Form.Label>
              <Form.Control as="select" defaultValue="Selecione...">
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </Form.Control>
            </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label style={{ color: "#3b5998" }}>Tipo de trabalho que procura?</Form.Label>
              <Form.Control placeholder="Pintor" />
            </Form.Group>

            <Form.Group id="formGridCheckbox">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{ color: "#3b5998" }}>Mensagem</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

            </Form.Group>

            <div className="d-grid gap-2">
            <Button style={{color:"#FFF", backgroundColor: "#3b5998"}} type="submit" >
              Enviar
            </Button>
            </div>
          </Form></div></div></div>
  );
}

export default App;
