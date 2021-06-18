import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Modal } from 'reactstrap';
import React, { useState } from 'react';


const Eliminar = (props) => {
   
    const [esActivo, setActivo] = useState(props.activo)
    const eventoSubmit = (event) => {
        //previene qe se recarge la página al enviar formulario
        event.preventDefault();
        setActivo(false);
       const DatosForm = {
           id: props.id,
           activo: esActivo

        };
        props.onEliminarUsuario(DatosForm);
    
    };
    const closeModal = () => {
        props.onCerrarModal(false)

    }
    return (
        <Modal isOpen={props.is_open}>
            <Form onSubmit={eventoSubmit}>
                <div><h3>Eliminar Usuario</h3></div>
                <FormGroup>
                    <label>Id:</label>
                    <input className="form-control" readOnly type="text" value={props.id} />
                </FormGroup>
                <FormGroup>
                    <label>Nombre</label>
                    <input className="form-control" readOnly name="nombre" type="text" value={props.nombre}  />
                </FormGroup>
                <FormGroup>
                    <label>Correo:</label>
                    <input className="form-control" readOnly  name="correo" type="text" value={props.correo} />
                </FormGroup>
                <Button color="danger" type='submit'> Eliminar</Button>
                <Button color="primary" onClick={closeModal}> Cancelar</Button>
            </Form>
        </Modal>
    );

}

export default Eliminar;