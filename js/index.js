
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
    
    //点击右边项目收缩
     $(".header-center").click(function () {

        $(this).next().slideToggle(100);
//      $(this).parent().siblings().children().next().css({"display":"none"})

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

	//数据表
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

})


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
    

//开启全屏
$("#quanping").click(function(){
	var fullscreen=function(){
    elem=document.body;
    if(elem.webkitRequestFullScreen){
        elem.webkitRequestFullScreen();   
    }else if(elem.mozRequestFullScreen){
        elem.mozRequestFullScreen();
    }else if(elem.requestFullScreen){
        elem.requestFullscreen();
    }else{
        //浏览器不支持全屏API或已被禁用
    }
}
var exitFullscreen=function(){
    var elem=document;
    if(elem.webkitCancelFullScreen){
        elem.webkitCancelFullScreen();    
    }else if(elem.mozCancelFullScreen){
        elem.mozCancelFullScreen();
    }else if(elem.cancelFullScreen){
        elem.cancelFullScreen();
    }else if(elem.exitFullscreen){
        elem.exitFullscreen();
    }else{
        //浏览器不支持全屏API或已被禁用
    }
}
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