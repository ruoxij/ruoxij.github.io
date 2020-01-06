/*           关闭·菜单              */
function closemenus(){
    document.getElementById('menusleft').style.display="none";
    document.getElementById('nav').style['padding-left']="0";
    document.getElementById('con').style['padding-left']="0";
}
/*           打开·菜单              */
function omenus(){
    document.getElementById('menusleft').style.display="block";
    document.getElementById('nav').style['padding-left']="30%";
    document.getElementById('con').style['padding-left']="30%";
}