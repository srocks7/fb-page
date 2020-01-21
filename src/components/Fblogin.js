import React, { Component } from 'react'
import fr from './friends.png'
import {Input,Label, Button} from 'reactstrap'
export default class Fblogin extends Component {
    render() {
        return (
            <div>
                <div className="banner">

<div className="al">

<div className="heading">

  <h1><span className="font-weight-bold">facebook</span></h1>

</div>

<div className="ta">
  <table>
    <tr>
      <td >Email or Phone	</td>
      <td>Password</td>
    </tr>

    <tr>
      <td className="pr-3"><input type='text'/></td>
      <td className="pr-3"><input type='password'/></td>
      <button className="but">Log In</button>
    </tr>

    <tr>
      <td>&nbsp;</td>
      <td><a href='./demo'>Forgotten account?</a></td>
    </tr>
  </table>

</div>

</div>

</div>
<div className="left">

<h1 className="left-bod">Facebook helps you connect and share with the <br/>people in your life.</h1>
<img className="image" src={fr} alt='friends'/>

</div>

<div className="right">
<div className="right-bod">
<h1 className="font-weight-bold">Create an account</h1>
<h6 >It's quick and easy.</h6>

<div className="form">

<table>

<tr>
  <td className="pr-2 pt-2">
  <Input type='text' placeholder='First name'/>
  </td>
  <td className=" pt-2">
  <Input type='text' placeholder='surname'/>
  </td>  
</tr>
<tr>
  <td colSpan='2' className="pt-2">
    <Input type='text' placeholder='Mobile number or email address'/>
  </td>
</tr>
<tr>
  <td colSpan='2' className="pt-2">
    <Input type='text' placeholder='New password'/>
  </td>
</tr>
<Label className="pt-2 font-weight-bold text-muted">Birthday</Label>

<tr>
  <td colSpan='2' className="pr-2">
    <select>
      <option>Day</option>
    </select>
    &nbsp;
    <select>
      <option>Month</option>
    </select>
    &nbsp;
    <select >
      <option>Year</option>
    </select>
  </td>
  
</tr>
<Label className="pt-2 font-weight-bold text-muted">Gender</Label>



</table>

</div>


<div>&nbsp;&nbsp;
<input  type="radio" name="gender" value="Female"/> Female&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input  type="radio" name="gender" value="male"/> Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input   type="radio" name="gender" value="custom"/>Custom
</div>


<div className="para">
<p>
By clicking Sign Up, you agree to our Terms, Data Policy and <br/>Cookie Policy. You may receive SMS notifications from us and <br/>can opt out at any time.
</p>

</div>
<div>
<table >
  <tr>
    <td>
    <Button style={{width:'180px',backgroundColor:"#28B463 "}}>Sign Up</Button>
    
    </td>
  </tr>
</table>

</div>
<div>
<p className=" text-muted pt-2 font-weight-bold" style={{fontSize:'13px'}}>Create a Page for a celebrity, band or business.</p>
</div>


</div>


</div> 
            </div>
        )
    }
}
