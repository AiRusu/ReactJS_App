import React, { Component } from 'react';

import Header from './components/sections/Header/Header';
import About from './components/sections/Main/About/About';
import Aux from './components/hoc/Aux';
import Features from './components/sections/Main/Features/Features';
import Options from './components/sections/Main/Options/Options'
import Book from './components/sections/Main/Book/Book';
import Footer from './components/sections/Footer/Footer';
import Popup from "./components/popup/Popup";
import Nav from "./components/nav/nav";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
           contacteEdit: {id:0, numePrenume:"", email: "", optiune:"VitalCare"},
           cheie:0
        };

        this.formSubmit = this.formSubmit.bind(this);
        this.recharge = this.recharge.bind(this);
    }

    recharge() {
        return fetch("http://localhost:4040/contacte/api/contacte.php")
        .then(result => {
            return result.json();
        })
        .catch(error => console.log("Request failed", error ));
    }

    componentDidMount(){
        this.recharge()
    }

    formSubmit(clienti) {
        const dateScript = JSON.stringify(clienti);
        let config = {
            headers: {"Content-Type": "application/json"},
            body: dateScript
        };
        const url = "http://localhost:4040/disertatie/api/contacte.php"
        config.method = "POST";
        fetch(url, config)
            .then(result =>{
                return result.json();
            })
            .then(raspuns => {
                return raspuns[1].id;
            })
            .then(ident =>
                this.recharge().then(
                    this.setState({
                        contacteEdit : {
                            id: 0,
                            numePrenume:"",
                            email: "",
                            optiune: ""
                        },
                        cheie: ident
                    })
                ))
      }
      render() {
    return (
    <Aux>
        <body>
            <Header />
                <main>
                    <About />
                    <Features />
                    <Options />
                    <Book key = {this.state.cheie}
                          clienti = {this.state.contacteEdit}
                          formSubmit = {this.formSubmit}/>
                    <Popup />
                    <Nav />
                </main>
            <Footer />
        </body>
    </Aux>
        	);
    }
};
export default App;