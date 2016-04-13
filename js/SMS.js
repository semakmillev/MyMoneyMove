var smsList = [];	
var interceptEnabled = false;

function initApp() {
	if (! SMS ) { alert( 'SMS plugin not ready' ); return; }
	
    document.addEventListener('onSMSArrive', function(e){
    var data = e.data;
    smsList.push( data );
    	
    updateStatus('SMS arrived, count: ' + smsList.length );
    	
    var divdata = $('div#data');
    divdata.html( divdata.html() + JSON.stringify( data ) );
    	
    });
}

function update( id, str ) {
	$('div#' + id).html( str );
}
function updateStatus( str ) {
	$('div#status').html( str );
}
function updateData( str ) {
	$('div#data').html( str );
}

function sendSMS() {
	var sendto = $('input#sendto').val().trim();
	var textmsg = $('textarea#textmsg').val();
	if(sendto.indexOf(";") >=0) {
		sendto = sendto.split(";");
		for(i in sendto) {
			sendto[i] = sendto[i].trim();
		}
	}
	if(SMS) SMS.sendSMS(sendto, textmsg, function(){}, function(str){alert(str);});
}

function listSMS(_address,_date) {
  initApp();
  updateData('');
  //var smsDate = new Date(2016,2,25);
  var filter = {
    box : 'inbox', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
   //read : 1,
	address : _address,
                // following 4 filters should NOT be used together, they are OR relationship
                 // 0 for unread SMS, 1 for SMS already read,
	date : _date
  };
  if(SMS) SMS.listSMS(filter, function(data){
    updateStatus('sms listed as json array');
    			//updateData( JSON.stringify(data) );
    			
    var html = "";
    if(Array.isArray(data)) {
      for(var i in data) {
        var sms = data[i];
		//alert(sms)
        smsList.push(sms);
		//alert(sms._id);
		InsertSMS(sms._id,sms.address,sms.body,sms.date);
		
		
//        html += sms.date + ": " + sms.body + "<br/>";
      }
    }
    //updateData( html );
        		
  }, function(err){
    updateStatus('error list sms: ' + err);
  });
  //return smsList;
}



function deleteLastSMS() {
    		updateData('');

	if(smsList.length == 0) {
		updateStatus( 'no sms id to delete' );
		return;
	}
	
    		var sms = smsList.pop();
    		
	if(SMS) SMS.deleteSMS({
		_id : sms["_id"]
	}, function( n ){
		updateStatus( n + ' sms messages deleted' );
	}, function(err){
		updateStatus('error delete sms: ' + err);
	});
}
function restoreAllSMS() {
    		updateData('');
    		
	if(SMS) SMS.restoreSMS(smsList, function( n ){
		// clear the list if restore successfully
		smsList.length = 0;
		updateStatus(n + ' sms messages restored');
		
	}, function(err){
		updateStatus('error restore sms: ' + err);
	});
}
function startWatch() {
	if(SMS) SMS.startWatch(function(){
		update('watching', 'watching started');
	}, function(){
		updateStatus('failed to start watching');
	});
}
function stopWatch() {
	if(SMS) SMS.stopWatch(function(){
		update('watching', 'watching stopped');
	}, function(){
		updateStatus('failed to stop watching');
	});
}

function toggleIntercept() {
	interceptEnabled = ! interceptEnabled;
	
	if(interceptEnabled) { // clear the list before we start intercept
		smsList.length = 0;
	}
	
	if(SMS) SMS.enableIntercept(interceptEnabled, function(){}, function(){});
	
	$('span#intercept').text( 'intercept ' + (interceptEnabled ? 'ON' : 'OFF') );
	$('button#enable_intercept').text( interceptEnabled ? 'Disable' : 'Enable' );
}