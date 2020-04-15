import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import plus from './icon/plus.png'
import minus from './icon/minus.png'
import trash from './icon/trash.png'

class Manga extends React.Component{


    render(){
        return(
            <tr className="row">
                <td>
                    {this.props.name}
                </td>
                <td>
                    {this.props.desc}
                </td>
                <td>
                    {this.props.volumes}
                    <input className="inputPng" type="image" src={minus} onClick={this.props.decrementVolumes.bind(this, this.props.id)}/>   
                    <input className="inputPng" type="image" src={plus} onClick={this.props.incrementVolumes.bind(this, this.props.id)}/>                         
                </td>
                <td>
                    <img className="photo" style={{maxWidth: "100px"}} src={this.props.src} alt="photo"></img>
                </td>
                <td>
                    <input className="inputPng" type="image" src={trash} onClick={this.props.deleteManga.bind(this, this.props.id)}/>   
                </td>
            </tr>
            )
    }
  
}

export default Manga;
