jqMessage
=========
Try it yourself [http://jsfiddle.net/JaminQuimby/aCSnD/7/embedded/result/]

Message popup and notification jquery plugin.

jqMessage(json) Initiates the popup message

Arguments:

<h3>showAfter</h3>
Type: Integer<br/> 
Number of seconds to wait before displaying a message<br/>

<h3>duration</h3>
Type: Integer<br/>
Number of seconds for the message to display on the screen.<br/>

<h3>autoClose</h3>
Type: Bit<br/>
True or False option to close the menu automaticly, used in conjunction with duration<br/>

<h3>type</h3>
Type: String<br/>
The type of message you would like to display options(error, information, warning, sucess, save)<br/>

<h3>message</h3>
Type: String<br/>
The message you wish to display<br/>

<h3>description</h3>
Type: JSON
Arguments: Message, Link, Linkname
Adds a secondary pannel for message details and a clickable link.

<h3>buttons</h3>
Type: JSON ARRAY
Add multiple buttons onto the error pannel. 
Example:
[{"name":"Save","function":"alert('Saved')"},{"name":"Exit","function":"alert('Exit')"}] 



