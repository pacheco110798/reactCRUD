
import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Personas from'./Data';
import { Table, Button, Container } from 'reactstrap';
import Usuarios from './componentes/Usuarios';
import NuevoUsuario from './Nuevo/NuevoUsuario';
const App=()=> {

    const [usuarios, setUsuarios] = useState(Personas);
    const [noUsers, setNoUsuarios] = useState(usuarios.length+1);
   
   const handleNvoUsuario = (user) => {
       //console.log('App JS');
       setUsuarios(usuariosAnt => {
           return [ ...usuariosAnt,user];
       });
       setNoUsuarios(noUsers + 1);
       console.log(user);
       console.log(usuarios);
   };
    
    const handleDelUsuario = (userdel) => {         
        console.log(userdel.id + " en app es " + userdel.activo);
        const usuariosActivos = usuarios.filter((usuario)=> {
            return usuario.id != userdel.id;
        });
        setUsuarios(usuariosActivos);  

    }
   
        return (
            <div>
            <Container>
               
                <Table>
                    <th>
                        <tr>
                            <td><h3>Usuarios</h3> </td >
                    </tr>
                    </th>
                        <tbody>
                            {usuarios.map((elemento,index) => (
                                <tr>
                                    <td>
                                    <Usuarios
                                        key={elemento.id}
                                        id={elemento.id}
                                        nombre={elemento.nombre}
                                        correo={elemento.correo}
                                        onDelUsuario={handleDelUsuario}
                                        />
                                        </td>
                            </tr>
                        ))}
                        </tbody>    
                </Table>
                </Container>

                <NuevoUsuario onAddUsuario={handleNvoUsuario} nvoId={noUsers} />       
                
            
            </div>
        );
          
          
}

export default App;
