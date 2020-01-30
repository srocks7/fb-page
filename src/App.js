
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
  constructor(props){
    super(props);
    this.state={
      name:'hi'
    };
    
  }
 changeName=()=> {
   this.setState({name:"hello"});
 }
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
              <button className="searchbutton" onClick={this.changeName}><i class="fa fa-search"></i></button>
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
    <h6 className='font-weight-bold pl-2'>Create Post {this.state.name}</h6>
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

      <div className='right-home-alignment'>
        <div className="right-home">
          <table>
            <tr>
              <td>
              <h6 style={{opacity:'0.8'}} className=' mt-2 ml-2'>Friend Request</h6>
              </td>
              <td>
                <a style={{color:'blue', marginLeft:'115px'}} href='#/'>See All</a>
              </td>
            </tr>
          </table>
         
          <div className='languages'>
            <table style={{fontSize:'12.5px',margin:'10px'}}>
              <tr>
                <td style={{opacity:'0.5'}}>English (US) · </td>
                <td><a style={{color:'#0000FF'}} href='#/'> हिन्दी. </a></td>
                <td><a style={{color:'#0000FF'}} href='#/'> العربية. </a></td>
                <td><a style={{color:'#0000FF'}} href='#/'> پښتو. </a></td>
                <td><a style={{color:'#0000FF'}} href='#/'> اردو </a></td>
                <td className="pl-5"><button className="plus-button" ><i class="fa fa-plus"></i></button></td>

              </tr>
            </table>
          
          
         </div>
        </div>
        
       

      </div>
      
    </div>

    <div className="sidebar-alignment">
        <div className='right-sidebarchat'>
         <div>
         <table>
           <div className='users'>
           <tr>
              
              <td style={{fontSize:'30px',padding:'5px'}} className='fa fa-user-circle'>
              </td>
              <td className="text-user">&nbsp;ABCDEFG</td>
              <td><span class="dot"></span></td>
         </tr>
           </div>
           <div className='users'>
           <tr>
              
              <td style={{fontSize:'30px',padding:'5px'}} className='fa fa-user-circle'>
              </td>
              <td className="text-user">&nbsp;ABCDEFG</td>
              <td><span class="dot"></span></td>
         </tr>
           </div>
           <div className='users'>
           <tr>
              
              <td style={{fontSize:'30px',padding:'5px'}} className='fa fa-user-circle'>
              </td>
              <td className="text-user">&nbsp;ABCDEFG</td>
              <td><span class="dot"></span></td>
         </tr>
           </div>
           <div className='users'>
           <tr>
              
              <td style={{fontSize:'30px',padding:'5px'}} className='fa fa-user-circle'>
              </td>
              <td className="text-user">&nbsp;ABCDEFG</td>
              <td><span class="dot"></span></td>
         </tr>
           </div>
           <div className='users'>
           <tr>
              
              <td style={{fontSize:'30px',padding:'5px'}} className='fa fa-user-circle'>
              </td>
              <td className="text-user">&nbsp;ABCDEFG</td>
              <td><span class="dot"></span></td>
         </tr>
           </div>
           <div className='users'>
           <tr>
              
              <td style={{fontSize:'30px',padding:'5px'}} className='fa fa-user-circle'>
              </td>
              <td className="text-user">&nbsp;ABCDEFG</td>
              <td><span class="dot"></span></td>
         </tr>
           </div>
           <div className='users'>
           <tr>
              
              <td style={{fontSize:'30px',padding:'5px'}} className='fa fa-user-circle'>
              </td>
              <td className="text-user">&nbsp;ABCDEFG</td>
              <td><span class="dot"></span></td>
         </tr>
           </div>
           <div className='users'>
           <tr>
              
              <td style={{fontSize:'30px',padding:'5px'}} className='fa fa-user-circle'>
              </td>
              <td className="text-user">&nbsp;ABCDEFG</td>
              <td><span class="dot"></span></td>
         </tr>
           </div>
           <div className='users'>
           <tr>
              
              <td style={{fontSize:'30px',padding:'5px'}} className='fa fa-user-circle'>
              </td>
              <td className="text-user">&nbsp;ABCDEFG</td>
              <td><span class="dot"></span></td>
         </tr>
           </div>
           <div className='users'>
           <tr>
              
              <td style={{fontSize:'30px',padding:'5px'}} className='fa fa-user-circle'>
              </td>
              <td className="text-user">&nbsp;ABCDEFG</td>
              <td><span class="dot"></span></td>
         </tr>
           </div>
           <div className="user-search">
             <tr>
               <td style={{opacity:'0.5'}}   className="fa fa-search">
                 
               </td>
              <td>
              <input style={{width:'90px', border:'none',backgroundColor:'#F5F5F5',opacity:'0.7',paddingLeft:'2px'}} type='text' placeholder='search'/>
              </td>
              <td style={{opacity:'0.5'}} className="fa fa-cog "> </td>
              <td style={{opacity:'0.5'}} className="fa fa-edit pl-2"> </td>
              <td style={{opacity:'0.5'}} className="fa fa-users pl-2"></td>
              
             </tr>
           </div>
        

             
            </table>
         </div>
          </div>

        </div>
    

    </div>
      
    )
  }
}


