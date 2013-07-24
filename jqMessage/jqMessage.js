/*Messages
Developer: Jamin Quimby
jQuery Required

*/
function jMessage(params){
    // options array
    var options = { 
        'showAfter': 0, // number of sec to wait after page loads
        'duration': 50, // display duration
        'autoClose' : false, // flag to autoClose notification message
        'type' : 'success', // type of info message error/success/info/warning
        'message': '', // message to dispaly
        'link_notification' : '', // link flag to show extra description
        'description' : '', // link to desciption to display on clicking link message
  	'destroy':false
    }; 
    // Extending array from params
    $.extend(true, options, params);
    
	switch(options['type']){
	case"error":msgclass = 'error message';break;
	case"information":msgclass = 'info message';break;
	case"warning":msgclass = 'warning message';break;
	case"success":msgclass = 'success message';break;
	case"save":msgclass='save message';break;
	default:break;	
		}
	if(options["destroy"]==true){
		$("#jmessage").remove()
		}
    
    // Parent Div container
    var container = '<div id="jmessage" class="'+msgclass+'"><div><p>'+options['type']+'<p><h3>'+options['message']+'</h3>';
	if(options['type']=="save"){container +="<div class='imgSave'></div>"};
    container += '<div onclick="return closeNotification()"></div></div><div>';
    
   // $notification = ;
    
    // Appeding notification to Body
    $('body').append(container);
    
    var divHeight = $('div#jmessage').height();
    // see CSS top to minus of div height
    $('div#jmessage').css({
        top : '-'+divHeight+'px'
    });
    
    // showing notification message, default it will be hidden
    $('div#jmessage').show();
    
    // Slide Down notification message after startAfter seconds
    slideDownNotification(options['showAfter'], options['autoClose'],options['duration']);
    
    $('div#jmessage').on('click', function(){
        $('div#jmessage').html(options['description']).slideDown('slow');
    });
    
}
// function to close notification message
// slideUp the message
function closeNotification(duration){
    var divHeight = $('#jmessage').height();
    setTimeout(function(){
        $('#jmessage').animate({
            top: '-'+divHeight+42
        }); 
        // removing the notification from body
        setTimeout(function(){
            $('#jmessage').remove();
        },200);
    }, parseInt(duration * 1000));   
    

    
}

// sliding down the notification
function slideDownNotification(startAfter, autoClose, duration){    
    setTimeout(function(){
        $('#jmessage').animate({
            top: 0
        }); 
        if(autoClose){
            setTimeout(function(){
                closeNotification(duration);
            }, duration);
        }
    }, parseInt(startAfter * 1000));    
}
