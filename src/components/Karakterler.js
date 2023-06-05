import { useState } from 'react';
import Karakter from "./Karakter"
import { Accordion } from "reactstrap"

const Karakterler = (props) => {
    const { data } = props
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <div>
            {console.log(data)}

            <Accordion open={open} toggle={toggle}>
                {data.map((karakter, id) => (
                    <Karakter bilgi={karakter} id={id} />
                ))}
            </Accordion>
        </div>
    )


}

export default Karakterler