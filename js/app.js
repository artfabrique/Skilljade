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

        SkillJade.User = new Parse.User.current();

        if(SkillJade.User) {
            // all correct;
            var Test = Parse.Object.extend("Test");

            var TestCollection = Parse.Collection.extend({
                model: Test
            });



            var collection = new TestCollection();
            collection.fetch({
                success: function(collection) {
                    collection.each(function(object) {
                        console.warn(object);
                    });
                },
                error: function(collection, error) {
                    // The collection could not be retrieved.
                }
            });


        }else {
            location.href = "index.html";
        }
    },

    User: {},

    Subscribe : function() {

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
            console.log("status connected");
            //SkillJade.Subscribe();

        } else if (response.status === 'not_authorized') {
            console.log("status NA")
            location.href = "index.html";
            return;
            // the user is logged in to Facebook,
            // but has not authenticated your app
        } else {
            console.log(response);
            location.href = "index.html";
            return;
            // the user isn't logged in to Facebook.

        }
    });
};

$(document).ready(function () {
    SkillJade.Init();
});


/*
var UserObject = Parse.Object.extend({

})*/