import React from 'react';

class GstCalculator extends React.Component {
    constructor()
{
    super();
    this.state={
        total:"",
        name:"",
        gst: "",
        cgst:"",
        sgst:"",
        invoice:"",
        tgst:"",

    }
} 
handleTotal = (event) => {
    this.setState({
        total:event.target.value
    })
}
handleName = (event) => {
    this.setState({
        name:event.target.value
    })
}

handleGst = (event) => {
    this.setState({
        gst:event.target.value
    })
}

exe = (event) =>  {
    this.setState({invoice:parseInt(this.state.name) * parseInt(this.state.gst) / 100 });
    this.setState({cgst:parseInt(this.state.name) * parseInt(this.state.gst) / 100 / 2 });
    this.setState({tgst:parseInt(this.state.name)- (parseInt(this.state.name)* parseInt(this.state.gst) /100)})
    this.setState({totalamt:parseInt(this.state.total)-(parseInt(this.state.name)* parseInt(this.state.gst) /100) })

    
   
}


render () {
    return (
        <>
       <form className="form" style={{marginLeft:380}}>
       <div className="gst" >
        
        <h1>Gst Calculator</h1> <br/>
        <label>Total Amount : </label><br/>
         <input type="number" value={this.state.total} onChange={this.handleTotal} /> <br/>
        <label>Taxable Amount : </label><br/>
         <input type="number" value={this.state.name} onChange={this.handleName} /> <br/>
         <label>Gst % : </label><br/>
         <input type="number" value={this.state.gst} onChange={this.handleGst} /> <br/>

       
         <h3> Total Gst : {this.state.invoice} </h3>  
         <h3>Total Amount to Disbursed : {this.state.totalamt} </h3> 
         

         <div > <button className="btn btn-warning" type="button" style={{"margin":"10px"}} onClick={this.exe} >Submit</button>
         <button className="btn btn-danger" style={{"margin":"10px"}} onClick={() => window.location.reload(false)}>Reload</button>
         </div>
         </div>


         </form>
         

        </>
    )
}
}
export default GstCalculator;