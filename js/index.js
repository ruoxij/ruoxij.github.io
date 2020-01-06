/*          雪花              */
var t=0;
window.onmousemove=function(event){
        var xh = document.createElement('div'); //创建div
        xh.classList.add('xh');                 //添加样式
        var inx=event.pageX;
        var iny=event.pageY;
        var n=3*(Math.round(Math.random())
            ? -1 : 1);                          //左右运动随机性
        xh.style.left=inx+"px";
        xh.style.top=iny+"px";
        if (t!=1) {
        document.getElementById('con').appendChild(xh);          //加入div
        }
        var got = setInterval(function(){       //运动轨迹
            inx+=n;
            iny-=3;
            xh.style.left=inx+"px";
            xh.style.top=iny+"px";
            if (t) {                         //判断是否关闭
                xh.remove();
            }else if(iny<=-20){                       //退出屏幕消失
                clearInterval(got);
                xh.remove();
            }

        },30);

}

/*        旗子部分              */
var loc=(-110);     //初始位置
var flag,falgn=0;
window.onload=function(){
    flag=document.getElementById('flag');//获取旗子ID
    r();    //启动时间
}
function up(){      //向上
    if (falgn>0) {      //判断旗子位置
        loc+=75;
        flag.style.bottom=loc+'px';
        falgn--;
    }else{alert('无法继续，您可以选择向下箭头');}
}
function down(){    //向下
    if (falgn<3) {      //判断旗子位置
        loc-=75;
        flag.style.bottom=loc+'px';
        falgn++;
    }else{alert('无法继续，您可以选择向上箭头');}
}
function yes(){                         //网页跳转
    switch(falgn){
        case 0: window.location='index.html';break;
        case 1: window.location='blog.html';break;
        case 2: window.location='www.html';break;
        case 3: t=1;break;
    }
}

/*          时间部分           */
var n=Hn=Mn=0;                      //秒，小时，分钟控制
function time(){return new Date();} //获取时间
var hou=time().getHours();          //记录初始化时钟
var min=time().getMinutes();        //记录初始化分钟
var sec=time().getSeconds();        //记录初始化秒钟
function r(){
/*            时钟                  */
    if (hou!=time().getHours()) {Hn=(Hn+1)%2;hou=time().getHours();}//控制切换
    document.getElementById('Htim').style.transform='rotateX('+Hn*90+'deg)';//旋转动作
    document.getElementById('Htim').innerHTML=hou<10 ?
    '0'+hou : hou;          //填入时间
    document.getElementById('Hnextt').style.transform='rotateX('+
    (Hn ? 0 : 1)*90+'deg)';
    document.getElementById('Hnextt').innerHTML=hou<10 ?
    '0'+hou : hou;

/*            分钟                  */
    if (min!=time().getMinutes()) {Mn=(Mn+1)%2;min=time().getMinutes();}
    document.getElementById('Mtim').style.transform='rotateX('+Mn*90+'deg)';
    document.getElementById('Mtim').innerHTML=min<10 ?
    '0'+min : min;
    document.getElementById('Mnextt').style.transform='rotateX('+
    (Mn ? 0 : 1)*90+'deg)';
    document.getElementById('Mnextt').innerHTML=min<10 ?
    '0'+min : min;

/*            秒钟                  */
    if (sec!=time().getSeconds()) {n=(n+1)%2;sec=time().getSeconds();}
    document.getElementById('Stim').style.transform='rotateX('+n*90+'deg)';
    document.getElementById('Stim').innerHTML=sec<10 ?
    '0'+sec : sec;
    document.getElementById('Snextt').style.transform='rotateX('+
    (n ? 0 : 1)*90+'deg)';
    document.getElementById('Snextt').innerHTML=sec<10 ?
    '0'+sec : sec;

    setTimeout('r()',1000);             //每一秒调r函数一次
    }
