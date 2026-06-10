import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const DropdownFilter = ({ orden, setOrden }) => {

    const handleSelect = (eventKey) => {
        if (eventKey) setOrden(eventKey);
    };


    return (
        <Nav className="me-auto">

            <NavDropdown title="Ordenar por:"   onSelect={handleSelect} >

                <NavDropdown.Item eventKey="Destacados">
                    Destacados
                </NavDropdown.Item>

                <NavDropdown.Item eventKey="Precio - Menor a Mayor">
                    Precio- Menor a Mayor
                </NavDropdown.Item>
                
                <NavDropdown.Item eventKey="Precio - Mayor a Menor">
                    Precio- Mayor a Menor
                </NavDropdown.Item>
                
            </NavDropdown>
            
        </Nav>
    )
}

export default DropdownFilter;


