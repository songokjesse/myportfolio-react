import React, { Component } from 'react';

class Contacts extends Component {
    render() {
        return (
            <div className="backcolor">
            <div className="container py-4">

                <div className="card py-4">
                    <div className="card-body">
                        <h6 className="py-4">I'm currently taking on freelance work. If you are interested in hiring me for your project please use the form below to get in touch</h6>

                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="far fa-user"></i></div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroup"
                                   placeholder="Name"  required/>
                        </div>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="far fa-envelope"></i></div>
                            </div>
                            <input type="email" className="form-control" id="inlineFormInputGroup"
                                   placeholder="Email" required/>
                        </div>


                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="form-control" rows="5" ></textarea>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-success form-control"><i className="far fa-envelope"></i> Send</button>
                    </div>
                </div>

            </div>
            </div>
        );
    }
}

export default Contacts;
