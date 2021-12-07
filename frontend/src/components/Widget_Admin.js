import React from 'react';
import '../styles/Widget.css';
import axios from 'axios';

export default class WidgetAdmin extends React.Component {

    constructor(props) {
        super(props);
        this.state = 
        {
            quote : this.props.quote
        }

        this.handleClick = this.handleClick.bind(this);


    }

    componentDidMount() {
        console.log(this.props);
    }



    handleClick() {
        axios.delete(`http://localhost:3001/api/quote/delete/${this.props.id}`)
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
            <div className="widget">
                <div className="text">
                </div>
                <div className="quote">{this.state.quote}</div>
                <button onClick={this.handleClick}>Delete</button>
            </div>
        )
    }
}