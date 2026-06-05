import { useState } from 'react';
import Container from "react-bootstrap/Container";
import {Alert, Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Form} from "react-bootstrap";


function Formulario(){
    // 1. Estado para almacenar los datos del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        direccion: '',
        metodoEntrega: 'envio', // Valor por defecto
        mensaje: ''
    });

    // 2. Estado para manejar los errores de cada input
    const [errores, setErrores] = useState({});

    // 3. Estado para mostrar la alerta general de éxito o error
    const [alerta, setAlerta] = useState(null);

    // Función para actualizar el estado cuando el usuario escribe
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Función para validar los campos
    const validarFormulario = () => {
        let nuevosErrores = {};

        if (!formData.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio';
        if (!formData.apellido.trim()) nuevosErrores.apellido = 'El apellido es obligatorio';
        if (!formData.direccion.trim()) nuevosErrores.direccion = 'La dirección es obligatoria';
        if (!formData.mensaje.trim()) nuevosErrores.mensaje = 'El mensaje no puede estar vacío';

        if (!formData.email.trim()) {
            nuevosErrores.email = 'El email es obligatorio';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            nuevosErrores.email = 'El formato de email no es válido';
        }

        return nuevosErrores;
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue

        const erroresValidacion = validarFormulario();

        if (Object.keys(erroresValidacion).length > 0) {
            setErrores(erroresValidacion);
            setAlerta({ tipo: 'error', texto: 'Por favor, completá correctamente todos los campos.' });
        } else {
            setErrores({});
            setAlerta({ tipo: 'exito', texto: '¡Mensaje enviado con éxito! Nos contactaremos pronto.' });


            console.log('Datos enviados:', formData);


            setFormData({
                nombre: '',
                apellido: '',
                email: '',
                direccion: '',
                metodoEntrega: 'envio',
                mensaje: ''
            });

            setTimeout(() => setAlerta(null), 4000);
        }
    };
    return(
        <Container className="my-5 p-4 bg-white rounded shadow-sm border" style={{ maxWidth: '800px' }}>
            <h2 className="mb-4 text-center fw-bold text-dark">Contactanos</h2>

            {/* Uso del componente Alert de Bootstrap */}
            {alerta && (
                <Alert variant={alerta.tipo === 'error' ? 'danger' : 'success'} className="text-center fw-medium">
                    {alerta.texto}
                </Alert>
            )}

            {/* 'noValidate' evita las bombitas feas nativas de HTML y nos deja usar las de Bootstrap */}
            <Form onSubmit={handleSubmit} noValidate>

                {/* Fila: Nombre y Apellido */}
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="formNombre" className="mb-3 mb-md-0">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            isInvalid={!!errores.nombre} // Activa el estilo rojo de Bootstrap si hay error
                        />
                        {/* Mensaje de error, Bootstrap lo muestra solo cuando isInvalid es true */}
                        <Form.Control.Feedback type="invalid">
                            {errores.nombre}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="formApellido">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            isInvalid={!!errores.apellido}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errores.apellido}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                {/* Fila: Email */}
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errores.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errores.email}
                    </Form.Control.Feedback>
                </Form.Group>


                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="formDireccion" className="mb-3 mb-md-0">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control
                            type="text"
                            name="direccion"
                            value={formData.direccion}
                            onChange={handleChange}
                            isInvalid={!!errores.direccion}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errores.direccion}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="formMetodoEntrega">
                        <Form.Label>Metodo de entrega preferido</Form.Label>
                        <Form.Select
                            name="metodoEntrega"
                            value={formData.metodoEntrega}
                            onChange={handleChange}
                        >
                            <option value="envio">Envío a domicilio</option>
                            <option value="retiro">Retiro por sucursal</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                {/* Fila: Mensaje */}
                <Form.Group className="mb-4" controlId="formMensaje">
                    <Form.Label>Mensaje o Consulta</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        isInvalid={!!errores.mensaje}
                        style={{ resize: 'none' }}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errores.mensaje}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Botón */}
                <Button variant="primary" type="submit" className="w-100 py-2 fw-bold" style={{ backgroundColor: '#0076ce' }}>
                    Enviar Consulta
                </Button>

            </Form>
        </Container>
    )
}

export default Formulario;