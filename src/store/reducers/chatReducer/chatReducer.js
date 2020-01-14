import initialState from '../initialState';

export const chatReducer = (state = initialState.chat, action) => {
    switch (action.type) {
        case 'CHAT_INIT':
            return { ...state, onlineUsers: action.onlineUsers };
        case 'CHAT_LOG_OUT':
            return { room: 'global', messages: [], onlineUsers: null };
        default:
            return state;
    }
};
