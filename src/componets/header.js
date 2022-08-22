import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../componets/common.module.css'
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';

const Header = ()=>{
    return(
        <>
             <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                <NavLink to='/'>shopping cart</NavLink>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
                <div className={styles.cartWrap}>
                    <Badge badgeContent={4} color="primary">  <i className="fa-solid fa-cart-plus"></i></Badge>
                </div>
                </Container>
      </Navbar>
        </>
    )
}

export default Header