﻿var tmpRes;
var currentBank;

function AnalyzeLedger(){

    arrParsedSMS.forEach(function(sms,i){
        var debit;
        var credit;
        sms.summa = sms.summa.replaceAll(',','.');
        sms.balance = sms.balance.replaceAll(',','.');
        if(sms.summa.split('.').length>2){
            sms.summa = sms.summa.replace('.','');
        }
        if(sms.balance.split('.').length>2){
            sms.balance = sms.balance.replace('.','');
        }

        if(sms.dir =='SPENDING'){
            debit = sms.acc;
            credit = 'OUT';
        }
        if(sms.dir =='ADD'){
            debit = 'OUT';
            credit = sms.acc;
        }
        if(sms.dir =='CASHIN'){
            debit = 'CASH';
            credit = sms.acc;
        }

        if(sms.dir =='CASHOUT'){
            debit = sms.acc;
            credit = 'CASH';
        }

        if(i==arrParsedSMS.length - 1){
            DatabaseUnit.SetLedger(0,0,debit,credit,sms.bank,sms.summa,sms.cur, sms._id,sms.tranDate,sms.tranTime,sms.place,'',sms.summa,sms.cur,sms.balance,sms.balanceCur,AnalyzeAcc());
        }else{
            DatabaseUnit.SetLedger(0,0,debit,credit,sms.bank,sms.summa,sms.cur, sms._id,sms.tranDate,sms.tranTime,sms.place,'',sms.summa,sms.cur,sms.balance,sms.balanceCur);
        }

    //    (_id, _debitAcc, _creditAcc, _bank, _summaDebit, _curDebit, _smsId, _transDate,  _place, _comments, _summaCredit,_curCredit, _balance, _balanceCur)
    //    alert(sms.bank);
    });

}

function LoadAcc(){

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

function CompareTemplates(_SMS) {
    var expr = new RegExp('%.*%', 'g');
    arrTemplate.forEach(
        function (Item, i, arr) {
            var compTemp = prepareSearch(Item[1]);
            var regTemp = new RegExp(compTemp, 'g');
            if (_SMS[1].match(regTemp) != null) {
                $("#sms" + _SMS[0]).addClass("parsed");
                db.transaction(function (tx) {
                    tx.executeSql("UPDATE SMS_TABLE SET DONE = 1 WHERE _ID = ?", [_SMS[0]], function () {
                    }, errorHandler);

                });
                var sender = Item[0];
                var template = Item[1];


                var bankSMS = BankSMS();
                bankSMS._id = _SMS[0];
                bankSMS.acc = GetFieldValue(_SMS[1], Item[1], 'ACC');
                bankSMS.bank = Item[0];
                bankSMS.summa = GetFieldValue(_SMS[1], Item[1], 'SUMMA');
                bankSMS.cur = GetFieldValue(_SMS[1], Item[1], 'CUR');
                bankSMS.balance = GetFieldValue(_SMS[1], Item[1], 'BALANCE');
                bankSMS.balanceCur = GetFieldValue(_SMS[1], Item[1], 'BALANCE_CUR');
                bankSMS.tranDate = GetFieldValue(_SMS[1], Item[1], 'TRANS_DATE');
                bankSMS.tranTime = GetFieldValue(_SMS[1], Item[1], 'TRANS_TIME');
                bankSMS.place = GetFieldValue(_SMS[1], Item[1], 'PLACE');
                bankSMS.dir = Item[2];

                SetSmsParam(_SMS[0], 'ACC', bankSMS.acc);
                SetSmsParam(_SMS[0], 'SUMMA', bankSMS.summa);
                SetSmsParam(_SMS[0], 'BANK', bankSMS.bank);
                SetSmsParam(_SMS[0], 'CUR', bankSMS.cur);
                SetSmsParam(_SMS[0], 'BALANCE', bankSMS.balance);
                SetSmsParam(_SMS[0], 'BALANCE_CUR', bankSMS.balanceCur);
                SetSmsParam(_SMS[0], 'TRANS_DATE', bankSMS.tranDate);
                SetSmsParam(_SMS[0], 'TRANS_TIME', bankSMS.tranTime);
                SetSmsParam(_SMS[0], 'DIR', bankSMS.dir);
                SetSmsParam(_SMS[0], 'PLACE', bankSMS.place);
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
                   // alert(result.rows.item(i).TEMPLATE);
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
							},errorHandler);
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
    var month = dtText.split('-')[1] - 1;
	var dt = new Date(dtText.split('-')[0],month,dtText.split('-')[2]);

    currentBank = $('#smsBankList')[0].value;
	//listSMS(currentBank,dt);
    SetSMSTest();
	$('#FirstStep').removeClass('ui-btn-active');
    $('#SecondStep').addClass('ui-btn-active');
    $("#SmsMasterTabs").tabs( "option", "active", 1 );
	//GetInfo();
    var mainHeight = $(window).height();
    mainHeight = mainHeight - $("#SmsMasterHeader").outerHeight();
    mainHeight = mainHeight - $("#nb").outerHeight()-$("#btnAnalize").outerHeight();
    $("#smsListContainer").height(mainHeight+"px");
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

    var insertSql =
        "INSERT INTO ACCOUNT(ACC,PARENT_ACC,BANK,NAME,TYPE,CUR,DATE_OPEN,START_BALANCE,COMMENTS) " +
            " SELECT MIN_L.ACC," +
            "        '' PARENT_ACC, " +
            "        BANK BANK, " +
            "        '' NAME, " +
            "        '' TYPE, " +
            "        BALANCE_CUR CUR, " +
            "        TRANS_DATE DATE_OPEN, " +
            "        0 START_BALANCE," +
            "        ''  COMMENTS " +
            "   FROM LEDGER L," +
            "       (SELECT MIN(NUM_DATE) NUM_DATE, ACC" +
            "          FROM (                 " +
            "               SELECT MIN(NUM_DATE) NUM_DATE, DEBIT_ACC ACC" +
            "                 FROM LEDGER" +
            "                GROUP BY DEBIT_ACC" +
            "                UNION         " +
            "               SELECT MIN(NUM_DATE) NUM_DATE, CREDIT_ACC ACC" +
            "                 FROM LEDGER" +
            "                GROUP BY CREDIT_ACC)" +
            "        GROUP BY ACC" +
            "               ) MIN_L " +
            " WHERE MIN_L.NUM_DATE = L.NUM_DATE" +
            "   AND (L.DEBIT_ACC = MIN_L.ACC OR L.CREDIT_ACC = MIN_L.ACC) " +
            "   AND L.NEXT_ID = 0" +
            "   AND MIN_L.ACC <> 'OUT'"+
            "   AND MIN_L.ACC NOT IN(SELECT ACC FROM ACCOUNT)";

    var insertSqlLedger =
        "INSERT INTO LEDGER (NEXT_ID, DEBIT_ACC, CREDIT_ACC, BANK, SUMMA_DEBIT, CUR_DEBIT, " +
            "                SMS_ID, TRANS_DATE,TRANS_TIME, NUM_DATE, PLACE, COMMENTS, " +
            "                SUMMA_CREDIT, CUR_CREDIT, BALANCE, BALANCE_CUR) " +
            " SELECT 0, " +
            "        'OUT' DEBIT_ACC,   " +
            "        MIN_L.ACC CREDIT_ACC," +
            "        BANK BANK, " +
            "        0,"+
            "        L.CUR_DEBIT," +
            "        '' SMS_ID," +
            "        '01.01.2000' TRANS_DATE," +
            "        '00:00:00' TRANS_TIME," +
            "        0 NUM_DATE, " +
            "        '' PLACE, " +
            "        'СТАРТОВАЯ ПРОВОДКА' COMMENTS, " +
            "        0 SUMMA_CREDIT,"+
            "        L.CUR_CREDIT," +
            "        0 BALANCE,"+
            "        L.BALANCE_CUR " +
            "   FROM LEDGER L," +
            "       (SELECT MIN(NUM_DATE) NUM_DATE, ACC" +
            "          FROM (                 " +
            "               SELECT MIN(NUM_DATE) NUM_DATE, DEBIT_ACC ACC" +
            "                 FROM LEDGER" +
            "                GROUP BY DEBIT_ACC" +
            "                UNION         " +
            "               SELECT MIN(NUM_DATE) NUM_DATE, CREDIT_ACC ACC" +
            "                 FROM LEDGER" +
            "                GROUP BY CREDIT_ACC)" +
            "        GROUP BY ACC" +
            "               ) MIN_L " +
            " WHERE MIN_L.NUM_DATE = L.NUM_DATE" +
            "   AND (L.DEBIT_ACC = MIN_L.ACC OR L.CREDIT_ACC = MIN_L.ACC) " +
            "   AND L.NEXT_ID = 0" +
            "   AND MIN_L.ACC <> 'OUT'"+
            "   AND MIN_L.ACC NOT IN(SELECT ACC FROM ACCOUNT)";

    db.transaction(function (tx) {
        tx.executeSql(insertSqlLedger, [], function(tx, result){}, errorHandler);
        tx.executeSql(insertSql, [], function(tx, result){}, errorHandler);

    },errorHandler,function(tx){
        alert('Готово!');
        //var sql = ""
        /*
        tx.executeSql('SELECT * FROM ACCOUNT WHERE START_BALANCE != 0', [], function(tx, result){
            for (var i=0; i < result.rows.length; i++) {
                //alert(result.rows.item(i).ACC);
            }
        }, errorHandler);*/
    });


}

function SmsMaster()
{

    var mainHeight = $(window).height();

    $('#FirstStep').addClass('ui-btn-active');
    $('#SecondStep').removeClass('ui-btn-active');
    $('#Third').removeClass('ui-btn-active');
    
    $.mobile.changePage("#SmsMaster");
    mainHeight = mainHeight - $("#SmsMasterHeader").outerHeight();
    $("#SmsMasterTabs").tabs( "option", "active", 0 );
    $("#SmsMasterTabs").height(mainHeight+"px");

    //alert(mainHeight+' '+$("#nb").height());

}
