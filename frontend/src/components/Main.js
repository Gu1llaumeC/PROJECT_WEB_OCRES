import React from 'react';
import Widget from './Widget';
import '../styles/Main.css';

export default class Main extends React.Component{
    render(){

        return(
            <div class = "main">
                <Widget text = "widget 1"/>
                <Widget text = "widget 2"/>
                <Widget text = "widget 3"/>
                <Widget text = "widget 4"/>
                <Widget text = "widget 5"/>
                <Widget text = "widget 6"/>
            </div>
        )
    }
}