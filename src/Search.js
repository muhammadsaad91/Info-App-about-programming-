import React from "react";
import { useGlobalState } from "./context";

const Search = () => {
  const { query, search_post}= useGlobalState();
    return (
        <div>
            <input type="text" value={query} onChange={(e) => { search_post(e.target.value)}} />
        </div>
    )
}
export default Search;
