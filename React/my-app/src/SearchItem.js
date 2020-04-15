import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class SearchItem extends React.Component{

    constructor(){
        super()
        this.state = {
          searchName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        }) 

        // console.log("SearchHandle: " + this.state.searchName)

        this.props.searchManga(value)
    }


    render(){
        return(
            <form style={{width: "100%"}} >
                <div className="divSearchName">
                    <input name="searchName" 
                        placeholder="Search" 
                        value={this.state.searchName}
                        onChange={this.handleChange}
                        className="serachInput"
                        ></input>
                </div>
                
            </form>
        )
    }
       
    


}


export default SearchItem