export function login() {
    return async (dispatch, getState) => {
        const fakeLoginAPI = () => new Promise((resolve, reject) => {
            setTimeout(() => resolve({ email: 'test@chc.com', name: 'chcUser' }), 500)
        })
        const user = await fakeLoginAPI();
        dispatch({ type: 'USER/LOGIN', user });
        return user;
    }
}