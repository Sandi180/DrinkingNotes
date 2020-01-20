import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';



class Record extends Component{

    onClickHandler  = () =>{
        this.props.history.push("/myjourn")
    }

   
    onSeeList = () =>{
        console.log('this button works')
        fetch("http://localhost:4000/api/records")
        .then(res => res.json())
        .then(data => 
            console.log(data))
        .catch(error => console.log(error))
    }




   


    render(){
   
       

        return(<div class="ui raised very padded text container segment">

            <h2 class="ui header">Click the button below to create a note</h2>

            <button onClick= {this.onClickHandler}> Create a new note!</button>            

            <h2 class = "ui header"> Click the button to view all of the previous records</h2>

            <button onClick={this.onSeeList}>View Previous Records</button>

        </div>)


    }


}


export default Record