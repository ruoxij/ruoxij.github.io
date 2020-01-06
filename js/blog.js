var blog_n=1;	//菜单控制
var m,Fin;		//文章ID与文章内容

window.onload=function(){	//页面加载完成时完成初始化
	m=document.getElementById('con');
	Fin=m.innerHTML;
}
/* 			添加文章内容			*/
function addin(){
	m.innerHTML+=Fin;
}
/*			  菜单按钮				*/
function bl_onmenu(){
	document.getElementById("bl_menu").style.display
	=(blog_n--)?"block":"none";
	blog_n=Math.abs(blog_n);		/*取绝对值*/
}
