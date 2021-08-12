import CVsubstep from './cvsubstep';

function step5() {

    const list = [{
        text: "1)Nombre de Candidato en cabecera de CV",
        value: "1",
        autCan: true,
        autAdv: true
    },
    {
        text: "2) Nombre del Titulo de posicion a buscar adecuado",
        value: "2",
        autCan: false,
        autAdv: false
    },
    {
        text: "3) Link de GitHub (Solo developers)",
        value: "3",
        autCan: true,
        autAdv: false
    },
    {
        text: "4) Link de Portafolio en cabecera de CV",
        value: "4",
        autCan: false,
        autAdv: true
    },
    {
        text: "5) Numero Americano",
        value: "5",
        autCan: false,
        autAdv: false
        }];

    return (
        <div>
            {list.map(
                (step) =>
            (<CVsubstep text={step.text} autCan={step.autCan} autAdv={step.autAdv} value={step.value}/> )
           )}            
        </div>
    );
}
export default step5;