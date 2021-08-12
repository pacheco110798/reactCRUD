
import {useState} from 'react';
import ReactPlayer from 'react-player/lazy'
//import {Accordion }from 'react-bootstrap'

import { ListGroup, ListGroupItem,} from 'reactstrap';
function Modules() {
    

    const list = [{
        text: "Present tense",
        value: "1",
        src: "https://youtu.be/_TUKYWPuW4g"
    },
    {
        text: "Past tense",
        value: "2",
        src: "https://youtu.be/1HDvZsAFag4"
    },
    {
        text: "Future tense",
        value: "3",
        src: "https://youtu.be/VDGJEjAmmU4"
    },
    {
        text: "Passive voice",
        value: "4",
        src: "https://youtu.be/nRGLDD0BBdc"
    },
    {
        text: "Conditional voice",
        value: "5",
        src: "https://youtu.be/veTo6eWJQrM"
        }];
    const [url,setUrl]=useState(list[0].src);

    const handleClick=(ev) => {
        setUrl(ev.currentTarget.value);
        alert(ev.currentTarget.value);
      };
    return (
        <div>
            <ReactPlayer url={url}/>
            <ListGroup>           
            {list.map(
                (item) =>
                (
                 <ListGroupItem tag="button" value={item.src}  onClick={handleClick} href="#">{item.value+item.text}</ListGroupItem>
                )
            )}     
           </ListGroup>
             
        </div>
    );
}
export default Modules;