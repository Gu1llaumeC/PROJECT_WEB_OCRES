import React from 'react';
import Widget from './Widget';
import '../styles/Main.css';

export default class Main extends React.Component{
    render(){

        return(
            <div class = "main">
                <Widget text = "test 1"/>
                <Widget text = "test 2"/>
                <Widget text = "test 3"/>
                <Widget text = "test 4"/>
                <Widget text = "test 5"/>
                <Widget text = "test 6"/>
            </div>
        )
    }
}