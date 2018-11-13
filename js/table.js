
$(function () {
	//点击左侧列表项目收缩
    $(".riliBox").click(function () {
        $(this).next().slideToggle(200)
     })
    
    //点击顶部项目收缩
    $(".header-right-info").click(function () {

        $(this).next().slideToggle(100);
        $(this).parent().siblings().children().next().css({"display":"none"})

    })
    
    //点击列表图表左侧列表收缩，并且右边的内容相应作出改变
    $(".list").click(function () {
        $(".aside-info-left").slideToggle(100)
        console.log($(".aside-info-left").height())
        if($(".aside-info-left").height()>=250){
            $(".side-info-right").css({"paddingLeft":"0px"})
        }else{
            $(".side-info-right").css({"paddingLeft":"238px"})
        }
    })

	//折线图
    var dom = document.getElementById("container");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title: {
            // text: '堆叠区域图'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data:['邮件','媒体','资源']
        },
//      toolbox: {
//          feature: {
//              saveAsImage: {}
//          }
//      },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'邮件',
                type:'line',
                stack: '总量',
                areaStyle: {},
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'媒体',
                type:'line',
                stack: '总量',
                areaStyle: {},
                data:[220, 182, 191, 234, 290, 330, 310]
            },

            {
                name:'资源',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[150, 232, 201, 154, 190, 330, 410]
            },

        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }




//雷达图
    var dom = document.getElementById("leidatu");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 'center',
        data:['某软件','某主食手机','某水果手机','降水量','蒸发量']
    },
    radar: [
        {
            indicator: [
                {text: '品牌', max: 100},
                {text: '内容', max: 100},
                {text: '可用性', max: 100},
                {text: '功能', max: 100}
            ],
            center: ['25%','40%'],
            radius: 80
        },
        {
            indicator: [
                {text: '外观', max: 100},
                {text: '拍照', max: 100},
                {text: '系统', max: 100},
                {text: '性能', max: 100},
                {text: '屏幕', max: 100}
            ],
            radius: 80,
            center: ['50%','60%'],
        },
        {
            indicator: (function (){
                var res = [];
                for (var i = 1; i <= 12; i++) {
                    res.push({text:i+'月',max:100});
                }
                return res;
            })(),
            center: ['75%','40%'],
            radius: 80
        }
    ],
    series: [
        {
            type: 'radar',
             tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    value: [60,73,85,40],
                    name: '某软件'
                }
            ]
        },
        {
            type: 'radar',
            radarIndex: 1,
            data: [
                {
                    value: [85, 90, 90, 95, 95],
                    name: '某主食手机'
                },
                {
                    value: [95, 80, 95, 90, 93],
                    name: '某水果手机'
                }
            ]
        },
        {
            type: 'radar',
            radarIndex: 2,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    name: '降水量',
                    value: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
                },
                {
                    name:'蒸发量',
                    value:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3]
                }
            ]
        }
    ]
};
 if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }


//折线柱图
    var dom = document.getElementById("zhutu");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['蒸发量','降水量','平均温度']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [
        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'降水量',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'平均温度',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};

     if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }



//
if($(".color").text()=="技术部"){
	$(".color").css("backgroundColor","#36c6d3");
}else if($(".color").text()=="运营"){
	$(".color").css("backgroundColor","#ed6b75");
}else if($(".color").text()=="市场部"){
	$(".color").css("backgroundColor","#F1C40F");
}

//点击设置时，她后面的内容出现
 $(".shezhi").click(function () {
        $(".xiugai").slideToggle(200)
     })
    



 })
 

function s(str){
    if(str.charAt(0)=="#"){
        return document.getElementById(str.substring(1));
    }else if(str.charAt(0)=="."){
        return document.getElementsByClassName(str.substring(1));
    }else{
        return document.getElementsByTagName(str);
    }
}