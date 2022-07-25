import React from "react";
import { useGlobalState } from "../context";

const Prnx = () => {
    const { state, next, prev } = useGlobalState();
    console.log(state);
    const page = state.page;
    const nbpages = state.nbpages;
    const clicked = () => {
        if (page >= 49) {
            alert("You are on the last page");
            next();
        }
        else{
            next();
    }}

    const clicked1 = () => {
        if (page <= 0) {
            alert("You are on the first page");
        prev();
    }
    else{
        prev();
    }
}
    return (
        <div className="ppnn">
            <button onClick={clicked1}>Prev</button>
           <p>{page+1} of {nbpages}</p>
            <button onClick={clicked}>Next</button>
        </div>
    )
}
export default Prnx;