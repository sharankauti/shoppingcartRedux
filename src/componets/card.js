import React,{useState} from "react";
import styles from "../componets/common.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Cards from 'react-bootstrap/Card';
import CardData from '../componets/cardData'
import { useDispatch } from "react-redux";
import {addToCart} from '../store/action/action'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
const Card = () => {

const [data,setData] = useState(CardData);
const [show,setShowToast] = useState(false);
const dispatch = useDispatch();
const addingToCart = (d)=>{
  dispatch(addToCart(d))
  setShowToast(true)
}
const closeToast = ()=>{
    setShowToast(false)
}
  return (
    <div className="container py-4">
      <h1 className={styles.title}>Availbale Items</h1>
      <Row>
        {data.map((d)=>{
          return(

          <Col sm={12} md={6} lg="4" className="mb-3" key={d.id}>
          <Cards className={styles.customCard}>
            <Cards.Img className={styles.cardImg} variant="top" src={d.imgdata} />
            <Cards.Body>
              <Cards.Title>{d.rname}</Cards.Title>
              <Cards.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Cards.Text>
              <Button variant="outline-info" onClick={() => addingToCart(d)}>Add To Cart</Button>
            </Cards.Body>
          </Cards>
        </Col>
          )
          
        }  )}
        
      </Row>
      {show && <ToastContainer position="top-center" ><Toast onClose={setTimeout(()=>closeToast(),1400)}>
          <Toast.Header bg="Success">
           
            <strong className="me-auto" style={{color:'black',borderBottom:'3px solid green',fontStyle:'italic',width:'100%'}}>Item Added to Cart</strong>
          </Toast.Header>
         
        </Toast></ToastContainer>}
      
    </div>
  );
};

export default Card;
