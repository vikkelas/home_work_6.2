export default function returnArrAttacks(object) {
	const arrSpecialAttacks = []
	object.special.forEach(element => {
		const { id, name, description = 'Описание недоступно', icon } = element
		const specialAttack = {}
		specialAttack.id = id
		specialAttack.name = name
		specialAttack.description = description
		specialAttack.icon = icon
		arrSpecialAttacks.push(specialAttack)
	})
	return arrSpecialAttacks
}
