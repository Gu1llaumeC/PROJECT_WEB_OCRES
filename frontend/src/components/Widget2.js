import React from 'react';
import '../styles/Widget.css';
import axios from 'axios';

export default class Widget2 extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            city: "Paris",
            previous: "Paris",
            URL: `https://risibank.fr/cache/stickers/d579/57932-full.gif`,
            main: "",
            descritpion: "",
            temp: ""

        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }

    componentDidMount() {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=88dd99e847cde52d671e06a16d63364d`)
            .then(res => {
                this.setState(state => (
                    {
                        URL: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
                        main: res.data.weather[0].main,
                        descritpion: res.data.weather[0].descritpion,
                        temp: res.data.main.temp
                    }
                ));
            })
    }



    handleClick() {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=88dd99e847cde52d671e06a16d63364d`)
            .then(res => {
                this.setState(state => (
                    {
                        URL: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
                        main: res.data.weather[0].main,
                        descritpion: res.data.weather[0].descritpion,
                        temp: res.data.main.temp,
                        previous: this.state.city
                    }
                ));
            })
    }

    handleChange(event) {
        this.setState({ city: event.target.value })
    }





    render() {

        return (
            <div className="widget">
                <div className="text">
                    {this.props.text} {this.props.id}
                </div>
                <input type="text" value={this.state.city} onChange={event => this.handleChange(event)} />
                <button onClick={this.handleClick}>Click here!!</button>
                <div className="police">{this.state.previous}</div>
                <img className="forecast-icon" src={this.state.URL} alt="forecast" />
                <div className="police">{this.state.main}</div>
                <div className="police">{this.state.descritpion}</div>
                <div className="police">{this.state.temp}°C</div>

            </div>
        )
    }
}