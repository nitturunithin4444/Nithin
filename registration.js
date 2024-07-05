import React from 'react';
function Register()
{
    return(
    <div>
    <legend class="col-form-label col-sm-2 pt-0">Registration form</legend>
        <input type="text" class="form-control" placeholder="First name" aria-label="First name"></input><br></br>
        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"></input><br></br>
        <input type="text" class="form-control" placeholder="Mother name" aria-label="First name"></input><br></br>
        <input type="text" class="form-control" placeholder="Father name" aria-label="First name"></input><br></br>
        <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"></input>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"></input>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Address"></input>
  </div>
  <input type="text" class='form control' value='+91' size='2'></input>
  <input type="text" class='form control' placeholder="phone" size="10"></input><br></br>
  <label>Gender</label>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
  <label class="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
  <label class="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
  <label class="form-check-label" for="flexRadioDefault2">
    Others
  </label>
</div>
<div class="col-12">
    <label class="visually-hidden" for="inlineFormSelectPref">College Name</label>
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Choose...</option>
      <option value="1">Aits</option>
      <option value="2">Srit</option>
      <option value="3">Svce</option>
    </select>
  </div>
  <div class="col-12">
    <label class="visually-hidden" for="inlineFormSelectPref">Branch</label>
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Choose...</option>
      <option value="1">cse</option>
      <option value="2">ece</option>
      <option value="3">eee</option>
    </select>
  </div>
  <label>Date of joining</label>
  <input type="date"></input><br></br>
  <button type="submit" class="btn btn-primary">Submit</button>
 </div>
  
  
       
    
  
      
        
       
    );
}
export default Register;