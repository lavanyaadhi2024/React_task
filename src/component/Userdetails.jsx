import React from "react";

function Userdetails({giveinput}){
    const data=(event)=>{
        const { name, value }=event.target;
        giveinput(prev => ({ ...prev, [name]: value }));

    }

    return(
        <>
            <div className="form-group" >
                <label for="fullname">Full Name</label>
                <input type="text" id="fullname" name="fullname" required onChange={data}/>
            </div><br/>
            <div className="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required onChange={data}/>
            </div><br/>
            <div className="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required onChange={data}/>
            </div><br/>
            <div className="form-group">
                <label for="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" onChange={data}/>
            </div><br/>
            <div className="form-group">
                <label for="gender">Gender </label>
                <select id="gender" name="gender" onChange={data}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option> 
                </select>
            </div><br/>
        </>
    )
}
export default Userdetails;