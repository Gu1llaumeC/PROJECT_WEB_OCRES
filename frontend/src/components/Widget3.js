import React from 'react';
import '../styles/Widget.css';
import axios from 'axios';


export default class Widget3 extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = 
        {
            name : "Figth club",
            genre : "Thriller",
            description : "Endowed with a most enviable situation, a young man at the end of his nerves finds a relative balance in the company of Marla, met in a support group. He also meets Tyler Durden, an enthusiastic and charismatic character",
            number : 542
        }
        this.handleClick = this.handleClick.bind(this);

        
    }

    componentDidMount()
    {
        axios.get(`https://api.themoviedb.org/3/movie/${this.state.number}?api_key=cb7b71798e366579c516ae45aeddfd75`)
        .then(res => 
            {
                this.setState(state => (
                    {
                        name : res.data.original_title,
                        genre : res.data.genres[0].name,
                        description : res.data.overview
                    }
                ))
            })

    }


    handleClick()
    {
        
        do{
            const random = Math.random() * (560 - 501) + 500;
            this.setState({number : Math.trunc(random)}); 
        }while(this.state.number !== 514 & 515 & 516 & 517 & 518 & 519 & 520 & 528 & 529 & 534 & 535 & 536 & 537 & 538 & 539 & 545 & 556 & 558 & 559);
        console.log(this.state.number)
        
        if (this.state.number === 538){
            this.setState(state => (
                {
                    number : 547
                }
            ));
        }
        
        axios.get(`https://api.themoviedb.org/3/movie/${this.state.number}?api_key=cb7b71798e366579c516ae45aeddfd75`)
        .then(res => 
            {
                this.setState(state => (
                    {
                        name : res.data.original_title,
                        genre : res.data.genres[0].name,
                        description : res.data.overview
                    }
                ));
                console.log(res)
            })
        .catch(function (error){
            console.log(error);
        });
    }


    render(){

        return(
            <div className = "widget">
                <div className = "text">
                    {this.props.text} {this.props.id}
                </div>
                <button onClick = {this.handleClick}>Aléatoire</button>
                <div className = "city-name">{this.state.name}</div>
                <div className = "genre">{this.state.genre}</div>
                <div className = "description-widget3">{this.state.description}</div>

            </div>
        )
    }
}