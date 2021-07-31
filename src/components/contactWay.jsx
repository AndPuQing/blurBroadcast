import React, { Component } from 'react';
import ContactWayGit from './contactWayGit';
import ContactWayMail from './contactWayMail';
import ContactWayTel from './contactWayTel';
import ContactWayTim from './contactWayTim'
class ContactWay extends Component {
    render() {
        return (
            <div className='ml-5 h-auto flex flex-row space-x-2'>
                <ContactWayTim />
                <ContactWayTel />
                <ContactWayGit />
                <ContactWayMail />
            </div>
        );
    }
}

export default ContactWay;