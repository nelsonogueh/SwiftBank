/**
 * Created by ma on 8/7/2019.
 */
import React from 'react';

import mtn from '../../images/network_operators/mtn.png';
import glo from '../../images/network_operators/glo.png';
import nineMobile from '../../images/network_operators/9mobile.jpeg';
import airel from '../../images/network_operators/airtel.png';

//import components
import Footer from '../footer';

class ContainerAirtime extends React.Component {


    constructor() {
        super();
        this.state = {
            operator: '',
            recipientNumber: '',
            amount: '',
            pin: ''
        }
    }

    submitAirtimeForm(event) {

       var operatorValue = event.target.elements.operator.value;
       var recipientValue = event.target.elements.recipientName.value;
       var amountValue = event.target.elements.amountName.value;
       var pinValue = event.target.elements.pinName.value;

        this.setState({
            operator: operatorValue,
            recipientNumber: recipientValue,
            amount: amountValue,
            pin: pinValue
        });


        event.preventDefault();

    }


    render() {

        var logoStyle = {
            maxWidth: '130px',

        }

        return (
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row purchace-popup">
                        <div className="col-12">

                            <h3 style={{textAlign:"center"}} className="align-items-center center">Airtime Recharge</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 grid-margin stretch-card ">
                            <div className="card card-statistics border-radius-6 shadow">
                                <div className="card-body">
                                    <div className="clearfix">
                                        <div className="float-left">
                                            <i className="mdi mdi-cash-multiple text-success icon-lg"></i>
                                        </div>
                                        <div className="float-right">
                                            <p className="mb-0 text-right">Available balance</p>
                                            <div className="fluid-container">
                                                <h3 className="font-weight-medium text-right mb-0">&#x20A6;65,650</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-muted mt-3 mb-0">
                                        <i className="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> 65% lower
                                        growth
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        Network: {this.state.operator} <br />
                        Recipient Number: {this.state.recipientNumber} <br />
                        Amount: {this.state.amount} <br />
                        Pin: {this.state.pin} <br />

                    </div>

                    <form onSubmit={this.submitAirtimeForm.bind(this)} >

                        <div className="row">
                            <div className="col-md-12 grid-margin">
                                <br />
                                <h4>Select service provider </h4>

                                <div className="row ">

                                    <div
                                        className="mr-md-3 col-md-2 col-sm-6 grid-margin align-items-center stretch-card card shadow">
                                        <div className="form-radio form-radio-flat">
                                            <label className="form-check-label" htmlFor="mtn">
                                                <div style={{display:"block"}}>
                                                    <img style={logoStyle} className="img img-fluid" src={mtn}
                                                         alt="MTN"/>
                                                </div>
                                                <div>
                                                    <input type="radio" className="form-check-input" name="operator"
                                                           id="mtn" value="mtn"/>
                                                    <i className="input-helper"></i>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div
                                        className="mr-md-3 col-md-2 col-sm-6 grid-margin align-items-center stretch-card card shadow">
                                        <div className="form-radio form-radio-flat">
                                            <label className="form-check-label" htmlFor="glo">
                                                <img style={logoStyle} className="img img-fluid" src={glo} alt="GLO"/>
                                                <input type="radio" className="form-check-input" name="operator"
                                                       id="glo"
                                                       value="glo"/>
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </div>


                                    <div
                                        className="mr-md-3 col-md-2 col-sm-6 grid-margin align-items-center stretch-card card shadow">
                                        <div className="form-radio form-radio-flat">
                                            <label className="form-check-label" htmlFor="airtel">
                                                <img style={logoStyle} className="img img-fluid" src={airel}
                                                     alt="Airtel"/>
                                                <input type="radio" className="form-check-input" name="operator"
                                                       id="airtel"
                                                       value="airtel"/>
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </div>


                                    <div
                                        className="mr-md-3 col-md-2 col-sm-6 grid-margin align-items-center stretch-card card shadow">
                                        <div className="form-radio form-radio-flat">
                                            <label className="form-check-label" htmlFor="9mobile">
                                                <img style={logoStyle} className="img img-fluid" src={nineMobile}
                                                     alt="9Mobile"/>
                                                <input type="radio" className="form-check-input" name="operator"
                                                       id="9mobile" value="9mobile"/>
                                                <i className="input-helper"></i>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="card col-md-8 border-radius-6 shadow">
                                    <div className="card-body ">

                                        <div className="form-group row">
                                            <label htmlFor="phoneNumber" className="col-sm-3 col-form-label">Recipient
                                                number</label>
                                            <div className="col-sm-9">
                                                <input type="tel" name="recipientName" className="form-control"
                                                       id="phoneNumber"
                                                       placeholder="Phone number"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="amount" className="col-sm-3 col-form-label">Amount</label>
                                            <div className="col-sm-9">
                                                <input type="tel" name="amountName" className="form-control" id="amount"
                                                       placeholder="Amount"/>
                                            </div>
                                            {this.state.amount}
                                        </div>

                                        <div className="form-group row">
                                            <label htmlFor="pin" className="col-sm-3 col-form-label">Enter PIN</label>
                                            <div className="col-sm-9">
                                                <input type="tel" name="pinName" className="form-control" id="pin"
                                                       placeholder="PIN"/>
                                            </div>
                                        </div>


                                        <div className="row mt-5">
                                            <div className="form-group mr-4">
                                                <input type="submit" value="recharge" className="btn btn-gradient"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="reset" value="clear fields"
                                                       className="btn btn-outline-danger"/>
                                            </div>
                                        </div>

                                        <div id="loading-div" className="row alert alert-primary">
                                            <span className="fa fa-spinner fa-spin fa-2x text-primary"></span> &nbsp;<span className="text-primary">Please wait...</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>

                <Footer />

            </div>

        );
    }
}
export default ContainerAirtime;