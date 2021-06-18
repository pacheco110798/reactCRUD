import React from 'react';
import Insert from './Insert';

const NuevoUsuario = (props) => {
    const Userid = props.nvoId;
    const guardarInfoUsuario = (infoFormInsert) => {
        const DatosForm = {
            ...infoFormInsert,
            id: Userid
        };
        props.onAddUsuario(DatosForm);
    };

    return (
        <div>
            <Insert id={Userid} onGuardarNuevoUsuario={guardarInfoUsuario} />
        </div>
        );
};
export default NuevoUsuario;