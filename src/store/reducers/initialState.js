export default {
    authError: null,
    song: {
        url: null,
        name: null,
        blob: null,
        duration: 0,
        currentTime: 0,
        isPlayPressed: false
    },
    downloadState: false,
    screenshot: {
        takeScreenshot: false,
        screenshotUrl: '',
        screenshotSuccess: false,
        screenshotError: false
    },
    fullSize: {
        isFullSize: false,
        isElementsShowed: true
    },
    chat: {
        room: 'global',
        messages: [],
        onlineUsers: null
    },
    route:{
        currentRoute: ''
    }
};
