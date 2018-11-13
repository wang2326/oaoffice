function s(str){//#box .cls  p
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}

window.onload=function(){
	aaa();
	bbb();	
	ccc();
	ddd();
	eee();	
	fff();
}
function aaa(){
	var  myChart = echarts.init(s('#container'));
	   option = {
    title : {
        text: '接入机型占比',
        x:'left',
        textStyle: {
            fontWeight: 400,
            fontSize: 16,
            color: '#fff'
        },
    },
     
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        top:40,
        icon:'circle',//圆形
        left: 'left',
        data:['A机型','B机型','C机型','D机型','E机型','F机型','G机型'],
        textStyle: {
            fontWeight: 400,
            fontSize: 11,
            color: '#fff'
        },
    },
    color:['#0175ee','#d89446','#373693','#25ae4f','#06b5c6','#009e9a','#ac266f'],
    series : [
        {
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['60%', '60%'],
            data:[
                {value:4600, name:'A机型'},
                {value:4600, name:'B机型'},
                {value:15600, name:'C机型'},
                {value:6600, name:'D机型'},
                {value:5700, name:'E机型'},
                {value:7600, name:'F机型'},
                {value:3500, name:'G机型'},
                
                
            ],
           
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
                
            }
        }
    ]
};
	
	
  myChart.setOption(option);
}



function bbb(){
	var  myChart = echarts.init(s('#one'));
	var data = {
	    value: 66,
	    text: '新用户率',
	    color: '#027825',
	    title: 'Hdfs'
	}
	
	////////////////////////////////////////
	
	let value = data.value || 0
	option = {
		
	    title: {
	        x: '42%',
	        y: '90%',
	        textStyle: {
	            fontWeight: 400,
	            fontSize: 11,
	            color: '#fff'
	        },
	        text: data.title || ''
	    },
	    tooltip: {
	        trigger: 'item',
	          formatter: '{c}%'
	    },
	    series: [{
	        type: 'pie',
	        radius: ['55', '50'],
	        hoverAnimation: false,
	        label: {
	            normal: {
	                position: 'center'
	            }
	        },
	        data: [{
	                value: value,
	                name: data.text,
	                itemStyle: {
	                    normal: {
	                        color: data.color,
	                    }
	                },
	                label: {
	                    normal: {
	                        formatter: '{d} %',
	                        textStyle: {
	                            fontSize: 13,
	                            fontWeight: 600,
	//                          color: data.color,
								color: '#fff'
	                        }
	                    }
	                }
	            },
	            {
	                value: 100 - value,
	                name: '',
	                tooltip: {
	                    show: false
	                },
	                itemStyle: {
	                    normal: {
	                        color: '#E0E3E9',
	                    }
	                },
	                label: {
	                    normal: {
	                        formatter:  + '',
	                        textStyle: {
	                            fontSize: 13,
	                           	color: '#fff'
	                        }
	                    },
	
	                }
	            }
	        ]
	    }]
	}
	
	
  myChart.setOption(option);
}


function ccc(){
	var  myChart = echarts.init(s('#two'));
	var data = {
    value: 52,
    text: '新用户率',
    color: '#006dd6',
    title: 'Rdbms'
	}


	let value = data.value || 0
	option = {
	   
	    title: {
	        x: '42%',
	        y: '90%',
	        textStyle: {
	            fontWeight: 400,
	            fontSize: 11,
	            color: '#fff'
	        },
	        text: data.title || ''
	    },
	    tooltip: {
	        trigger: 'item',
	          formatter: '{c}%'
	    },
	    series: [{
	        type: 'pie',
	         radius: ['55', '50'],
	        hoverAnimation: false,
	        label: {
	            normal: {
	                position: 'center'
	            }
	        },
	        data: [{
	                value: value,
	                name: data.text,
	                itemStyle: {
	                    normal: {
	                        color: data.color,
	                    }
	                },
	                label: {
	                    normal: {
	                        formatter: '{d} %',
	                        textStyle: {
	                            fontSize: 13,
	                            fontWeight: 600,
	                           	color: '#fff'
	                        }
	                    }
	                }
	            },
	            {
	                value: 100 - value,
	                name: '',
	                tooltip: {
	                    show: false
	                },
	                itemStyle: {
	                    normal: {
	                        color: '#E0E3E9',
	                    }
	                },
	                label: {
	                    normal: {
	                        formatter:  + '',
	                        textStyle: {
	                            fontSize: 13,
	                           	color: '#fff'
	                        }
	                    },
	
	                }
	            }
	        ]
	    }]
	}
	
	
  myChart.setOption(option);
}
function ddd(){
	var  myChart = echarts.init(s('#three'));
	var data = {
	    value: 34,
	    text: '新用户率',
	    color: '#238681',
	    title: 'Rdies'
	}

	let value = data.value || 0
	option = {
	    
	    title: {
	        x: '42%',
	        y: '90%',
	        textStyle: {
	            fontWeight: 400,
	            fontSize: 11,
	            color: '#fff'
	        },
	        text: data.title || ''
	    },
	    tooltip: {
	        trigger: 'item',
	          formatter: '{c}%'
	    },
	    series: [{
	        type: 'pie',
	         radius: ['55', '50'],
	        hoverAnimation: false,
	        label: {
	            normal: {
	                position: 'center'
	            }
	        },
	        data: [{
	                value: value,
	                name: data.text,
	                itemStyle: {
	                    normal: {
	                        color: data.color,
	                    }
	                },
	                label: {
	                    normal: {
	                        formatter: '{d} %',
	                        textStyle: {
	                            fontSize: 13,
	                            fontWeight: 400,
	                           	color: '#fff'
	                        }
	                    }
	                }
	            },
	            {
	                value: 100 - value,
	                name: '',
	                tooltip: {
	                    show: false
	                },
	                itemStyle: {
	                    normal: {
	                        color: '#E0E3E9',
	                    }
	                },
	                label: {
	                    normal: {
	                        formatter:  + '',
	                        textStyle: {
	                            fontSize: 13,
	                           	color: '#fff'
	                        }
	                    },
	
	                }
	            }
	        ]
	    }]
	}
  myChart.setOption(option);
}

function eee(){
	var  myChart = echarts.init(s('#four'));
	option = {
	grid:{
		x:40,
		y:10,
		x2:10,
		y2:-5
	},
	
    xAxis: {
        type: 'category',
        boundaryGap: false,
      
         axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show:false,
           
        },
        axisLine: {
            lineStyle:{
                    color:'#fff',
                }
            
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: '{value} '
        }
        
    },
    series: [{
        data: [48, 52, 45, 46, 89, 120, 110,100,88,96,88,45,78,67,89,103,104,56,45,104,112,132,120,110,89,95,90,89,102,110,110],
        type: 'line',
        showSymbol: false,
        smooth: true,
        itemStyle: {
            normal: {
                color: "#16D9F0"
            },
        },

    }]
}

	myChart.setOption(option);
}

function fff(){
	var  myChart = echarts.init(s('#five'));
	var xAxisData = ['10.40', '10.30', '10.20', '10.10', '10.00', '9.50', '9.40'];
	var legendData= ['网络','内存','CPU'];
	var title = "";
	var serieData = [];
	var metaDate = [
	    [120, 132, 101, 134, 90, 230, 210],
	    [220, 182, 191, 234, 290, 330, 310],
	    [150, 232, 201, 154, 190, 330, 410]
	]
	for(var v=0; v < legendData.length ; v++){
	    var serie = {
	        name:legendData[v],
	        type: 'line',
	        symbol:"circle",
	        symbolSize:5,
	        data: metaDate[v]
	    };
	    serieData.push(serie)
	}
	
	var option = {
	    title : {text: title,textAlign:'left',textStyle:{color:"#fff",fontSize:"16",fontWeight:"normal"}},
	    legend: {
	    	show:true,left:"right",data:legendData,
	    	x:'right',
	        y:'center',
	        orient: 'vertical',
	        top:30,
	        icon:'circle',//圆形
	        right: 'right',
	        textStyle:{color:"#fff",fontSize:14},
//	        itemWidth:18,itemHeight:12,textStyle:{color:"#fff",fontSize:14},
	    },
	    color:['#f38a15','#006be6','#00938d'],
	    grid: {left: '2%',top:"5%",bottom: "-18%",right:"15%",containLabel: true},
	    tooltip : { trigger: 'axis',axisPointer : { type : 'shadow'}},
	    xAxis: [
	        {   
	            type: 'category',
	            boundaryGap : false,
	            axisLine: { show: true,lineStyle:{ color:'#6173A3' }},
	            axisLabel:{interval:0,textStyle:{color:'#9ea7c4',fontSize:14} },
	            axisTick : {show: false},
	            data:xAxisData,
	        },
	    ],
	    yAxis: [
	        {   
	            axisTick : {show: false},
	            splitLine: {show:false},
	            axisLabel:{textStyle:{color:'#9ea7c4',fontSize:14} },
	            axisLine: { show: true,lineStyle:{ color:'#6173A3'}},
	        },
	    ],
	    series:serieData
	};
	myChart.setOption(option);
}