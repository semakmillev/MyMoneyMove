var tmpRes;
var currentBank;

function AnalyzeLedger(){

    arrParsedSMS.forEach(function(sms,i){
        var debit;
        var credit;
        if(sms.dir =='SPENDING'){
            debit = sms.acc;
            credit = 'OUT';
        }

        DatabaseUnit.SetLedger(0,debit,credit,sms.bank,sms.summa,sms.cur, sms._id,sms.tranDate,sms.tranTime,sms.place,'',sms.summa,sms.cur,sms.balance,sms.balanceCur);
    //    (_id, _debitAcc, _creditAcc, _bank, _summaDebit, _curDebit, _smsId, _transDate,  _place, _comments, _summaCredit,_curCredit, _balance, _balanceCur)
    //    alert(sms.bank);
    });
    AnalyzeAcc();
}

function LoadAcc(){
   // Test.test('123');
    db.transaction(function (tx) {
        tx.executeSql("SELECT * FROM ACCOUNT", 
                      [], 
                      function(tx, rs){
                          for (var i=0; i < rs.rows.length; i++) { 
                            //alert(rs.rows.item(i)._ID);
                            Account.setAccount(rs.rows.item(i)._ID);                                                          
                          }                                                    
                      })
   });
}

function CompareTemplates(_SMS)
{
  var expr = new RegExp('%.*%', 'g');
  arrTemplate.forEach(
    function(Item,i,arr){
      var compTemp = prepareSearch(Item[1]);
      var regTemp = new RegExp(compTemp,'g');
      if(_SMS[1].match(regTemp) != null){
        var sender = Item[0];
        template = Item[1];
        var bankSMS = BankSMS();
        bankSMS._id = _SMS[0];
        bankSMS.acc = GetFieldValue(_SMS[1],Item[1],'ACC');
        bankSMS.bank = Item[0];
        bankSMS.summa = GetFieldValue(_SMS[1],Item[1],'SUMMA');
        bankSMS.cur = GetFieldValue(_SMS[1],Item[1],'CUR');
        bankSMS.balance = GetFieldValue(_SMS[1],Item[1],'BALANCE');
        bankSMS.balanceCur = GetFieldValue(_SMS[1],Item[1],'BALANCE_CUR');
        bankSMS.tranDate =  GetFieldValue(_SMS[1],Item[1],'TRANS_DATE');
        bankSMS.tranTime =  GetFieldValue(_SMS[1],Item[1],'TRANS_TIME');
        bankSMS.place =  GetFieldValue(_SMS[1],Item[1],'PLACE');
        bankSMS.dir = Item[2];
        SetSmsParam(_SMS[0],'ACC', bankSMS.acc );
        SetSmsParam(_SMS[0],'SUMMA', bankSMS.summa);
        SetSmsParam(_SMS[0],'BANK', bankSMS.bank);
        SetSmsParam(_SMS[0],'CUR', bankSMS.cur);
        SetSmsParam(_SMS[0],'BALANCE', bankSMS.balance);
        SetSmsParam(_SMS[0],'BALANCE_CUR', bankSMS.balanceCur);
        SetSmsParam(_SMS[0],'TRANS_DATE', bankSMS.tranDate);
        SetSmsParam(_SMS[0],'TRANS_TIME', bankSMS.tranTime);
        SetSmsParam(_SMS[0],'DIR', bankSMS.dir);
        SetSmsParam(_SMS[0],'PLACE', bankSMS.place);
        arrParsedSMS.push(bankSMS);
        //SetLedger(acc, sender,_SMS[0],sign,summa,_SMS[2]);        
      }
      
    }
  );
}

function ParseInfo()
{

  //alert('!'+arrSMS.length);
  arrSMS.forEach(function(Item,i,arr){
    CompareTemplates(Item);
  });  
  //return arrSender;
}

function GetSmsFromTable()
{
	db.transaction(function(tx){
		
		tx.executeSql("SELECT * FROM SMS_TABLE where DONE = '0'", [], function(tx,result){
			for (var i=0; i < result.rows.length; i++) { 
				var SMS = [result.rows.item(i)._ID,
				result.rows.item(i).SMS_TEXT,
				result.rows.item(i).SMS_DATE,
				result.rows.item(i).SENDER];  
				arrSMS.push(SMS);                                                           
			}
		}); 
        },
		function(){},
		function(){			
			ParseInfo();
			//CheckJournal();	
		}
		);
}

function GetTemplateFromTable()
{
	db.transaction(function(tx){		
		tx.executeSql("SELECT * FROM SMS_TEMPLATE", [], 
			function(tx,result){
				for (var i=0; i < result.rows.length; i++) { 
					var Template = [result.rows.item(i).SENDER,
					result.rows.item(i).TEMPLATE,
					result.rows.item(i).TYPE];
					arrTemplate.push(Template);
				}
			}); 
		},function(){},function(){			
			GetSmsFromTable();
		}
		);	
}

function GetInfo()
{ 
   db.transaction(function(tx)
					{
						tx.executeSql("SELECT DISTINCT SENDER FROM SMS_TEMPLATE", [], 
						function(tx,result){
							for (var i=0; i < result.rows.length; i++) {                        
								arrSender.push(result.rows.item(i).SENDER);
							}
							}); 
					},function(){},
					function(){					
						GetTemplateFromTable();	
					}
				);   
}

function CreateReceiver()
{
    $('#FirstStep').removeClass('ui-btn-active');
    $('#SecondStep').addClass('ui-btn-active');
    $("#SmsMasterTabs").tabs( "option", "active", 1 );
}
function CloseSmsMaster()
{
	$("#SmsMaster").dialog('close');
}
function SelectReceiver()
{
    var dtText = $('#importDateFrom')[0].value;
	var dt = new Date(dtText.split('-')[0],dtText.split('-')[1],dtText.split('-')[2]);
		
    currentBank = $('#smsBankList')[0].value;
	//listSMS(currentBank,dt);
	$('#FirstStep').removeClass('ui-btn-active');
    $('#SecondStep').addClass('ui-btn-active');
    $("#SmsMasterTabs").tabs( "option", "active", 1 );
	//GetInfo();
	
	/*
	db.transaction(function(tx){
		
		tx.executeSql("SELECT * FROM SMS_TABLE", [], function(tx,result){
			for (var i=0; i < result.rows.length; i++) { 
				alert(result.rows.item(i).SMS_TEXT);               
				
				
			}
		}); });*/
}

function callBackCheckAccount(_acc, _bank, _exists)
{       
    if (!_exists)
    {        
        SetAccountDB('0',_acc,'0',_bank,'','','','','')
    }else{        
    }
    
    return _exists;
}
function AnalyzeAcc()
{

    db.transaction(function(tx){
		
		tx.executeSql("SELECT DISTINCT VALUE FROM SMS_PARAMS WHERE NAME = ?", ["ACC"], function(tx,result){
			for (var i=0; i < result.rows.length; i++) { 
				CheckAccountExistance(result.rows.item(i).VALUE, currentBank, callBackCheckAccount);               				
				
			}
		}); 
    });


}

function SmsMaster()
{
    var mainWidth = $(window).width();
	/*
	$('#smsBankList option').remove();   
	var html = '<option value="">123</option>';
	$('#smsBankList').append(html);
	db.transaction(function(tx){
		
		tx.executeSql("SELECT * FROM BANK", [], function(tx,result){
			for (var i=0; i < result.rows.length; i++) {                        
				//alert(result.rows.item(i).ACC);
				var html = "";
				var html = '<option value="'+result.rows.item(i).CODE+'">'+result.rows.item(i).NAME+'</option>';
				$('#smsBankList').append(html);                      
			}
		}); 
	});*/   
    $('#FirstStep').addClass('ui-btn-active');
    $('#SecondStep').removeClass('ui-btn-active');
    $('#Third').removeClass('ui-btn-active');
    
    $.mobile.changePage("#SmsMaster", {
        transition: 'pop',
        role: 'dialog'
    });
    $("#SmsMasterTabs").tabs( "option", "active", 0 );
}