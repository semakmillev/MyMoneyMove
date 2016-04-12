var bs;
function _LoadParams(_st){

    var arr = _st.split(' ');
    bs._id = arr[0];
    if(arr[2]=="ACC"){
        bs.acc = arr[4];
    }
    if(arr[2]=="SUMMA"){
        bs.summa = arr[4];
    }
    if(arr[2]=="CUR"){
        bs.cur = arr[4];
    }
    if(arr[2]=="BALANCE"){
        bs.balance = arr[4];
    }
    if(arr[2]=="BALANCE_CUR"){
        bs.balanceCur = arr[4];
    }
    if(arr[2]=="TRANS_DATE"){
        bs.tranDate = arr[4];
    }
    if(arr[2]=="TRANS_TIME"){
        bs.tranTime = arr[4];
    }
    if(arr[2]=="PLACE"){
        bs.place = arr[4];
    }
    if(arr[2]=="DIR"){
        bs.dir = arr[4];
    }
    if(arr[2]=="BANK"){
        bs.bank = arr[4];
    }

    SetSmsParam(arr[0],arr[2],arr[4]);
}
function Lp(){
    bs = new BankSMS();
    _LoadParams('2178 SMS_PARAM ACC SMS_VALUE 4*6832');
    _LoadParams('2178 SMS_PARAM SUMMA SMS_VALUE 244,00');
    _LoadParams('2178 SMS_PARAM CUR SMS_VALUE RUR');
    _LoadParams('2178 SMS_PARAM BALANCE SMS_VALUE 25917,90');
    _LoadParams('2178 SMS_PARAM BALANCE_CUR SMS_VALUE RUR');
    _LoadParams('2178 SMS_PARAM TRANS_DATE SMS_VALUE 26.03.2016');
    _LoadParams('2178 SMS_PARAM TRANS_TIME SMS_VALUE 19:48:03');
    _LoadParams('2178 SMS_PARAM DIR SMS_VALUE SPENDING');
    _LoadParams('2178 SMS_PARAM PLACE SMS_VALUE RU/MOSCOW/MAGNOLIYA');
    _LoadParams('2178 SMS_PARAM BANK SMS_VALUE AlfaBank');
    arrParsedSMS.push(bs);
    bs = new BankSMS();
    _LoadParams('2188 SMS_PARAM ACC SMS_VALUE 5*8022');
    _LoadParams('2188 SMS_PARAM SUMMA SMS_VALUE 59,00');
    _LoadParams('2188 SMS_PARAM CUR SMS_VALUE RUR');
    _LoadParams('2188 SMS_PARAM BALANCE SMS_VALUE 12941,08');
    _LoadParams('2188 SMS_PARAM BALANCE_CUR SMS_VALUE RUR');
    _LoadParams('2188 SMS_PARAM TRANS_DATE SMS_VALUE 28.03.2016');
    _LoadParams('2188 SMS_PARAM TRANS_TIME SMS_VALUE 15:38:40');
    _LoadParams('2188 SMS_PARAM DIR SMS_VALUE SPENDING');
    _LoadParams('2188 SMS_PARAM PLACE SMS_VALUE RU/MOSCOW/CITYSTORE-CHAPLYGINA');
    _LoadParams('2188 SMS_PARAM BANK SMS_VALUE AlfaBank');
    arrParsedSMS.push(bs);
    bs = new BankSMS();
    _LoadParams('2260 SMS_PARAM ACC SMS_VALUE 4*6832');
    _LoadParams('2260 SMS_PARAM SUMMA SMS_VALUE 1400,00');
    _LoadParams('2260 SMS_PARAM CUR SMS_VALUE RUR');
    _LoadParams('2260 SMS_PARAM BALANCE SMS_VALUE 24017,90');
    _LoadParams('2260 SMS_PARAM BALANCE_CUR SMS_VALUE RUR');
    _LoadParams('2260 SMS_PARAM TRANS_DATE SMS_VALUE 04.04.2016');
    _LoadParams('2260 SMS_PARAM TRANS_TIME SMS_VALUE 14:01:32');
    _LoadParams('2260 SMS_PARAM DIR SMS_VALUE SPENDING');
    _LoadParams('2260 SMS_PARAM PLACE SMS_VALUE RU/MOSKVA/NSK_PLT');
    _LoadParams('2260 SMS_PARAM BANK SMS_VALUE AlfaBank');
    arrParsedSMS.push(bs);
    bs = new BankSMS();
    _LoadParams('2265 SMS_PARAM ACC SMS_VALUE 4*6832');
    _LoadParams('2265 SMS_PARAM SUMMA SMS_VALUE 672,00');
    _LoadParams('2265 SMS_PARAM CUR SMS_VALUE RUR');
    _LoadParams('2265 SMS_PARAM BALANCE SMS_VALUE 23345,90');
    _LoadParams('2265 SMS_PARAM BALANCE_CUR SMS_VALUE RUR');
    _LoadParams('2265 SMS_PARAM TRANS_DATE SMS_VALUE 04.04.2016');
    _LoadParams('2265 SMS_PARAM TRANS_TIME SMS_VALUE 22:15:51');
    _LoadParams('2265 SMS_PARAM DIR SMS_VALUE SPENDING');
    _LoadParams('2265 SMS_PARAM PLACE SMS_VALUE RU/MOSCOW/GASTRONOM');
    _LoadParams('2265 SMS_PARAM BANK SMS_VALUE AlfaBank');
    arrParsedSMS.push(bs);
    alert('!');
   // alert(arrParsedSMS.length);
}