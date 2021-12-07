import React from 'react';
import '../styles/Widget.css';
import axios from 'axios';


export default class Widget3 extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            name: "Figth club",
            description: "Endowed with a most enviable situation, a young man at the end of his nerves finds a relative balance in the company of Marla, met in a support group. He also meets Tyler Durden, an enthusiastic and charismatic character",
            URL : ""
        }
        this.handleClick = this.handleClick.bind(this);


    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cb7b71798e366579c516ae45aeddfd75&language=en-US&page=1`)
            .then(res => {
                var rand = Math.floor(Math.random() * res.data.results.length);
                this.setState(state => (
                    {
                        name: res.data.results[rand].original_title,
                        description: res.data.results[rand].overview,
                        URL : `https://image.tmdb.org/t/p/w500${res.data.results[rand].poster_path}`
                    }
                ))
            })

    }

    handleClick()
    {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cb7b71798e366579c516ae45aeddfd75&language=en-US&page=1`)
            .then(res => {
                var rand = Math.floor(Math.random() * res.data.results.length);
                this.setState(state => (
                    {
                        name: res.data.results[rand].title,
                        description: res.data.results[rand].overview,
                        URL : `https://image.tmdb.org/t/p/w500${res.data.results[rand].poster_path}`
                    }
                ))
            })
    }


    


    render() {

        return (
            <div className="widget">
                <div className="text">
                    {this.props.text} {this.props.id}
                </div>
                <div className="name">{this.state.name}</div>
                <img src = {this.state.URL} alt = "film-poster" height = "200" width = "auto"/>
                <div className="police">{this.state.description}</div>
                <button onClick={this.handleClick}>Aléatoire</button>
            </div>
        )
    }
}