import React from "react";
import Doobin from '../../resources/images/pictures/Doobin_Lee.jpeg';

function Discount() {

    function formatDate(date) {
    return date.toLocaleDateString();
    }

    function Comment(props) {
        return (
            <div className="all_coach">
                <div className="coach_div">
                    <img
                    className="Avatar"
                    src={Doobin}
                    alt={props.author.name}
                    />
                    <div className="coach_name">{props.author.name}</div>
                    <div>Assisstant Coach</div>
                    <div className="coach_description">
                        <p>I have played four years in highschool, a year in club, and two years of NCAA. I've also been playing beach/grass volleyball for 3 years.</p>
                    </div>
                </div>
                <div className="coach_div">
                    <img
                    className="Avatar"
                    src={Doobin}
                    alt={props.author.name}
                    />
                    <div className="coach_name">{props.author.name}</div>
                    <div>Head Coach</div>
                    <div className="coach_description">
                        <p>I have played four years in highschool, a year in club, and two years of NCAA. I've also been playing beach/grass volleyball for 3 years.</p>
                    </div>
                </div>
                <div className="coach_div">
                    <img
                    className="Avatar"
                    src={Doobin}
                    alt={props.author.name}
                    />
                    <div className="coach_name">{props.author.name}</div>
                    <div>Assisstant Coach</div>
                    <div className="coach_description">
                        <p>I have played four years in highschool, a year in club, and two years of NCAA. I've also been playing beach/grass volleyball for 3 years.</p>
                    </div>
                </div>
            </div>
        
    );
}

    const comment = {
    date: new Date(),
    text: "Head Coach",
    author: {
        name: "Doobin Lee",
    },
    };
    return (
        <div>
            <Comment
                date={comment.date}
                text={comment.text}
                author={comment.author}
            />
        </div>
    );
}

export default Discount;
