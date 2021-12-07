import React from 'react';
import Widget5 from './Widget5';
import Widget1 from './Widget1';
import Widget2 from './Widget2';
import '../styles/Main.css';
import Widget4 from './Widget4';
import Widget3 from './Widget3';
import Widget6 from './Widget6';
import Admin from './Admin';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            id: "1"
        }
        this.navigation = this.navigation.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClick_2 = this.handleClick_2.bind(this);
    }

    navigation(id) {
        if (id === "1") {
            return (
                <div className="main-nav">
                    <Widget1 text="widget" id="1" />
                    <Widget2 text="widget" id="2" />
                    <Widget3 text="widget" id="3" />
                    <Widget4 text="widget" id="4" />
                    <Widget5 text="widget" id="5" />
                    <Widget6 text="widget" id="6" />
                </div>
            )
        }
        else{
            return(
                <div className="main-nav">
                    <Admin/>
                </div>
            )
        }
    }

    handleClick()
    {
        this.setState(state => (
           {
               id : "1"
           } 
        ))
    }

    handleClick_2()
    {
        this.setState(state => (
            {
                id : "2"
            }
        ))
    }

    render() {

        return (
            <div className="main">
                {this.navigation(this.state.id)}
                <div className="navigation">
                <button className = "nav-button" onClick = {this.handleClick}>Main</button>
                <button className = "nav-button" onClick = {this.handleClick_2}>Admin</button>
                </div>
            </div>
        )
    }
}