import React from 'react';
import classes from './OrderedMeal.module.css'

const OrderedMeal = (props) => {
 
  const mealsInfo= (<table className={classes.mealsTable}>
     <tr>
        <th>MEAL</th>
        <th>AMOUNT</th>
        <th>PRICE-UNITY</th>
      </tr>
    {props.meals.map((item) => (
      <tr>
        <td>{item.name}</td>
        <td>{item.amount}</td>
        <td>{item.price}</td>
      </tr>
     
      
      
     ))}
 </table>);



  return (
    
    <div className={classes.oneOrder}> 
     
     <section className={classes.clientSide}>
     <table className={classes.clientTable}>
       <tr>
         <th>Name</th>
         <td>{props.name}</td>
       </tr>
       <tr>
         <th>Adress</th>
         <td>{props.city},{props.street}</td>
       </tr>
       <tr>
         <th>PostalCode</th>
         <td>{props.postal}</td>
       </tr>
     </table>
      </section>

      <section>
      {mealsInfo}
      </section>
    </div>
  )
}

export default OrderedMeal