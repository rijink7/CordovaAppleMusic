var exec = require('cordova/exec');

window.appleMusicPluginPlaying = (function () {});
window.appleMusicPluginSeeked = (function () {});
window.appleMusicPluginStopped = (function () {});
module.exports = {
    getCountryCode: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusic", "getCountryCode", []);
    },
    getDuration: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusic", "getDuration", []);
    },
    getPosition: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusic", "getPosition", []);
    },
    getStatus: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusic", "getStatus", []);
    },
    init: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusic", "init", []);
    },
    getPlayLists: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusic", "getPlayLists", []);
    },
    addSongtoPlayList: function (playListId, songId, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusic", "addSongtoPlayList", [playListId, songId]);
    },
    getSongs: function (playlistId, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusic", "getSongs", [playlistId]);
    },
    createPlayList: function (playlistName, songIds, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusic", "createPlayList", [playlistName, songIds]);
    },
    onPlay: function (f) {
        window.appleMusicPluginPlaying = f
    },
    onSeek: function (f) {
        window.appleMusicPluginSeeked = f
    },
    onStop: function (f) {
        window.appleMusicPluginStopped = f
    },
    onPause: function (f) {
        window.appleMusicPluginPaused = f
    },
    pause: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusic", "pause", []);
    },
    playTrack: function (trackId, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusic", "playTrack", [trackId]);
    },
    requestAuthorization: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusic", "requestAuthorization", []);
    },
    resume: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusic", "resume", []);
    },
    seek: function (seconds, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusic", "seek", [seconds]);
    },
    stop: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusic", "stop", []);
    }
};
