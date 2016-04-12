var bs;
function _LoadParams2(_st){
    var arr = _st.split(';');
    bs._id = arr[0];
    if(arr[1]=="ACC"){
        bs.acc = arr[2];
    }
    if(arr[1]=="SUMMA"){
        bs.summa = arr[2];
    }
    if(arr[1]=="CUR"){
        bs.cur = arr[2];
    }
    if(arr[1]=="BALANCE"){
        bs.balance = arr[2];
    }
    if(arr[1]=="BALANCE_CUR"){
        bs.balanceCur = arr[2];
    }
    if(arr[1]=="TRANS_DATE"){
        bs.tranDate = arr[2];
    }
    if(arr[1]=="TRANS_TIME"){
        bs.tranTime = arr[2];
    }
    if(arr[1]=="PLACE"){
        bs.place = arr[2];
    }
    if(arr[1]=="DIR"){
        bs.dir = arr[2];
    }
    if(arr[1]=="BANK"){
        bs.bank = arr[2];
    }

    SetSmsParam(arr[0],arr[1],arr[2]);
}
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
    _LoadParams2('2178;ACC;4*6832;');
    _LoadParams2('2178;BALANCE;25917,90;');
    _LoadParams2('2178;BALANCE_CUR;RUR;');
    _LoadParams2('2178;BANK;ALPHA;');
    _LoadParams2('2178;CUR;RUR;');
    _LoadParams2('2178;DIR;SPENDING;');
    _LoadParams2('2178;PLACE;RU/MOSCOW/MAGNOLIYA;');
    _LoadParams2('2178;SUMMA;244,00;');
    _LoadParams2('2178;TRANS_DATE;26.03.2016;');
    _LoadParams2('2178;TRANS_TIME;19:48:03;');
    arrParsedSMS.push(bs);
    bs = new BankSMS();
    _LoadParams2('2188;ACC;5*8022;');
    _LoadParams2('2188;BALANCE;12941,08;');
    _LoadParams2('2188;BALANCE_CUR;RUR;');
    _LoadParams2('2188;BANK;ALPHA;');
    _LoadParams2('2188;CUR;RUR;');
    _LoadParams2('2188;DIR;SPENDING;');
    _LoadParams2('2188;PLACE;RU/MOSCOW/CITYSTORE-CHAPLYGINA;');
    _LoadParams2('2188;SUMMA;59,00;');
    _LoadParams2('2188;TRANS_DATE;28.03.2016;');
    _LoadParams2('2188;TRANS_TIME;15:38:40;');
    arrParsedSMS.push(bs);
    bs = new BankSMS();
    _LoadParams2('2260;ACC;4*6832;');
    _LoadParams2('2260;BALANCE;24017,90;');
    _LoadParams2('2260;BALANCE_CUR;RUR;');
    _LoadParams2('2260;BANK;ALPHA;');
    _LoadParams2('2260;CUR;RUR;');
    _LoadParams2('2260;DIR;SPENDING;');
    _LoadParams2('2260;PLACE;RU/MOSKVA/NSK_PLT;');
    _LoadParams2('2260;SUMMA;1400,00;');
    _LoadParams2('2260;TRANS_DATE;04.04.2016;');
    _LoadParams2('2260;TRANS_TIME;14:01:32;');
    arrParsedSMS.push(bs);
    bs = new BankSMS();
    _LoadParams2('2265;ACC;4*6832;');
    _LoadParams2('2265;BALANCE;23345,90;');
    _LoadParams2('2265;BALANCE_CUR;RUR;');
    _LoadParams2('2265;BANK;ALPHA;');
    _LoadParams2('2265;CUR;RUR;');
    _LoadParams2('2265;DIR;SPENDING;');
    _LoadParams2('2265;PLACE;RU/MOSCOW/GASTRONOM;');
    _LoadParams2('2265;SUMMA;672,00;');
    _LoadParams2('2265;TRANS_DATE;04.04.2016;');
    _LoadParams2('2265;TRANS_TIME;22:15:51;');
    arrParsedSMS.push(bs);
    bs = new BankSMS();
    _LoadParams2('2287;ACC;8968;');
    _LoadParams2('2287;BALANCE;94669.11;');
    _LoadParams2('2287;BALANCE_CUR;RUR;');
    _LoadParams2('2287;BANK;BM;');
    _LoadParams2('2287;CUR;RUR;');
    _LoadParams2('2287;DIR;SPENDING;');
    _LoadParams2('2287;PLACE;YM*YandexTaxi;');
    _LoadParams2('2287;SUMMA;511.00;');
    _LoadParams2('2287;TRANS_DATE;08.04.2016;');
    _LoadParams2('2287;TRANS_TIME;11:18:40;');
    arrParsedSMS.push(bs);
    bs = new BankSMS();
    _LoadParams2('2294;ACC;8968;');
    _LoadParams2('2294;BALANCE;94192.11;');
    _LoadParams2('2294;BALANCE_CUR;RUR;');
    _LoadParams2('2294;BANK;BM;');
    _LoadParams2('2294;CUR;RUR;');
    _LoadParams2('2294;DIR;SPENDING;');
    _LoadParams2('2294;PLACE;TIBSER;');
    _LoadParams2('2294;SUMMA;335.00;');
    _LoadParams2('2294;TRANS_DATE;08.04.2016;');
    _LoadParams2('2294;TRANS_TIME;16:53:20;');
    arrParsedSMS.push(bs);
    bs = new BankSMS();
    _LoadParams2('2295;ACC;5*8022;');
    _LoadParams2('2295;BALANCE;10606,08;');
    _LoadParams2('2295;BALANCE_CUR;RUR;');
    _LoadParams2('2295;BANK;ALPHA;');
    _LoadParams2('2295;CUR;RUR;');
    _LoadParams2('2295;DIR;SPENDING;');
    _LoadParams2('2295;PLACE;RU/MOSCOW/GASTRONOM;');
    _LoadParams2('2295;SUMMA;217,00;');
    _LoadParams2('2295;TRANS_DATE;08.04.2016;');
    _LoadParams2('2295;TRANS_TIME;19:17:23;');
    arrParsedSMS.push(bs);
    bs = new BankSMS();
    _LoadParams2('2300;ACC;4*6832;');
    _LoadParams2('2300;BALANCE;3373,05;');
    _LoadParams2('2300;BALANCE_CUR;RUR;');
    _LoadParams2('2300;BANK;ALPHA;');
    _LoadParams2('2300;CUR;RUR;');
    _LoadParams2('2300;DIR;SPENDING;');
    _LoadParams2('2300;PLACE;RU/MOSCOW/BENTOWOK;');
    _LoadParams2('2300;SUMMA;1272,85;');
    _LoadParams2('2300;TRANS_DATE;09.04.2016;');
    _LoadParams2('2300;TRANS_TIME;20:26:04;');
    arrParsedSMS.push(bs);
    bs = new BankSMS();
    _LoadParams2('2303;ACC;5*8022;');
    _LoadParams2('2303;BALANCE;24868,08;');
    _LoadParams2('2303;BALANCE_CUR;RUR;');
    _LoadParams2('2303;BANK;ALPHA;');
    _LoadParams2('2303;CUR;RUR;');
    _LoadParams2('2303;DIR;SPENDING;');
    _LoadParams2('2303;PLACE;RU/MOSCOW/MAGNOLIYA;');
    _LoadParams2('2303;SUMMA;738,00;');
    _LoadParams2('2303;TRANS_DATE;10.04.2016;');
    _LoadParams2('2303;TRANS_TIME;18:57:33;');
    arrParsedSMS.push(bs);
    bs = new BankSMS();
    _LoadParams2('2308;ACC;5*8022;');
    _LoadParams2('2308;BALANCE;24216,08;');
    _LoadParams2('2308;BALANCE_CUR;RUR;');
    _LoadParams2('2308;BANK;ALPHA;');
    _LoadParams2('2308;CUR;RUR;');
    _LoadParams2('2308;DIR;SPENDING;');
    _LoadParams2('2308;PLACE;RU/MOSCOW/MAGNOLIYA;');
    _LoadParams2('2308;SUMMA;652,00;');
    _LoadParams2('2308;TRANS_DATE;11.04.2016;');
    _LoadParams2('2308;TRANS_TIME;21:22:34;');
    arrParsedSMS.push(bs);    
    alert('!');
   // alert(arrParsedSMS.length);
}