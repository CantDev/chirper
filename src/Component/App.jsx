import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirpText: '',
            placeholder: 'Make a chirp!',
            chirps: [
                {
                    name: "Josh",
                    message: ""
                },
                {
                    name: "Josh",
                    message: ""
                },
            ]
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='header'><h1> Chirper</h1></div>
                <div className='input'>
                    <button variant="primary">Primary</button>{' '}
                    <input type='text' ref={((input) => { this.textInput = input })}
                        className='textInput'
                        value={this.state.chirpText}
                        onChangeText={chirpText => this.updatecChirpText(chirpText)}
                    />
                </div>
                <div className='timeline'>

                </div>
            </div>
        )
    }
}

export default App;
