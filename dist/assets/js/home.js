"use strict";$(document).ready(function(){$("#header").addClass("Header--home");var o=$(window),a=$(".Header--home");o.on("load scroll",function(){o.scrollTop()>60?a.addClass("show-back"):a.removeClass("show-back")})});