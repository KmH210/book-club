import { AuthContext } from "../context/auth-context";
import { useContext } from "react";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css"
import Logo1 from "../components/RIAPLogo2.jpg"


function Header(){
    const { user } = useContext(AuthContext)
    
    return(
        <header className="Header">
            <img className="Logo" src={Logo1} alt="Read It And Weep"/>
            <div className="Title">
                <h1>Read It and Weep</h1>
                <p className="headerSubtitle">The competitive book club</p>
            </div>
            
            { !user ? <button onClick={signInWithGoogle}>Sign In With Google</button> :
            <p>
                <button onClick={signOut}>Sign Out</button>
            </p>}
        </header>
        
    )
}

export default Header;