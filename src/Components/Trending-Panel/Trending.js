import React, { Component } from 'react'
import './Trending.css';
import {
    BrowserView
  } from "react-device-detect";

export default class Trending extends Component {
    render() {
        return (
            <BrowserView viewClassName="Trending-Container">
                <div>
                    <input type="text" placeholder="Search Eugra..."></input>
                    <div className="Trending-Content">
                        <center>
                            Trending<br></br>
                            <i>Nothing currently trending.</i>                     
                        </center> 
                    </div>

                    <div className="Footer-Container">
                        <br></br>
                        <div>
                        <p>&copy; <i>EUGRA TECH LIMITED</i> 2019. All Rights Reserved.</p>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="policy/index.html">Privacy</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/terms">Terms</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/contact">Contact</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/careers">Careers</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/advertising">Advertising</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </BrowserView>
        )
    }
}
