import axios from 'axios';
import React from 'react';
import WidgetAdmin from './Widget_Admin';
import '../styles/Admin.css';



export default class Admin extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            data: [],
            text: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:3001/api/quote/")
            .then(res => {
                this.setState(state => (
                    {
                        data: res.data
                    }
                ))
            })
    }

    handleChange(event) {
        this.setState({ text: event.target.value })
    }

    handleClick() {
        axios.post(`http://localhost:3001/api/quote/add`, { content: this.state.text })
            .then(res => {
                this.setState(state => (
                    {
                        text: res.data.message
                    }
                ));
            })
    }

    render() {

        return (
            <div className="admin">
                <div className="add">
                    <input className="input-admin" type="text" value={this.state.text} onChange={event => this.handleChange(event)} />
                    <button className="input-button" onClick={this.handleClick}>Add</button>
                </div>
                <div className="map-admin">{this.state.data.map(quote =>
                (
                    <WidgetAdmin quote={quote.content} id={quote._id} />
                ))}</div>
            </div>
        )
    }
}