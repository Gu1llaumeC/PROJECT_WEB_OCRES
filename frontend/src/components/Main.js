import React from 'react';
import Widget from './Widget';
import '../styles/Main.css';

export default class Main extends React.Component{
    render(){

        return(
            <div class = "main">
                <Widget text = "widget" id = "1"/>
                <Widget text = "widget" id = "2"/>
                <Widget text = "widget" id = "3"/>
                <Widget text = "widget" id = "4"/>
                <Widget text = "widget" id = "5"/>
                <Widget text = "widget" id = "6"/>
            </div>
        )
    }
}