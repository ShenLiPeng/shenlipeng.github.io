function doSearch(){
  var cityCode = getData(document.querySelector('#adress').value);

   $.ajax({
        url:"http://apis.baidu.com/apistore/weatherservice/recentweathers",
        data:{
            cityname:document.querySelector('#adress').value,
            cityid:cityCode,
        },
        method:"get",
        headers:{
            apikey:'b5810ca7e085ef79bbce90f7fb894758',
        },
        dataType:'json',

        success:function(res){

          
           var arr = [];
           var today = res.retData.today;
           var todays = {};
           todays.date =today.date;
           todays.week = today.week;
           todays.stute = today.type;
           todays.power = today.fengli;
           todays.wind = today.fengxiang;
           todays.tempMax = today.hightemp;
           todays.tempMin = today.lowtemp;
          
           arr.push(todays);

            var keys = res.retData.forecast;
            keys.forEach(function(item){
             var weather = {};
             weather.date = item.date;
             weather.week = item.week;
             weather.stute = item.type;
             weather.power = item.fengli;
             weather.wind = item.fengxiang;
             weather.tempMax = item.hightemp;
             weather.tempMin = item.lowtemp;
             arr.push(weather);
            });
            
            localStorage.myData = JSON.stringify(arr);
        }
    })
getWeather(document.querySelector('#adress').value);
}
function getWeather(){
var arr = JSON.parse(localStorage.myData);
var html = template('table', {list:arr});
document.querySelector('#content').innerHTML = html;

}

function getData(palce) {
    var cityCode = '';
    $.ajax({
        url: "http://apis.baidu.com/apistore/weatherservice/cityinfo",
        data: {
            cityname: palce,
        },
        method: "get",
        headers: {
            apikey:'b5810ca7e085ef79bbce90f7fb894758',
        },
        dataType: 'json',
        success: function (res) {
            console.log(res);
            var result = res.retData.cityCode;
           
            console.log(result);
        },
         error: function(err) {
            console.log(err);
        }
    })

    return cityCode;
}


    
   