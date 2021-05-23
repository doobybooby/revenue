import React from 'react';

const Location = () => (
    <div className="location_wrapper">

        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12091.501319498653!2d-73.7411285!3d40.7427687!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe8e78d65e0e7c241!2sAlley%20Pond%20Adventure%20Course!5e0!3m2!1sen!2sus!4v1621780077340!5m2!1sen!2sus"
            width="100%"
            height="500px"
            frameBorder="0"
            allowFullScreen
            title="myframe" 
        />


        <div className="location_tag">
            <div>Location</div>
        </div>

    </div>
);

export default Location;
