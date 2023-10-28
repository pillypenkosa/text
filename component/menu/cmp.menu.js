// © 2023 DJS 
 
 
 
 
 
class ComponentMenu { 
 
 
 
	static args = {}; 
 
 


	static arrBtns = [

		{ title: 'Головна' 			, id: 'index' 				, href: '?' 				, },
		{ title: 'Анекдоты' 		, id: 'anecdote' 			, href: '?anecdote' 		, },
		{ title: 'Одностишия' 		, id: 'one_liners' 			, href: '?one-liners' 		, },
		{ title: 'Пословицы' 		, id: 'proverbs' 			, href: '?proverbs' 		, },
		{ title: 'Объявления' 		, id: 'advertisement' 		, href: '?advertisement' 	, },
		{ title: 'Опечатки' 		, id: 'literal_error' 		, href: '?literal-error' 	, },

	];







 
	static html( objData = {} ) { 
		const name = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 
		let html = ''; 
 		this.arrBtns.forEach( k => {
 			html += `<div class="btn pointer" data-id="${ k.id }" onclick="${ this.name }.clc( '${ k.id }' )">${ k.title }</div>`;
		});
 



 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) {  
		const fooName = this.name + '.clc()';

		console.log( 'fooName: ', fooName );
		console.log( 'data: ', data );


		//console.log( 'data-id: ', data.dataset.id );
		//console.log( 'data-href: ', data.dataset.href );


		// чи відображти меню
		ComponentHeader.clc();

		let html = '';
		if ( data == 'index' ) {
			html = this.name + '.html()';
		}




		switch( data ) {
		case 'index':
			html = this.name + '.html()';
			break;

		case 'anecdote':
			arrListAnecdote.forEach( k => {
				html += this.template( k.id, k.title );
			});
			break;
		
		case 'one_liners':
			arrListOneLiners.forEach( k => {
				html += this.template( k.id, k.title );
			});
			break;

		case 'proverbs':
			arrListProverb.forEach( k => {
				html += this.template( k.id, k.title );
			});
			break;

		case 'advertisement':
			arrListAdvertisement.forEach( k => {
				html += this.template( k.id, k.title );
			});
			break;

		case 'literal_error':
			arrListLiteralError.forEach( k => {
				html += this.template( k.id, k.title );
			});
			break;

		}



		document.querySelector( 'cmp-win-index .content' ).innerHTML = html;

/*
		if ( history.pushState ) {
			history.pushState( null, null, data );
			
			Router.loadContent();
		}
*/

	} 
 
 
	static template( id, title ) {
		return `<div class="each" data-id="${ id }">- ${ title }</div>`;
	}

 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
