
import React, { Component } from 'react'
import './App.css'
import fblog from'./fblogo.PNG'
import mypic from './mypic.PNG'
import req from './request.png'
import bell from './bell-icon.png'
import mess from './messanger.png'
import c from './c.PNG'
//import { Form, FormGroup } from 'reactstrap'
//import Fblogin from './components/Fblogin'
//import { Dropdown } from 'react-bootstrap'



export default class App extends Component {
  render() {
    return (
      <div >
     
     <div className= "hommebanner">
      <div className ="homealign">
        <div className="hometable"> 
        <table>
          <tr>
            <td>
            <img className="logoimage" src={fblog} alt='friends'/>
            </td>
            <td className="searchalignment">
              <input className="searchTerm" type='text' placeholder='Search'/>
            </td>
            <td className="hoverbutton">
              <button className="searchbutton"><i class="fa fa-search"></i></button>
            </td>
            
            
              <td className="Nametxt">
            <img className="pro" src={mypic} alt='friends'/>
            </td>
            <td className="Nametxt">
              Saim
              </td>
            
            
            <td className="Hometxt">
            Home
            </td>
            <td className="Createtxt">
            Create
            </td>
            <td className="friendrequest">
            <img className="pro" src={req} alt='friends'/>
            </td>
            <td className="messicon">
            <img className="pro" src={mess} alt='friends'/>
            </td>
            <td className="bellicon">
            <img className="pro" src={bell} alt='friends'/>
            </td>
            <td>
              
  <select className='drop'>
  <option className='dopOption' value="volvo"></option>
  <option className='dopOption' value="saab">Saab</option>
  <option className='dopOption' value="opel">Opel</option>
  <option className='dopOption' value="audi">Audi</option>
</select>
  
            </td>
            <td>
          
            </td>
            
          </tr>
         
        </table>

        </div>

      </div>
    </div>

    <div className='left-home-alignment'>
    <div className="left-home">
      
        <div className='post-heading'>
          <h6 className='font-weight-bold pl-2'>Create Post</h6>
          <hr className='post-opacity'/>
        </div>
        
        <div className="pl-1">
        <table>
          <tr>
            <td>
            <img className="c-thumbnail" src={c} alt='friends'/>
            </td>
            <td>
            <input className='mind' type='text' placeholder="What's on your mind, Saim?" />
            </td>
          </tr>
        </table>
        
        
         
         
        </div>
        <hr style={{textAlign:'center', margin:"0 15px 0 15px"}} />
      </div>

    </div>


    

    </div>
      
    )
  }
}


