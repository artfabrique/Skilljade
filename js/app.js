var SkillJade = {
    Init: function() {
        console.log("Init");

        Parse.initialize("DDUFZCpGG6FArLmybR7DuCnSIfOTC6UmkejvxjDG", "hoSoyhewdIhFnipsq2Ld1soUdpuegM68l0aBlWPM");


        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/all.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        SkillJade.User = new Parse.User();
    },

    User: {}
};



window.fbAsyncInit = function() {
    //alert('asdasdasd');
    //console.log("FBAsyncInit.call()");
    Parse.FacebookUtils.init({
        appId      : '128071054057984', // Facebook App ID
        channelUrl : 'http://stage.skilljade.com', // Channel File
        status     : false, // check login status
        cookie     : true, // enable cookies to allow Parse to access the session
        xfbml      : true  // parse XFBML
    });

    FB.Event.subscribe('auth.login', function(response) {
        console.log('auth.login');
    });

    FB.Event.subscribe('auth.logout', function(response) {
        console.log('auth.logout');
    });

    FB.Event.subscribe('auth.statusChange', function(response) {
        console.log('auth.statusChange');
    });

    FB.getLoginStatus(function(response){
        if (response.status === 'connected') {
            // the user is logged in and has authenticated your
            // app, and response.authResponse supplies
            // the user's ID, a valid access token, a signed
            // request, and the time the access token
            // and signed request each expire
            var uid = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;

            if (!Parse.FacebookUtils.isLinked(SkillJade.User)) {
                Parse.FacebookUtils.link(SkillJade.User, null, {
                    success: function(user) {
                        alert("Woohoo, user logged in with Facebook!");
                    },
                    error: function(user, error) {
                        alert("User cancelled the Facebook login or did not fully authorize.");
                    }
                });
            }

        } else if (response.status === 'not_authorized') {
            Parse.FacebookUtils.logIn("user_likes,email", {
                success: function(user) {
                    console.log("success not_authorized");
                    // Handle successful login
                },
                error: function(user, error) {
                    // Handle errors and cancellation
                    console.log("error not_authorized");
                }
            });
            // the user is logged in to Facebook,
            // but has not authenticated your app
        } else {
            // the user isn't logged in to Facebook.
            Parse.FacebookUtils.logIn("user_likes,email", {
                success: function(user) {
                    console.log("success");
                    // Handle successful login
                },
                error: function(user, error) {
                    // Handle errors and cancellation
                    console.log("error");
                }
            });
        }

        if(response) {

        }

    });
};

$(document).ready(function () {
    SkillJade.Init();
});


/*
var UserObject = Parse.Object.extend({

})*/