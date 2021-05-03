window.fbAsyncInit = function() {
  FB.init({
    appId      : '130670722416740',
    xfbml      : true,
    version    : 'v2.9'
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));


function shareScore(username,score) {
  FB.ui({
    method:'share',
    href:'https://google.com',
    hastag:"#MILoMejor",
    quote: username+" "+"mi puntuacion: " + score
  }, function(response){});
}
