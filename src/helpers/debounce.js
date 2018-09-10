export default (func, time) => {
	let timeout
	return function() {
		const later = () => {
      timeout = null
			func.apply(null, arguments)
		}
		clearTimeout(timeout)
		timeout = setTimeout(later, time)
	}
}

