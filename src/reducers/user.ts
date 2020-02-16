const initState = {
    email: '',
    name: '',
}

export default function user(state = initState, action: { type?: any; user?: any; }) {
    const { type } = action;
    switch (type) {
        case 'USER/LOGIN': {
            const { user } = action;
            return {
                ...state,
                ...user
            }
        }
        default:
            return state;
    }
}