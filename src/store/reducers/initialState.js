export default {
    authError: null,
    song: {
        url: null,
        name: null,
        blob: null
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
    }
};
