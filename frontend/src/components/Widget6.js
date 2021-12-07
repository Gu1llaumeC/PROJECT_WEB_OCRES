import React from 'react';
import '../styles/Widget.css';
import axios from 'axios';



export default class Widget6 extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = 
        {
            quote : "Veuillez charger une histoire",
            id : ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClick_2 = this.handleClick_2.bind(this);

        
    }

    componentDidMount()
    {
        axios.get(`http://localhost:3001/api/quote/random`)
        .then(res => 
            {
                console.log(res);
                this.setState(state => (
                    {
                        quote : res.data.content,
                        id : res.data._id
                    }
                ))
            })
    }


    handleClick()
    {
        axios.get(`http://localhost:3001/api/quote/random`)
        .then(res => 
            {
                console.log(res);
                this.setState(state => (
                    {
                        quote : res.data.content,
                        id : res.data._id
                    }
                ));
            })
    }

    handleClick_2()
    {
        axios.delete(`http://localhost:3001/api/quote/delete/${this.state.id}`)
        .then(res => 
            {
                this.setState(state => (
                    {
                        quote : res.data.message
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
                <div className = "description-widget3">{this.state.quote}</div>
                <button onClick = {this.handleClick}>Aléatoire</button>
                <button onClick = {this.handleClick_2}>Delete</button>
            </div>
        )
    }
}
