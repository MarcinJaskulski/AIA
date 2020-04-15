import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Manga from './Manga';

class MangaList extends React.Component{
    render() {
        // console.log(this.props.manga)        
        return this.props.manga.map(data => data.show == true ?
            (
            <Manga key={data.id} id={data.id} name={data.name} desc={data.desc} volumes={data.volumes} src={data.src} 
                incrementVolumes={this.props.incrementVolumes} 
                decrementVolumes={this.props.decrementVolumes}
                deleteManga={this.props.deleteManga}
                
                />         
        ): null
        );
    }
}


export default MangaList;