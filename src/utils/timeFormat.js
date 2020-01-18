export const getTimeFormatedMMSS = dur => {
    return (
        Math.floor(dur / 60) + ':' + ('0' + Math.floor(dur % 60)).slice(-2)
    );
};