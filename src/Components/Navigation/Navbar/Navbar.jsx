import React from 'react' 
import classes from './Navbar.module.css'
import { Link } from 'react-router-dom'

const navbar = (props) =>{
    return (
        <Link to={props.href}>
            <div className={classes.Navbar}>                
                <span className={classes.Text1}>{props.text1}</span>
                <span className={classes.Text2}>{props.text2}</span>                            
            </div>
        </Link>
    )
}
export default navbar