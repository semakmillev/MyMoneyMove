/*
	db.transaction(function (tx) {
tx.executeSql("SELECT * FROM BANK", [], CallBackHandleResult);
},errorHandler, CallBackContinue);
*/
var db = openDatabase('MoneyDB', '1.0', 'Money Database', 10 * 1024 * 1024);
var sqlSmsParams = "CREATE TABLE IF NOT EXISTS SMS_PARAMS("+
                   "SMS_ID, "+
                   "NAME, "+
                   "VALUE)";
                   
var sqlLedger = "CREATE TABLE IF NOT EXISTS LEDGER("+
                "_ID INTEGER primary key NOT NULL  UNIQUE, "+
                "DEBIT_ACC, " +
                "CREDIT_ACC, " +
                "BANK, " +
                "SUMMA_DEBIT, " +
                "CUR_DEBIT, " +
                "SMS_ID, "+
                "TRANS_DATE, " +
                "TRANS_TIME, " +
                "NUM_DATE, " +
                "PLACE, " +
                "COMMENTS, " +
                "SUMMA_CREDIT, " +
                "CUR_CREDIT, " +
                "BALANCE, " +
                "BALANCE_CUR)";

var sqlAccount = "CREATE TABLE IF NOT EXISTS ACCOUNT("+
                 "_ID INTEGER primary key NOT NULL UNIQUE, "+
                 "ACC,"+
                 "PARENT_ACC,"+
                 "BANK,"+
                 "NAME,"+
                 "TYPE,"+                  
                 "CUR,"+
                 "DATE_OPEN,"+
                 "START_BALANCE,"+
                 "COMMENTS)";
var sqlSmsTable = "CREATE TABLE IF NOT EXISTS SMS_TABLE("+
               "_ID INTEGER primary key NOT NULL  UNIQUE,"+ 
               "SENDER," +
               "SMS_TEXT,"+
               "SMS_DATE,"+ 
               "DONE)";
var sqlSmsTemplate = "CREATE TABLE IF NOT EXISTS SMS_TEMPLATE (_ID INTEGER primary key NOT NULL  UNIQUE, SENDER, TEMPLATE, TYPE)";
                 
var sqlBanks = "CREATE TABLE IF NOT EXISTS BANK("+
               "_ID INTEGER primary key NOT NULL  UNIQUE,"+
               "NAME,"+
               "CODE,"+
               "BIC, DATE_FORMAT,TIME_FORMAT)";
               
var sqlLedgerCategories = "CREATE TABLE IF NOT EXISTS LEDGER_CATEGORY("+
               "L_ID,"+
               "CAT_ID)";

var sqlCategory = "CREATE TABLE IF NOT EXISTS CATEGORY("+
    "_ID primary key NOT NULL  UNIQUE,"+
    "NAME,"+
    "PARENT,"+
    "TYPE)";

var sqlPlaces = "CREATE TABLE IF NOT EXISTS PLACE("+
                "_ID INTEGER primary key NOT NULL  UNIQUE,"+
                "NAME)"

var sqlPlaceSms = "CREATE TABLE IF NOT EXISTS PLACE_SMS("+
    "_ID INTEGER primary key NOT NULL  UNIQUE,"+
    "CODE, PLACE_NAME)";


var arrSender = [];
var arrTemplate = [];
var arrSMS = [];



var arrParsedSMS = [];

function BankSMS() {
    var BankSMS = {_id:"",
    acc:"",
    bank:"",
    summa:"",
    cur:"",
    balance:"",
    balanceCur:"",
    tranDate:"",
    tranTime:"",
    place:"",
    dir:""};
    return BankSMS;
}


String.prototype.replaceAll = function(target, replacement) {
  return this.split(target).join(replacement);
};

function DropCreateTable(_tableName, _createScript)
{
    //alert(_createScript);
    var deleteScript = "DELETE FROM "+_tableName;
    var dropScript = "DROP TABLE "+_tableName;
    db.transaction(function (tx) {tx.executeSql(deleteScript);});
    db.transaction(function (tx) {tx.executeSql(dropScript);});
    db.transaction(function (tx) {tx.executeSql(_createScript,[],function(){},errorHandler);});
}
function ConvertDate(_text)
{
   //"31.03.2016 15:08:48"
   var day = _text.substr(0,2);
   var month = _text.substr(3,2);
   var year = _text.substr(6,4);
   var hour = _text.substr(11,2);
   var minute = _text.substr(14,2);
   var second = _text.substr(17,2);
   var res = year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;
   return res;
}
function addNew()
{
    $.mobile.changePage("#SMSMaster", {
        transition: 'pop',
        role: 'dialog'
    });
}
var tmpRes = false;



function CheckAccountExistance(_acc,_bank, callBack){
    var res;    
    db.transaction(function (tx) {
        tx.executeSql("SELECT * FROM ACCOUNT WHERE ACC = ?", [_acc], function(tx, rs){
            res = rs.rows.length>0;
            console.log(res);            
            callBack(_acc,_bank, res);            
       }, errorHandler);
   });    
   //callBack(_acc,_bank+'b', false); 
    /*
    db.transaction(function(tx){
		
		tx.executeSql("SELECT * FROM BANK", [], function(tx,result){
			for (var i=0; i < result.rows.length; i++) { 
                //alert('1');
				tmpRes = true;                                                          
			}
		}); },
		function(){},
		function(){			
			return tmpRes;	
		}
		);*/
}
function ShowInfo(el)
{
    var st = $(el).text();
    //var rq = "ExcercisePage.html?id="+$(el).attr("id");
    //alert(rq);
    if(typeof(Storage)!=="undefined") {
        localStorage.exId=$(el).attr("id");
    }
    $.mobile.changePage("ExcercisePage.html", {
        transition: 'pop',
        role: 'dialog'
    });
    //showDialog("ExcercisePage.py?id="+$(el).attr("id")+"&name="+$(el).attr("name")+"&comment="+$(el).attr("comment"));
}
function AddZero(_value)
{
  var st = new String(_value)
  if(st.length == 1){
    return '0'+st;
  }
  return st;
}
function _ConvertDate(_date)
{
   var day = AddZero(_date.getDate());
   var month = AddZero(_date.getMonth() + 1);
   var year = _date.getFullYear();
   var hour = AddZero(_date.getHours());
   var minute = AddZero(_date.getMinutes());
   var second = AddZero(_date.getSeconds());
   var res = year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;
   return res;
		
}

function DeleteBankDB(_id)
{
    var sqlDelete = "DELETE FROM BANK WHERE _ID = ?";
    db.transaction(function(tx){tx.executeSql(sqlDelete, [_id]);
                 });
}
function SetBankDB(_id,_name,_code,_bic)
{
    var sqlInsert = "INSERT INTO BANK (NAME,CODE,BIC) VALUES (?,?,?)";
    var sqlInsertId = "INSERT INTO BANK(_ID,NAME,CODE,BIC) VALUES(?,?,?,?)";
    
    
 
    
    if(_id != 0){
        DeleteBank(_id);
        db.transaction(function(tx){tx.executeSql(sqlInsertId,[_id,_name,_code,_bic])});            
    }else{
        db.transaction(function(tx){tx.executeSql(sqlInsert,[_name,_code,_bic])});
    }
}

function DeleteAccountDB(_id)
{
    var sqlDelete = "DELETE FROM ACCOUNT WHERE _ID = ?";
    db.transaction(function(tx){tx.executeSql(sqlDelete, [_id]);
                 });
}
function SetAccountDB(_id,_acc,_parentId,_bank,_name,_type,_cur,_dateOpen,_start_balance, _comments)
{
    var sqlInsert = "INSERT INTO ACCOUNT(ACC,PARENT_ACC,BANK,NAME,TYPE,CUR,DATE_OPEN,START_BALANCE,COMMENTS) VALUES(?,?,?,?,?,?,?,?,?)";
    var sqlInsertId = "INSERT INTO ACCOUNT1(_ID,ACC,PARENT_ACC,BANK,NAME,TYPE,CUR,DATE_OPEN,START_BALANCE,COMMENTS) VALUES(?,?,?,?,?,?,?,?,?,?)";
    
    if(_id != 0){
        DeleteAccount(_id);
        db.transaction(function(tx){tx.executeSql(sqlInsertId,
                                                 [_id,_acc,_parentId,_bank,_name,_type,_cur,_dateOpen,_start_balance,_comments],
                                                 function(){console.log('ok')},
                                                 errorHandler
                                                 )
                                    });            
    }else{
        db.transaction(function(tx){tx.executeSql(sqlInsert,
                                                 [_acc,_parentId, _bank,_name,_type,_cur,_dateOpen,_start_balance,_comments],
                                                 function(){console.log('ok')},
                                                 errorHandler
                                                 )});
    }
}

function InsertSMS(_id, _sender, _smsText, _smsDate)
{
  //alert(_id);
  var dt = new Date(_smsDate);
  
  //alert(_ConvertDate(dt));


  //  smsList
    var html = '<li data-icon="false" class="parsing-sms" id="sms'+_id+'" bank="'+_sender+'">%'+_id+'^'+_sender+'^'+_smsDate+'^'+_smsText+'</li>';
    //alert(html);

    $('#smsList').append(html);
    $('#smsList').listview("refresh");
    try{
        $("#sms"+_id).on("taphold",Main.SetTemplate);
    }catch(err) {
        alert(err)
    }
    db.transaction(function(tx){
	      tx.executeSql("INSERT INTO SMS_TABLE (_ID, SENDER,SMS_TEXT,SMS_DATE,DONE) VALUES (?,?,?,?,?)", [_id,
	                                                                                                _sender,
                                                                                                    _smsText,
                                                                                                    _ConvertDate(dt),//_ConvertDate(dt),
                                                                                                    "0"]);  
    }
  );
}
var test=-1;
function  errorHandler(transaction,error)
{
    alert(error.message);
}

function InitDb()
{
    arrSender.length = 0;
    arrParsedSMS.length = 0;
    DropCreateTable("SMS_TABLE",sqlSmsTable);
    DropCreateTable("SMS_TEMPLATE",sqlSmsTemplate);
    DropCreateTable("LEDGER",sqlLedger);
    DropCreateTable("ACCOUNT",sqlAccount);
    DropCreateTable("SMS_PARAMS",sqlSmsParams);
    DropCreateTable("BANK",sqlBanks);
    DropCreateTable("CATEGORY",sqlCategory);
    DropCreateTable("LEDGER_CATEGORY",sqlLedgerCategories);
    DropCreateTable("PLACE",sqlPlaces);
    DropCreateTable("PLACE_SMS",sqlPlaceSms);
    var dt = new Date();
    SetAccountDB(0,"CASH",'','','Наличные','Наличные',"RUR",Converter.DateToStr(dt,"DD.MM.YYYY"),0,'');
    SetAccountDB(0,"OUT",'','','Внешний источник','Технический',"RUR",Converter.DateToStr(dt,"DD.MM.YYYY"),0,'');


    DatabaseUnit.SetLedger(0,'OUT','CASH','',0,'RUR','','01.01.2000','00:00:00','','',0,'RUR',0,'RUR');
    db.transaction(function (tx) {        
        tx.executeSql("INSERT INTO CATEGORY (_ID,NAME,PARENT,TYPE) VALUES (?,?,?,?)", ["Еда",
                                                                                       "Еда",
                                                                                       "",
                                                                                       "-"]);       
        tx.executeSql("INSERT INTO CATEGORY (_ID,NAME,PARENT,TYPE) VALUES (?,?,?,?)", ["Еда:Столовая",
                                                                                       "Столовая",
                                                                                       "Еда",
                                                                                       "-"]);
        tx.executeSql("INSERT INTO CATEGORY (_ID,NAME,PARENT,TYPE) VALUES (?,?,?,?)", ["Еда:Столовая:Обед",
                                                                                       "Обед",
                                                                                       "Еда:Столовая",
                                                                                       "-"]);
        tx.executeSql("INSERT INTO CATEGORY (_ID,NAME,PARENT,TYPE) VALUES (?,?,?,?)", ["Дом",
                                                                                       "Дом",
                                                                                       "",
                                                                                       "-"]);
        tx.executeSql("INSERT INTO CATEGORY (_ID,NAME,PARENT,TYPE) VALUES (?,?,?,?)", ["Развлечения",
                                                                                       "Развлечения",
                                                                                       "",
                                                                                       "-"],
                      function(){},
                      errorHandler);

        tx.executeSql("INSERT INTO CATEGORY (_ID,NAME,PARENT,TYPE) VALUES (?,?,?,?)", ["Развлечения:Ресторан",
                                                                                       "Ресторан",
                                                                                       "Развлечения",
                                                                                       "-"],
            function(){},
            errorHandler);

    });
  
   
   
   db.transaction(function (tx) {        


       tx.executeSql("INSERT INTO BANK (NAME,CODE,BIC,DATE_FORMAT,TIME_FORMAT) VALUES (?,?,?,?,?)",["Альфа-банк",
                                                                        "Alfa-Bank",
                                                                        "123456",
                                                                        "DD.MM.YYYY",
                                                                        "HH24:MI:SS"],function(){},errorHandler);
       tx.executeSql("INSERT INTO BANK (NAME,CODE,BIC,DATE_FORMAT,TIME_FORMAT) VALUES (?,?,?,?,?)", ["Банк Москвы",
																		 "BankMoskvy",
																		 "123456",
                                                                         "DD.MM.YYYY",
                                                                         "HH24:MI:SS"],function(){},errorHandler);

        
  }); 
						
 
	
	
	

    db.transaction(function (tx) {        
        tx.executeSql("INSERT INTO SMS_TEMPLATE (SENDER,TEMPLATE,TYPE) VALUES (?,?,?)", ["Alfa-Bank",
                                                                                         "%ACC%; Pokupka; Uspeshno; Summa: %SUMMA% %CUR%; Ostatok: %BALANCE% %BALANCE_CUR%; %PLACE%; %TRANS_DATE% %TRANS_TIME%",
                                                                                         "SPENDING"]);

        tx.executeSql("INSERT INTO SMS_TEMPLATE (SENDER,TEMPLATE,TYPE) VALUES (?,?,?)", ["BankMoskvy",
                                                                                         "Pokupka, Karta:%ACC% summa:%SUMMA% %CUR% balans:%BALANCE% %BALANCE_CUR% %PLACE% (vremya operatsii MSK %TRANS_TIME% %TRANS_DATE%)",
                                                                                         "SPENDING"]);  
        
        tx.executeSql("INSERT INTO SMS_TEMPLATE (SENDER,TEMPLATE,TYPE) VALUES (?,?,?)", ["BankMoskvy",
                                                                                         "Popolnenie, Karta:%ACC% summa:%SUMMA% %CUR% balans:%BALANCE% %BALANCE_CUR% %DOP_INFO% (vremya operatsii MSK %TRANS_TIME% %TRANS_DATE%)",
                                                                                         "ADD"]);
        tx.executeSql("INSERT INTO SMS_TEMPLATE (SENDER,TEMPLATE,TYPE) VALUES (?,?,?)", ["BankMoskvy",
                                                                                         "Vydacha nalichnyh Karta:%ACC% summa:%SUMMA% %CUR% balans:%BALANCE% %BALANCE_CUR% %PLACE% (vremya operatsii MSK %TRANS_TIME% %TRANS_DATE%)",
                                                                                         "CASHOUT"]);

        tx.executeSql("INSERT INTO SMS_TEMPLATE (SENDER,TEMPLATE,TYPE) VALUES (?,?,?)", ["Alfa-Bank",
                                                                                         "%ACC%; Postupleniye; Summa: %SUMMA% %CUR%; Ostatok: %BALANCE% %BALANCE_CUR%; %TRANS_DATE%; Podrobnosti v mobilnom banke alfabank.ru/app/1",
                                                                                         "ADD"],function(){},errorHandler);
        tx.executeSql("INSERT INTO SMS_TEMPLATE (SENDER,TEMPLATE,TYPE) VALUES (?,?,?)", ["Alfa-Bank",
                                                                                         "Spisanie so scheta %ACC% na summu %SUMMA% %CUR%, poluchatel platezha %PLACE%; %TRANS_DATE% %TRANS_TIME%.",
                                                                                         "SPENDING"]);


    });
	
	
	/*
	var dataBaseExists(yep, nope) {
		database.transaction(function(tx) {
			tx.executeSql('CREATE TABLE GLOBAL (uid, property, value)');
			}, function(){
			if (yep) {
				yep.apply(this, arguments);
			}
			}, function(){
			if (nope) {
				nope.apply(this, arguments);
			}
		});
	};
	
	
	var itDoes = function() {
		console.log("great");
	};
	
	var itDoesNot = function() {
		console.log("what a pity");
	};
	
	
	databaseExists(itDoes, itDoesNot);
      */ 
    db.transaction(function (tx) {
                
      /*  tx.executeSql("INSERT INTO SMS_TABLE (_ID,SENDER,SMS_TEXT,SMS_DATE,DONE) VALUES (?,?,?,?,?)", ["1","BM",
                                                                                                 "Popolnenie, Karta:8038 summa:74571.29 RUR  balans:99909.51 RUR 000000000000191000001844019256 (vremya operatsii MSK 14:04:52 31.03.2016)",
                                                                                                 ConvertDate("31.03.2016 14:04:52"),
                                                                                                 "0"]);*/
        /*tx.executeSql("INSERT INTO SMS_TABLE (_ID,SENDER,SMS_TEXT,SMS_DATE,DONE) VALUES (?,?,?,?,?)", ["2","BM",
                                                                                                 "Pokupka, Karta:8968 summa:478.00 RUR  balans:25338.22 RUR YM*YandexTaxi (vremya operatsii MSK 11:17:10 31.03.2016)",
                                                                                                 ConvertDate("31.03.2016 11:17:10"),
                                                                                                 "0"]);
        tx.executeSql("INSERT INTO SMS_TABLE (_ID,SENDER,SMS_TEXT,SMS_DATE,DONE) VALUES (?,?,?,?,?)", ["3","BM",
                                                                                                 "Pokupka, Karta:8968 summa:108.00 RUR  balans:99801.51 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:08:48 31.03.2016)",
                                                                                                 ConvertDate("31.03.2016 15:08:48"),
             /                                                                                    "0"]);
        
        tx.executeSql("INSERT INTO SMS_TABLE (_ID,SENDER,SMS_TEXT,SMS_DATE,DONE) VALUES (?,?,?,?,?)", ["4","BM",
                                                                                                 "Pokupka, Karta:8968 summa:594.00 RUR  balans:25816.22 RUR CAFE-CLUB 1000 MILES (vremya operatsii MSK 22:47:55 30.03.2016)",
                                                                                                 ConvertDate("30.03.2016 22:47:55"),
                                                                                                 "0"]);
        tx.executeSql("INSERT INTO SMS_TABLE (_ID,SENDER,SMS_TEXT,SMS_DATE,DONE) VALUES (?,?,?,?,?)", ["5","ALPHA",
                                                                                                 "5*8022; Pokupka; Uspeshno; Summa: 59,00 RUR; Ostatok: 12941,08 RUR; RU/MOSCOW/CITYSTORE-CHAPLYGINA; 28.03.2016 15:38:40",
                                                                                                 ConvertDate("28.03.2016 15:38:40"),
                                                                                                 "0"]);    */
   
    });
}


function prepareSearch(_text)
{
  var res = _text;
      res =_text.replaceAll('%PLACE%','\\b.*');
      res = res.replaceAll(/%\w*%/ig,'\\b[\\w|\\.|\\*|\\,|\\:||\\/|\\-]*\\b');
      res = res.replaceAll('(','\\(');
      res = res.replaceAll(')','\\)');
  return res;      
}
function GetFieldValue(_text, _template, _fieldName) {
    var place = _template.indexOf('%' + _fieldName + '%');
    if(place<0){
        return "";
    }
    var TemplateOut = _template.substring(0, place);
    var TemplateIn = _template.substring(0, place + ('%' + _fieldName + '%').length);
    var nextPlaceStart = _template.indexOf('%', place + ('%' + _fieldName + '%').length + 1);
    var nextPlaceFinish = _template.indexOf('%', nextPlaceStart + 1) + 1;
    var RegOut = new RegExp(prepareSearch(TemplateOut), 'g');
    var RegIn = new RegExp(prepareSearch(TemplateIn), 'g');

    if (_fieldName == "PLACE" && nextPlaceStart >= 0) {
        var TemplateOutPlus = _template.substring(0, nextPlaceStart);
        var RegOutPlus = new RegExp(prepareSearch1(TemplateOutPlus), 'g');
        var placeFinish = place + ('%'+'PLACE'+'%').length;
        var dif = nextPlaceStart-placeFinish;

        var res =_text.substring(_text.match(RegOut)[0].length, _text.match(RegOutPlus)[0].length - dif);
        return res;

    }else{
        var res = _text.substr(_text.match(RegOut)[0].length, _text.match(RegIn)[0].length - _text.match(RegOut)[0].length);
        return res;
    }
}
function SetSmsParam(_smsId,_name,_value){
    db.transaction(function (tx) {           
        tx.executeSql("INSERT INTO SMS_PARAMS (SMS_ID,NAME,VALUE) VALUES (?,?,?)", [_smsId,_name,_value],function(){},errorHandler);
   });
}


function JournalClick(){

}







function Save()
{
    var Id = $(dlgPage).attr('exId');
    localStorage.exId=0;
    var Name = $("#name").val();
    var Comments = $("#comments").val();
    var ExcerciseGroup = $("#ExcerciseGroup").val();
     
  
    
    if(Id == 0)
    {    
        db.transaction
        (
            function (tx) 
            {
               // var lastId;
                tx.executeSql("INSERT INTO Excercise (_ID,Name, Comment, Type_ID) VALUES (?,?,?,?)", [localStorage.lastExId,Name,Comments,ExcerciseGroup]);
                var len = $("#measureTypes .measureCheck").length;
                
                for(i = 0;i<len;i++){
                   var measureTypes = $("#measureTypes .measureCheck");
                   var mtId = $(measureTypes[i]).prop("id");
                   var mtChecked = $(measureTypes[i]).prop("checked");
                   if((mtChecked)){
                      tx.executeSql("INSERT INTO Measure (EX_ID,MT_ID,CHECKED) values (?,?,?)",[localStorage.lastExId,mtId,true]);
                  
                    }
                }
            }
        );        
             
    }else{
        db.transaction
        (
            function (tx)
            {
                tx.executeSql("UPDATE Excercise set Name = ?, Comment = ?, Type_ID = ? where _ID = ?", [Name,Comments,ExcerciseGroup,Id]);
                tx.executeSql("DELETE FROM Measure WHERE EX_ID = ?",[Id]);
                var len = $("#measureTypes .measureCheck").length;
                var measureTypes = $("#measureTypes .measureCheck");
                for(i = 0;i<len;i++){
                  var measureTypes = $("#measureTypes .measureCheck"); 
                  var mtId = $(measureTypes[i]).prop("id");
                  var mtChecked = $(measureTypes[i]).prop("checked");
                  if(mtChecked){
                    tx.executeSql("INSERT INTO Measure (EX_ID,MT_ID,CHECKED) values (?,?,?)",[Id,mtId,true]);
                  }
               }
            }
        );
    }




    /*

    var len = $("#measureTypes .measureCheck").length;
    var measureTypes = $("#measureTypes .measureCheck");
    for(i = 0;i<len;i++){

      mtId = $(measureTypes[i]).prop("id");
      mtChecked = $(measureTypes[i]).prop("checked");
      alert(mtId);
        //alert($(measureTypes[i]).prop("id"));
    }
    */
    //$(this).closest('ui-dialog-content').dialog('close');
    $("#ExcercisesList").listview('refresh');
    
    $.mobile.back();
    refreshPage();
    location.reload();
    
  
    //alert(ExcerciseGroup);
}
function SaveTrain()
{
  
    var id = localStorage.lastTrainId;
    var trainDate = new Date($("#trainDate").datebox("getTheDate"));
    var trainDateText = (trainDate.getFullYear()+'-'+
                         ('0'+(trainDate.getMonth()+1)).slice(-2)+'-'+
                         ('0'+trainDate.getDate()).slice(-2)+' '+
                         '00:00:00');

	var Name = $("#trainName").val();
	var Comments = '';
     
    db.transaction
        (
            function (tx) 
            {
               // var lastId;
                tx.executeSql("DELETE FROM Training WHERE _ID = ?",[localStorage.lastTrainId]);
                tx.executeSql("DELETE FROM Training_Plan WHERE TR_ID = ?",[localStorage.lastTrainId]);                
                tx.executeSql("INSERT INTO Training (_ID, Name, Comments, Train_Date, Done,Start_Date,Stop_Date) VALUES (?,?,?,?,?,?,?)", [localStorage.lastTrainId,Name,Comments,trainDateText,'0',null,null]);
                var len = $("#TrainingExcerciseList li").length;
                
                for(i = 0;i<len;i++){
                   var excercises = $("#TrainingExcerciseList li");
                   var exId = $(excercises[i]).attr("ex_id");                   
                   tx.executeSql("INSERT INTO Training_Plan (EX_ID, TR_ID, Train_Order, Done, Repeat) values (?,?,?,?,?)",[exId,localStorage.lastTrainId,i,'0','1']);                                     
                }
            }
        );
    //$.mobile.changePage("Training.html");    
	//$.mobile.changePage( "Training.html", {transition: "none", reloadPage:true} );
    localStorage.selectedTrainId = localStorage.lastTrainId;
    $.mobile.changePage( "TrainingExcercise.html");

    //, {transition: "none", reloadPage:true}
}
/*
 _ID INTEGER primary key NOT NULL  UNIQUE, "+
 "DEBIT_ACC, CREDIT_ACC, BANK, SUMMA, CUR, SMS_ID, CATEGORY_ID,"+
 "TRANS_DATE,  PLACE, COMMENTS, SUMMA_RUR, BALANCE, BALANCE_CUR
 */
var DatabaseUnit = {
    SetLedger: function (_id, _debitAcc, _creditAcc, _bank, _summaDebit, _curDebit, _smsId, _transDate, _transTime,  _place, _comments, _summaCredit,_curCredit, _balance, _balanceCur,_functionCallback)
    {
        //alert(_summaDebit);
        var dt = new Date();
        var transTime = _transTime;
        if(transTime == ""){
            transTime = "00:00:00";
            alert('!');
        }
        try{
            dt = Converter.StrToDate(_transDate+" "+transTime,"DD.MM.YYYY HH24:MI:SS");
        }catch (err){
            alert(transTime=='');
        }

        //alert(dt);
        var sqlInsert =  "INSERT INTO LEDGER (DEBIT_ACC, CREDIT_ACC, BANK, SUMMA_DEBIT, CUR_DEBIT, " +
                         "                    SMS_ID, TRANS_DATE,TRANS_TIME, NUM_DATE, PLACE, COMMENTS, SUMMA_CREDIT, CUR_CREDIT, BALANCE, BALANCE_CUR) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        var sqlInsertId =   "INSERT INTO LEDGER (_ID, DEBIT_ACC, CREDIT_ACC, BANK, SUMMA_DEBIT, CUR_DEBIT, " +
                            "                   SMS_ID, TRANS_DATE,TRANS_TIME, NUM_DATE, PLACE, COMMENTS, SUMMA_CREDIT, CUR_CREDIT, BALANCE, BALANCE_CUR) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        db.transaction(function (tx) {
            if(_id == 0){
                //alert(sqlInsert);
                tx.executeSql(sqlInsert,[_debitAcc, _creditAcc, _bank,
                                         _summaDebit, _curDebit, _smsId,
                                         _transDate, transTime, dt.getTime(),_place, _comments,
                                         _summaCredit,_curCredit, _balance, _balanceCur],_functionCallback,errorHandler);
            } else{
                tx.executeSql("DELETE FROM LEDGER WHERE _ID = ?",[_id],function(){},errorHandler);
                tx.executeSql(sqlInsertId, [_id, _debitAcc, _creditAcc, _bank,
                                            _summaDebit, _curDebit, _smsId, _transDate,
                                            transTime,dt.getTime(),
                                            _place, _comments, _summaCredit,_curCredit, _balance, _balanceCur],_functionCallback,errorHandler);
            }


        });
    },
    SetTemplate : function(_sender,_template,_type,_callback){
        db.transaction(function (tx) {
            tx.executeSql("INSERT INTO SMS_TEMPLATE (SENDER,TEMPLATE,TYPE) VALUES (?,?,?)", [_sender,_template,_type],errorHandler);

        },_callback);
    }
}

function refreshPage()
{
    jQuery.mobile.changePage(window.location.href, {
        allowSamePageTransition: true,
        transition: 'none',
        reloadPage: true
    });
}
function ShowChecked(){
    var len = $("#measureTypes .measureCheck").length;
    var measureTypes = $("#measureTypes .measureCheck");
    for(var i = 0;i<len;i++){
        alert($(measureTypes[i]).prop("checked"));
    }

}
function SortExcercises(a,b)
{
    var valA = $( a ).attr("group"),
        valB = $( b ).attr("group");
    if ( valA < valB ) { return -1; }
    if ( valA > valB ) { return 1; }
    return 0;
}