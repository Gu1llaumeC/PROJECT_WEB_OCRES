import React from 'react';
import '../styles/Widget.css';
import axios from "axios";

export default class Widget5 extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            URL : ""
        }
        this.handleClick = this.handleClick.bind(this);


    }

    componentDidMount() {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=bFOhUhZ2aMLmzM7zNLn1RT1ktmHbYc9eZa6TQf1d")
        .then(res => (
            this.setState(state => (
                {
                    URL : res.data.url
                }
            ))
        ))

    }



    handleClick() {
        this.setState(state => (
            {
                text: "incroyable"
            }
        ));
    }

    render() {

        return (
            <div className="widget">
                <div className="text">
                    {this.props.text} {this.props.id}
                </div>
                <div className="police">
                    Astronomy Picture Of the Day
                    <img src = {this.state.URL} alt = "Astronomy Pic Of the Day" width = "250" height = "auto"/>
                </div>
            </div>
        )
    }
}