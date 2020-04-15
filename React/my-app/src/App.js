import React from 'react';
import './App.css';
import NewItem from './NewItem';
import SearchItem from './SearchItem';
import SortItem from './SortItem';

import MangaList from './MangList';

import defaultData from './MangasData.json'

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      mangas: defaultData.Mangas,
      lastIndex: 2
    }
    
    // console.log(this.state.mangas)
  }

  incrementVolumes = (id) => {
    this.setState(prevState => {
      const updatedManga = prevState.mangas.map(man => {
        if (man.id === id) {
          if(man.volumes < 200){
            man.volumes = man.volumes + 1
          }
        }
        return man
      })
      return{manga: updatedManga }
    })
  }

  decrementVolumes = (id) => {
    this.setState(prevState => {
      const updatedManga = prevState.mangas.map(man => {
        console.log(man)
        if (man.id === id) {
          if(man.volumes > 0){
            man.volumes = man.volumes -1
            console.log("Teraz: " + id)
          }
        }
        return man
      })
      return{manga: updatedManga }
    })
  }

  deleteManga = (id) => {
    console.log("del: " + id)
    this.setState({
      mangas: this.state.mangas.filter((m) => m.id !== id)
    })       
  }

  addManga = (newManga) =>{

    newManga.id = this.state.lastIndex + 1
    newManga.volumes = parseInt(newManga.volumes)

    console.log("New: " + newManga.volumes)
    const oldMangas = this.state.mangas
    const newList = [newManga].concat(oldMangas)
    this.setState({
      mangas: newList,
      lastIndex: newManga.id
    }) 
  }

  searchManga = (showItem) =>{
    console.log("searchManga: " + showItem)
    this.setState(prevState => {
      const updatedManga = prevState.mangas.map(man => {
        // console.log("Name: " + man.name)

        const myReg = new RegExp(showItem, 'i')
        // console.log(myReg + " --- " + man.name.match(myReg) )


        if (man.name.match(myReg) === null && showItem !== "") {
          // if (man.name != showItem && showItem !== "") {
            man.show = false
            // console.log("NameFalse: " + man.name)
        }
        else{
          man.show = true
        }
        return man
      })
      return{manga: updatedManga }
    })
  }


  sortByName = () =>{
    this.setState(prevState => {
      const sortedManga = this.state.mangas.sort((a, b) => (a.name > b.name) ? 1 : -1)
      return {manga: sortedManga }
    })
  }

  sortByNameDesc = () =>{
    this.setState(prevState => {
      const sortedManga = this.state.mangas.sort((a, b) => (a.name < b.name) ? 1 : -1)
      return {manga: sortedManga }
    })
  }

  sortByDescription = () =>{
    this.setState(prevState => {
      const sortedManga = this.state.mangas.sort((a, b) => (a.desc > b.desc) ? 1 : -1)
      return {manga: sortedManga }
    })
  }

  sortByDescriptionDesc = () =>{
    this.setState(prevState => {
      const sortedManga = this.state.mangas.sort((a, b) => (a.desc < b.desc) ? 1 : -1)
      return {manga: sortedManga }
    })
  }

  sortByVolumes = () =>{
    this.setState(prevState => {
      const sortedManga = this.state.mangas.sort((a, b) => (a.volumes > b.volumes) ? 1 : -1)
      return {manga: sortedManga }
    })
  }

  sortByVolumesDesc = () =>{
    this.setState(prevState => {
      const sortedManga = this.state.mangas.sort((a, b) => (a.volumes < b.volumes) ? 1 : -1)
      return {manga: sortedManga }
    })
  }

   render(){
    return (
      <div className="Container" >
        <NewItem 
         addManga={this.addManga}
         />
         <SearchItem 
         searchManga={this.searchManga}
         />
         <table style={{width: "100%" }}>
          <SortItem
          sortByName={this.sortByName}
          sortByNameDesc={this.sortByNameDesc}
          sortByDescription={this.sortByDescription}
          sortByDescriptionDesc={this.sortByDescriptionDesc}
          sortByVolumes={this.sortByVolumes}
          sortByVolumesDesc={this.sortByVolumesDesc}
          /> 


          <tr>
                <td>
                    Title
                </td>
                <td>
                    Description
                </td>
                <td>
                    Volumes                     
                </td>
                <td>
                    Photo
                </td>
                <td>
                    Delete
                </td>
            </tr>


          
          <MangaList manga={this.state.mangas} 
            incrementVolumes={this.incrementVolumes} 
            decrementVolumes={this.decrementVolumes}
            deleteManga={this.deleteManga}
           
            />
        </table>


      </div>
      );
    }
}

export default App;
