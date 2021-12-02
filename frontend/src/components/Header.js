import React from 'react';

export default class Header extends React.Component{
    render(){
        const {text} = this.props;

        return(
            <div class = "header">
                {text}
            </div> 
        )
    }
}
