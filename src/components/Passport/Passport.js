import React from "react";
import "./Passport.css"
import PetPicture from "./PetPicture/PetPicture";
import PetInfo from './PetInfo/PetInfo';
import PetPaw from "./PetPaw/PetPaw";
export const Passport = () => {
    const suki = {
        "Name": "Suki",
        "Type of Animal": 'Cat',
        "Date of Birth": 'August 2021',
        "Breed": 'Russian Blue Mix',
        "Size": 'small'
    }
    return (
        <div className="passport-container">
            <div className="passport-row1">
                <h1>Pet Passport</h1>
            </div>
            <div className="passport-row2">
                <PetPicture />
                <PetInfo info={suki}/>
                <PetPaw />
             </div>
        </div>)
}

export default Passport