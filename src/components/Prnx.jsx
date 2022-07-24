import React from "react";
import { useGlobalState } from "../context";

const Prnx = () => {
    const { state, next, prev } = useGlobalState();
    console.log(state);
    const page = state.page;
    const nbpages = state.nbpages;
    const clicked = () => {
        next();
    }
    const clicked1 = () => {
        prev();
    }
    return (
        <div>
            <button onClick={clicked1}>Prev</button>
           <p>{page} of {nbpages}</p>
            <button onClick={clicked}>Next</button>
        </div>
    )
}
export default Prnx;