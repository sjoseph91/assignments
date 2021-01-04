import React from 'react'

const {Provider, Consumer} = React.createContext();

class ThemeProvider extends React.Component{
    state = {
        theme: "default"
    }
    changeTheme = (newTheme) => {
        this.setState({theme: newTheme})
    }

    render(){
        
        return (
            <Provider value={{theme: this.state.theme, changeTheme: this.changeTheme}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeProvider, Consumer as ThemeConsumer}