const Footer=({datafromuser}) =>{
    
    
    return(
        <>
        <footer >
            <p style={{ fontWeight: 'bold' }}>Data from userform details:</p>
            <p>Fullname:{datafromuser.fullname}</p>
            <p>Email: {datafromuser.email}</p>
            <p>Phone: {datafromuser.phone}</p>
            <p>DOB: {datafromuser.dob}</p>
            <p>Gender: {datafromuser.gender}</p>
        </footer>
        </>
    )
}
export default Footer;
