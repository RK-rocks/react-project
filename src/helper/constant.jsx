export const AppName = "Fire Fox";
export const drawerWidth = "260px";
export const miniDrawerWidth = "80px";
export const themeSettingDrawerWidth = "300px";
export const chatDrawerWidth = "260px";
export const chatMiniDrawerWidth = "0px";


//constant for base url
export const iconDemo = require("../assets/images/maanmandir.png");
export const LIVE_BASEURL_API = "http://liveurl.info:7676/"
export const LOCAL_BASEURL_API = "http://192.168.3.222/"
export const loginBack = require("../assets/images/loginback.jpg");

export const BASEURL_API = process.env.NODE_ENV === 'development' ? LOCAL_BASEURL_API : LIVE_BASEURL_API