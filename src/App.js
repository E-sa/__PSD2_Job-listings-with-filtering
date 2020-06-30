import React from 'react';
import './App.scss';
// import myData from './data.json';


class App extends React.Component{
  render(){
    return <p></p>
  }
}


// class App extends React.Component{
//       constructor(props) {
//           super(props);
//           this.state = {
//           };
//         }
//       
//       render(){
//           return(
//              <div>     

                
//                 {/* profiles */}
//                 <div className="list-container">
//                   {  myData.map(function(item, i){
//                   return <div key={i} className="each">

//                                   {/* three columns ONE, TWO, THREE */}
//                                   {/* one */}
//                                   <div className="one">
//                                     <img src={require('' + item.logo) } alt="" />   
//                                   </div>
                                  
//                                   {/* two */}
//                                     <div className="two">     
//                                       <h6 className="company">{item.company} </h6>
//                                       {item.new && <p className="new" >new!</p>}
//                                       {item.featured && <p className="featured">featured!</p>}
//                                       <h5>{item.position}</h5>
//                                       <li className="time-contract-location">{item.postedAt}</li>
//                                       <li className="time-contract-location">{item.contract}</li>
//                                       <li className="time-contract-location">{item.location}</li>
//                                     </div>

//                                     {/* three */}
//                                     <div className="three">
//                                       {item.languages.map(function(skill, i){
//                                         return <li key={i} className="skill">{skill}</li>
//                                       })}                                      
//                                     </div> 

//                          </div>
//                   })} 

//                 </div>

//             </div>
//   )
//       }
//   }





export default App;
