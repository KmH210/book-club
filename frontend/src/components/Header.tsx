import { AuthContext } from "../context/auth-context";
import { useContext } from "react";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css"
import Logo1 from "../components/RIAPLogo2.jpg"


function Header(){
    const { user } = useContext(AuthContext)
    
    return(
        <header className="Header">
            <div className="Title">
                <h1>Read It and Weep</h1>
                <p>The competitive book club</p>
            </div>
            { !user ? <button onClick={signInWithGoogle}>Sign In With Google</button> :
            <div className="RightSide">
                <button onClick={signOut}>Sign Out</button>
                <img className="Logo" src={Logo1} alt="Read It And Weep"/>
            </div>}
        </header>
    )
}

export default Header;