import socketIOClient from 'socket.io-client';
const socket = socketIOClient('localhost:3001');

export const initChat = ({ uid, userName }) => {
    socket.emit('userLogin', { uid, userName });
    // user is subscribe to listen to "onlineUsers" socket until he log out, every time the socket update, new [onlineUsers] will dispatch
    return dispatch => {
        socket.on('onlineUsers', onlineUsers => {
            dispatch({ type: 'CHAT_INIT', onlineUsers });
        });
    };
};

export const disconnect = uid => {
    socket.emit('userDisconnect', uid);
    socket.off('onlineUsers');
    return dispatch => {
        dispatch({ type: 'CHAT_LOG_OUT' });
    };
};
