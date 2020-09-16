import React, { Component } from 'react';

import '../../../../App.css';

class Book extends Component {

    constructor(props) {
        super(props);

        this.state = this.props.clienti;

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this); 
    this.handleOptionChange = this.handleOptionChange.bind(this);
}

handleChange =(ev) => {
    const { name, value} = ev.target

    this.setState({
        [name]:value,
    });
};

handleOptionChange = changeEvent => {
    this.setState ({
        optiune: changeEvent.target.value
    });
}

async handleFormSubmit(ev) {
    ev.preventDefault();

    this.props.formSubmit(this.state);
    alert ("Oferta v-a fost trimisă pe adresa de email introdusă!");
 
    this.setState(this.props.clienti);
}
    render() {
        const {numePrenume, email} = this.state
        return(
            <section className="section-book" id ="section-book">
            <div className="row">
                <div className="book">
                    <div className="book__form">
                        <form onSubmit={this.handleFormSubmit} 
                              className="form">
                            <div className="u-margin-bottom-medium">
                                <h2 className="heading-secondary">
                                    Primește oferta noastră
                                </h2>
                            </div>

                            <div className="form__group"> 
                                <input type="text" className="form__input" placeholder="Numele complet" id="name" required
                                        name = "numePrenume"
                                        value = {numePrenume}
                                        onChange = {this.handleChange}>
                                </input> 
                                <label for="name" className="form__label">Numele complet</label> 
                            </div>

                            <div  className="form__group">
                                <input type="email" className="form__input" placeholder="Adresa de email" id="email" required
                                        name = "email"
                                        value = {email}
                                        onChange = {this.handleChange}></input>  
                                <label for="email" className="form__label">Adresa de email</label>
                            </div>

                            <div className="form__group u-margin-bottom-medium">

                            <div className="form__radio-group">
                                    <input type="radio" className="form__radio-input" id="small" name="size"
                                        name = "optiune"
                                        value = "VitalCare"
                                        checked = {this.state.optiune === "VitalCare"}
                                        onChange = {this.handleOptionChange}></input>
                                    <label for="small" className="form__radio-label">
                                        <span className="form__radio-button"></span>
                                        Vital Care
                                    </label>
                                </div>

                                <div  className="form__radio-group">
                                    <input type="radio"  className="form__radio-input" id="large" name="size"
                                            name = "optiune"
                                            value = "TakeCare"
                                            checked = {this.state.optiune === "TakeCare"}
                                            onChange = {this.handleOptionChange}>
                                    </input>
                                    <label for="large" className="form__radio-label">
                                        <span className="form__radio-button"></span>
                                        Take Care
                                    </label>
                                </div>

                                <div  className="form__radio-group">
                                    <input type="radio"  className="form__radio-input" id="medium" name="size"
                                            name = "optiune"
                                            value = "CompleteCare"
                                            checked = {this.state.optiune === "CompleteCare"}
                                            onChange = {this.handleOptionChange}></input>
                                    <label for="medium" className="form__radio-label">
                                        <span className="form__radio-button"></span>
                                        360 Care
                                    </label>
                                </div>
                            </div>
                            <div className="form__group">
                                <button className="btn btn--green"
                                        type = "submit">Trimite oferta &rarr;</button>
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
    </section>
            
        );
    }
} 

export default Book;