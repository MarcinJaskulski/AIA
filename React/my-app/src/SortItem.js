import React from 'react';
import ReactDOM from 'react-dom';
import sort from './icon/sort-down.png'
import sortDesc from './icon/sort-ascending.png'
import './App.css';

class SortItem extends React.Component{
    render(){
        return(
            <tr >
                <td>
                    <input className="inputPng" type="image" src={sort} onClick={this.props.sortByName.bind()}/>
                    <input className="inputPng" type="image" src={sortDesc} onClick={this.props.sortByNameDesc.bind()}/>
                </td>
                <td>
                    <input className="inputPng" type="image" src={sort} onClick={this.props.sortByDescription.bind()}/>
                    <input className="inputPng" type="image" src={sortDesc} onClick={this.props.sortByDescriptionDesc.bind()}/>
                </td>
                <td>
                    <input className="inputPng" type="image" src={sort} onClick={this.props.sortByVolumes.bind()}/>
                    <input className="inputPng" type="image" src={sortDesc} onClick={this.props.sortByVolumesDesc.bind()}/>                        
                </td>
                <td>
                    
                </td>
                <td>
                    
                </td>
            </tr>
        )
    }
       
    


}


export default SortItem