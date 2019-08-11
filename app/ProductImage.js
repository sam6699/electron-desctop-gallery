import React from 'react'
import {CSS} from "electron-css";

export class ProductImage extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            list : this.props.list,
            url:this.props.url
        }
    }


    static getDerivedStateFromProps(props,state){
            if (state.list.length!==null){
                return(
                    {
                        list:props.list,
                        url:props.url
                    }
                )
            }

        return null;
    }
   test(){

           if (this.state.list.length>0)
           return <img src={this.state.url} alt="" className={banner}/>;
           else
           return <img src="" alt=""/>


   }

    render() {
        return(
            this.test()
            )
    }


}
const banner= CSS({
  width:'450px',
  height: '450px',
  marginLeft: '3px',
  resize: 'both'
});
export default ProductImage;
