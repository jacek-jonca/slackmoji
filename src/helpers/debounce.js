export default (func, time) => {
	let timeout
	return function() {
		const args = arguments
		const later = () => {
      timeout = null
			func.apply(null, args)
		}
		clearTimeout(timeout)
		timeout = setTimeout(later, time)
	}
}

