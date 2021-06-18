import React, { useState} from 'react';//para poder usar modales
import './Usuarios.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';
import Edit from './Edit'
import Eliminar from './Eliminar'
const Usuarios = (props) => {
    //usando deestructuring para 
    const [nombre, actualizarNombre] = useState(props.nombre);
    const [correo, actualizarCorreo] = useState(props.correo);
    const [activo2, actualizarActivo] = useState(props.activo);
    const [modalEdit, cambiarModal] = useState(false);
    const [modalEliminar, cambiarModal2] = useState(false);

    const clickEliminar = () => {
        // alert('Eliminar usuario' + props.id);
        cambiarModal2(true);
    };
    const clickeditar = () => {
        cambiarModal(true);
           
    };
    const guardarCambios = (infoFormInsert) => {
        const DatosForm = {
            ...infoFormInsert        
        };
        actualizarCorreo(DatosForm.correo);
        actualizarNombre(DatosForm.nombre);
    };
   

    const eliminarUsuario = (infoFormEliminar) => {
        const Datos = {
            ...infoFormEliminar
        };
        //Obtuvimos el id ahora tenemos que enviarlo a
        actualizarActivo(false);
        console.log(Datos.id +"en usuarios es "+ Datos.activo);
        const DatosForm = {
            activo: activo2,
            id:Datos.id
        };
        props.onDelUsuario(DatosForm);
    };
    const cerrarModal = (nuevoEstado) => {
        cambiarModal(false);
    };
    const cerrarModal2 = () => {
        cambiarModal2(false);
    };
    return (
        <div className="usuarios-cont">
            <div className="info">{props.id}</div>
            <div className="info">{nombre} </div>
            <div className="info">{correo}</div>
            <Button color="primary" onClick={clickeditar}>Editar</Button>
            <Button color="danger" onClick={clickEliminar}>Eliminar</Button>
            <Edit is_open={modalEdit} id={props.id} nombre={props.nombre} correo={props.correo} onGuardarCambios={guardarCambios} onCerrarModal={cerrarModal} />
            <Eliminar is_open={modalEliminar} id={props.id} nombre={props.nombre} correo={props.correo} onEliminarUsuario={eliminarUsuario} onCerrarModal={cerrarModal2}/>
        </div>
        );
}
export default Usuarios;