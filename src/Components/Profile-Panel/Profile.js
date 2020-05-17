import React, { Component } from 'react';
import { BrowserView } from "react-device-detect";
import './Profile.css';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'signup',
            name: '',
            email: '',
            password: '',
            password2: '',
        }
    }

    changeActive = (profile_type) => {
        this.setState({
            active: profile_type
        })
    } 
    render() {
        return (
            <BrowserView viewClassName="Profile-Container">
                <div>
                    <div className="Profile-Content">
                        Join the conversation!
                        <br></br><br></br>
                        <center>
                            {this.state.active === 'signup' && 
                            <div id="signup"> {/* Action here will be to redirect to Registration API */}
                                <form>
                                    <input 
                                        name="name" 
                                        type="text" 
                                        placeholder="Username"></input>
                                    <input 
                                        name="email" 
                                        type="text" 
                                        placeholder="Email"></input>
                                    <input 
                                        name="password" 
                                        type="text" 
                                        placeholder="Password"></input>
                                    <input 
                                        name="password2" 
                                        type="text" 
                                        placeholder="Confirm Password"></input>
                                    <input 
                                        name="submit" 
                                        type="submit" 
                                        value="Sign Up"></input>
                                </form>
                                <small>Already have an account? <br></br> <b href="/" onClick={() => this.changeActive('login')}>Log In</b></small>
                            </div>}

                        {this.state.active === 'login' &&
                        <div id="login"> {/* Action here will be to redirect to Login API*/}
                                <form>
                                    <input name="name" type="text" placeholder="Username"></input>
                                    <input name="password" type="text" placeholder="Password"></input>
                                    <input name="login" type="submit" value="Log In"></input>
                                </form>
                                <small>Don't have an account? <br></br> <b onClick={() => this.changeActive('signup')}>Get Started</b></small>
                            </div>}
                        </center> 
                    </div>
                </div>
            </BrowserView>
        )
    }
}
