import React from "react";
import { useGlobalState } from "../context";

const Area = () => {
        const { state, removed } = useGlobalState();


        const loading = state.loading;

        return (
                <>
                        <div className="area-full">
                                {loading ? <div className="load"> <h1>Loading...</h1></div> :
                                        state.data.map((item, index) => {
                                                return <div className="area" key={index}>
                                                        <h3>{item.title}</h3>
                                                        <p>By: {item.author} || {item.num_comments} comments</p>
                                                        <div className="last">
                                                                <a href={item.url} target='blank' >Read more</a>
                                                                <button onClick={() => removed(item.objectID)}>Remove</button>
                                                        </div>

                                                </div>
                                        })}
                        </div>
                </>

        )
}


export default Area;