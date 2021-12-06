import React from 'react';
import '../styles/Widget.css';

export default class Widget extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = 
        {
            text : this.props.text
        }
        this.handleClick = this.handleClick.bind(this);

        
    }

    componentDidMount()
    {
        
    }

    

    handleClick()
    {
        this.setState(state => (
            {
                text : "incroyable"
            }
        ));
    }

    render(){

        return(
            <div className = "widget">
                <div className = "text">
                    {this.state.text} {this.props.id}
                </div>
                <button onClick = {this.handleClick}>Clique ici espèce de FDP!!!</button>
            </div>
        )
    }
}