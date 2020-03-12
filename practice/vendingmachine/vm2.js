// el
var ctx = document.querySelector(".container");
var ElMoney = ctx.querySelector(".txt_money");
var ElItems = ctx.querySelector(".items");
var ElCart = ctx.querySelector(".cart");
var ElconfirmBtn = document.getElementById("confirm")

// object
class VendingMachine {
	constructor(money, items) {
		this.money = money
		this.cart = []
		this.items = this.makeClickEvent(this, items)
	}

	allDisabled() {
		this.items.forEach(function(item) {
			item.btn.disabled = true
		})
	}

	checkMoney(changes){
		this.items.forEach((item)=>{
			if (item.price > changes) {
				item.btn.disabled = true;
			}
		})
	}

	insertCart(cart, name){
		cart.push(name)
		var cartBtn = document.createElement('button')
		cartBtn.innerHTML = `${name}`
		cartBtn.className = "cart"
		cartBtn.disabled = true
		ElCart.appendChild(cartBtn)
	}

	makeClickEvent(vm, drinks) {
		// 버튼에 클릭이벤트를 넣고 다시 그 버튼배열을 돌려줌
		const addedDrinks = drinks.map((drink => {
			// 클릭이벤트 넣는 작업
			drink.btn.addEventListener('click', function() {
				const changes = vm.money - drink.price
				vm.checkMoney(changes)
				vm.money = changes;
				ElMoney.innerHTML = vm.money;
				vm.insertCart(vm.cart, drink.name)
				console.log(vm.money);
			})
			// drink를 다시 map안에 넣음
			return drink
		}))
		return addedDrinks;
	}
}

class Drink {
	constructor(name, price){
		this.name = name
		this.price = price
		this.btn = this.makeBtn(this.name, this.price)
	}

	makeBtn(drinkName, drinkPrice) {
		var ElBtn = document.createElement('button')
		ElBtn.innerHTML = `${drinkName} ${drinkPrice}원`
		ElBtn.className = "item"
		return ElBtn
	}
}

const insertedMoney = Number(window.prompt('투입할 금액을 입력하세요'));

const vm = new VendingMachine(insertedMoney, [new Drink("콜라", 700), new Drink("사이다", 800), new Drink("생수", 100)])


console.log(vm);
ElMoney.innerHTML = vm.money;
console.log(vm.money);

vm.items.forEach((item) => {
	if (vm.money >= item.price) {
	 ElItems.appendChild(item.btn);
	}
})

ElconfirmBtn.addEventListener('click', ()=> {
	vm.allDisabled()
	const counts = {}
	vm.cart.forEach((ar) => {
		counts[ar] = 1 + (counts[ar] || 0)
	})
	let result = ""
	Object.keys(counts).forEach(function(k) {
		result += `${k} ${counts[k]}개`
	})
	alert(`거스름돈 ${vm.money}원 \n${result}`)
})