import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../componets/common.module.css";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../store/action/action";

import { useSelector } from "react-redux";

const Header = () => {
  const [price,setPrice] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    
  };
 
  const getCartData = useSelector(state => state.cart);
  console.log(getCartData);
  const removeItem = (data)=>{
    dispatch(deleteFromCart(data.id))
  }

  const total = ()=>{
    let price = 0;
    getCartData.map((data)=>{
      return price = ((data.price)* data.qnty) + price ;
    })
    setPrice(price);
  }
  
  useEffect(()=>{
    total();
  },[total])

  return (
    <>
      <Navbar bg="dark" variant="dark" className="py-3">
        <Container>
          <NavLink to="/" className="text-decoration-none text-white me-4">
            shopping cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-white">
              Home
            </NavLink>
          </Nav>
          <div className={styles.cartWrap}>
            <Badge
              badgeContent={getCartData.length > 0 ? getCartData.length : '0' }
              color="primary"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {" "}
              <i className="fa-solid fa-cart-plus"></i>
            </Badge>
          </div>
        </Container>
      </Navbar>
      <Menu
        className={styles.customMenu}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className={styles.cartDetails}>
           
            {getCartData.map((data)=> {
              return(
                <>
                <div className={styles.cartItemsWrap + " " + ['d-flex align-items-start my-3']}>
                  <div className="w-50">
                        <NavLink to={`/cart/${data.id}`} onClick={handleClose}><img src={data.imgdata} style={{width:'100%',height:'100px',borderRadius:'4px',objectFit:'cover'}}></img></NavLink>
                      </div>
                    <div className="w-50 ps-4">
                        <h6>{data.rname}</h6>
                        <p className="mb-1">Price:{data.price}</p>
                        <p className="mb-1">Quantity:{data.qnty}</p>
                        <p className="mb-1"><i className="fas fa-trash" onClick={()=> {removeItem(data)}} style={{color:'red',cursor:'pointer'}}></i></p>
                    </div>
                    
                </div>
                
                </>
              
              )
            })}
            {getCartData.length <= 0 && <p className="m-0"><b>Cart is Empty</b></p>}
            <i className={styles.closeIcon + "  "+ ['fas fa-close']}  onClick={handleClose}></i>
        </div>
        <div className="totalWrap">
               {getCartData.length > 0 && <p className="mb-1 px-3"><b>TOTAL: {price}</b></p>}
          </div>
       
        
      </Menu>
    </>
  );
};

export default Header;
