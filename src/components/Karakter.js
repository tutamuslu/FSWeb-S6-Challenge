// Karakter bileşeniniz buraya gelecek

import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';

const Karakter = (props) => {
    const {bilgi, id} = props

    return (
        <div>
            <AccordionItem>
              <AccordionHeader targetId={id}>{bilgi.name}</AccordionHeader>
              <AccordionBody accordionId={id}>
               <p>gender: {bilgi.gender}</p>
               <p>Height: {bilgi.height}</p>
               <p>Mass: {bilgi.mass}</p>
               <p>BirthYear: {bilgi.birth_year}</p>
               <p>Eye Color: {bilgi.eye_color}</p>
               <p>Hair Color: {bilgi.hair_color}</p>
               <p>Skin Color: {bilgi.skin_color}</p>
               <p>Appears in {bilgi.films.length} films</p>
              </AccordionBody>
            </AccordionItem>
        </div>
      );
    

} 

export default Karakter