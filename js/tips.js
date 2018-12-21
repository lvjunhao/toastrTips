$(document).ready(function () {
    (function ($) {
        $.fn.initTips = function (option) {
            var defaults = {
                title: "标题",
                message:"内容区域(可直接传递dom字符串用css去定做样式)",
                duration:5000, // 持续时间
                space:8, // 通知窗之间上下间隔 单位px
                limit:4
                // type:'click',
                // action: function () {
                //     console.log(1)
                // }
            }
            var options = $.extend(defaults,option);
            if ($('.ez_tips').size() == 0 || $('.ez_tips').size() < options.limit) {
                var container = "<div class='ez_tips' style='right:15px'></div>"
    
                var head = "<div class='title clearfix'><i class='ez_icon ez_icon-volume-up fl'></i><i class='ez_icon ez_icon-remove fr close'></i></div>";
    
                var content = "<div class='tips-message'></div>"
                
                var newHead = $(head).append(options.title);
    
                var newContent = $(content).append(options.message)
    
                var newContainer = $(container).append(newHead,newContent);
    
                setTimeout(function () {
                    var height = $(newContainer).outerHeight(true);
                    var length = $('.ez_tips').size() - 1;
                    var len = length + 1;
                    for (var i = 0; i < len; i++) {
                        if (!$('.ez_tips').hasClass('length'+ (i+1))) {
                            $(newContainer).css('bottom',i * height + options.space * (i+1) + 'px');
                            $(newContainer).addClass('active length'+(i+1));
                            break;
                        }
                    }
                    // $(newContainer).css('bottom',length * height + options.space * (length + 1) + 'px');
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
    
        }
    })(jQuery);
})