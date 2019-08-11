import React from "react";
import {CSS} from "electron-css";

export class OrderTable extends React.Component{
  constructor(props, context) {
        super(props, context);
        this.state = {
            orderList:this.props.orderList
        };
        this.elements=this.elements.bind(this);
        this.dec=this.dec.bind(this);
        this.inc=this.inc.bind(this);
  }
    inc(value,key){
        this.props.inc(key);
    }
    dec(value,key){
      this.props.dec(key);
    }

      elements() {
         let rows;
         if (this.state.orderList.size!==0){
             rows = Array.from(this.state.orderList,([key,value])=>{
                 return <tr key={key.id} className={row}>
                                         <td>
                                             {key.description}
                                         </td>
                                         <td>
                                             {value}
                                         </td>
                     <td>
                         <button onClick={(event) => this.inc(event,key)}  className={addButton}>+</button>
                         <button onClick={(event)=>this.dec(event,key)} className={removeButton}>-</button>
                     </td>
                 </tr>
             });


         }

         
         return(
              rows
        )
    }


    render() {
      return(
          <table style={table}>
                <thead>
                <tr>
                  <td>Description</td>
                  <td>Quantity</td>
                  <td>Operations </td>
                </tr>
              </thead>
              <tbody>
              {
                  this.elements()
              }

              </tbody>






          </table>


      )
  }


}

const table= CSS({
  borderCollapse: 'collapse',
  marginRight: '5px',
  width:'200px',
  resize: 'horizontal',
  overflow: 'auto',

});
const row = CSS({
  padding: '8px',
  textAlign: 'left',
  borderBottom:'1px solid black',
  onHover:{
    backgroundColor: '#f5f5f5'

}


});
const addButton= CSS({
  backgroundColor: '#3969af', /* Green */
  border: 'none',
  color: 'white',
  padding: '5px 10px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '20px',
  margin: '4px 2px',
  cursor: 'pointer',
  borderRadius: '4px'

});
const removeButton=CSS({
  backgroundColor: '#af2e2b', /* Green */
  border: 'none',
  color: 'white',
  padding: '5px 12px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '20px',
  margin: '4px 2px',
  cursor: 'pointer',
  borderRadius: '4px'

});
export default OrderTable;