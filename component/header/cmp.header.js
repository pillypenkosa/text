//console.log( '' );





class ComponentHeader {



	static args = {};





	static html( objData = {} ) {

		const fooName = this.name + '.html()';
		
		this.args = objData.args ? objData.args : {}; 




		let tagParam = {
			//'class' 		: 'active',
			//'name' 			: 'Any',
			//'title' 		: 'Всплывающая подсказка',
			//'data-id' 		: 'any-data',
			//'onclick' 		: `${ this.name }.clc( ${ this.name }.args )`,
			//'selected' 		: '',
			//'defer' 		: '',
		};

		let html = appProjectName + ' ' + appVersion;


		return { tagParam, html };
	}




	static clc( objData = {} ) {
		const fooName = this.name + '.clc()';





	}








}











