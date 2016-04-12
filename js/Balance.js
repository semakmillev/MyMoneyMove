/**
 * Created with JetBrains WebStorm.
 * User: Golubitskiy_AO
 * Date: 12.04.16
 * Time: 13:16
 * To change this template use File | Settings | File Templates.
 */
var Balance = {
    GetStartedBalance : function(_acc){
        var sql =  "SELECT L.DEBIT_ACC, " +
                   "       L.BALANCE " +
                   "  FROM LEDGER L, " +
                   "       (SELECT MIN(NUM_DATE) NUM_DATE" +
                   "               FROM LEDGER" +
                   "              WHERE DEBIT_ACC = ? OR CREDIT_ACC = ?) MIN_L " +
                   " WHERE MIN_L.NUM_DATE = L.NUM_DATE" +
                   "   AND (L.DEBIT_ACC = ? OR L.CREDIT_ACC = ?) "
                   ;
        db.transaction(function (tx) {
            tx.executeSql(sql, [_acc,_acc,_acc,_acc], function(tx, rs){
                var res = rs.rows.item(0).DEBIT_ACC+' = '+rs.rows.item(0).BALANCE;
                alert(res);
            }, errorHandler);
        });
    },
    TestAccInsert : function(){

        var insertSql =
            "INSERT INTO ACCOUNT(ACC,PARENT_ACC,BANK,NAME,TYPE,CUR,DATE_OPEN,START_BALANCE,COMMENTS) " +
                " SELECT MIN_L.ACC," +
                "        '' PARENT_ACC, " +
                "        BANK BANK, " +
                "        '' NAME, " +
                "        '' TYP, " +
                "        BALANCE_CUR CUR, " +
                "        TRANS_DATE DATE_OPEN, " +
                "        CASE WHEN L.CREDIT_ACC = MIN_L.ACC THEN L.BALANCE - L.SUMMA_CREDIT " +
                "             WHEN L.DEBIT_ACC  = MIN_L.ACC THEN L.BALANCE + L.SUMMA_DEBIT " +
                "        END START_BALANCE," +
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
                "   AND MIN_L.ACC <> 'OUT'"+
                "   AND MIN_L.ACC NOT IN(SELECT ACC FROM ACCOUNT)";

        var sql =
            "  INSERT INTO ACCOUNT(_ID, ACC)  " +
            "              SELECT A._ID+10 _ID," +
            "                    A.ACC ACC     " +
            "               FROM ACCOUNT A," +
            "               LEDGER L, " +
            "       (SELECT MIN(NUM_DATE) NUM_DATE, ACC" +
            "          FROM (                 " +
            "               SELECT MAX(NUM_DATE) NUM_DATE, DEBIT_ACC ACC" +
            "                 FROM LEDGER" +
            "                GROUP BY DEBIT_ACC" +
            "                UNION         " +
            "               SELECT MAX(NUM_DATE) NUM_DATE, CREDIT_ACC ACC" +
            "                 FROM LEDGER" +
            "                GROUP BY CREDIT_ACC)" +
            "        GROUP BY ACC" +
            "               ) MIN_L " +
            " WHERE MIN_L.NUM_DATE = L.NUM_DATE" +
            "   AND (L.DEBIT_ACC = A.ACC OR L.CREDIT_ACC = A.ACC) " +
            "   AND MIN_L.ACC = A.ACC" +
            "   AND A.ACC IN(SELECT ACC FROM ACCOUNT)";
        alert(insertSql);
        db.transaction(function (tx) {
            tx.executeSql(insertSql, [], function(tx, rs){}, errorHandler);
        });

        ;
    }
}