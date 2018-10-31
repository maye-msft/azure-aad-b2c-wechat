

var config = {
    tenantID : "myaadb2cpoc.onmicrosoft.com",
    clientID : "fa61f18a-c198-456f-9dc8-f9fe95726073",
    //policyName :"B2C_1_myaadb2cpoc",
    policyName : "B2C_1A_signup_signin",
    //loginURL : "https://login.microsoftonline.com/myaadb2cpoc.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_myaadb2cpoc&client_id=067f7ac9-f226-4593-85d2-3293c73d2b08&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fclient%2F&scope=openid%20https%3A%2F%2Fmyaadb2cpoc.onmicrosoft.com%2Fserver%2Fread%20https%3A%2F%2Fmyaadb2cpoc.onmicrosoft.com%2Fserver%2Fuser_impersonation%20https%3A%2F%2Fmyaadb2cpoc.onmicrosoft.com%2Fserver%2Fwrite&response_type=id_token%20token&prompt=login",
    loginURL: "https://login.microsoftonline.com/myaadb2cpoc.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1A_signup_signin&client_id=067f7ac9-f226-4593-85d2-3293c73d2b08&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fclient%2F&scope=openid%20https%3A%2F%2Fmyaadb2cpoc.onmicrosoft.com%2Fserver%2Fread%20https%3A%2F%2Fmyaadb2cpoc.onmicrosoft.com%2Fserver%2Fuser_impersonation%20https%3A%2F%2Fmyaadb2cpoc.onmicrosoft.com%2Fserver%2Fwrite&response_type=id_token%20token&prompt=login",
    loginURL_mobile: "https://login.microsoftonline.com/myaadb2cpoc.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1A_signup_signin_WC_MFA_Mobile&client_id=067f7ac9-f226-4593-85d2-3293c73d2b08&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fclient%2Fmobile.html&scope=openid%20https%3A%2F%2Fmyaadb2cpoc.onmicrosoft.com%2Fserver%2Fread%20https%3A%2F%2Fmyaadb2cpoc.onmicrosoft.com%2Fserver%2Fuser_impersonation%20https%3A%2F%2Fmyaadb2cpoc.onmicrosoft.com%2Fserver%2Fwrite&response_type=id_token%20token&prompt=login",
    //loginURL_mobile:"https://login.microsoftonline.com/myaadb2cpoc.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_myaadb2cpoc&client_id=4a9678a5-4a09-4882-bb2d-92ee6d25a741&nonce=defaultNonce&redirect_uri=https%3A%2F%2Flogin.microsoftonline.com%2Ftfp%2Foauth2%2Fnativeclient&scope=openid&response_type=id_token&prompt=login",
    //Mobile App BBMS  
    Mobile_App_AppID: "wx4660d1e7374b75b2",
    Mobile_App_APPsecret: "",
    //Native Web App BBMS
    Web_App_AppID: "wx90d77510513e9915",
    Web_App_APPsecret: "",


}



if(typeof(window)!='undefined') {
    var global = global || window;
    global.loginURL = config.loginURL
    global.loginURL_mobile = config.loginURL_mobile
    global.Web_App_AppID = config.Web_App_AppID
} else {
    module.exports = {
        tenantID : config.tenantID,
        clientID : config.clientID,
        policyName : config.policyName,
        Mobile_App_AppID:config.Mobile_App_AppID,
        Mobile_App_APPsecret:config.Mobile_App_APPsecret,
        Web_App_AppID:config.Web_App_AppID,
        Web_App_APPsecret:config.Web_App_APPsecret
    }
}