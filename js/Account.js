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

        alert(sql);
        db.transaction(function (tx) {
            tx.executeSql(sql, filter, function (tx, result) {

                //_el.html('');
                $(".accList").html('');
                $('.accList').append('<option value=""></option>');
                for (var i = 0; i < result.rows.length; i++) {
                    //alert(result.rows.item(i).CODE+' '+result.rows.item(i).NAME);
                    //alert('!');
                    var html = "";
                    var html = '<option value="' + result.rows.item(i).ACC + '">' + result.rows.item(i).ACC + '</option>';

                    $(".accList").append(html);
                    //_el.append(html);
                    //_el.selectmenu("refresh", true);

                }

            },errorHandler);
        });
    },
    setAccount: function (_id){

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
        $.mobile.changePage("#Account", {
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
            $("#dateAcc")[0].value = Converter.DateToStr(dt,"YYYY-MM-DD");
        }
        else
        {
            db.transaction(function(tx){
                tx.executeSql("SELECT * FROM ACCOUNT WHERE _ID = ?", [_id], function(tx,result){
                    for (var i=0; i < result.rows.length; i++) {

                        var accEl = $("#Account");
                        accEl.attr("code",result.rows.item(i).ACC);
                        accEl.attr("name",result.rows.item(i).NAME);
                        accEl.attr("bank",result.rows.item(i).BANK);

                        var strDate = Converter.DateToStr(Converter.StrToDate(result.rows.item(i).DATE_OPEN,'DD.MM.YYYY'),"YYYY-MM-DD");
                        $("#dateAcc")[0].value = strDate;
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
        $("#accParentAcc").selectmenu('refresh');
        //$("#accBankList").selectmenu("refresh", true);


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


