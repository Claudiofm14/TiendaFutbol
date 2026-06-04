import Header from "../components/Header.jsx";
import {useContext} from "react";
import {ProductContext} from "../context/ProductContext.jsx";
import {NavLink} from "react-router";
import {Card, Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {CartContext} from "../context/CartContext.jsx";


function Hombres() {
    const productos = useContext(ProductContext);
    const {agregarAlCarrito} = useContext(CartContext);
    return (
        <div>

            <Header/>


                    <Container className={"grid gap-3 d-flex justify-content-center mt-5"}>

                       <Row className={"gap-3  justify-content-center"}>
                           {productos.map(producto => (
                           <Col key={producto.id} xs={12} sm={6} md={4} lg={3}>
                                <Card style={{width: '18rem'}} className={"h-100"}>
                                    <Card.Img variant="top" src={producto.urlImagenTitular}/>
                                    <Card.Body>
                                        <Card.Title>{producto.nombre}</Card.Title>
                                    <Card.Text>
                                        {producto.precio}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => agregarAlCarrito()}>Añadir al carrito</Button>
                                    </Card.Body>


                                </Card>
                            </Col>
                              ))}
                       </Row>
                    </Container>

        </div>
    );
}

export default Hombres;