import React from "react";

function Dropdown({ title, options, fnc }) {
    return (
        <div className="select">
            <select defaultValue="" onChange={(e) => { 
                console.log("Dropdown selected:", e.target.value);
                fnc(e);
            }} name="format" id="format">
                <option value="" disabled>{title}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option.toUpperCase()}</option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;
