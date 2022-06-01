import React from 'react'
import ProfileComponent from './component'

function ProfileCotainer(props) {
    return (

        <ProfileComponent setShowProfile={props.setShowProfile}/>

    )
}

export default ProfileCotainer
