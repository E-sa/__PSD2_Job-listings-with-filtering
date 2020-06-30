import React from 'react';
import './App.scss';
import myData from './data.json';

import Search from './search'





class Filter extends React.Component{
      constructor(props) {
          super(props);
          this.state = {
            filter : "",
            //all tags that submited on input are here (arr)
            arr: [],


          };
        }


//input onChange
  typed = (e) => {
      this.setState({filter: e.target.value});
  }


  //close little filter tag and remove them from arr
  close = (e) =>{

    var array = [...this.state.arr]; // make a separate copy of the array
    var index = array.indexOf(e.currentTarget.value)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({arr: array});
    }


  }
      

  //submit
  go = (e) => {



     this.setState(previousState => ({
        arr: [...previousState.arr, this.state.filter],
        filter : '' 

    }), () => {
      this.filterNow();
        });

        

  }


  filterNow (){
   
    const arr = this.state.arr
    //all arrays in myData that 'maches' to arr are here(filterArr)
    var filterArr = []


    //find subset
    myData.map(function(item, index){
      var i = 0; 
      var j = 0; 
      for (i = 0; i < arr.length; i++) 
      
      { 
          for (j = 0; j < item.languages.length; j++)   
          { 
              if(arr[i] === item.languages[j]) 
                  break; 
          } 
            
          /* If the above inner loop was 
          not broken at all then arr2[i] 
          is not present in arr1[] */
          if (j === item.languages.length) 
              return (<div>sala,</div>); 
      } 
        
      /* If we reach here then all 
      elements of arr2[] are present 
      in arr1[] */


      
      filterArr.push(item);

      return
          
      })

      //render things in filterArr
      const ultimate =  filterArr.map(function(item, i){
        return <div key={i} className="each">

                        {/* three columns ONE, TWO, THREE */}
                        {/* one */}
                        <div className="one">
                          <img src={require('' + item.logo) } alt="" />   
                        </div>
                        
                        {/* two */}
                          <div className="two">     
                            <h6 className="company">{item.company} </h6>
                            {item.new && <p className="new" >new!</p>}
                            {item.featured && <p className="featured">featured!</p>}
                            <h5>{item.position}</h5>
                            <li className="time-contract-location">{item.postedAt}</li>
                            <li className="time-contract-location">{item.contract}</li>
                            <li className="time-contract-location">{item.location}</li>
                          </div>

                          {/* three */}
                          <div className="three">
                            {item.languages.map(function(skill, i){
                              return <li key={i} className="skill">{skill}</li>
                            })}                                      
                          </div> 

               </div>
        })
      return(ultimate)
      

  }




      render(){
          return(
      <div>
              <div className="form-group">

                <input 
                  type="text" 
                  className="form-control" 
                  id="usr"
                  onChange={this.typed} 
                  value={this.state.filter}
                  />

                
                <button type="button" className="btn" onClick={this.go}>Go !</button>
              </div>

              <div className="filter">
                  {this.state.arr.map((text, i) => {
                    return (
                             <div key={i} >
                                <li>{text}</li>
                                <button value={text} onClick={this.close}> <strong>x</strong></button>
                             </div>
                            )
                  })}
              </div>
              <Search arr = {this.state.arr}/>
              <div>{this.filterNow()}</div>          

      
      </div>
  )
      }
  }



export default Filter;

