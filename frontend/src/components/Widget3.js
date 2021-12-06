import React from 'react';
import '../styles/Widget.css';
import axios from 'axios';

export default class Widget3 extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = 
        {
            data : {},
            city : "Paris",
            test : ""
        }
        this.handleClick = this.handleClick.bind(this);

        
    }

    componentDidMount()
    {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=4081444b7b90198136fefe6ed4ccf35b`)
        .then(res => 
            {
                console.log(res.data.list[0].wind.speed)
                this.setState( state => (
                    {
                        data : res.data,

                    }
                ));
                console.log(this.state.data.list[0].wind.speed)
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
            <div className = "widget">
                <div className = "text">
                    {this.props.text} {this.props.id}
                </div>
                <div>
                    {this.state.test}
                </div>
            </div>
        )
    }
}