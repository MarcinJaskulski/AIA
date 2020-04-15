import React from 'react';
import ReactDOM from 'react-dom';
import add from './icon/add.png'
import './App.css';


class NewItem extends React.Component{

    constructor(){
        super()
        this.state = {
          id: -1,
          name: "",
          desc: "",
          volumes: 0,
          src: "",
          show: true

        }
        this.handleChange = this.handleChange.bind(this)
        // this.props.addManga.bind(this, this.state)
    }


    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        }) 
    }

    addBook = () => {
        console.log("NewItem-AddBook: ", this.state.id)
        this.setState((prevState) => {
            return ({
                id: -1,
                name: "",
                desc: "",
                volumes: 0,
                src: "",
                show: true
            }
            )
        })

        this.props.addManga(this.state)
    }

    render(){
        return(
            <div style={{textAlign: "center"}}>
                <h1 >
                    <b>Manga Collection </b>
                </h1>
                <form >
                    
                        <div>
                            <input name="name" 
                                placeholder="Name" 
                                value={this.state.name}
                                onChange={this.handleChange}

                                className="inputAddManga"
                                ></input>
                        </div>
                        <div>
                            <textarea name="desc" 
                                placeholder="Description" 
                                value={this.state.desc}
                                onChange={this.handleChange}
                                className="inputAddManga"
                                ></textarea>
                        </div>
                        <div>
                            <input name="volumes" 
                                placeholder="Volumes"  
                                pattern="[0-9]*" 
                                value={this.state.volumes}
                                onChange={this.handleChange}
                                className="inputAddManga"
                                
                                ></input>
                        </div>
                        <div>
                            <input name="src" 
                                placeholder="https://photo"  
                                onChange={this.handleChange} 
                                value={this.state.src}
                                className="inputAddManga"
                                ></input>
                        </div>
                        <input type="button" value="Add new manga" onClick={this.addBook}/> 
                </form>
            </div>
            
        )
    }
       
    


}


export default NewItem