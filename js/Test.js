function AddZero1(_value)
{
	var st = new String(_value)
	if(st.length == 1){
		return '0'+st;
	}
	return st;
}
function Test()
{ 
  var date = new Date();
  alert(AddZero1(date.getYear()));
  //alert(AddZero(date.getDate()));
}
function Get1(){
	db.transaction(function (tx) {
		tx.executeSql("SELECT L.SUMMA_DEBIT, L.BALANCE FROM LEDGER L, (SELECT MIN(NUM_DATE) NUM_DATE FROM LEDGER) MIN_L WHERE MIN_L.NUM_DATE = L.NUM_DATE", [], function(tx, rs){
			var res = rs.rows.item(0).SUMMA_DEBIT+' '+rs.rows.item(0).BALANCE;
			alert(res);
		}, errorHandler);
	});
}
function SetCookie()
{
  $.cookie('test',$("#date")[0].value);
  localStorage.val = $("#date")[0].value; 
}
function GetCookie()
{
	alert($.cookie('test'));
	alert(localStorage.val);
}

function prepareSearch1(_text)
{
    var res = _text;

    //res = _text.replaceAll('%PLACE%','\\b[\\w|\\.|\\*|\\,|\\:||\\/|\\-|\\b]*\\b');
    res = _text.replaceAll('%PLACE%','\\b.*');
    res = res.replaceAll(/%\w*%/ig,'\\b[\\w|\\.|\\*|\\,|\\:||\\/|\\-]*\\b');
    res = res.replaceAll('(','\\(');
    res = res.replaceAll(')','\\)');
    return res;
}

function TestModule(){
    /*var _text = "5*8022; Pokupka; Uspeshno; Summa: 59,00 RUR; Ostatok: 12941,08 RUR; RU/MOSCOW/CITYSTORE- CHAPLYGINA; 28.03.2016 15:38:40";
    var _temp = "%ACC%; Pokupka; Uspeshno; Summa: %SUMMA% %CUR%; Ostatok: %BALANCE% %BALANCE_CUR%; %PLACE%; %TRANS_DATE% %TRANS_TIME%";
    var resPlace = _temp.replaceAll('%PLACE%','.*').replaceAll(')','\\)');
    //var resPlace = _temp.replaceAll(/%\w*%/ig,'\\b[\\w|\\.|\\*|\\,|\\:|\\-|\\/]*\\b').replaceAll(')','\\)');
    var place = _temp.indexOf('%'+'PLACE'+'%');
    var nextPlaceStart = _temp.indexOf('%',place+('%PLACE%').length + 1);
    var nextPlaceFinish = _temp.indexOf('%',nextPlaceStart + 1) + 1;
    alert(_temp.substring(nextPlaceStart,nextPlaceFinish));

    var TemplateOut = _temp.substring(0,place);
    var TemplateIn = _temp.substring(0,place+('%'+'PLACE'+'%').length);


    var TemplateOutPlus = _temp.substring(0,nextPlaceStart);
    var TemplateInPlus = _temp.substring(0,nextPlaceFinish + 1);



    alert(TemplateOut);
    alert(TemplateInPlus);

    var RegOut = new RegExp(prepareSearch1(TemplateOut),'g');
    var RegIn = new RegExp(prepareSearch1(TemplateIn),'g');
    var RegOutPlus = new RegExp(prepareSearch1(TemplateOutPlus),'g');
    var RegInPlus = new RegExp(prepareSearch1(TemplateInPlus),'g');


    var res =_text.substring(_text.match(RegOut)[0].length,_text.match(RegOutPlus)[0].length);

     var _temp = "Vydacha nalichnyh Karta:%ACC% summa:%SUMMA% %CUR% balans:%BALANCE% %BALANCE_CUR% %PLACE%.; (vremya operatsii MSK %TRANS_TIME% %TRANS_DATE%)";
     var _text = "Vydacha nalichnyh Karta:8968 summa:45000.00 RUR balans:28533.22 RUR 1A, PAVELETSKAYA PL.; (vremya operatsii MSK 00:06:14 28.03.2016)";
    */
    var _text = "5*8022; Postupleniye; Summa: 15000,00 RUR; Ostatok: 25606,08 RUR; 08.04.2016; Podrobnosti v mobilnom banke alfabank.ru/app/1";
    var _temp = "%ACC%; Postupleniye; Summa: %SUMMA% %CUR%; Ostatok: %BALANCE% %BALANCE_CUR%; %TRANS_DATE%; Podrobnosti v mobilnom banke alfabank.ru/app/1"

    var compTemp = prepareSearch(_temp);
    var regTemp = new RegExp(compTemp, 'g');
    if (_text.match(regTemp) != null) {
        alert('!');
    }

    var resPlace = _temp.replaceAll('%PLACE%','.*').replaceAll(')','\\)');
    //var resPlace = _temp.replaceAll(/%\w*%/ig,'\\b[\\w|\\.|\\*|\\,|\\:|\\-|\\/]*\\b').replaceAll(')','\\)');
    var place = _temp.indexOf('%'+'PLACE'+'%');
    var placeFinish = place + ('%'+'PLACE'+'%').length;
    var nextPlaceStart = _temp.indexOf('%',place+('%PLACE%').length + 1);
    var dif = nextPlaceStart-placeFinish;
    alert(dif);

    var nextPlaceFinish = _temp.indexOf('%',nextPlaceStart + 1) + 1;
    //alert(_temp.substring(nextPlaceStart,nextPlaceFinish));

    var TemplateOut = _temp.substring(0,place);
    var TemplateIn = _temp.substring(0,place+('%'+'PLACE'+'%').length);


    var TemplateOutPlus = _temp.substring(0,nextPlaceStart);
    var TemplateInPlus = _temp.substring(0,nextPlaceFinish + 1);



    //alert(TemplateOut);
    //alert(TemplateInPlus);

    var RegOut = new RegExp(prepareSearch1(TemplateOut),'g');
    var RegIn = new RegExp(prepareSearch1(TemplateIn),'g');
    var RegOutPlus = new RegExp(prepareSearch1(TemplateOutPlus),'g');
    var RegInPlus = new RegExp(prepareSearch1(TemplateInPlus),'g');


    var res =_text.substring(_text.match(RegOut)[0].length,_text.match(RegOutPlus)[0].length-dif+1);



    alert(res);


}