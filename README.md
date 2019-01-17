### toastrTips  一款基于jquery的插件（已经发布在jquery插件库下载需要3个JQ币，git转载请标注来源出处，顺手给个star，谢谢！）
页面右下角通知框(类似win10通知框)
在线demo演示:https://lvjunhao.github.io/toastrTips/
基本的参数都在demo的index.html里的例子中注释了

总结：UI简洁大方，四种类型提示框，事件，方向，等都可配置，很灵活

API以及使用方法：
// 以下属性 字符串类型的必须是string 但 Number类型的属性值传入string类型也可以
			$('.tips').initTips({
				// title: "", // head头部显示的标题内容
                // message:"",// 内容区域 动态生成div时,将根据ajax获取的数据并拼接好的html字符串放到此处即可
				// duration:5000, // 提示框停留时间(毫秒为单位)  默认值为5000ms
				space:10, // 通知窗之间上下间隔 单位px(默认值为8)
				firstSpace:8, // 第一个提示框距离页面 上方或(下,左,右)的距离 (默认值为8)
				margin:15, // 提示框 距离左右两边的距离 (默认值15px)
				toastType:'info',// 提示类型 有四个样式可选 info warning error success(默认info)
				// width:300, // 提示框宽度,默认为auto不换行
				// limit:4, // 限制提示框数量(默认值为4)
				// timingFun:'linear',// 动画运动曲线(默认值为ease)
				// direction:'right bottom', // 提示框滑出方向默认right bottom
				// type:'click', // 触发方式(内容区域)
				// 上方type属性的事件触发后的回调函数
                // action: function () {
                //     console.log(1)
                // }
			});
