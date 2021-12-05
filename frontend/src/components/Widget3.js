import React from 'react';
import '../styles/Widget.css';
import axios from 'axios';

export default class Widget3 extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = 
        {

        }
        this.handleClick = this.handleClick.bind(this);

        
    }

    componentDidMount()
    {
        axios.get(``)
        .then(res => 
            {
                this.setState(state => (
                    {
                    }
                ));
            })
    }

    

    handleClick()
    {
        axios.get(``)
        .then(res => 
            {
                this.setState(state => (
                    {
                    }
                ));
            })
    }

    render(){

        return(
            <div class = "widget">
                <div class = "text">
                    {this.props.text} {this.props.id}
                </div>
                
            </div>
        )
    }
}