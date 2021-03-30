import React from "react";

function QuestionInput() {
    return (
        <div className="ui form">
            <div className="field">
                <label>Text</label>
                <textarea></textarea>
            </div>
            <div className="field">
                <label>Short Text</label>
                <textarea rows="2"></textarea>
            </div>
        </div>
    );
}

export default QuestionInput;
