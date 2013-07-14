// Backbone.js Topanchor extension
//
// Created by: Lyndel Thomas (@ryndel)
// Source: https://github.com/backbone-ui/topanchor
//
// Licensed under the MIT license: 
// http://makesites.org/licenses/MIT

(function(_, Backbone) {
	
	// fallbacks
	if( _.isUndefined( Backbone.UI ) ) Backbone.UI = {};
	// Support backbone app (if available)
	var View = ( typeof APP != "undefined" && !_.isUndefined( APP.View) ) ? APP.View : Backbone.View;
	
	Backbone.UI.Topanchor = View.extend({
		
		//el : '.ui-topanchor',
		el: function(){ return $(this.options.parentEl) },

		options : {
			parentEl : "body",
			// navEl : "nav", 
			// mainEl : ".main"
		},
		
		events: {
			"scroll" : "pageScroll",
			"click .ui-topanchor-control" : "backToTop"
		},
		
		pageScroll: function() {
			var scrollThreshold = $(window).height();
			
			if ($(window).scrollTop() > scrollThreshold) {
				
				$(this.el).find('.ui-topanchor-control').addClass('ui-element-active');
			} else {
				$(this.el).find('.ui-topanchor-control').removeClass('ui-element-active');
			}
		},
		
		backToTop: function() {
			$("html, body").animate({scrollTop: 0}, 1000);
		},

		initialize: function(model, options){
			
			$( this.options.parentEl ).addClass('ui-topanchor');
			
			_.bindAll(this, 'render', 'pageScroll'); 
			
			$(window).scroll(this.pageScroll);
			
			
		},
	});
	
})(this._, this.Backbone);