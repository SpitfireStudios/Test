



import React, {Component} from 'react';

class ContactForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            Title:null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log(data)

    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.title]: event.target.value
        })

    }

    render () {

        const {Title} = this.state

        return (
            <div>

                <form onSubmit={this.handleSubmit}>

                    <h1 style={{padding:0}}> <input type='text' placeholder='Title' title='Title' onChange={this.handleInputChange}/> </h1>
                    <h1 style={{padding:0}}> <input type='text' placeholder='Name' title='Name' onChange={this.handleInputChange}/> </h1>
                    <h1 style={{padding:0}}> <input type='text' placeholder='Email' title='Email' onChange={this.handleInputChange}/> </h1>
                    <h1 style={{padding:0}}> <input type='text' placeholder='Phone Number' title='Phone Number' onChange={this.handleInputChange}/> </h1>
                    <h1 style={{padding:0}}> <input type='text' placeholder='Country' title='Country' onChange={this.handleInputChange}/> </h1>
                    <h1 style={{padding:0}}> <input type='text' placeholder='Text Area' title='Text Area' onChange={this.handleInputChange}/> </h1>

                    <h1> <button style={{display:'inline-flex'}}> Submit </button></h1>
                    
                </form>
            </div>
        )

    }

}

export default ContactForm