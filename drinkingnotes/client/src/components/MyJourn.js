import React, {Component} from 'react';



class MyJour extends Component{

    state = {
        teaName: '',
        brew_style: '',
        aroma: '',
        head: '',
        body: '',
        tail: '',
        comments:''
    }

    onInputChange = event =>{
        this.setState(
            {[event.target.name]:event.target.value}
        )
    
    }




    render(){

        

        return(
            <div>
                <div className= "ui centered container">
                
                    <div className="ui large header center aligned">Tea Notes</div>
                                 

                <div className="content">
                    <form>
                        < div className = "ui vertical segment">
                            <h3 className="ui  header" > Name of Tea: </h3>
                                <input type="text" name="teaName" value= {this.state.teaName || ''} onChange = {this.onInputChange}/>
                                <br />
                            <h3 className="ui header"> Brewing Style: </h3>
                                <select name="brew_style" value = {this.state.brew_style} onChange = {this.onInputChange}>
                                    <option value="GongFu">Gong Fu</option>
                                    <option value="GrandPa">Grandpa Style</option>
                                    <option value="Western">Western</option>
                                    <option value="Other">I brew my own way</option>
                                </select>
                            <br />
                        </div>

                        < div className = "ui vertical segment">
                            <h3 className="ui header"> Aroma: What is the dominant smell of the tea? </h3>
                            
                            <select name="aroma" value = {this.state.aroma} onChange = {this.onInputChange}>
                                <option value="Animal/Fire">Animal/Fire</option>
                                <option value="Spicy">Spicy</option>
                                <option value="Fruity">Fruity</option>
                                <option value="Marine">Marine</option>
                                <option value="Mineral">Mineral</option>
                                <option value="Spicy">Spicy</option>
                                <option value="Earthy">Earthy</option>
                                <option value="Herbal">Herbal</option>
                                <option value="Floral">Floral</option>
                                <option value="Sweet">Sweet</option>
                            </select>

                            <h3 className="ui header">Testing Notes: How would you described the flavor profile?</h3>
                            
                            <div className="ui tiny header">Head Notes: What is your first impression?</div>
                            
                                <select name="head" value = {this.state.head} onChange = {this.onInputChange}>
                                    <option value="Animal/Fire">Animal/Fire</option>
                                    <option value="Spicy">Spicy</option>
                                    <option value="Fruity">Fruity</option>
                                    <option value="Marine">Marine</option>
                                    <option value="Mineral">Mineral</option>
                                    <option value="Spicy">Spicy</option>
                                    <option value="Earthy">Earthy</option>
                                    <option value="Herbal">Herbal</option>
                                    <option value="Floral">Floral</option>
                                    <option value="Sweet">Sweet</option>
                                </select>
                            
                            <div className="ui tiny header">Body Notes: What is the overall character of the tea? </div>
                                <select name="body" value = {this.state.body} onChange = {this.onInputChange}>
                                    <option value="Animal/Fire">Animal/Fire</option>
                                    <option value="Spicy">Spicy</option>
                                    <option value="Fruity">Fruity</option>
                                    <option value="Marine">Marine</option>
                                    <option value="Mineral">Mineral</option>
                                    <option value="Spicy">Spicy</option>
                                    <option value="Earthy">Earthy</option>
                                    <option value="Herbal">Herbal</option>
                                    <option value="Floral">Floral</option>
                                    <option value="Sweet">Sweet</option>
                                </select>
                            
                            <div className="ui tiny header">Tail Notes: What is the aftertaste?</div>
                                <select name="tail" value = {this.state.tail} onChange = {this.onInputChange}>
                                    <option value="Animal/Fire">Animal/Fire</option>
                                    <option value="Spicy">Spicy</option>
                                    <option value="Fruity">Fruity</option>
                                    <option value="Marine">Marine</option>
                                    <option value="Mineral">Mineral</option>
                                    <option value="Spicy">Spicy</option>
                                    <option value="Earthy">Earthy</option>
                                    <option value="Herbal">Herbal</option>
                                    <option value="Floral">Floral</option>
                                    <option value="Sweet">Sweet</option>
                                </select>

                            </div>

                            < div className = "ui hidden divider"> 
                            <h3 className="ui header"> How would you described your experience in your own words? </h3>
                            
                            <div className="field">
                                
                                <textarea name = 'comments'  value = {this.state.comments} onChange = {this.onInputChange}></textarea>
                            </div>
                            
                            
                            
                            
                            </div>
                        


                    </form>
                    </div>
                </div>

            </div>
        )


    }
}


export default MyJour