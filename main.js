Vue.component('message', {
	
	props: ['title', 'body', 'notes'],

	data() {
		return {
			isVisible: true
		};
	},

	template: `
		<div class="alert alert-success" v-show="isVisible">
			<h4 class="alert-heading">
				{{ title }}
				<button type="button" @click="isVisible = false"class="close" aria-label="Close">
				  <span aria-hidden="true">&times;</span>
				</button>
			</h4>
			<p>
				{{ body }}
			</p>
			<hr>
			<p class="mb-0">
				{{ notes }}
			</p>
		</div>
	`,

	// long variant
	// methods: {
	// 	hideModal() {
	// 		this.isVisible = false;
	// 	}
	// }
});

new Vue({
	el: '#root'
});