import React from "react";

function Discount() {

    function formatDate(date) {
    return date.toLocaleDateString();
    }

    function Comment(props) {
        return (
            <div className="all_coach">
                <div className="coach_div">
                    <div className="coach_box">
                        <img
                        className="Avatar"
                        src={props.author.avatarURL}
                        alt={props.author.name}
                        />
                        <div className="coach_name">{props.author.name}</div>
                    </div>
                    <div className="coach_name">{props.text}</div>
                    <div className="coach_name">{formatDate(props.date)}</div>
                </div>
                <div className="coach_div">
                    <div className="coach_box">
                        <img
                        className="Avatar"
                        src={props.author.avatarURL}
                        alt={props.author.name}
                        />
                        <div className="coach_name">{props.author.name}</div>
                    </div>
                    <div className="coach_name">{props.text}</div>
                    <div className="coach_name">{formatDate(props.date)}</div>
                </div>
                <div className="coach_div">
                    <div className="coach_box">
                        <img
                        className="Avatar"
                        src={props.author.avatarURL}
                        alt={props.author.name}
                        />
                        <div className="coach_name">{props.author.name}</div>
                    </div>
                    <div className="coach_name">{props.text}</div>
                    <div className="coach_name">{formatDate(props.date)}</div>
                </div>
            </div>
        
    );
}

    const comment = {
    date: new Date(),
    text: "Head Coach",
    author: {
        name: "Hanbin Lee",
        avatarURL: "https://placekitten.com/g/64/64",
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
