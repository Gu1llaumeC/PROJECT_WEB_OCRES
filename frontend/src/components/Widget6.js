import React from 'react';
import '../styles/Widget.css';
import axios from 'axios';



export default class Widget6 extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            quote: "Veuillez charger une histoire",
            id: ""
        }
        this.handleClick = this.handleClick.bind(this);


    }

    componentDidMount() {
        axios.get(`http://localhost:3001/api/quote/random`)
            .then(res => {
                this.setState(state => (
                    {
                        quote: res.data.content,
                        id: res.data._id
                    }
                ))
            })
    }


    handleClick() {
        axios.get(`http://localhost:3001/api/quote/random`)
            .then(res => {
                this.setState(state => (
                    {
                        quote: res.data.content,
                        id: res.data._id
                    }
                ));
            })
    }

    



    render() {

        return (
            <div className="widget">
                <div className="text">
                    {this.props.text} {this.props.id}
                </div>
                <div className="police">{this.state.quote}</div>
                <button onClick={this.handleClick}>Aléatoire</button>
            </div>
        )
    }
}
