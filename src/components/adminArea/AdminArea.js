import React, { useEffect,useState } from 'react';
import OrderedMeal from './OrderedMeal';
import db from '../../firebaseConfig';
import {collection, doc, getDocs} from 'firebase/firestore';
import classes from './AdminArea.module.css';
import lunch from '../../assets/lunch.png';
import clipboard from '../../assets/clipboard.png'


const AdminArea = () => {
  const[showOrder,setShowOrder]=useState(false);
  const[showMenu,setShowMenu]=useState(false);
  const[dashHome,setDashHome]=useState(true)
  const [ordersList,setOrderlist]=useState([]);
  const ordersCollection= collection(db,"orders");
  const mealsCollection=collection(db,"meals");

  useEffect(()=>{
   const getData= async ()=>{
     const data= await getDocs(ordersCollection);
     setOrderlist(data.docs.map((doc)=>({...doc.data(),id:doc.id})));


   }
   getData();
  }

  ,[]);

  const showmeorders=()=>{
    setShowOrder(true)
    setShowMenu(false)
    setDashHome(false)
  }
  const showmemenu =()=>{
    setShowOrder(false)
    setShowMenu(true)
    setDashHome(false)
  }
  const dashboeard=()=>{
    setShowMenu(false)
    setShowOrder(false)
    setDashHome(true)
  }

  const ordersInfo= (<div>
     {ordersList.map((item) => (
        <OrderedMeal
          key={item.id}
          city={item.city}
          meals={item.meals}
          name={item.name}
          postal={item.postal}
          street={item.street}
        />
      ))}
  </div>);

  return (
    <div className={classes.mainFrame}>

        <section className={classes.navBar}>
          <h1 className ={classes.dashy} onClick={dashboeard}>DASH <br/> board</h1>
          <img src={lunch} onClick={showmemenu}/>
          <img  src={clipboard} onClick={showmeorders}/>
          
        </section>

        <section className={classes.rightSection}>

            <div className={classes.searchBar}>
                <input />
                <img  alt='/'/>
            </div>
            {dashHome && <h1 className={classes.welcome}>WELCOME BACK BOSS ! </h1>}
            {showOrder && <span>
              <h1 className={classes.title}>ORDERS LIST</h1>
            <div className={classes.ordersArea}>
            
                {ordersInfo}
            </div>
              </span>}
        </section>
         

    </div>
   
  )
}

export default AdminArea;