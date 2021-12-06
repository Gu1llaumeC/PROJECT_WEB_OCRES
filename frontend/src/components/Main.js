import React from 'react';
import Widget from './Widget';
import Widget1 from './Widget1';
import Widget2 from './Widget2';
import '../styles/Main.css';
import Widget3 from './Widget3';

export default class Main extends React.Component{
    render(){

        return(
            <div className = "main">
                <Widget1 text = "widget" id = "1"/>
                <Widget2 text = "widget" id = "2"/>
                <Widget3 text = "widget" id = "3"/>
                <Widget text = "widget" id = "4"/>
                <Widget text = "widget" id = "5"/>
                <Widget text = "widget" id = "6"/>
            </div>
        )
    }
}