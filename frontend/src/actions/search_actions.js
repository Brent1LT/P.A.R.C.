export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const newSearch = search => {
    return({
        type: RECEIVE_SEARCH,
        search
    })
}

