import React from 'react';

class Badge extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.key)
        return (
            <div className="badge">
                <div className="badge-header">Badge:</div>
                <div className="badge-content">
                    <p>Name: {this.props.info.firstName} {this.props.info.lastName}</p>
                    <p>Phone: {this.props.info.phone}</p>
                    <p>Place of Birth: {this.props.info.birthPlace}</p>
                    <p>Favorite Food: {this.props.info.favFood}</p>
                    <p>Email: {this.props.info.email}</p>
                    <textarea value={this.props.info.about}></textarea>
                </div>
                
            </div>
        )
    }
}

export default Badge