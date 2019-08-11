import * as React from "react";
import {CSS} from 'electron-css';

export class Products extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.select=this.select.bind(this);
        this.state={
            page : this.props.page,
            catList:[]
        };
    }
     select(e){
       this.props.onChange(e.currentTarget.dataset.img_id);
    }



    render() {
        let counter=-1;
        return(
            <div className={style}>
                {
                    this.props.list.map((item)=>{
                        counter++;
                        return(
                            <img src={item.urls.raw} alt="" data-img_id={counter} onClick={this.select} className={product} key={counter}/>
                            )
                    })
                },


            </div>
        );
    }

}

const style = CSS({
    display: 'grid',
    gridTemplateColumns: '100px 100px 100px 100px 100px',
    gridTemplateRows: '100px',
    gridRowGap: '3px',
    gridColumnGap: '3px',
    // resize: 'horizontal'

});
const product = CSS({
    width: '100px',
    height: '100px',
    // resize: 'both',
});
export default Products;