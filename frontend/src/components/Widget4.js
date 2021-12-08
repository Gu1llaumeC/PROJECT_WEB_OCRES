import React from 'react';
import '../styles/Widget.css';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default class Widget4 extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            data: {},
            city: "Paris",
            usable: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.function = this.function.bind(this);
        this.generate_data = this.generate_data.bind(this);
    }

    generate_data() {
        var name = {};
        var speed = {};
        var gust = {};
        var deg = {};
        var buffer = [];

        for (var i = 0; i < 6; i++) {
            name = this.state.data.list[i].dt_txt.split(' ')[1];
            name = name.split(':')[0];
            speed = this.state.data.list[i].wind.speed;
            gust = this.state.data.list[i].wind.gust;
            deg = this.state.data.list[i].wind.deg;
            buffer[i] = { name, speed, gust, deg };
        }
        this.setState(state => (
            {
                usable: buffer
            }
        ))
    }

    componentDidMount() {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=4081444b7b90198136fefe6ed4ccf35b`)
            .then(res => {
                this.setState(state => (
                    {
                        data: res.data,
                    }
                ));
                this.generate_data()
            })
    }



    handleClick() {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=4081444b7b90198136fefe6ed4ccf35b`)
            .then(res => {
                this.setState(state => (
                    {
                        data: res.data,
                    }
                ));
                this.generate_data()
            })
    }

    function() {
        try {
            return (
                <div>
                    <LineChart width={250} height={200} data={this.state.usable}>
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="name" name="test" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="gust" stroke="#FF0000" />
                        <Line type="monotone" dataKey="speed" stroke="#0000FF" />
                    </LineChart>
                </div>
            )
        } catch (error) {
            return "CA MARCHE PAS ENCULÉ"
        }
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
                <div>
                    <input type="text" value={this.state.city} onChange={event => this.handleChange(event)} />
                    <button onClick={this.handleClick}>Click here!!</button>
                    {this.function()}
                </div>
            </div>
        )
    }
}