import React from 'react';
import '../styles/Widget.css';
import axios from 'axios';

export default class Widget extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = 
        {
            text : this.props.text,
            id : this.props.id,
            data : {},
            URL : "",
            
        }
        this.handleClick = this.handleClick.bind(this);

        
    }

    componentDidMount()
    {
        if (this.state.id === "1")
        {
            axios.get(`https://api.spoonacular.com/recipes/random?apiKey=85cf351fc9a04e419477c3c7bc5d1a69`)
        .then(res => 
            {
                this.setState(state => (
                    {
                        data : res.data,
                        URL : res.data.recipes[0].spoonacularSourceUrl
                    }
                ));
            })
        }
        else
        {
            axios.get(`https://api.spoonacular.com/recipes/random?apiKey=85cf351fc9a04e419477c3c7bc5d1a69`)
        .then(res => 
            {
                this.setState(state => (
                    {
                        data : res.data,
                    }
                ));
            })
        }

        /*axios.get(`https://api.spoonacular.com/recipes/random?apiKey=85cf351fc9a04e419477c3c7bc5d1a69`)
        .then(res => 
            {
                this.setState(state => (
                    {
                        data : res.data,
                        URL : res.data.recipes[0].spoonacularSourceUrl
                    }
                ));
            })*/

        
    }

    

    handleClick()
    {
        this.setState(state => (
            {
                text : "incroyable"
            }
        ));
    }

    render(){

        return(
            <div class = "widget">
                <div class = "text">
                    {this.state.text} {this.state.id}
                </div>
                <button onClick = {this.handleClick}>Clique ici espèce FDP!!!</button>
                <div>{this.state.URL}</div>
            </div>
        )
    }
}