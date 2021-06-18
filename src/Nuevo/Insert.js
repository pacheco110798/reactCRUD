import 'bootstrap/dist/css/bootstrap.min.css';
import {  Button, Form, FormGroup ,Container} from 'reactstrap';
import React, { useState } from 'react';

const Insert = (props) => {  
    //Hooks para cvambiar el estado de los componentes
    const [nombreForm, setNombre] = useState('')
    const [correoForm, setCorreo] = useState('')
  
    const cambioNombre = (event) => {
        setNombre(event.target.value);
    };
    //
    const cambioCorreo = (event) => {
        setCorreo(event.target.value);
    } 
    const eventoSubmit = (event) => {
        //previene qe se recarge la página al enviar formulario
        event.preventDefault();
        const DatosForm = {
            nombre: nombreForm,
            correo: correoForm,

        };
        props.onGuardarNuevoUsuario(DatosForm);
        setCorreo('');
        setNombre('');
    };

    return (

        <Form onSubmit={eventoSubmit}>
            <Container>
            <div><h3>Insertar Usuario</h3></div>       
            <FormGroup>
                    <label>Id:</label>
                    <input className="form-control" readOnly type="text" value={ props.id} />
            </FormGroup>
            <FormGroup>
                    <label>Nombre</label>
                    <input className="form-control" name="nombre" type="text" value={nombreForm} onChange={cambioNombre} />
            </FormGroup>
            <FormGroup>
                    <label>Correo:</label>
                    <input className="form-control" name="correo" type="text" value={correoForm} onChange={cambioCorreo} />
                </FormGroup>
                <Button color="primary" type='submit'> Insertar</Button>
            </Container>
        </Form>
     );
}

export default Insert;