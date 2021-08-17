import React, { Component } from 'react';
import ContactWayGit from './contactWayGit';
import ContactWayMail from './contactWayMail';
import ContactWayTel from './contactWayTel';
import ContactWayTim from './contactWayTim'
class ContactWay extends Component {
    render() {
        return (
            <div className='grid grid-cols-2 ml-5 mr-5 sm:mr-0 h-auto sm:flex sm:flex-row sm:space-x-2'>
                <ContactWayTim />
                <ContactWayTel />
                <ContactWayGit />
                <ContactWayMail />
            </div>
        );
    }
}

export default ContactWay;