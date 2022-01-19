import React from "react";
export const PetInfo = ({info}) => {

    const displayInfo = (information) => {
        const output = []
        // turns the object into an array
        Object.entries(information)
            // Object.entries gives this array:
            // [
            // [name, Suki],
            // [type, cat]
            // ...
            // ]
            // For Each (first argument is the value, second argument is the iterator)
            // iterates through our object
            // Since each item in the array is:
            // [key, value]
            // we want to pass [key, value] as the argument for the For Each
            // Otherwise if we pass it in like key, value
            // JS will think
            // key = [name, Suki]
            // think value is the iterator
            .forEach(( [key, value], i) => {
                //pushes to our object array the html containing the value
            output.push(
                <div>
                    <h3>{key}</h3>
                  <div>
                    {value}
                  </div>
                </div>)
        })
        return output
    }
    return (<div className="">
        {displayInfo(info)}
    </div>)
}

export default PetInfo