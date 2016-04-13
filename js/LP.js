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

function PreParseSms(_st)
{
	var arr = _st.split('^');
	InsertSMS(arr[0], arr[1], arr[3], arr[2]);
}
function SetSMSTest()
{
    PreParseSms('2308^Alfa-Bank^1460398999358^5*8022; Pokupka; Uspeshno; Summa: 652,00 RUR; Ostatok: 24216,08 RUR; RU/MOSCOW/MAGNOLIYA; 11.04.2016 21:22:34');
    PreParseSms('2305^Alfa-Bank^1460373376169^Parol dlya vhoda - 5036. Proverte adres banka - https://click.alfabank.ru/... Nikomu ne soobshayte parol, dazhe sotrudnikam banka.');
    PreParseSms('2303^Alfa-Bank^1460303899950^5*8022; Pokupka; Uspeshno; Summa: 738,00 RUR; Ostatok: 24868,08 RUR; RU/MOSCOW/MAGNOLIYA; 10.04.2016 18:57:33');
    PreParseSms('2301^Alfa-Bank^1460223193819^4*6832; Pokupka; Uspeshno; Summa: 268,00 RUR; Ostatok: 3105,05 RUR; RU/MOSCOW/IP Antonova H.D.; 09.04.2016 20:32:30');
    PreParseSms('2300^Alfa-Bank^1460222813345^4*6832; Pokupka; Uspeshno; Summa: 1272,85 RUR; Ostatok: 3373,05 RUR; RU/MOSCOW/BENTOWOK; 09.04.2016 20:26:04');
    PreParseSms('2299^Alfa-Bank^1460213705553^4*6832; Pokupka; Uspeshno; Summa: 3700,00 RUR; Ostatok: 4645,90 RUR; RU/MOSKVA/IP ADRIIAKA E.V.; 09.04.2016 17:54:19');
    PreParseSms('2296^Alfa-Bank^1460141742266^5*8022; Postupleniye; Summa: 15000,00 RUR; Ostatok: 25606,08 RUR; 08.04.2016; Podrobnosti v mobilnom banke alfabank.ru/app/1');
    PreParseSms('2295^Alfa-Bank^1460132288146^5*8022; Pokupka; Uspeshno; Summa: 217,00 RUR; Ostatok: 10606,08 RUR; RU/MOSCOW/GASTRONOM; 08.04.2016 19:17:23');
    PreParseSms('2292^Alfa-Bank^1460123543899^Dlya operacii v tibser.ru na summu 335.00 RUB vash odnorazoviy parol:720375. Ne soobshayte etot parol nikomu,v tom chisle sotrudnikam bankov.');
    PreParseSms('2282^Alfa-Bank^1460057240163^5*8022; Pokupka; Uspeshno; Summa: 705,00 RUR; Ostatok: 10882,08 RUR; RU/MOSCOW/WHITE EAGLES PUB; 07.04.2016 22:26:35');
    PreParseSms('2277^Alfa-Bank^1459965829746^5*8022; Pokupka; Uspeshno; Summa: 159,00 RUR; Ostatok: 11587,08 RUR; GB/g.co/payhelp#/GOOGLE *Commerce Ltd; 06.04.2016 21:03:06');
    PreParseSms('2265^Alfa-Bank^1459797393873^4*6832; Pokupka; Uspeshno; Summa: 672,00 RUR; Ostatok: 23345,90 RUR; RU/MOSCOW/GASTRONOM; 04.04.2016 22:15:51');
    PreParseSms('2260^Alfa-Bank^1459767736353^4*6832; Pokupka; Uspeshno; Summa: 1400,00 RUR; Ostatok: 24017,90 RUR; RU/MOSKVA/NSK_PLT; 04.04.2016 14:01:32');
    PreParseSms('2259^Alfa-Bank^1459767718235^Dlya operacii v PrimePass na summu 1400.00 RUB vash odnorazoviy parol:420527. Ne soobshayte etot parol nikomu,v tom chisle sotrudnikam bankov.');
    PreParseSms('2255^Alfa-Bank^1459614658397^Spisanie so scheta 408*25756 na summu 500.00 RUR, poluchatel platezha Megafon; 02.04.2016 19:30:18.');
    PreParseSms('2193^Alfa-Bank^1459296932826^Spisanie so scheta 408*28875 na summu 500.00 RUR, poluchatel platezha Beeline; 30.03.2016 03:14:54.');
    PreParseSms('2189^Alfa-Bank^1459192177299^5*8022; Pokupka; Uspeshno; Summa: 695,00 RUR; Ostatok: 12246,08 RUR; RU/MOSCOW/WHITE EAGLES PUB; 28.03.2016 22:08:56');
    PreParseSms('2188^Alfa-Bank^1459168761289^5*8022; Pokupka; Uspeshno; Summa: 59,00 RUR; Ostatok: 12941,08 RUR; RU/MOSCOW/CITYSTORE-CHAPLYGINA; 28.03.2016 15:38:40');
    PreParseSms('2178^Alfa-Bank^1459010922306^4*6832; Pokupka; Uspeshno; Summa: 244,00 RUR; Ostatok: 25917,90 RUR; RU/MOSCOW/MAGNOLIYA; 26.03.2016 19:48:03');
    PreParseSms('2177^Alfa-Bank^1459000935514^4*6832; Pokupka; Uspeshno; Summa: 1353,00 RUR; Ostatok: 26161,90 RUR; RU/MOSCOW/OOO KNIZHNYY LABIRINT; 26.03.2016 17:01:36');
    PreParseSms('2176^Alfa-Bank^1459000282653^4*6832; Pokupka; Uspeshno; Summa: 238,00 RUR; Ostatok: 27514,90 RUR; RU/MOSCOW/MAGAZIN DOMOVOY; 26.03.2016 16:50:42');
    PreParseSms('2175^Alfa-Bank^1458998140416^5*8022; Pokupka; Uspeshno; Summa: 1850,00 RUR; Ostatok: 13000,08 RUR; RU/MOSKVA/MR.SUMKIN SPEKTR; 26.03.2016 16:14:59');
    PreParseSms('2174^Alfa-Bank^1458953558349^5*8022; Pokupka; Uspeshno; Summa: 499,95 RUR; Ostatok: 14850,08 RUR; NL/help.uber.com/Uber BV; 26.03.2016 03:52:00');
    PreParseSms('2172^Alfa-Bank^1458928609187^4*6832; Pokupka; Uspeshno; Summa: 4326,99 RUR; Ostatok: 27752,90 RUR; RU/MOSCOW/AUCHAN GAGARINSKY; 25.03.2016 20:56:08');
    PreParseSms('2171^Alfa-Bank^1458924439099^4*6832; Pokupka; Uspeshno; Summa: 5950,00 RUR; Ostatok: 32079,89 RUR; RU/MOSKVA/WAITHAI KURSKAYA; 25.03.2016 19:46:38');
    PreParseSms('2169^Alfa-Bank^1458912998988^Артем Олегович, воплощайте планы с кредитной картой Альфа-Банка. Вам одобрен лимит 281500 р. и до 100 дней без % Покупайте сейчас, вернете летом. Закажите доставку карты в отделение: 84996815858');    
    PreParseSms('2165^Alfa-Bank^1458892254662^5*8022; Postupleniye; Summa: 10000,00 RUR; Ostatok: 15350,03 RUR; 25.03.2016; Podrobnosti v mobilnom banke alfabank.ru/app/1');
    PreParseSms('2162^Alfa-Bank^1458841763285^4*6832; Pokupka; Uspeshno; Summa: 604,00 RUR; Ostatok: 38029,89 RUR; RU/MOSCOW/MAGNOLIYA; 24.03.2016 20:48:42');
    PreParseSms('2159^Alfa-Bank^1458807460542^5*8022; Pokupka; Uspeshno; Summa: 398,55 RUR; Ostatok: 5350,03 RUR; NL/help.uber.com/Uber BV; 24.03.2016 11:15:07');
    PreParseSms('2157^Alfa-Bank^1458752555086^4*6832; Pokupka; Uspeshno; Summa: 790,00 RUR; Ostatok: 38633,89 RUR; RU/MOSCOW/WHITE EAGLES PUB; 23.03.2016 20:01:55');
    PreParseSms('2137^Alfa-Bank^1458716794959^Uvazhaemyj klient! Vam dostupno 5748.58 RUR po kreditnoy karte *8022. Esli Vy ne vnesli platezh, Vam neobhodimo vnesti do 28.03.2016 summu 1685.27 RUR.');
    PreParseSms('2135^Alfa-Bank^1458668443726^4*6832; Pokupka; Uspeshno; Summa: 1459,00 RUR; Ostatok: 39423,89 RUR; RU/MOSCOW/GASTRONOM; 22.03.2016 20:40:06');
    PreParseSms('2127^Alfa-Bank^1458638155260^Артем Олегович, зарабатывайте золото с картой World of Tanks! Получайте до 8,5 золотых единиц за каждые 100 руб. покупки. Месяц премиум-аккаунта в подарок! Закажите карту в пакете услуг Оптимум: 84996815858');
    PreParseSms('2117^Alfa-Bank^1458503459162^4*6832; Pokupka; Uspeshno; Summa: 1261,00 RUR; Ostatok: 40882,89 RUR; RU/MOSCOW/MAGNOLIYA; 20.03.2016 22:50:21');
    PreParseSms('2098^Alfa-Bank^1458355960039^5*8022; Pokupka; Uspeshno; Summa: 599,71 RUR; Ostatok: 5748,58 RUR; NL/help.uber.com/Uber BV; 19.03.2016 05:51:54');
    PreParseSms('2090^Alfa-Bank^1458332742589^4*6832; Pokupka; Uspeshno; Summa: 4575,00 RUR; Ostatok: 42143,89 RUR; RU/MOSCOW/WHITE EAGLES PUB; 18.03.2016 23:25:07');
    PreParseSms('2088^Alfa-Bank^1458321560003^5*8022; Pokupka; Uspeshno; Summa: 244,00 RUR; Ostatok: 6348,29 RUR; RU/MOSCOW/ELISEEVSKY MAGAZIN; 18.03.2016 20:18:45');
    PreParseSms('2086^Alfa-Bank^1458308805616^5*8022; Pokupka; Uspeshno; Summa: 335,00 RUR; Ostatok: 6592,29 RUR; RU/MOSKVA/TIBSER; 18.03.2016 16:46:07');
    PreParseSms('2085^Alfa-Bank^1458308789998^Dlya operacii v TIBSER na summu 335.00 RUB vash odnorazoviy parol:780593. Ne soobshayte etot parol nikomu,v tom chisle sotrudnikam bankov.');
    PreParseSms('2084^Alfa-Bank^1458287438987^Parol dlya vhoda - 5600. Proverte adres banka - https://click.alfabank.ru/... Nikomu ne soobshayte parol, dazhe sotrudnikam banka.');
    PreParseSms('2076^Alfa-Bank^1458159025954^5*8022; Pokupka; Uspeshno; Summa: 1190,00 RUR; Ostatok: 6927,29 RUR; RU/MOSCOW/"TECHNOSTAR 21" CAFE; 16.03.2016 23:09:48');
    PreParseSms('2038^Alfa-Bank^1458069041020^5*8022; Pokupka; Uspeshno; Summa: 431,50 RUR; Ostatok: 8117,29 RUR; RU/MOSCOW/MAGNOLIYA; 15.03.2016 22:10:00');
    PreParseSms('2037^Alfa-Bank^1458059828332^5*8022; Pokupka; Uspeshno; Summa: 720,00 RUR; Ostatok: 8548,79 RUR; RU/MOSKVA/POP CORN BAR (115054),; 15.03.2016 19:36:25');
    PreParseSms('2034^Alfa-Bank^1458058721974^5*8022; Pokupka; Uspeshno; Summa: 900,00 RUR; Ostatok: 9268,79 RUR; RU/WWW.5ZVEZD.RU/5ZVEZD; 15.03.2016 19:18:02');
    PreParseSms('2033^Alfa-Bank^1458058698823^Dlya operacii v 5ZVEZD na summu 900.00 RUB vash odnorazoviy parol:943205. Ne soobshayte etot parol nikomu,v tom chisle sotrudnikam bankov.');
    PreParseSms('2031^Alfa-Bank^1458045075270^Уважаемый клиент, обменивайте валюту по лучшему курсу в Альфа-Клике и Альфа-Мобайле. Разница по $ с курсом ММВБ не более 60 копеек! Узнать курс: www.alfabank.ru/currency-v3/');
    PreParseSms('2030^Alfa-Bank^1458045041018^5*8022; Pokupka; Uspeshno; Summa: 108,00 RUR; Ostatok: 10168,79 RUR; RU/MOSCOW/CITYSTORE-CHAPLYGINA; 15.03.2016 15:29:59');
    PreParseSms('2019^Alfa-Bank^1457981150710^5*8022; Pokupka; Uspeshno; Summa: 125,95 RUR; Ostatok: 10276,79 RUR; RU/MOSCOW/AUCHAN GAGARINSKY; 14.03.2016 21:45:04');
    PreParseSms('2018^Alfa-Bank^1457981006330^5*8022; Pokupka; Uspeshno; Summa: 1448,40 RUR; Ostatok: 10402,74 RUR; RU/MOSCOW/AUCHAN GAGARINSKY; 14.03.2016 21:42:47');
    PreParseSms('2017^Alfa-Bank^1457980267449^5*8022; Pokupka; Uspeshno; Summa: 1142,92 RUR; Ostatok: 11851,14 RUR; RU/MOSCOW/AUCHAN GAGARINSKY; 14.03.2016 21:30:25');
    PreParseSms('2015^Alfa-Bank^1457977415245^Spisanie so scheta 408*25756 na summu 700.00 RUR, poluchatel platezha Yota-internet; 14.03.2016 20:43:01.');
    PreParseSms('2014^Alfa-Bank^1457976846844^5*8022; Pokupka; Uspeshno; Summa: 4008,00 RUR; Ostatok: 12994,06 RUR; RU/MOSCOW/HAMLEYS; 14.03.2016 20:33:26');
    PreParseSms('2013^Alfa-Bank^1457973868744^5*8022; Pokupka; Uspeshno; Summa: 252,00 RUR; Ostatok: 17002,06 RUR; RU/MOSCOW/KOFEYNAYA KANTATA; 14.03.2016 19:43:52');
    PreParseSms('1998^Alfa-Bank^1457803412417^5*8022; Pokupka; Uspeshno; Summa: 122,00 RUR; Ostatok: 17254,06 RUR; RU/MOSCOW/MAGNOLIYA; 12.03.2016 20:22:49');
    PreParseSms('1997^Alfa-Bank^1457803385383^5*8022; Pokupka; Uspeshno; Summa: 279,00 RUR; Ostatok: 17376,06 RUR; RU/MOSCOW/MAGNOLIYA; 12.03.2016 20:22:19');
    PreParseSms('1991^Alfa-Bank^1457706335492^Parol dlya vhoda - 3704. Proverte adres banka - https://click.alfabank.ru/... Nikomu ne soobshayte parol, dazhe sotrudnikam banka.');
    PreParseSms('1990^Alfa-Bank^1457701862053^4*6832; Pokupka; Uspeshno; Summa: 335,00 RUR; Ostatok: 47497,89 RUR; RU/MOSKVA/TIBSER; 11.03.2016 16:10:23');
    PreParseSms('1989^Alfa-Bank^1457701830901^Dlya operacii v TIBSER na summu 335.00 RUB vash odnorazoviy parol:745598. Ne soobshayte etot parol nikomu,v tom chisle sotrudnikam bankov.');
    PreParseSms('1975^Alfa-Bank^1457589421769^5*8022; Pokupka; Uspeshno; Summa: 2891,00 RUR; Ostatok: 17655,06 RUR; RU/MOSCOW/FLOR2 Lujneckaya nab.; 10.03.2016 08:56:22');
    PreParseSms('1974^Alfa-Bank^1457589395216^Dlya operacii v FLOR2 na summu 2891.00 RUB vash odnorazoviy parol:116255. Ne soobshayte etot parol nikomu,v tom chisle sotrudnikam bankov.');
    PreParseSms('1969^Alfa-Bank^1457543718080^5*8022; Pokupka; Uspeshno; Summa: 930,00 RUR; Ostatok: 20546,06 RUR; RU/MOSCOW/KRISPY KREME MYASN; 09.03.2016 20:14:41');
    PreParseSms('1965^Alfa-Bank^1457513267378^Parol dlya vhoda - 7899. Proverte adres banka - https://click.alfabank.ru/... Nikomu ne soobshayte parol, dazhe sotrudnikam banka.');
    PreParseSms('1964^Alfa-Bank^1457510911839^Parol dlya vhoda - 9885. Proverte adres banka - https://click.alfabank.ru/... Nikomu ne soobshayte parol, dazhe sotrudnikam banka.');
    PreParseSms('1955^Alfa-Bank^1457462843348^4*6832; Pokupka; Uspeshno; Summa: 1308,00 RUR; Ostatok: 47891,89 RUR; RU/MOSCOW/FISSMAN; 08.03.2016 21:46:46');
    PreParseSms('1948^Alfa-Bank^1457420959854^Uvazhaemiy klient! Po Vashey kreditnoy karte *8022 Vam neobhodimo vnesti platezh v razmere 1685.27 RUR do 28.03.2016. Alfa-Bank.');
    PreParseSms('1945^Alfa-Bank^1457366969083^5*8022; Pokupka; Uspeshno; Summa: 568,50 RUR; Ostatok: 21535,06 RUR; RU/MOSCOW/MAGNOLIYA; 07.03.2016 19:08:52');
    PreParseSms('1943^Alfa-Bank^1457342353999^5*8022; Pokupka; Uspeshno; Summa: 1412,00 RUR; Ostatok: 22103,56 RUR; RU/MOSCOW/MAGNOLIYA; 07.03.2016 12:18:38');
    PreParseSms('1941^Alfa-Bank^1457287412361^5*8022; Pokupka; Uspeshno; Summa: 159,00 RUR; Ostatok: 23515,56 RUR; GB/g.co/payhelp#/GOOGLE *Commerce Ltd; 06.03.2016 21:02:57');
    PreParseSms('1937^Alfa-Bank^1457224066831^Spisanie so scheta 408*28875 na summu 500.00 RUR, poluchatel platezha Beeline; 06.03.2016 03:27:15.');
    PreParseSms('1934^Alfa-Bank^1457199219874^5*8022; Pokupka; Uspeshno; Summa: 699,00 RUR; Ostatok: 24174,56 RUR; IE/BILL.XBOX.COM/MSFT *XBOX LIVE; 05.03.2016 20:33:06');
    PreParseSms('1933^Alfa-Bank^1457184441221^5*8022; Pokupka; Uspeshno; Summa: 2370,00 RUR; Ostatok: 24873,56 RUR; RU/MOSCOW/RESTORAN EKSPROMT_; 05.03.2016 16:26:47');
    PreParseSms('1929^Alfa-Bank^1457117791300^5*8022; Pokupka; Uspeshno; Summa: 1044,00 RUR; Ostatok: 27243,56 RUR; RU/MOSCOW/OOO GARMONIYA VKUSA; 04.03.2016 21:55:57');
    PreParseSms('1928^Alfa-Bank^1457117773273^5*8022; Pokupka; Uspeshno; Summa: 640,00 RUR; Ostatok: 28287,56 RUR; RU/MOSCOW/MONTE KRISTO; 04.03.2016 21:55:38');
    PreParseSms('1927^Alfa-Bank^1457114719801^5*8022; Pokupka; Uspeshno; Summa: 2147,00 RUR; Ostatok: 28927,56 RUR; RU/MOSCOW/DEZHURNAYA APTEKA; 04.03.2016 21:04:44');
    PreParseSms('1925^Alfa-Bank^1457105096610^5*8022; Pokupka; Uspeshno; Summa: 800,00 RUR; Ostatok: 31074,56 RUR; RU/MOSKVA/FORMULA KINO EVROPA; 04.03.2016 18:24:19');
    PreParseSms('1923^Alfa-Bank^1457103703148^5*8022; Pokupka; Uspeshno; Summa: 720,00 RUR; Ostatok: 31874,56 RUR; RU/MOSCOW/NOTKINO; 04.03.2016 18:01:04');
    PreParseSms('1922^Alfa-Bank^1457103673592^Dlya operacii v kinohod11 na summu 720.00 RUB vash odnorazoviy parol:982529. Ne soobshayte etot parol nikomu,v tom chisle sotrudnikam bankov.');
    PreParseSms('1921^Alfa-Bank^1457094524682^Parol dlya vhoda - 8167. Proverte adres banka - https://click.alfabank.ru/... Nikomu ne soobshayte parol, dazhe sotrudnikam banka.');
    PreParseSms('1919^Alfa-Bank^1457089884948^5*8022; Pokupka; Uspeshno; Summa: 770,00 RUR; Ostatok: 32594,56 RUR; RU/Moscow/WWW.RZD.RU; 04.03.2016 14:10:47');
    PreParseSms('1918^Alfa-Bank^1457089866377^Dlya operacii v Russian Railways na summu 770.00 RUB vash odnorazoviy parol:423025. Ne soobshayte etot parol nikomu,v tom chisle sotrudnikam bankov.');
    PreParseSms('1911^Alfa-Bank^1457031176890^5*8022; Pokupka; Uspeshno; Summa: 280,00 RUR; Ostatok: 33364,56 RUR; RU/MOSCOW/WHITE EAGLES PUB; 03.03.2016 21:52:24');
    PreParseSms('1909^Alfa-Bank^1457024258131^Spisanie so scheta 408*25756 na summu 300.00 RUR, poluchatel platezha Beeline; 03.03.2016 19:57:02.');
    PreParseSms('1905^Alfa-Bank^1457005138688^Parol dlya vhoda - 7732. Proverte adres banka - https://click.alfabank.ru/... Nikomu ne soobshayte parol, dazhe sotrudnikam banka.');
    PreParseSms('1902^Alfa-Bank^1456997019241^Parol dlya vhoda - 7764. Proverte adres banka - https://click.alfabank.ru/... Nikomu ne soobshayte parol, dazhe sotrudnikam banka.');
    PreParseSms('1898^Alfa-Bank^1456943335178^5*8022; Pokupka; Uspeshno; Summa: 699,00 RUR; Ostatok: 33644,56 RUR; IE/BILL.XBOX.COM/MSFT *XBOX LIVE; 02.03.2016 21:28:22');
    PreParseSms('1897^Alfa-Bank^1456941994093^5*8022; Pokupka; Uspeshno; Summa: 299,00 RUR; Ostatok: 34343,56 RUR; RU/MOSKVA/TSVET-RYAD.DM.YLIANOVA; 02.03.2016 21:05:59');
    PreParseSms('1896^Alfa-Bank^1456940635614^5*8022; Pokupka; Uspeshno; Summa: 909,87 RUR; Ostatok: 34642,56 RUR; RU/MOSCOW/AUCHAN GAGARINSKY; 02.03.2016 20:43:11');
    PreParseSms('1895^Alfa-Bank^1456938381338^4*6832; Pokupka; Uspeshno; Summa: 461,00 RUR; Ostatok: 49499,89 RUR; RU/MOSKVA/OOO SOVREMENNIE PISHCHEVI; 02.03.2016 20:05:43');
    PreParseSms('1894^Alfa-Bank^1456931661763^Dlya perevoda s karti na kartu na summu 1230.00 RUB vash odnorazoviy parol:222861. Ne soobshayte etot parol nikomu,v tom chisle sotrudnikam bankov.');
    PreParseSms('1893^Alfa-Bank^1456931591600^Parol dlya vhoda - 2553. Proverte adres banka - https://click.alfabank.ru/... Nikomu ne soobshayte parol, dazhe sotrudnikam banka.');
    PreParseSms('1891^Alfa-Bank^1456910022232^Parol dlya vhoda - 3459. Proverte adres banka - https://click.alfabank.ru/... Nikomu ne soobshayte parol, dazhe sotrudnikam banka.');
    PreParseSms('1889^Alfa-Bank^1456857988388^5*8022; Pokupka; Uspeshno; Summa: 578,00 RUR; Ostatok: 35552,43 RUR; NL/help.uber.com/Uber BV; 01.03.2016 21:45:54');
    PreParseSms('1888^Alfa-Bank^1456853764413^4*6832; Pokupka; Uspeshno; Summa: 408,50 RUR; Ostatok: 51190,89 RUR; RU/MOSCOW/MAGNOLIYA; 01.03.2016 20:35:31');
    PreParseSms('1883^Alfa-Bank^1456838437556^Parol dlya vhoda - 5058. Proverte adres banka - https://click.alfabank.ru/... Nikomu ne soobshayte parol, dazhe sotrudnikam banka.');
    PreParseSms('1879^Alfa-Bank^1456826520024^Parol dlya vhoda - 5831. Proverte adres banka - https://click.alfabank.ru/... Nikomu ne soobshayte parol, dazhe sotrudnikam banka.');
    PreParseSms('1878^Alfa-Bank^1456826447410^Parol dlya vhoda - 5875. Proverte adres banka - https://click.alfabank.ru/... Nikomu ne soobshayte parol, dazhe sotrudnikam banka.');
    PreParseSms('1875^Alfa-Bank^1456823980456^Spisanie so scheta 408*25756 na summu 100,000.00 RUR, poluchatel platezha 408*34640; 01.03.2016 12:19:08.');
    PreParseSms('1873^Alfa-Bank^1456820823300^Parol dlya vhoda - 4795. Proverte adres banka - https://click.alfabank.ru/... Nikomu ne soobshayte parol, dazhe sotrudnikam banka.');
    PreParseSms('1870^Alfa-Bank^1456777143875^4*6832; Pokupka; Uspeshno; Summa: 1878,91 RUR; Ostatok: 151599,39 RUR; RU/MOSCOW/MOROZKO; 29.02.2016 23:18:30');
    PreParseSms('1869^Alfa-Bank^1456776438273^4*6832; Postupleniye; Summa: 120000,00 RUR; Ostatok: 153478,30 RUR; 29.02.2016; Podrobnosti v mobilnom banke alfabank.ru/app/1');
    PreParseSms('2316^BankMoskvy^1460544534503^Pokupka, Karta:8968 summa:750.00 RUR balans:76611.11 RUR CLOUD*TILDA.CC (vremya operatsii MSK 13:47:59 13.04.2016)');
    PreParseSms('2315^BankMoskvy^1460544504849^Vash parol: 597332. Parol 1 iz 3. TILDA.CC (RUB 750.00);');
    PreParseSms('2310^BankMoskvy^1460463322863^Pokupka, Karta:8968 summa:96.00 RUR balans:77361.11 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 14:45:38 12.04.2016)');
    PreParseSms('2307^BankMoskvy^1460376417425^Pokupka, Karta:8968 summa:23.00 RUR balans:77457.11 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:06:01 11.04.2016)');
    PreParseSms('2306^BankMoskvy^1460376210601^Pokupka, Karta:8968 summa:80.00 RUR balans:77480.11 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 14:59:03 11.04.2016)');
    PreParseSms('2297^BankMoskvy^1460141874420^Pokupka, Karta:8968 summa:16632.00 RUR balans:77560.11 RUR AEROFLOT PAO (vremya operatsii MSK 21:57:01 08.04.2016)');
    PreParseSms('2294^BankMoskvy^1460123654280^Pokupka, Karta:8968 summa:335.00 RUR balans:94192.11 RUR TIBSER (vremya operatsii MSK 16:53:20 08.04.2016)');
    PreParseSms('2293^BankMoskvy^1460123635302^Vash parol: 539020. Parol 1 iz 3. 29897 (RUB 335.00);');
    PreParseSms('2290^BankMoskvy^1460113579512^Pokupka, Karta:8968 summa:142.00 RUR balans:94527.11 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 13:56:06 08.04.2016)');
    PreParseSms('2287^BankMoskvy^1460103577929^Pokupka, Karta:8968 summa:511.00 RUR balans:94669.11 RUR YM*YandexTaxi (vremya operatsii MSK 11:18:40 08.04.2016)');
    PreParseSms('2283^BankMoskvy^1460059848462^Pokupka, Karta:8968 summa:139.50 RUR balans:95180.11 RUR MAGNOLIYA (vremya operatsii MSK 23:09:52 07.04.2016)');
    PreParseSms('2281^BankMoskvy^1460023780187^Pokupka, Karta:8968 summa:165.00 RUR balans:95319.61 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 12:53:31 07.04.2016)');
    PreParseSms('2275^BankMoskvy^1459945084503^Pokupka, Karta:8968 summa:69.00 RUR balans:95484.61 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:11:18 06.04.2016)');
    PreParseSms('2268^BankMoskvy^1459858011141^Pokupka, Karta:8968 summa:83.00 RUR balans:95553.61 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:05:52 05.04.2016)');
    PreParseSms('2264^BankMoskvy^1459795889816^Pokupka, Karta:8968 summa:1682.90 RUR balans:95636.61 RUR MAGAZIN DOMOVOY (vremya operatsii MSK 21:50:44 04.04.2016)');
    PreParseSms('2263^BankMoskvy^1459790434312^Vydacha nalichnyh Karta:8968 summa:1000.00 RUR balans:97319.51 RUR ATM 2843-OAO BANK MOS (vremya operatsii MSK 20:19:39 04.04.2016)');
    PreParseSms('2261^BankMoskvy^1459772292461^Pokupka, Karta:8968 summa:99.00 RUR balans:98319.51 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:08:56 04.04.2016)');
    PreParseSms('2257^BankMoskvy^1459707307248^Pokupka, Karta:8968 summa:301.00 RUR balans:98418.51 RUR MAGNOLIYA (vremya operatsii MSK 21:14:17 03.04.2016)');
    PreParseSms('2252^BankMoskvy^1459526347604^Pokupka, Karta:8968 summa:513.00 RUR balans:98719.51 RUR BENTOWOK (vremya operatsii MSK 18:58:15 01.04.2016)');
    PreParseSms('2248^BankMoskvy^1459515892693^Pokupka, Karta:8968 summa:335.00 RUR balans:99232.51 RUR TIBSER (vremya operatsii MSK 16:03:18 01.04.2016). CashBack budet nachislen soglasno pravilam programmy "Moy bonus".');
    PreParseSms('2247^BankMoskvy^1459515679707^Vash parol: 844563. Parol 1 iz 3. 29425 (RUB 335.00);');
    PreParseSms('2245^BankMoskvy^1459513286838^Pokupka, Karta:8968 summa:175.00 RUR balans:99567.51 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:20:09 01.04.2016)');
    PreParseSms('2243^BankMoskvy^1459503209539^Spisanie komissii za SMS informirovanie Karta:8968 summa:-59.00 RUR balans:99742.51 RUR (vremya operatsii MSK 12:32:31 01.04.2016)');
    PreParseSms('2236^BankMoskvy^1459426525428^Pokupka, Karta:8968 summa:108.00 RUR balans:99801.51 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:08:48 31.03.2016)');
    PreParseSms('2235^BankMoskvy^1459423812356^Popolnenie, Karta:8038 summa:74571.29 RUR balans:99909.51 RUR 000000000000191000001844019256 (vremya operatsii MSK 14:04:52 31.03.2016)');
    PreParseSms('2234^BankMoskvy^1459412281176^Pokupka, Karta:8968 summa:478.00 RUR balans:25338.22 RUR YM*YandexTaxi (vremya operatsii MSK 11:17:10 31.03.2016)');
    PreParseSms('2232^BankMoskvy^1459367322487^Pokupka, Karta:8968 summa:594.00 RUR balans:25816.22 RUR CAFE-CLUB 1000 MILES (vremya operatsii MSK 22:47:55 30.03.2016)');
    PreParseSms('2229^BankMoskvy^1459361108666^Pokupka, Karta:8968 summa:594.00 RUR balans:26410.22 RUR CAFE-CLUB 1000 MILES (vremya operatsii MSK 21:04:18 30.03.2016)');
    PreParseSms('2228^BankMoskvy^1459361035240^Pokupka, Karta:8968 summa:297.00 RUR balans:27004.22 RUR CAFE-CLUB 1000 MILES (vremya operatsii MSK 21:03:08 30.03.2016)');
    PreParseSms('2227^BankMoskvy^1459361023118^Otmena pokupki, Karta:8968 summa:297.00 RUR balans:27301.22 RUR CAFE-CLUB 1000 MILES (vremya operatsii MSK 21:02:48 30.03.2016)');
    PreParseSms('2226^BankMoskvy^1459361012501^Pokupka, Karta:8968 summa:297.00 RUR balans:27004.22 RUR CAFE-CLUB 1000 MILES (vremya operatsii MSK 21:02:41 30.03.2016)');
    PreParseSms('2220^BankMoskvy^1459340452038^Pokupka, Karta:8968 summa:148.00 RUR balans:27301.22 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:19:47 30.03.2016)');
    PreParseSms('2219^BankMoskvy^1459340049547^Pokupka, Karta:8968 summa:145.00 RUR balans:27449.22 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:09:42 30.03.2016)');
    PreParseSms('2199^BankMoskvy^1459334354166^Spisanie komissii za oplatu proezda Karta:8968 summa:-40.00 RUR balans:27594.22 RUR (vremya operatsii MSK 12:48:05 30.03.2016)');
    PreParseSms('2187^BankMoskvy^1459162019250^Pokupka, Karta:8968 summa:74.00 RUR balans:27634.22 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 13:42:53 28.03.2016)');
    PreParseSms('2186^BankMoskvy^1459162017002^Pokupka, Karta:8968 summa:126.00 RUR balans:27708.22 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 13:29:52 28.03.2016)');
    PreParseSms('2185^BankMoskvy^1459150388467^Vydacha nalichnyh Karta:8968 summa:500.00 RUR balans:27834.22 RUR ATM 177629 12 DMITRIYA (vremya operatsii MSK 10:32:14 28.03.2016)');
    PreParseSms('2184^BankMoskvy^1459112819367^Vydacha nalichnyh Karta:8968 summa:45000.00 RUR balans:28533.22 RUR 1A, PAVELETSKAYA PL. (vremya operatsii MSK 00:06:14 28.03.2016)');
    PreParseSms('2170^BankMoskvy^1458916451438^Vydacha nalichnyh Karta:8968 summa:3600.00 RUR balans:73533.22 RUR ATM 2843-OAO BANK MOS (vremya operatsii MSK 17:33:23 25.03.2016)');
    PreParseSms('2168^BankMoskvy^1458907820431^Pokupka, Karta:8968 summa:148.00 RUR balans:77133.22 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:08:40 25.03.2016)');
    PreParseSms('2167^BankMoskvy^1458907482299^Pokupka, Karta:8968 summa:190.00 RUR balans:77281.22 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 14:55:25 25.03.2016)');
    PreParseSms('2161^BankMoskvy^1458822633843^Pokupka, Karta:8968 summa:74.00 RUR balans:77471.22 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:27:26 24.03.2016)');
    PreParseSms('2160^BankMoskvy^1458821973317^Pokupka, Karta:8968 summa:177.00 RUR balans:77545.22 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:15:26 24.03.2016)');
    PreParseSms('2155^BankMoskvy^1458745593525^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 26783. Если Вы НЕ совершаете данную операцию, позвоните по номеру 8(800)200-23-26 ОАО "Банк Москвы"');
    PreParseSms('2154^BankMoskvy^1458745583553^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 27672. Если Вы НЕ совершаете данную операцию, позвоните по номеру 8(800)200-23-26 ОАО "Банк Москвы"')
    PreParseSms('2153^BankMoskvy^1458745473562^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 90396. Если Вы НЕ совершаете данную операцию, позвоните по номеру 8(800)200-23-26 ОАО "Банк Москвы"');
    PreParseSms('2152^BankMoskvy^1458745471598^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 39290. Если Вы НЕ совершаете данную операцию, позвоните по номеру 8(800)200-23-26 ОАО "Банк Москвы"');
    PreParseSms('2151^BankMoskvy^1458745458407^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 73195. Если Вы НЕ совершаете данную операцию, позвоните по номеру 8(800)200-23-26 ОАО "Банк Москвы"');
    PreParseSms('2150^BankMoskvy^1458745170697^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 59662. Если Вы НЕ совершаете данную операцию, позвоните по номеру 8(800)200-23-26 ОАО "Банк Москвы"');
    PreParseSms('2149^BankMoskvy^1458736316624^Pokupka, Karta:8968 summa:148.00 RUR balans:77722.22 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:31:02 23.03.2016)');
    PreParseSms('2148^BankMoskvy^1458735687663^Pokupka, Karta:8968 summa:183.00 RUR balans:77870.22 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:20:37 23.03.2016)');
    PreParseSms('2147^BankMoskvy^1458735292354^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 79459. Если Вы НЕ совершаете данную операцию, позвоните по номеру 8(800)200-23-26 ОАО "Банк Москвы"');
    PreParseSms('2146^BankMoskvy^1458731443496^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 89540. Если Вы НЕ совершаете данную операцию, позвоните по номеру 8(800)200-23-26 ОАО "Банк Москвы"');
    PreParseSms('2145^BankMoskvy^1458731250996^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 67559. Если Вы НЕ совершаете данную операцию, позвоните по номеру 8(800)200-23-26 ОАО "Банк Москвы"');
    PreParseSms('2144^BankMoskvy^1458730575674^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 97137. Если Вы НЕ совершаете данную операцию, позвоните по номеру 8(800)200-23-26 ОАО "Банк Москвы"');
    PreParseSms('2143^BankMoskvy^1458730401882^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 41265. Если Вы НЕ совершаете данную операцию, позвоните по номеру 8(800)200-23-26 ОАО "Банк Москвы"');
    PreParseSms('2142^BankMoskvy^1458730230545^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 70223. Если Вы НЕ совершаете данную операцию, позвоните по номеру 8(800)200-23-26 ОАО "Банк Москвы"');
    PreParseSms('2141^BankMoskvy^1458730055851^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 32619. Если Вы НЕ совершаете данную операцию, позвоните по номеру 8(800)200-23-26 ОАО "Банк Москвы"');
    PreParseSms('2140^BankMoskvy^1458729856924^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 13359. Если Вы НЕ совершаете данную операцию, позвоните по номеру 8(800)200-23-26 ОАО "Банк Москвы"');
    PreParseSms('2139^BankMoskvy^1458729802351^Верификация доверенного номера. Ваш код - 58617. Если Вы НЕ совершаете данную операцию, позвоните по номеру 8(800)200-23-26 ОАО "Банк Москвы"');
    PreParseSms('2138^BankMoskvy^1458729632847^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 22630. Если Вы НЕ совершаете данную операцию, позвоните по номеру 8(800)200-23-26 ОАО "Банк Москвы"');
    PreParseSms('2134^BankMoskvy^1458665597167^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 32254. Если Вы НЕ совершаете данную операцию, позвоните по номеру ОАО "Банк Москвы"');
    PreParseSms('2133^BankMoskvy^1458665131764^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 94525. Если Вы НЕ совершаете данную операцию, позвоните по номеру ОАО "Банк Москвы"');
    PreParseSms('2130^BankMoskvy^1458649257789^Pokupka, Karta:8968 summa:148.00 RUR balans:78053.22 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:06:40 22.03.2016)');
    PreParseSms('2129^BankMoskvy^1458649255249^Pokupka, Karta:8968 summa:182.00 RUR balans:78201.22 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 14:53:51 22.03.2016)');
    PreParseSms('2125^BankMoskvy^1458579699405^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 75843. Если Вы НЕ совершаете данную операцию, позвоните по номеру ОАО "Банк Москвы"');
    PreParseSms('2124^BankMoskvy^1458579162559^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 69176. Если Вы НЕ совершаете данную операцию, позвоните по номеру ОАО "Банк Москвы"');
    PreParseSms('2123^BankMoskvy^1458563153418^Pokupka, Karta:8968 summa:151.00 RUR balans:78383.22 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:14:03 21.03.2016)');
    PreParseSms('2122^BankMoskvy^1458555104949^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 67087. Если Вы НЕ совершаете данную операцию, позвоните по номеру ОАО "Банк Москвы"');
    PreParseSms('2121^BankMoskvy^1458554912320^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 28270. Если Вы НЕ совершаете данную операцию, позвоните по номеру ОАО "Банк Москвы"');
    PreParseSms('2120^BankMoskvy^1458552488408^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 52940. Если Вы НЕ совершаете данную операцию, позвоните по номеру ОАО "Банк Москвы"');
    PreParseSms('2119^BankMoskvy^1458552483803^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 39905. Если Вы НЕ совершаете данную операцию, позвоните по номеру ОАО "Банк Москвы"');
    PreParseSms('2101^BankMoskvy^1458386546895^Pokupka, Karta:8968 summa:550.00 RUR balans:78534.22 RUR YM*YandexTaxi (vremya operatsii MSK 14:21:37 19.03.2016)');
    PreParseSms('2097^BankMoskvy^1458355845943^Pokupka, Karta:8968 summa:75.00 RUR balans:79084.22 RUR MAGNOLIYA (vremya operatsii MSK 05:50:00 19.03.2016)');
    PreParseSms('2096^BankMoskvy^1458342210940^Pokupka, Karta:8968 summa:590.00 RUR balans:79159.22 RUR YM*YandexTaxi (vremya operatsii MSK 02:02:50 19.03.2016)');
    PreParseSms('2094^BankMoskvy^1458339692370^Pokupka, Karta:8968 summa:220.00 RUR balans:79749.22 RUR WHITE EAGLES PUB (vremya operatsii MSK 01:20:51 19.03.2016)');
    PreParseSms('2093^BankMoskvy^1458336389959^Pokupka, Karta:8968 summa:220.00 RUR balans:79969.22 RUR WHITE EAGLES PUB (vremya operatsii MSK 00:25:49 19.03.2016)');
    PreParseSms('2087^BankMoskvy^1458310667637^Pokupka, Karta:8968 summa:206.00 RUR balans:80189.22 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:00:06 18.03.2016)');
    PreParseSms('2081^BankMoskvy^1458233384887^Верификация доверенного номера. Ваш код - 25722. Если Вы НЕ совершаете данную операцию, позвоните по номеру ОАО "Банк Москвы"');
    PreParseSms('2080^BankMoskvy^1458232904252^Верификация доверенного номера. Ваш код - 33016. Если Вы НЕ совершаете данную операцию, позвоните по номеру ОАО "Банк Москвы"');
    PreParseSms('2079^BankMoskvy^1458217061300^Pokupka, Karta:8968 summa:198.00 RUR balans:80395.22 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:16:56 17.03.2016)');
    PreParseSms('2046^BankMoskvy^1458131393663^Pokupka, Karta:8968 summa:148.00 RUR balans:80593.22 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:29:00 16.03.2016)');
    PreParseSms('2045^BankMoskvy^1458131390641^Pokupka, Karta:8968 summa:210.00 RUR balans:80741.22 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:20:04 16.03.2016)');
    PreParseSms('2044^BankMoskvy^1458125133766^Spisanie, Karta:8968 summa:1120.00 RUR balans:80951.22 RUR 35 poezdok 02.2016 (1696884) (vremya operatsii MSK 12:36:32 16.03.2016)');
    PreParseSms('2043^BankMoskvy^1458115677845^Pokupka, Karta:8968 summa:467.00 RUR balans:82071.22 RUR YM*YandexTaxi (vremya operatsii MSK 11:07:08 16.03.2016)');
    PreParseSms('2032^BankMoskvy^1458045414775^Pokupka, Karta:8968 summa:148.00 RUR balans:82538.22 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:35:56 15.03.2016)');
    PreParseSms('2029^BankMoskvy^1458044378613^Pokupka, Karta:8968 summa:91.00 RUR balans:82686.22 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 15:18:49 15.03.2016)');
    PreParseSms('2028^BankMoskvy^1458043195161^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 73240. Если Вы НЕ совершаете данную операцию, позвоните по номеру ОАО "Банк Москвы"');
    PreParseSms('2027^BankMoskvy^1458042504526^Перевод средств 50.00 RUR Счёт списания 40817810800760100205 Код 29586. Если Вы НЕ совершаете данную операцию, позвоните по номеру ОАО "Банк Москвы"');
    PreParseSms('2026^BankMoskvy^1458042437192^Верификация доверенного номера. Ваш код - 06753. Если Вы НЕ совершаете данную операцию, позвоните по номеру ОАО "Банк Москвы"');
    PreParseSms('2025^BankMoskvy^1458042431647^Выдача наличных 100.00 RUR Счёт списания 40817810800760100205 Код 01708. Если Вы НЕ совершаете данную операцию, позвоните по номеру ОАО "Банк Москвы"');
    PreParseSms('2024^BankMoskvy^1458042133053^Popolnenie, Karta:8038 summa:55928.71 RUR balans:82777.22 RUR 000000000000191000001825335007 (vremya operatsii MSK 14:22:36 15.03.2016)');
    PreParseSms('2023^BankMoskvy^1458028873847^Pokupka, Karta:8968 summa:427.00 RUR balans:26848.51 RUR YM*YandexTaxi (vremya operatsii MSK 11:00:11 15.03.2016)');
    PreParseSms('2012^BankMoskvy^1457956867272^Pokupka, Karta:8968 summa:213.00 RUR balans:27423.51 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 14:44:58 14.03.2016)');
    PreParseSms('2011^BankMoskvy^1457956835933^Pokupka, Karta:8968 summa:148.00 RUR balans:27275.51 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 14:59:52 14.03.2016)');
    PreParseSms('2010^BankMoskvy^1457942444807^Pokupka, Karta:8968 summa:379.00 RUR balans:27636.51 RUR YM*YandexTaxi (vremya operatsii MSK 10:59:51 14.03.2016)');
    PreParseSms('1987^BankMoskvy^1457695956536^Pokupka, Karta:8968 summa:173.00 RUR balans:28015.51 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 14:23:27 11.03.2016)');
    PreParseSms('1986^BankMoskvy^1457689661002^Pokupka, Karta:8968 summa:111.00 RUR balans:28188.51 RUR SPORTMASTER SHOP (vremya operatsii MSK 11:48:33 11.03.2016)');
    PreParseSms('1976^BankMoskvy^1457609827869^Pokupka, Karta:8968 summa:156.00 RUR balans:28299.51 RUR STOLOVAYA -ZHUKOVSKOGO (vremya operatsii MSK 14:24:27 10.03.2016)');
    PreParseSms('1973^BankMoskvy^1457589336028^Vash parol: 239657. Parol 1 iz 3. FLOR2 (RUB 2 891.00)');			
}