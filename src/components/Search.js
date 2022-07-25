import React from "react";
import { useGlobalState } from "../context";

const Search = () => {
  const { query, search_post}= useGlobalState();
    return (
        <>
        <div className="hee">
        <h1>Saad News App Latest tech news </h1>
        </div>
        <br></br>
<div className="flex-inp">  
        <div className="input-div">
            <input type="text" value={query} placeholder='Write Something...' onChange={(e) => { search_post(e.target.value)}} />
            </div>
        </div>
    </>
    )
}
export default Search;
