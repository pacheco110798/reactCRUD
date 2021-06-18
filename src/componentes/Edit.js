import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup , Modal} from 'reactstrap';
import React, { useState } from 'react';


const Edit = (props) => {
    //Hooks para cvambiar el estado de los componentes
    const [nombreForm, setNombre] = useState(props.nombre)
    const [correoForm, setCorreo] = useState(props.correo)
    const [idForm, setID] = useState(props.id)

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
            id: idForm
        };
        props.onGuardarCambios(DatosForm);
        setCorreo('');
        setNombre('');
    };
    const closeModal = () => {
        props.onCerrarModal(false)

    }

    return (
        <Modal isOpen={ props.is_open}>
                <Form onSubmit={eventoSubmit}>
                    <div><h3>Insertar Usuario</h3></div>
                    <FormGroup>
                    <label>Id:</label>
                    <input className="form-control" readOnly type="text" value={idForm} />
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
                <Button color="danger" onClick={closeModal}> Cancelar</Button>
                </Form>
            </Modal>
        );
    
}

export default Edit;