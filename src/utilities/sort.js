// SORT BY NAME
export const AlphaSort = (data, key) => {
	return data.sort((a, b) => {
		const A_Key = a[key].toUpperCase()
		const B_Key = b[key].toUpperCase()
		if (A_Key < B_Key) {
			return -1
		}
		if (A_Key > B_Key) {
			return 1
		}
		return 0
	})
}
