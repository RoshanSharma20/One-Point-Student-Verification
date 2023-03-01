import React from 'react'
import { links } from '../data'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom' ;
import logo from '../logoSvg.svg' ;

const NavBar = () => {
  return (
    <Router>
        <nav>
            <div className='navbar'>
                <div className="nav-header">
                    {/* <img src={logo} alt='logo'></img> */}
                    <img src='./logo.png' alt='logo'></img>
                </div>
                <div className="links-container">
                    <ul className='links'>
                        {
                            links.map((link) => {
                                const {id, url, text} = link ;
                                return (
                                    <li key={id}>
                                        <Link className='link' to={url}> {text} </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
        {/* {
            links.map((link) => {
                const ComponentTag = link.text ;
                return (
                    <Switch>
                        <Route exact path={link.url} >
                            <ComponentTag />
                        </Route>
                    </Switch>
                )
            })
        } */}
    </Router>
  )
}

export default NavBar