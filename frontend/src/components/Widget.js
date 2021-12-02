import React from 'react';
import '../styles/Widget.css';

export default class Widget extends React.Component{
    render(){
        const {text} = this.props;

        return(
            <div class = "widget">
                <div class = "text">
                    {text}
                </div>
            </div>
        )
    }
}