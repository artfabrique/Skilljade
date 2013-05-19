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

    User: {},

    Subscribe : function() {


        $('.lnk-sign-in').on('click',function() {
            location.href = "app.html";
        });

        $('.lnk-sign-up').on('click',function() {

            console.log();
            //if($('.form-sign-up #email').value
            var data = {
                email : $('.form-sign-up #email').val()?$('.form-sign-up #email').val():false,
                password :  ($('.form-sign-up #password').val() == $('.form-sign-up #password2').val()) && $('.form-sign-up #password').val().length>0 ? $('.form-sign-up #password').val() : false
            };
console.log(data);
            if(!data.email||!data.password) {
                alert("Please fill form correctly!");
            }else {



            SkillJade.User.set("email",data.email);
            SkillJade.User.set("username",data.email);
            SkillJade.User.set("password",data.password);
            SkillJade.User.signUp(null, {
                success: function(user) {
                    // Hooray! Let them use the app now.
                    location.href = "app.html";
                },
                error: function(user, error) {
                    // Show the error message somewhere and let the user try again.
                    alert("Error: " + error.code + " " + error.message);
                }
            });



            }
        });

        $('.lnk-sign-up-fb').on('click',function() {
            if (!Parse.FacebookUtils.isLinked(SkillJade.User)) {
                Parse.FacebookUtils.link(SkillJade.User, null, {
                    success: function(user) {
                        alert("Woohoo, user logged in with Facebook!");
                        console.log(user);
                        location.href = "app.html";
                    },
                    error: function(user, error) {
                        alert("User cancelled the Facebook login or did not fully authorize.");
                        console.log(error);
                    }
                });
            }
        });
    }

/*
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
*/

};

//var Preloader =



window.fbAsyncInit = function() {
    //alert('asdasdasd');
    //console.log("FBAsyncInit.call()");
    Parse.FacebookUtils.init({
        appId      : '128071054057984', // Facebook App ID
        channelUrl : 'http://stage.skilljade.com/app.html', // Channel File
        status     : true, // check login status
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
            console.log("status connected")
            location.href = "app.html";
            return;

        } else if (response.status === 'not_authorized') {
            console.log("status NA")
            // the user is logged in to Facebook,
            // but has not authenticated your app
        } else {
            // the user isn't logged in to Facebook.
            console.log(response);
        }

        if(response) {
            SkillJade.Subscribe();
        }

    });
};

$(document).ready(function () {
    SkillJade.Init();
});


/*
var UserObject = Parse.Object.extend({

})*/