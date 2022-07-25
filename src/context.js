import React, { useEffect } from "react";
import reducer from "./reducer";
const Api = `https://hn.algolia.com/api/v1/search?&query=`;

const initialState = {
    data: [],
    loading: true,
    error: null,
    page: 0,
    nbpages: 0,
    query: 'css',
};


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    // const [query , setQuery] = React.useState('css');
const [state , dispatch] = React.useReducer(reducer, initialState);

    const fetchapi = async (url) => {
    try{    const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        dispatch({
            type: 'FETCH_DATA_SUCCESS',
            payload: {
                loading: false,
                data: data.hits,
                nbpages: data.nbPages,
            }
        }) 

                    }
    catch(error){
        console.log(error);
    }
    }

const search_post = (e) => {
    dispatch({
        type: 'SEARCH_QUERY',
        payload: {
            query: e,
        }
    })
}

const next = () => {
    dispatch({
        type: 'NEXT_PAGE',
        payload: {
            
        }
    })
}

const prev = () => {
    dispatch({
        type: 'PREV_PAGE',
        payload: {
            
        }
    })
}


const removed = (id) => {
    dispatch({
        type: 'REMOVE_ITEM',
        payload: id,
    })
}




        useEffect(() => {
            
            let timeout = setTimeout(() => {
                fetchapi(`${Api}${state.query}&page=${state.page}`);
                   
            }, 500);
            return () => {
                clearTimeout(timeout);
            }

    
        }, [state.query , state.page]);

    return (
        <AppContext.Provider value={{ state , search_post, next, prev, removed }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalState = () => {
    return React.useContext(AppContext);
}


export { AppContext, AppProvider };
export default AppContext;
export {useGlobalState}
