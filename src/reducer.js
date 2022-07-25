const reducer = (state, action) => {
    switch (action.type) {
        case 'REMOVE_ITEM':
            return {
                ...state,
                data: state.data.filter(item => item.objectID !== action.payload),
                removed: action.payload.removed,
            }

        case 'FETCH_DATA':
            return {
                ...state,
                loading: true,
            }
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                data: action.payload.data,
                loading: false,
                error: null,
                nbpages: action.payload.nbpages,
            }
        case 'FETCH_DATA_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            }
            case 'SEARCH_QUERY':
            return {
                ...state,
                query: action.payload.query,
            }
            case 'NEXT_PAGE':
            return {
                ...state,
                page: state.page<= 48? state.page + 1 : state.page=0 ,
            }
            case 'PREV_PAGE':
            return {
                ...state,
               page: state.page <= 0 ? state.page = 0:state.page - 1,
            }
        default:
            return state;
    }
}


export default reducer;