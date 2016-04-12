var Ledger = {
    convertDateToDiv : function (st){
        var _st = st.split('.')[2]+'-'+st.split('.')[1]+'-'+st.split('.')[0];
        return _st;
    },
    convertDivToDate : function (st){
        var _st = st.split('-')[2]+'.'+st.split('-')[1]+'.'+st.split('-')[0];
        return _st;
    },
    addCategory : function(){
        localStorage.selCategory = "";
        $("#CategorySelect div[data-role='content']").height($(window).height()*0.8);


        $.mobile.changePage("#CategorySelect", {
            transition: 'pop',
            role: 'dialog'
        });
        $("#CategorySelect").bind("pagehide",Ledger.setCategory);

    },
    setCategory: function(el){
        var selCategory = localStorage.selCategory;
        $('#journalCats').append('<li data-icon="false" id="'+Translit(selCategory)+'" _value = "'+selCategory+'"><a>'+selCategory+'</a></li>');
        $('#journalCats').listview("refresh");
        $("#CategorySelect").unbind("pagehide",Ledger.setCategory);
    },
    LedgerClick: function(el){
        var _id = $(el).attr("journalId");

        this.ShowWindow(_id);
        //alert('TADA');
    },
    FillSms : function(){
        var txt = $("#txt")[0].value;
        db.transaction(function(tx){
            tx.executeSql("SELECT * FROM SMS_PARAMS", [], function(tx,result){
                for (var i=0; i < result.rows.length; i++) {
                    txt = txt + "ID" + result.rows.item(i).SMS_ID+";"+result.rows.item(i).NAME+";"+result.rows.item(i).VALUE+";";

                }
                $("#txt").val(txt);
            },errorHandler);
        });
    }
    ,
    Check : function(){
        db.transaction(function(tx){
            tx.executeSql("SELECT * FROM LEDGER", [], function(tx,result){
                for (var i=0; i < result.rows.length; i++) {
                    //alert(result.rows.item(i).ACC);
                    var html = "";
                    html = html +"<tr journalId='"+result.rows.item(i)._ID+"' onclick='Ledger.LedgerClick(this)'>\n";
                    html = html +"<td>"+result.rows.item(i).SMS_ID+"</td>\n";
                    html = html +"<td>"+result.rows.item(i).DEBIT_ACC+"</td>\n";
                    html = html +"<td>"+result.rows.item(i).SUMMA_DEBIT+"</td>\n";
                    html = html +"</tr>\n";
                    $("#table > tbody").append(html);
                    $("#table").table("refresh");
                }
            },errorHandler);
        });
    },
    ShowWindow : function(_id)
    {
        $.mobile.changePage("#Ledger");
        if(_id=="0"){
            db.transaction(function(tx){
                tx.executeSql("SELECT MAX(_ID) _ID FROM LEDGER", [], function(tx,result){
                    var newId = result.rows.item(0)._ID + 1;
                    $("#Ledger").attr("_ID",newId);
                },errorHandler);
            });
        };
        /*
         DEBIT_ACC, CREDIT_ACC, BANK, SUMMA_DEBIT, CUR_DEBIT, " +
         "                    SMS_ID, TRANS_DATE, PLACE, COMMENTS, SUMMA_CREDIT, CUR_CREDIT, BALANCE, BALANCE_CUR
         */
        db.transaction(function(tx){
                tx.executeSql("SELECT * FROM LEDGER WHERE _ID = ?", [_id], function(tx,result){
                    for (var i=0; i < result.rows.length; i++) {
                        $("#journalDate").val(Ledger.convertDateToDiv(result.rows.item(i).TRANS_DATE));
                        var ledgerEl = $("#Ledger");
                        ledgerEl.attr("_ID",result.rows.item(i)._ID);
                        ledgerEl.attr("DEBIT_ACC",result.rows.item(i).DEBIT_ACC);
                        ledgerEl.attr("CREDIT_ACC",result.rows.item(i).CREDIT_ACC);
                        ledgerEl.attr("BANK",result.rows.item(i).BANK);
                        ledgerEl.attr("SUMMA_DEBIT",result.rows.item(i).SUMMA_DEBIT);
                        ledgerEl.attr("CUR_DEBIT",result.rows.item(i).CUR_DEBIT);
                        ledgerEl.attr("SMS_ID",result.rows.item(i).SMS_ID);
                        ledgerEl.attr("TRANS_DATE",result.rows.item(i).TRANS_DATE);
                        ledgerEl.attr("TRANS_TIME",result.rows.item(i).TRANS_TIME);
                        ledgerEl.attr("PLACE",result.rows.item(i).PLACE);
                        ledgerEl.attr("COMMENTS",result.rows.item(i).COMMENTS);
                        ledgerEl.attr("SUMMA_CREDIT",result.rows.item(i).SUMMA_CREDIT);
                        ledgerEl.attr("CUR_CREDIT",result.rows.item(i).CUR_CREDIT);
                        ledgerEl.attr("BALANCE",result.rows.item(i).BALANCE);
                        ledgerEl.attr("BALANCE_CUR",result.rows.item(i).BALANCE_CUR);
                        var journalCatsEl = $('#journalCats');
                        journalCatsEl.html('');
                        journalCatsEl.append('<li data-icon="false" onclick="Ledger.addCategory()"><a>Добавить</a></li>');
                        journalCatsEl.listview("refresh")
                        db.transaction(function(tx){
                            tx.executeSql("SELECT * FROM LEDGER_CATEGORY WHERE L_ID = ?", [_id], function(tx,result){
                                for (var i=0; i < result.rows.length; i++) {
                                    var cat =  result.rows.item(i).CAT_ID;
                                    journalCatsEl.append('<li data-icon="false" id="'+Translit(cat)+'" _value = "'+cat+'"><a>'+cat+'</a></li>');
                                    journalCatsEl.listview("refresh");
                                }
                            },errorHandler);
                        });




                    }
                },errorHandler);
            },
            function(){},
            Ledger.FillFields
        );
    },
    FillFields : function(){
        $("#journalBankList").val($("#Ledger").attr("BANK")).attr('selected', true).siblings('option').removeAttr('selected');
        $("#journalBankList").selectmenu("refresh", true);
        if($("#Ledger").attr("CREDIT_ACC")=="OUT"){
            $('#SpendingBar a').addClass('ui-btn-active');

            $('#AddBar').removeClass('ui-btn-active');
            $('#TransferBar').removeClass('ui-TransferBar-active');
            $("#LedgerTabs").tabs( "option", "active", 0 );

            $("#journalSummaDebit").val($("#Ledger").attr("SUMMA_DEBIT"));
            $("#journalDebitAcc").val($("#Ledger").attr("DEBIT_ACC"));
            $("#journalPlace").val($("#Ledger").attr("PLACE"));
            $("#journalCurDebit").val($("#Ledger").attr("CUR_DEBIT"));
            $("#journalDate").val(Ledger.convertDateToDiv($("#Ledger").attr("TRANS_DATE")));
        }
        if($("#Ledger").attr("CREDIT_ACC")=="IN"){
            $('#SpendingBar').removeClass('ui-btn-active');
            $('#AddBar').addClass('ui-btn-active');
            $('#TransferBar').removeClass('ui-TransferBar-active');
            $("#LedgerTabs").tabs( "option", "active", 0 );
        }

    },
    GetFields : function(){
        var ledgerEl = $("#Ledger");
        ledgerEl.attr("BANK",$("#journalBankList")[0].value);

        if(ledgerEl.attr("CREDIT_ACC")=="OUT"){
            ledgerEl.attr("SUMMA_DEBIT",$("#journalSummaDebit")[0].value);
            ledgerEl.attr("CUR_DEBIT",$("#journalCurDebit")[0].value);
            ledgerEl.attr("SUMMA_CREDIT",$("#journalSummaDebit")[0].value);
            ledgerEl.attr("CUR_CREDIT",$("#journalCurDebit")[0].value);
            ledgerEl.attr("DEBIT_ACC",$("#journalDebitAcc")[0].value);
            ledgerEl.attr("PLACE",$("#journalPlace")[0].value);
            ledgerEl.attr("TRANS_DATE",Ledger.convertDivToDate($("#journalDate")[0].value));
            //alert($("#Ledger").attr("TRANS_DATE"));
        }
    },
    Set : function (){
        Ledger.GetFields();
        var ledgerEl = $("#Ledger");
        var _id =  ledgerEl.attr("_ID");
        // (_id, _debitAcc, _creditAcc, _bank, _summaDebit, _curDebit, _smsId, _transDate, _transTime, _place, _comments, _summaCredit,_curCredit, _balance, _balanceCur)
        DatabaseUnit.SetLedger(
            ledgerEl.attr("_ID"),
            ledgerEl.attr("DEBIT_ACC"),//debit,
            ledgerEl.attr("CREDIT_ACC"),
            ledgerEl.attr("BANK"),//sms.bank,
            ledgerEl.attr("SUMMA_DEBIT"),
            ledgerEl.attr("CUR_DEBIT"),
            ledgerEl.attr("SMS_ID"),
            ledgerEl.attr("TRANS_DATE"),
            ledgerEl.attr("TRANS_TIME"),
            ledgerEl.attr("PLACE"),
            '',
            ledgerEl.attr("SUMMA_CREDIT"),
            ledgerEl.attr("CUR_CREDIT"),
            ledgerEl.attr("BALANCE"),
            ledgerEl.attr("BALANCE_CUR")
        );

        Ledger.SetAndDeleteCategories(_id);




    },
    SetAndDeleteCategories : function(_id){
        db.transaction(function (tx) {
            tx.executeSql("DELETE FROM LEDGER_CATEGORY WHERE L_ID = ?",[_id],Ledger.SetCategories(_id),errorHandler);
        });
    },
    SetCategory : function (_id,_catId){

        var sqlInsert =  "INSERT INTO LEDGER_CATEGORY (L_ID, CAT_ID) VALUES (?,?)";
        db.transaction(function (tx) {
            tx.executeSql(sqlInsert,[_id, _catId],function(){},errorHandler);
        });
    },
    SetCategories : function(_id){

        for(var i = 1; i < $('#journalCats li').length; i++){
            var el = $('#journalCats li')[i];
            Ledger.SetCategory(_id,$(el).attr("_value"));
        };



    }
}
