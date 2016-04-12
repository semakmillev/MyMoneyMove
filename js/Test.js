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