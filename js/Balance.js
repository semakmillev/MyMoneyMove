/**
 * Created with JetBrains WebStorm.
 * User: Golubitskiy_AO
 * Date: 12.04.16
 * Time: 13:16
 * To change this template use File | Settings | File Templates.
 */
var Balance = {
    GetStartedBalance: function (_acc) {
        var sql = "SELECT L.DEBIT_ACC, " +
                "       L.BALANCE " +
                "  FROM LEDGER L, " +
                "       (SELECT MIN(NUM_DATE) NUM_DATE" +
                "               FROM LEDGER" +
                "              WHERE DEBIT_ACC = ? OR CREDIT_ACC = ?) MIN_L " +
                " WHERE MIN_L.NUM_DATE = L.NUM_DATE" +
                "   AND (L.DEBIT_ACC = ? OR L.CREDIT_ACC = ?) "
            ;
        db.transaction(function (tx) {
            tx.executeSql(sql, [_acc, _acc, _acc, _acc], function (tx, rs) {
                var res = rs.rows.item(0).DEBIT_ACC + ' = ' + rs.rows.item(0).BALANCE;
                alert(res);
            }, errorHandler);
        });
    },
    CheckBalance:function(){
        var arrAcc = [];
        var sqlAcc = "SELECT * FROM ACCOUNT";


        var sqlLedger = "SELECT START_B.START_BALANCE START_BALANCE,END_B.END_BALANCE END_BALANCE, END_B.ACC ACC FROM "+
                        "(SELECT L.BALANCE + L.SUMMA_DEBIT START_BALANCE,L_D.ACC FROM LEDGER L,("+
                        "   SELECT ACC, MIN(MIN_DATE) MIN_DATE, MAX(MAX_DATE) MAX_DATE FROM("+
                        "       SELECT DEBIT_ACC ACC, MIN(NUM_DATE) MIN_DATE, MAX(NUM_DATE) MAX_DATE FROM LEDGER WHERE DEBIT_ACC = ? GROUP BY DEBIT_ACC"+
                        "        UNION "+
                        "       SELECT CREDIT_ACC ACC, MIN(NUM_DATE) MIN_DATE, MAX(NUM_DATE) MAX_DATE FROM LEDGER WHERE CREDIT_ACC = ? GROUP BY DEBIT_ACC" +
                        "   ) " +
                        "   GROUP BY ACC) L_D" +
                        "   WHERE (L.DEBIT_ACC = L_D.ACC OR L.CREDIT_ACC = L_D.ACC)" +
                        "     AND L.NUM_DATE = L_D.MIN_DATE ) START_B,"+
                        "                                    "+
                        "(SELECT L.BALANCE END_BALANCE,L_D.ACC FROM LEDGER L,("+
                        "   SELECT ACC, MIN(MIN_DATE) MIN_DATE, MAX(MAX_DATE) MAX_DATE FROM("+
                        "       SELECT DEBIT_ACC ACC, MIN(NUM_DATE) MIN_DATE, MAX(NUM_DATE) MAX_DATE FROM LEDGER WHERE DEBIT_ACC = ? GROUP BY DEBIT_ACC"+
                        "        UNION "+
                        "       SELECT CREDIT_ACC ACC, MIN(NUM_DATE) MIN_DATE, MAX(NUM_DATE) MAX_DATE FROM LEDGER WHERE CREDIT_ACC = ? GROUP BY DEBIT_ACC" +
                        "   ) " +
                        "   GROUP BY ACC) L_D" +
                        "   WHERE (L.DEBIT_ACC = L_D.ACC OR L.CREDIT_ACC = L_D.ACC)" +
                        "     AND L.NUM_DATE = L_D.MAX_DATE ) END_B" +
                        "   WHERE START_B.ACC = END_B.ACC";

        //----------------------------------------------------------
        var sqlSumm =   " SELECT " +
                        "     SUM(CASE WHEN L.DEBIT_ACC = ?  THEN -1*L.SUMMA_DEBIT" +
                        "              WHEN L.CREDIT_ACC = ? THEN L.SUMMA_CREDIT" +
                        "            END)  SUMM,"+
                        "               SUM(CASE WHEN L.DEBIT_ACC = ?  THEN -1*L.SUMMA_DEBIT" +
                        "                 WHEN L.CREDIT_ACC = ? THEN L.SUMMA_CREDIT" +
                        "            END) + ? DIF, ? INPUT, ? ACC" +
                        "   FROM LEDGER L WHERE (L.DEBIT_ACC = ? OR L.CREDIT_ACC = ?)";
        db.transaction(function (tx) {
            tx.executeSql(sqlAcc, [], function (tx, result) {
                for (var i = 0; i < result.rows.length; i++) {
                    var acc = result.rows.item(i).ACC;
                    //arrAcc.push(acc);
                    tx.executeSql(sqlLedger, [acc,acc,acc,acc], function (tx, result) {
                        for (var j = 0; j < result.rows.length; j++) {
                           // alert(result.rows.item(j).ACC);
                            var inAcc =result.rows.item(j).ACC;
                            var inSumm =(parseFloat(result.rows.item(j).START_BALANCE) - parseFloat(result.rows.item(j).END_BALANCE)).toFixed(2);
                            //alert(inSumm);
                            //alert(result.rows.item(j).ACC + ' ' + result.rows.item(j).MAX_DATE + ' ' + result.rows.item(j).MIN_DATE);
                            //alert(result.rows.item(j).ACC + ' ' + result.rows.item(j).START_BALANCE + ' ' + result.rows.item(j).END_BALANCE);
                            tx.executeSql(sqlSumm, [inAcc,inAcc,inAcc,inAcc,inSumm,inSumm,inAcc,inAcc,inAcc], function (tx, result) {
                                for (var k = 0; k < result.rows.length; k++) {
                                    alert(result.rows.item(k).ACC + ' ' + result.rows.item(k).SUMM + ' ' + result.rows.item(k).DIF+ ' ' + result.rows.item(k).INPUT  );

                                }
                            }, errorHandler);
                        }
                    }, errorHandler);

                }
            }, errorHandler);
        }, errorHandler, function (){});


    }
    ,
    CheckBalanceRow: function (_acc, _dateCheck) {
        var nextBalance = 0;
        var sql = "SELECT * FROM LEDGER WHERE NUM_DATE > ? AND (DEBIT_ACC = ? OR CREDIT_ACC = ?) ORDER BY NUM_DATE";
        db.transaction(function (tx) {
            tx.executeSql(sql, [_dateCheck, _acc, _acc], function (tx, result) {
                var prevBalance = 0;
                for (var i = 0; i < result.rows.length; i++) {

                    if(i!=0){
                        if(_acc == result.rows.item(i).DEBIT_ACC){
                            var realPrevBalance = parseFloat(result.rows.item(i).BALANCE) + parseFloat(result.rows.item(i).SUMMA_DEBIT);
                            //alert('Test :' + realPrevBalance+' - '+prevBalance);
                            if(prevBalance != realPrevBalance ){
                                alert('Не совпал дебет - до: '+prevBalance+' cумма: '+result.rows.item(i).SUMMA_DEBIT+' после: '+result.rows.item(i).BALANCE+' должно: ' + realPrevBalance);
                                var newDateNum = parseFloat(result.rows.item(i).NUM_DATE) - 10000;
                                var dtNewDate = new Date(newDateNum);
                                var newDate = Converter.DateToStr(dtNewDate,'DD.MM.YYYY');
                                var newTime = Converter.DateToStr(dtNewDate,'HH24:MI:SS');
                                var difSumma = (prevBalance - realPrevBalance).toFixed(2);
                                //alert(difSumma);
                                if(difSumma>0){

                                    DatabaseUnit.SetLedger(0,
                                                           result.rows.item(i).DEBIT_ACC,
                                                           'OUT',
                                                           result.rows.item(i).BANK,
                                                           difSumma,
                                                           result.rows.item(i).BALANCE_CUR,
                                                           '',
                                                           newDate,
                                                           newTime,
                                                           '',
                                                           'исправления',
                                                           difSumma,
                                                           result.rows.item(i).BALANCE_CUR,
                                                           realPrevBalance,
                                                           result.rows.item(i).BALANCE_CUR);
                                }else{

                                    DatabaseUnit.SetLedger(
                                        0,
                                        'OUT',
                                        result.rows.item(i).DEBIT_ACC,
                                        result.rows.item(i).BANK,
                                        Math.abs(difSumma),
                                        result.rows.item(i).BALANCE_CUR,
                                        '',
                                        newDate,
                                        newTime,
                                        '',
                                        'исправления',
                                        Math.abs(difSumma),
                                        result.rows.item(i).BALANCE_CUR,
                                        realPrevBalance,
                                        result.rows.item(i).BALANCE_CUR);
                                }

                            }
                        }
                        if(_acc == result.rows.item(i).KREDIT_ACC){
                            if(prevBalance != result.rows.item(i).BALANCE - result.rows.item(i).SUMMA_KREDIT ){
                                alert('Не совпал кредит!');
                            }
                        }
                    }
                    prevBalance = parseFloat(result.rows.item(i).BALANCE);

                }

            }, errorHandler);
        });
    }

}