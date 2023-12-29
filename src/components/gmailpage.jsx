import React from 'react'
import './gmailpage.css'

function Fun() {
  return (
    <div>
        <div className='top'>
        <img className='image1' src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt="" />

        </div>
        <div className='left'>
        
            <button className='btn bg-primary-subtle button1'><i class="fa-solid fa-pencil"></i>Compose</button><br/>
            <div className='buttons5'>
            <button className='btn aa'><i class="fa-solid fa-inbox"></i>Inbox</button><br/>
            <button className='btn aa'><i class="fa-regular fa-star"></i>Starred</button><br/>
            <button className='btn aa'><i class="fa-regular fa-clock"></i>Snoozed</button><br/>
            <button className='btn aa'><i class="fa-solid fa-arrow-right"></i>Sent</button><br/>
            <button className='btn aa'><i class="fa-regular fa-file"></i>Drafts</button><br/></div>
            </div>
        <div className='right'></div>
        <div className='center'></div>
    </div>
  )
}

export default Fun;
