import React from 'react';
import '../styles/Widget.css';
import axios from 'axios';

export default class Widget1 extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = 
        {
            URL : "",
            image : "",
            prepa_time : "",
            servings : "",
            title : ""

        }
        this.handleClick = this.handleClick.bind(this);

        
    }

    componentDidMount()
    {
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=85cf351fc9a04e419477c3c7bc5d1a69`)
        .then(res => 
            {
                this.setState(state => (
                    {
                        URL : res.data.recipes[0].spoonacularSourceUrl,
                        image : res.data.recipes[0].image,
                        prepa_time : res.data.recipes[0].readyInMinutes,
                        servings : res.data.recipes[0].servings,
                        title : res.data.recipes[0].title
                    }
                ));
            })
    }

    

    handleClick()
    {
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=85cf351fc9a04e419477c3c7bc5d1a69`)
        .then(res => 
            {
                this.setState(state => (
                    {
                        URL : res.data.recipes[0].spoonacularSourceUrl,
                        image : res.data.recipes[0].image,
                        prepa_time : res.data.recipes[0].readyInMinutes,
                        servings : res.data.recipes[0].servings,
                        title : res.data.recipes[0].title
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
                <div className = "title">{this.state.title}</div>
                <img src={this.state.image} alt="recipe" width="250" height="auto"/>
                <div className = "prepa_time">
                    ready in {this.state.prepa_time} minuntes
                    </div>
                <div className = "servings">
                    perfect for {this.state.servings} persons
                    </div>
                <a href={this.state.URL}>
                    <button>
                        Click here to see the full recipe
                    </button>
                </a>
                <button onClick={this.handleClick}>
                    refresh
                </button>
            </div>
        )
    }
}