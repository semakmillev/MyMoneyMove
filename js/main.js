



function _ConvertShortDate(_date)
{
    var month = _date.getMonth() + 1;
    return _date.getFullYear() + "-"+AddZero(month)+"-"+AddZero(_date.getDate());
}

function Translit(_st)
{
  var st = _st.toLowerCase().replaceAll('à','a').replaceAll('á','b').replaceAll('â','v').replaceAll('ã','g').replaceAll('ä','d')
              .replaceAll('å','e').replaceAll('¸','_e').replaceAll('æ','j').replaceAll('ç','z').replaceAll('è','i')
              .replaceAll('é','y').replaceAll('ê','k').replaceAll('ë','l').replaceAll('ì','m').replaceAll('í','n')
              .replaceAll('î','o').replaceAll('ï','p').replaceAll('ð','r').replaceAll('ñ','s').replaceAll('ò','t')
              .replaceAll('ó','u').replaceAll('ô','f').replaceAll('õ','h').replaceAll('ö','c').replaceAll('÷','_ch')
              .replaceAll('ø','_sh').replaceAll('ù','_sch').replaceAll('ú','q').replaceAll('û','_i').replaceAll('ü','_q')
              .replaceAll('ý','__e').replaceAll('þ','_u').replaceAll('ÿ','_a').replaceAll(':','__');
  return st;
}
  

function GetSMS()
{
  var dt = new Date(2016,2,1);
  listSMS('Alfa-Bank',dt);
}


function ShowAccounts()
{
    $("#accountList td").remove();
    db.transaction(function(tx){

        var sqlAccount =

            "              SELECT A._ID _ID," +
            "                    A.ACC ACC," +
            "                    L.BALANCE BALANCE " +
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
            "   AND A.ACC IN(SELECT ACC FROM ACCOUNT)"
            ;
        /*  var sqlAccount =

                "              SELECT A._ID _ID," +
                "                    A.ACC ACC," +
                "                    0 BALANCE " +
                "               FROM ACCOUNT A";
        */
        tx.executeSql(sqlAccount, [], function(tx,result){
            for (var i=0; i < result.rows.length; i++) {
                //alert(result.rows.item(i).ACC);
                var html = "";
                var acc = new String();
                var acc = result.rows.item(i).ACC;
                html = html +'<tr onclick="Balance.CheckBalanceRow('+"'"+acc+"'"+',0)">\n';
                html = html +'<td>'+result.rows.item(i)._ID+'</td>\n';
                html = html +'<td>'+result.rows.item(i).ACC+'</td>\n';
                html = html +'<td>'+result.rows.item(i).BALANCE+'</td>\n';
                html = html +'</tr>\n';
                $("#accountList > tbody").append(html);
                $("#accountList").table("refresh");
            }
        },errorHandler);
    });
    $.mobile.changePage("#Accounts");
}

function ShowCategories(){

    $.mobile.changePage("#Categories");
}
function ShowCategoriesModal(){
    $.mobile.changePage("#CategorySelect", {
        transition: 'pop',
        role: 'dialog'
    });
}


function LoadCategories()
{
    $("#categoryContent").html('');

   db.transaction(function(tx){
           tx.executeSql("SELECT * FROM CATEGORY ORDER BY _ID", [], function(tx,result){
                    var level = 0;
                    var html = '';
                    var parentID = '';
                    var ID = '';
                    var el;
                    for (var i=0; i < result.rows.length; i++) {                        
                      //alert(result.rows.item(i).ACC);
                        var html = '';
                        if(result.rows.item(i).PARENT == '')
                        {
                            html = html + '<div data-role="collapsible" data-iconpos="right" class="categoryList"';
                            html = html + 'id="'+Translit(result.rows.item(i)._ID)+'"  value = "'+result.rows.item(i)._ID+'" >';
                            html = html + '<h2 style="margin-bottom:1px !important;">'+result.rows.item(i).NAME+'</h2>\n';
                            html = html =  html + '</div>';
                           /* $(".categoryContent").append(html).collapsibleset();
                            $(".categoryContent").collapsibleset('refresh');*/
                            $("#ccC").append(html).collapsibleset();
                            $("#ccC").collapsibleset('refresh');
                        }else
                        {   
                                                                                    
                            html = html + '<div data-role="collapsible" data-iconpos="right" data-collapsed="true" ';
                            html = html + 'parentid = "'+Translit(result.rows.item(i).PARENT)+'" ';
                            html = html + 'class="categoryList categoryChildList" id="'+Translit(result.rows.item(i)._ID)+'" ';
                            html = html + 'value = "'+result.rows.item(i)._ID+'" >';
                            html = html + '<h2 style="margin-bottom:1px !important;">'+result.rows.item(i).NAME+'</h2>\n';
                            html = html + '</div>';
                            el = $(html);
                            el.collapsible().appendTo($("#"+Translit(result.rows.item(i).PARENT)+" div:first"));
                            
                        }
                        //$("div[data-role='collapsible']").find("span.ui-icon').remove();
                        
                        ID = result.rows.item(i)._ID;                        
                        
                     }
                    },errorHandler);
                },function(){},
                  function(){

                    $('.categoryChildList').each(function() {
                        var padding = $(this).attr('parentid').split('__').length * 15;
                        $(this).find('a').css('padding-left',padding);
                    });

                    $('.categoryList').each(function() {

                        if($(this).find('.categoryList').length==0){
                            $(this).find('a.ui-collapsible-heading-toggle').each(
                                function(){

                                    $(this).removeClass('ui-btn-icon-right');
                                });
                        }
                    });
                  }
     );
} 
    

function LoadBankList(){
   $("#bankList td").remove(); 
   db.transaction(function(tx){
               
                tx.executeSql("SELECT * FROM BANK", [], function(tx,result){
                    for (var i=0; i < result.rows.length; i++) {                        
                      //alert(result.rows.item(i).ACC);
                      var html = "";
                      html = html +'<tr onclick="EditBank('+result.rows._ID+')">\n';
                      html = html +'<td>'+result.rows.item(i).NAME+'</td>\n';
                      html = html +'<td>'+result.rows.item(i).CODE+'</td>\n';
                      html = html +'<td>'+result.rows.item(i).BIC+'</td>\n';                      
                      html = html +'</tr>\n';
                      $("#bankList > tbody").append(html);
                      $("#bankList").table("refresh");
                    }
                }); });
}
function EditBank(_id)
{
    alert(_id);
}
function ShowBanks()
{
    $.mobile.changePage("#Banks");
    LoadBankList();
}
function LoadBanks()
{
   $('.bankList option').remove();

        db.transaction(function(tx){
                tx.executeSql("SELECT * FROM BANK", [], function(tx,result){
                    for (var i=0; i < result.rows.length; i++) {
                      //alert(result.rows.item(i).CODE+' '+result.rows.item(i).NAME);
                      var html = "";
                      var html = '<option value="'+result.rows.item(i).CODE+'">'+result.rows.item(i).NAME+'</option>';
                      $('.bankList').append(html);

                    }
                });
    });

}



function CloseCategory()
{
    $("#CategorySelect").dialog('close');
}

var Place = {
    Set : function(){
        var _id = $("#CategoryDialog")[0].attr("_id");
        var name = $("#namePlaceDlg")[0]._value;
        this.SetDB(_id,name);
        $("#PlaceDialog").dialog('close');
    },
    SetDB: function(_id, _name){
        db.transaction(function (tx) {
            if(_id != '0'){
                tx.executeSql("DELETE FROM PLACE WHERE _ID = ?", [_id],function(){},errorHandler);
                tx.executeSql("INSERT INTO PLACE (_ID,NAME) VALUES (?,?)", [_id,_name],function(){},errorHandler);
            }else
            {
                tx.executeSql("INSERT INTO PLACE (_ID,NAME) VALUES (?)", [_name],function(){},errorHandler);
            }
        });
    },
    Delete : function(_id){
        db.transaction(function (tx) {
                tx.executeSql("DELETE FROM CATEGORY WHERE _ID = ?", [_id],function(){},errorHandler);
            }
        );
    },
    ShowDialog : function(_id){
        $.mobile.changePage("#PlaceDialog", {
            transition: 'pop',
            role: 'dialog'
        });
        $("#PlaceDialog").attr("_id",_id);
    },
    ShowList:function(){
        $.mobile.changePage("#PlaceSelect");
    },
    LoadPlaces : function(){
        $('#place').empty();
        db.transaction(function(tx){

            tx.executeSql("SELECT * FROM PLACE", [], function(tx,result){
                for (var i=0; i < result.rows.length; i++) {
                    $('#place').append('<li data-icon="false" id="'+result.rows.item(i)._ID+'" value = "'+result.rows.item(i).VALUE+'"><a>'+result.rows.item(i).VALUE+'</a></li>');
                    $('#place').listview("refresh");
                }
            }); });
    }

}

var Category = {
    SetCategory : function(){
        var name = $("#nameCategoryDlg")[0].value;
        var _id = name;
        var parent = $("#categorySimpleList")[0].value;
        if(parent!=''){
            _id = parent+":"+""+_id;
        }
        this.SetCategoryDB(_id,name,parent,$("#categoryTypeDlg :radio:checked").val());
        $("#CategoryDialog").dialog('close');
    },
    SetCategoryDB: function(_id, _name,_parentName,_categoryType){
        db.transaction(function (tx) {
            tx.executeSql("DELETE FROM CATEGORY WHERE _ID = ?", [_id],function(){},errorHandler);
            tx.executeSql("INSERT INTO CATEGORY (_ID,NAME,PARENT,TYPE) VALUES (?,?,?,?)", [_id,_name,_parentName,_categoryType],function(){},errorHandler);
        });
    },
    ShowDialog : function(){
        $.mobile.changePage("#CategoryDialog", {
            transition: 'pop',
            role: 'dialog'
        });
        Category.SetDialogCategories();

    },
    SetDialogCategories : function(){
        $('#categorySimpleList option').remove();
        $('#categorySimpleList').append('<option value=""></option>');
        db.transaction(function(tx){
            tx.executeSql("SELECT * FROM CATEGORY ORDER BY _ID", [], function(tx,result){
                for (var i=0; i < result.rows.length; i++) {
                    //alert(result.rows.item(i).ACC);
                    var html = "";
                    var html = '<option value="'+result.rows.item(i)._ID+'">'+result.rows.item(i)._ID+'</option>';
                    $('#categorySimpleList').append(html);
                }
            });
        });
    }
}


var Account = {
    setAccount: function (_id){
       
       //$('#accBankList').value = 2;
        //var html = "";
       // var html = '<option value="TEST">TEST</option>';
       // $('#accBankList').append(html); 
       
       // alert('1');
       if(_id==0)
       {
           var dt = new Date();
           localStorage.accId = 0; 
           $("#dateAcc")[0].value = _ConvertShortDate(dt);
       }
       else
       {
          db.transaction(function(tx){              
                tx.executeSql("SELECT * FROM ACCOUNT WHERE _ID = ?", [_id], function(tx,result){
                    for (var i=0; i < result.rows.length; i++) {                        
                      $("#nameAcc")[0].value = result.rows.item(i).ACC;                                                                                                             
                    }
                },errorHandler); 
          }); 
       }
        $.mobile.changePage("#AccountMenu", {
                transition: 'pop',
                role: 'dialog'
            });
    },
    addAccount: function (){
        $('#accBankList option').remove();   
        db.transaction(function(tx){              
                tx.executeSql("SELECT * FROM BANK ORDER BY DESC", [], function(tx,result){
                    for (var i=0; i < result.rows.length; i++) {                        
                      //alert(result.rows.item(i).ACC);
                      var html = "";
                      var html = '<option value="'+result.rows.item(i)._ID+'">'+result.rows.item(i).CODE+'</option>';
                      $('#accBankList').append(html);                      
                    }
                }); });
    
        var dt = new Date();
        localStorage.accId = 0;
        $("#dateAcc")[0].value = _ConvertShortDate(dt);
        $.mobile.changePage("#AccountMenu", {
                transition: 'pop',
                role: 'dialog'
            });
    }
}


function SetBank()
{    
   localStorage.bankId = 0;
   SetBankDB(localStorage.bankId,
             $("#nameBank")[0].value,
             $("#codeBank")[0].value,
             $("#bicBank")[0].value);               
   LoadBanks();             
   $("#BankMenu").dialog('close');
}
function AddBank()
{
   localStorage.bankId = 0;
   $.mobile.changePage("#BankMenu", {
        transition: 'pop',
        role: 'dialog'
    });   
}

function GetSMSInfo()
{
  var db = openDatabase('MoneyDB', '1.0', 'Money Database', 10 * 1024 * 1024);
  db.transaction(function(tx){
               
                tx.executeSql("SELECT * FROM SMS_TABLE where DONE = '0'", [], function(tx,result){
                    for (var i=0; i < result.rows.length; i++) { 
                      var SMS = [result.rows.item(i)._ID,
                                 result.rows.item(i).SMS_TEXT,
                                 result.rows.item(i).SMS_DATE,
                                 result.rows.item(i).SENDER];  
                      alert(result.rows.item(i).SMS_TEXT+" "+result.rows.item(i).SMS_DATE);               
                      
                      
                    }
                }); });     
}

var Main = {
    SetTemplate : function(el){
        var txt = $(el.currentTarget).text().split('^')[3];
        var bank = $(el.currentTarget).attr("bank");
         //alert(bank);
        $.mobile.changePage("#templateDlg", {
            transition: 'pop',
            role: 'dialog'
        });
        $("#templateText").val(txt);
        $("#templateBank").val(bank);
        $("#templateBank").prop("readonly", true);
    },
    AddTemplate : function(){
      var txt = $("#templateText")[0].value;
      var bank = $("#templateBank")[0].value;
      var type = $("#templateType")[0].value;
      DatabaseUnit.SetTemplate(bank,txt,type,GetInfo());
      $("#templateDlg").dialog('close');

    }
}