const setUser = function({ dispatch, state }, userName){
    dispatch('SETUSER', userName)
};
const setAk = function ({ dispatch, state }, ak) {
    dispatch('SETAK', ak)
};

export {
    setUser, setAk
}