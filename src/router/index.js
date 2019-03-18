import Vue from 'vue'
import Router from 'vue-router'
import _ from 'lodash'

Router.prototype.openPage = function(link,query){
	this.push({
		path:link,
		query:_.assignIn({
			time:new Date().getTime()
		},query || {})
		
	})
}

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: '/pcHome'
		},
		{
			path: '/pcHome',
			name: 'pcHome',
		    component(resolve){
		       require(['@/views/pcHome/pcHome.vue'], resolve)
		    }
		},
		{
			path: '/aboutUs',
			name: 'aboutUs',
		    component(resolve){
		       require(['@/views/aboutUs/aboutUs.vue'], resolve)
		    }
		},			
		{
			path: '/services',
			name: 'services',
		    component(resolve){
		       require(['@/views/services/services.vue'], resolve)
		    }
		},
		{
			path: '/succCase',
			name: 'succCase',
		    component(resolve){
		       require(['@/views/succCase/succCase.vue'], resolve)
		    }
		},		
		{
			path: '/applyJoin',
			name: 'applyJoin',
		    component(resolve){
		       require(['@/views/applyJoin/applyJoin.vue'], resolve)
		    }
		}		
	]
})