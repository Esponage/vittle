import $ from 'jquery';

$.ajaxSetup({
 beforeSend(xhr, options) {
   if(options.url.match(/api.parse.com/)) {
     xhr.setRequestHeader('X-Parse-Application-Id', 'd6cssEqdF0kqa61baB2rVAQNdMZaWEvzUKHoVYAD');
     xhr.setRequestHeader('X-Parse-REST-API-Key', 'EssPtwDUD8JInXqdWWVCe53jQDYcim04JHK7aooe');
     if(localStorage.getItem('parse-session-token')) {
       xhr.setRequestHeader('X-Parse-Session-Token', localStorage.getItem('parse-session-token'));
     }
   }
   if(options.url.match(/developers.zomato.com/)) {
   xhr.setRequestHeader('user_key', '5f2e9053d38c8784190b242b46c74906');
   }
 }
});
