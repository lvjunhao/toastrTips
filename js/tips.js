(function ($) {
    $.fn.initTips = function (option) {
        var defaults = {
            title: "toastrTips",
            message:"<p>未经允许不可转载本插件</p><p>联系作者:lvjunhao1314@sina.com</p>",
            duration:5000,
            space:8, 
            firstSpace:8,
            limit:4,
            margin:15,
            direction:'right bottom',
            timingFun:'ease',
            width:'auto',
            ring:'block',
            // type:'click',
            // action: function () {
            //     console.log(1)
            // }
        }
        var options = $.extend(defaults,option);
        var firstDirection = direction(options.direction)[0].trim().toString();
        var lastDirection = direction(options.direction)[1].trim().toString();
        var minus = "";
        if (firstDirection == 'left') {
            minus = "-";
        } else {
            minus = "";
        }
        if ($('.ez_tips').size() == 0 || $('.ez_tips').size() < options.limit) {
            var container = "<div class='ez_tips' style="+firstDirection+":"+options.margin+"px;transform:translateX("+minus+"110%)></div>"

            var head = "<div class='title clearfix'><i class='ez_icon ez_icon-volume-up fl' style='display:"+options.ring+"'></i><i class='ez_icon ez_icon-remove fr close'></i></div>";

            var content = "<div class='tips-message'></div>"
            
            var newHead = $(head).append(options.title);

            var newContent = $(content).append(options.message)

            var newContainer = $(container).append(newHead,newContent);

            setTimeout(function () {
                $(newContainer).css({
                    'transition-timing-function':options.timingFun,
                    'width':options.width,
                });
                var height = $(newContainer).outerHeight(true);
                var len = $('.ez_tips').size();
                if (len >= 2) {
                    for (var i = 1; i < len; i++) {
                        if (!$('.ez_tips').hasClass('length1')) {
                            $(newContainer).css(lastDirection,options.firstSpace + 'px');
                            $(newContainer).addClass('active length1');
                            break;
                        } else if (!$('.ez_tips').hasClass('length'+ (i+1))) {
                            $(newContainer).css(lastDirection,i * height + options.space * i + options.firstSpace + 'px');
                            $(newContainer).addClass('active length'+(i+1));
                        }
                    }
                } else {
                    $(newContainer).css(lastDirection,options.firstSpace + 'px');
                    $(newContainer).addClass('active length1');
                }
                $(newContainer).on('mouseover',function () {
                    $(newHead).find('.close').addClass('active');
                });
                $(newContainer).on('mouseleave',function () {
                    $(newHead).find('.close').removeClass('active');
                });
                $(newHead).find('.close').click(function () {
                    $(newContainer).removeClass('active');
                    setTimeout(function () {
                        $(newContainer).remove();
                    },700)
                });
                if (options.action) {
                    $(newContent).css('cursor','pointer').on(options.type,options.action);
                }
            },1);
            
            setTimeout(function () {
                $(newContainer).removeClass('active');
                setTimeout(function () {
                    $(newContainer).remove();
                },700)
            },options.duration)

            $(this).append(newContainer);
        } else {
            return;
        }

        function direction (params) {
            var index = params.indexOf(" ");
            var result = [];
            var firstDirection = params.substring(0,index);
            var lastDirection = params.substring(index);
            result.push(firstDirection,lastDirection);
            return result;
        }
    }
})(jQuery);