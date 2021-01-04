import React from 'react';

class Square extends React.Component{
  
    render(){
        
    return <div className = "square" style={{backgroundColor: this.props.color}}>Square </div>
    }
}

export default Square;