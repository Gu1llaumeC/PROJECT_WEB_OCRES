import React from 'react';
import '../styles/Widget_Admin.css';
import axios from 'axios';

export default class WidgetAdmin extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            quote: this.props.quote
        }

        this.handleClick = this.handleClick.bind(this);


    }





    handleClick() {
        axios.delete(`http://192.168.1.15:3001/api/quote/delete/${this.props.id}`)
            .then(res => {
                this.setState(state => (
                    {
                        quote: res.data.message
                    }
                ));
            })
    }

    render() {

        return (
            <div className="widget-admin">
                <div className="quote-admin">{this.state.quote}</div>
                <button className="button-admin" onClick={this.handleClick}>Delete</button>
            </div>
        )
    }
}