const userReduser = (state, acction) => {

    switch(acction.type){
        case 'SEARCH_USERS':
            return ({
                ...state,
                users: acction.users
            })
        case 'GET_USER_AND_REPOS':
            return {
                ...state,
                user: acction.user,
                repos: acction.repos
            }
        default:
            return state
    }
}

export default userReduser;