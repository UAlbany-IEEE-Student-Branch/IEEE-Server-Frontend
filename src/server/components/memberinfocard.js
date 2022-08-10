import React from 'react';
import Moment from 'react-moment';
import '../css/pages/home.css';
import '../css/components/userpicture.css'
import '../css/components/memberinfocard.css'
    
export default function MemberInfoCard(props) {
    return(
        <div className="member-card frosted-container reveal">
            <div className="flex-container">
                <div className="date">
                    <Moment calendar>
                        {props.date}
                    </Moment>
                </div>
                <div className="avatar">
                    <div className="frame">
                        <img src={props.avatar} alt="user avatar"/>
                    </div>
                </div>
                <div className="message">
                    <p>Welcome,&nbsp;<b>{props.nickname}</b>&nbsp;to the UAlbany IEEE server!</p>
                </div>
            </div>
        </div>
    )

}