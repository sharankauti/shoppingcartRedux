import React,{useEffect,useState} from "react";
import styles from '../componets/common.module.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useParams,useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";
import { deleteFromCart,addToCart,deleteIndiviual } from "../store/action/action";

const CardDetails = ()=>{
    const [data,setData] = useState([])
    const [price,setPrice] = useState(0)
    const {id} = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const getData = useSelector(state => state.cart)
    
    const compareIds = ()=>{
        let clickedIdData = getData.filter((e)=> {
            return e.id == id
        })
        setData(clickedIdData);
    }

    const deleteHandler = (data)=>{
        dispatch(deleteFromCart(data.id))
        navigate('/')
    }
    


    const addingToCart = (d)=>{
        dispatch(addToCart(d))
      }
   const deleteParticular = (d)=>{
        dispatch(deleteIndiviual(d))
   }
   const total = ()=>{
    let price = 0;
    getData.map((data)=>{
      return price = ((data.price)* data.qnty) + price ;
    })
    setPrice(price);
  }

  useEffect(()=>{
    compareIds()
    total()
},[id,price,addingToCart,deleteParticular])

    return(
        <div className="container py-4">
            <h1 className={styles.title}>Selected Item details</h1>
            <section className="itemsWrap">
                {data.map((data)=> {
                    return(
                        <Row className={styles.customCard +" "+ ['d-flex p-3']}>
                        <Col  sm={12} lg={4}>
                            <img className={styles.cardDetailImg} src={data.imgdata}/>
                        </Col>
                        <Col  sm={12} lg={4}>
                            <div className="itemDetailsWrap">
                                <p><b>Restaurnt name: {data.rname}</b></p>
                                <p><b>Price: {data.price}</b></p>
                                <p><b>Total: {price}</b></p>
                                <p><b>Dishes: {data.address} </b></p>
                            </div>
                            <div className="quantityWrap d-flex align-items-center">
                                <div className={styles.box} onClick={data.qnty <=1 ?() => deleteHandler(data) : ()=> deleteParticular(data)}><span>-</span></div>
                                <div className={styles.box}><span>{data.qnty}</span></div>
                                <div className={styles.box} onClick={()=>addingToCart(data)}><span>+</span></div>
                            </div>
                        </Col>
                        <Col  sm={12} lg={4}>
                            <div className="itemDetailsWrap">
                                <p><b>Rating: <span style={{color:'red'}}>{data.rating} ★</span></b></p>
                                <p><b>Order Reviews: <i>{data.somedata}</i></b></p>
                                <p><b>Remove: <i className="fas fa-trash" onClick={() => deleteHandler(data)}></i></b></p>
                            </div>
                        </Col>
                    </Row>
                    )
                })}
        
               
              
            </section>
        </div>
    )
}

export default CardDetails;