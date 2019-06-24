import "./App.css";
import Nav from "./components/Nav";
import Search from "./components/Search";
import React, { Component } from "react";
import Main from "./components/Main";


export default class App extends Component {

    render() {
        return (
            <div>
                <div className="">
                    <Nav />
                    <div className="">
                <Search />
                <Main  />
                    </div>
                </div>
            </div>
        );
    }
}
