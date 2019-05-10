Vue.component('task-list', {
	template: '<div><bla v-for="task in tasks">{{ task.task }}</bla></div',

	data() {
		return {
			tasks: [
				{ task: 'Go to store', complete: true },
				{ task: 'Go to email', complete: false },
				{ task: 'Go to farm', complete: true },
				{ task: 'Go to work', complete: false },
			]
		};
	}
});

Vue.component('bla', {
	template: '<li><slot></slot></li>'
});

new Vue({
	el: '#root'
})