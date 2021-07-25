import ActionType from '../Constant/constant'

const INITIAL_STATE = {
    isLoader: false,
    currentUser:"",
    jobSubmitError: '',
    getJobData: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionType.LOADER:
            return ({...state,isLoader: !state.isLoader })
        case ActionType.CURRENTUSER:
        return { ...state, currentUser: action.payload };
        case ActionType.SIGNINLOADER:
            return { ...state, signinLoader: action.payload };
        case ActionType.SIGNUPLOADER:
            return { ...state, signupLoader: action.payload };

        case 'SUBMIT_DATA' : 
            return { ...state, jobSubmitError: action.payload}
        case "GET_JOBDATA" :
            return { ...state, getJobData: action.payload}

        default:
            return state;
    }

}