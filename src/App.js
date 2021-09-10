import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import MovieList from './MovieList.js';
import MovieAdd from './MovieAdd';
import Head from './Head';
import Description from './Description';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
function App() {
const intlist=[{id:uuidv4(),Title:'Gladiateur',trailer:'https://www.youtube.com/embed/owK1qxDselE', Description:'Le général romain Maximus est le plus fidèle soutien de lempereur Marc Aurèle, quil a conduit de victoire en victoire. Jaloux du prestige de Maximus, et plus encore de lamour que lui voue lempereur, le fils de Marc Aurèle, Commode, sarroge brutalement le pouvoir', PosterURL:'image03.jpg', Rating:2},
            {id:uuidv4(),Title:'Joker',trailer:'https://www.youtube.com/embed/OoTx1cYC5u8', Description:'Dans les années 1980, à Gotham City, Arthur Fleck, un comédien de stand-up raté est agressé alors quil ère dans les rues de la ville déguisé en clown. Méprisé de tous et bafoué, il bascule peu à peu dans la folie pour devenir le Joker, un dangereux tueur psychotique.', PosterURL:'image02.jpg', Rating:5},
            {id:uuidv4(),Title:'De Gaulle',trailer:'https://www.youtube.com/embed/Qh7VpkAXPFQ' ,Description:'Mai 1940. La guerre sintensifie, l\'armée française seffondre, les Allemands seront bientôt à Paris. La panique gagne le gouvernement qui envisage daccepter la défaite. Charles de Gaulle, fraîchement promu général, veut infléchir le cours de lHistoire. ', PosterURL:'image01.jpg', Rating:4}
            ]

const [list, setList] = useState(intlist)
const [Filter, SetFilter]=useState("")
const [Rate, setRate] = useState(0)

const handelfilter=(val)=>{SetFilter(val)}
const handelrate=(stars)=>{setRate(stars)}
const handelAdd=(valeur)=>{setList([...list, valeur])}
return(
  <BrowserRouter>
 <div className="App">
  <Container fluid>
  <Navbar  bg="dark"><h1 style={{color:"white"}}>Box Office</h1></Navbar>
  <Row>
 <Col >
 <Head handelfilter={handelfilter} handelrate={handelrate} ></Head>
 </Col>
 <Col md="auto"><MovieAdd handelAdd={handelAdd}></MovieAdd></Col>
 </Row>
<Row>

 <MovieList list={list.filter(elm=>elm.Title.trim().toLowerCase().includes(Filter.trim().toLowerCase()) && elm.Rating>=Rate)}>
 </MovieList>
 </Row>
 </Container>
 <Route exact path="/Description/:id" render={(props)=><Description {...props} list={list} /> }/>
  </div>
  </BrowserRouter>
)
}
export default App;
