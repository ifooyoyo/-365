function plusReady(){
ws=plus.webview.currentWebview();
// Android处理返回键
	plus.key.addEventListener('backbutton',function(){
back();
},false);
compatibleAdjust();
}