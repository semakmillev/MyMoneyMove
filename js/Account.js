var Account = {
    LoadAccount:function(_bank){
        var sql;
        var filter =[];
        if((typeof _bank == 'undefined')||_bank=="")
        {
            sql = "SELECT * FROM ACCOUNT";
        }else
        {
            sql = "SELECT * FROM ACCOUNT WHERE BANK = ?"
            filter.push(_bank);
        }

        //alert(sql);
        db.transaction(function (tx) {
            tx.executeSql(sql, filter, function (tx, result) {

                //_el.html('');
                $(".accList").html('');
                $('.accList').append('<option selected="true" value=""></option>');
                for (var i = 0; i < result.rows.length; i++) {
                    //alert(result.rows.item(i).CODE+' '+result.rows.item(i).NAME);
                    //alert('!');
                    var html = "";
                    var html = '<option value="' + result.rows.item(i).ACC + '">' + result.rows.item(i).ACC + '</option>';

                    $(".accList").append(html);
                    //_el.append(html);
                    //_el.selectmenu("refresh", true);

                }
               // $(".accList").selectmenu('refresh');
            },errorHandler);
        });
    },
    setAccountDialog: function (_id){

        /*"_ID INTEGER primary key NOT NULL UNIQUE, "+
         "ACC,"+
         "PARENT_ACC,"+
         "BANK,"+
         "NAME,"+
         "TYPE,"+
         "CUR,"+
         "DATE_OPEN,"+
         "START_BALANCE,"+
         "COMMENTS)"*/

        // alert('1');
        $.mobile.changePage("AccountDlg.html#Account", {
            transition: 'pop',
            role: 'dialog'
        });

        // $("#accBankList")
        Main.LoadBanks();
        Account.LoadAccount();
        if(_id==0)
        {
            var dt = new Date();
            localStorage.accId = 0;
            //$("#dateAcc")[0].value = Converter.DateToStr(dt,"YYYY-MM-DD");

            //var accEl = $("#Account");
            db.transaction(function(tx){},errorHandler,function(){
                //$("#accBankList").selectedIndex = 0;
                //$("#accBankList").selectmenu('refresh');
                var accEl = $("#Account");
                accEl.attr("_id",0);
                Account.FillFields();
            });

            //$("#accBankList").selectedIndex = 0;
            //$("#accBankList").selectmenu('refresh');
            //$("#accParentAcc").val('').selectmenu('refresh');
            //Account.FillFields();
        }
        else
        {
            db.transaction(function(tx){
                tx.executeSql("SELECT * FROM ACCOUNT WHERE _ID = ?", [_id], function(tx,result){
                    for (var i=0; i < result.rows.length; i++) {

                        var accEl = $("#Account");
                        accEl.attr("_id",result.rows.item(i)._ID);
                        accEl.attr("code",result.rows.item(i).ACC);
                        accEl.attr("name",result.rows.item(i).NAME);
                        accEl.attr("bank",result.rows.item(i).BANK);
                        accEl.attr("type",result.rows.item(i).TYPE);
                        accEl.attr("cur",result.rows.item(i).CUR);

                        accEl.attr("parentAcc",result.rows.item(i).PARENT_ACC);
                        var strDate = Converter.DateToStr(Converter.StrToDate(result.rows.item(i).DATE_OPEN,'DD.MM.YYYY'),"YYYY-MM-DD");
                        accEl.attr("dateAcc",strDate);

                    }
                },errorHandler);
            },errorHandler,Account.FillFields);
        }

    },
    FillFields : function(){
        var accEl = $("#Account");
        $("#codeAcc").val(accEl.attr("code"));
        $("#nameAcc").val(accEl.attr("name"));
        //alert(accEl.attr("bank"));
        $("#accBankList").val(accEl.attr("bank")).selectmenu('refresh');


        $("#accParentAcc").val(accEl.attr("parentAcc")).selectmenu('refresh');
        $("#accTypeList").val(accEl.attr("type")).selectmenu('refresh');
        $("#accCurList").val(accEl.attr("cur")).selectmenu('refresh');
        //$("#accParentAcc").selectmenu('refresh');
        $("#dateAcc").val(accEl.attr("dateAcc"));


        //$("#accBankList").selectmenu("refresh", true);


    },
    GetFields : function(){
        var accEl = $("#Account");
        accEl.attr("code",$("#codeAcc")[0].value);
        accEl.attr("name",$("#nameAcc")[0].value);
        accEl.attr("bank",$("#accBankList")[0].value);

        accEl.attr("parentAcc",$("#accParentAcc")[0].value);
        accEl.attr("dateAcc",$("#dateAcc")[0].value);
        accEl.attr("type",$("#accTypeList")[0].value);
        accEl.attr("cur",$("#accCurList")[0].value);
    },
    SetAccount: function(){
       Account.GetFields();
       var accEl = $("#Account");
       var _id = accEl.attr("_id");
       var type = accEl.attr("type");
       var code = accEl.attr("code");
       var parentAcc = accEl.attr("parentAcc");
       var bank = accEl.attr("bank");
       var name = accEl.attr("name");
       var cur = accEl.attr("cur");
       var dateAcc = Converter.DateToStr(Converter.StrToDate(accEl.attr("dateAcc"),'YYYY-MM-DD'),'DD.MM.YYYY');
       var comments = '';

       // alert(parentAcc);
       if(parentAcc!='')
       {
           Balance.TieAccounts(parentAcc,code);
       }
       DatabaseUnit.SetAccountDB(_id,code,parentAcc,bank,name,type,cur,dateAcc,0,comments);
        $("#Account").dialog('close');
        Main.LoadAccounts();
    },
    addAccount: function (){


        var dt = new Date();
        localStorage.accId = 0;
        $("#dateAcc")[0].value = _ConvertShortDate(dt);
        $.mobile.changePage("#AccountMenu", {
            transition: 'pop',
            role: 'dialog'
        });
    }
}


