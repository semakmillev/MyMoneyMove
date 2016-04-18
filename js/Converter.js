var Converter = {
    AddZero: function (_value) {
        var st = new String(_value)
        if (st.length == 1) {
            return '0' + st;
        }
        return st;
    },
    prepareSearch: function (_text, _template) {
        var res = _text; //_text.replaceAll('%PLACE%','\\b.*\\b')
        if (_template = "YYYY") {
            res = res.replaceAll(/YYYY/ig, '\\d\\d\\d\\d');
        }
        if (_template = "MM") {
            res = res.replaceAll(/MM/ig, '\\d\\d');
        }
        if (_template = "DD") {
            res = res.replaceAll(/DD/ig, '\\d\\d');
        }
        if (_template = "HH24") {
            res = res.replaceAll(/HH24/ig, '\\d\\d');
        }
        if (_template = "MI") {
            res = res.replaceAll(/MI/ig, '\\d\\d');
        }
        if (_template = "SS") {
            res = res.replaceAll(/SS/ig, '\\d\\d');
        }
        return res;
    },


    GetFieldValue: function (_text, _template, _fieldName) {

        var place = _template.indexOf(_fieldName);
        //alert(place);
        var TemplateOut = _template.substring(0, place);
        var TemplateIn = _template.substring(0, place + (_fieldName).length);

        var RegOut = new RegExp(Converter.prepareSearch(TemplateOut), 'g');
        var RegIn = new RegExp(Converter.prepareSearch(TemplateIn), 'g');
        var res = _text.substr(_text.match(RegOut)[0].length, _text.match(RegIn)[0].length - _text.match(RegOut)[0].length);
        return res;
    },


    StrToDate: function (_text, _template) {

        var year = Converter.GetFieldValue(_text, _template, 'YYYY');
        var month = Converter.GetFieldValue(_text, _template, 'MM') - 1;
        var day = Converter.GetFieldValue(_text, _template, 'DD');
        var hour = 0;
        var minute = 0;
        var second = 0;
        if(_template.indexOf("HH24")>=0){
            var hour = Converter.GetFieldValue(_text, _template, 'HH24');
        }
        if(_template.indexOf("MI")>=0){
            var minute = Converter.GetFieldValue(_text, _template, 'MI');
        }
        if(_template.indexOf("SS")>=0){
            var second = Converter.GetFieldValue(_text, _template, 'SS');
        }



        var dt = new Date(year, month, day, hour, minute, second);
        return dt;

    },
    DateToStr: function (_date, _template) {
        var year = _date.getFullYear();
        var month = Converter.AddZero(_date.getMonth() + 1);
        var day = Converter.AddZero(_date.getDate());
        var hour = Converter.AddZero(_date.getHours()).toString();
        var minute = Converter.AddZero(_date.getMinutes());
        var second = Converter.AddZero(_date.getSeconds());
        return _template.replaceAll("YYYY", year)
                        .replaceAll("MM", month)
                        .replaceAll("DD", day)
                        .replaceAll("HH24", hour)
                        .replaceAll("MI",minute)
                        .replaceAll("SS",second);
                ;
    },
    Example: function () {
        var dt = new Date();
        alert(Converter.DateToStr(dt, "DD.MM.YYYY HH24:MI:SS"))
    }
}