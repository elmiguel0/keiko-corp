/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/
!function(l){var c=l(window),f=c.height();c.resize(function(){f=c.height()}),l.fn.parallax=function(i,e,n){var r,u,h=l(this);function t(){var o=c.scrollTop();h.each(function(){var n=l(this),t=n.offset().top;t+r(n)<o||o+f<t||h.css("backgroundPosition",i+" "+Math.round((u-o)*e)+"px")})}h.each(function(){u=h.offset().top}),r=n?function(n){return n.outerHeight(!0)}:function(n){return n.height()},(arguments.length<1||null===i)&&(i="50%"),(arguments.length<2||null===e)&&(e=.1),(arguments.length<3||null===n)&&(n=!0),c.bind("scroll",t).resize(t),t()}}(jQuery);})(jQuery);