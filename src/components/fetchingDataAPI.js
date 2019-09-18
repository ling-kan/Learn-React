import React, {Component} from "react" //conditional - can only use one type of react


class fetchingDataAPI extends Component {
    constructor(){
            super()
            this.state = {
              loading: false,
              character: {}
            }
          }
        
        
        componentDidMount(){
            this.setState({loading:true})
            fetch("https://swapi.co/api/people/1")
                .then(response => response.json())
                .then(data => { 
                  this.setState({
                  character : data,
                  loading: false
                })
              })
        }
        

  render(){
    //add loading before return 
    const textName = this.state.loading ? "loading..." : this.state.character.name
    const textBirth = this.state.loading ? "loading..." : this.state.character.birth_year
  
    return(
      <div>

        <p> Name: {textName} </p>
        <p> Birth: {textBirth} </p>
      </div> 
    )
  }
}

export default fetchingDataAPI