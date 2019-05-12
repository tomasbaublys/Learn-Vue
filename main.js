Vue.component('modal', {

	data() {
		return {
			showModal: false
		};
	},

	template: `
		<div name="modal">
			<div v-if="! showModal">
				<button type="button" class="btn btn-primary" @click="openModal">Open Modal</button>
			</div>
			<div v-if="showModal">
				<div class="modal modal-mask" style="display: block">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <h5 class="modal-title">
					        Modal title
					    </h5>
				      	</div>
				      	<div class="modal-body"></div>

				      	<div class="modal-footer">
							<button type="button" class="btn btn-outline-info" @click="closeModal()"> Close </button>
							<button type="button" class="btn btn-primary" data-dismiss="modal" @click="submitAndClose()"> Submit </button>
				      	</div>
				    </div>
				  </div>
				</div>
			</div>
		</div>	
	`,

	methods: { 
	   	openModal() { 
	     	this.showModal = true; 
	   	},
	   	closeModal() {
	   		this.showModal = false;
	   	},
	   	submitAndClose() {
    		this.showModal = false;
  		} 
	}
});

new Vue({
	el: '#root'
});