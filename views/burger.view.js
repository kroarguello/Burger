module.exports = function (props){
	const {id, burger_name, devoured} = props;
	return /*html*/ `
		<li>
			${burger_name}

			<button class="change-devoured" data-id="${id}" data-newdevor="${!devoured}">
				${devoured
					? /*html*/`
						<span>
						DEVOURED!
						</span>
					`
					: /*html*/`
						<span>
							DEVOURE IT!
						</span>
					`
				}
			</button>
			
		</li>
		`
}