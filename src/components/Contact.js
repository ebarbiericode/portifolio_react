import React from 'react'

const Contact = () => {
    return(
        <div>
            <section className="section container scrollspy" id="contact">
                <div className="row">
                <div className="col s12 l5">
                    <h2 className="indigo-text text-darken-4">Get In Touch</h2>
                    A front-end developer's role is to combine design and business logic to achieve a user-facing product. To do this successfully, a wide skill set is necessary to produce a quality user experience
                    that leads to meeting business goals.                 
                </div>
                <div className="col s12 l5 offset-l2 ">
                    <form action="">
                        <div className="input-field">
                            <i className="material-icons prefix">email</i>
                            <input type="email" id="email"/>
                            <label htmlFor="email">Your Email</label>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">message</i>
                            <textarea  id="message" className="materialize-textarea"></textarea>
                            <label htmlFor="message">Your message</label>
                        <div className="input-field">
                            <input type="text" id="date" class="datepicker"/>
                            <label htmlFor="date">Choose a date you need me for...</label>
                        </div>
                        <div className="input-field">
                            <p>Services required...</p>
                            <p>
                                <label>
                                    <input type="checkbox"/>
                                    <span>Web Developer</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input type="checkbox"/>
                                    <span>Editing</span>
                                </label>
                            </p>
                            <div className="input-field center">
                                <button className="btn">Submit</button>
                            </div>
                        </div>
                        </div>
                    </form>
                </div>

                </div>

            </section>
        </div>
    )
}

export default Contact