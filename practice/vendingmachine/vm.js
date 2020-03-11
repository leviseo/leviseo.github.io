/*
머릿속을 정리하자
1. 돈을 투입
2. vm.money 가 item의 price 보다 크면 : 아이템 버튼 활성화(생성)
3. 아이템 버튼 누르면 장바구니에 담김
 - vm.money 가 item의 price 보다 작으면 : 아이템 버튼 비활성화(생성)
4. 계산하기 누르면 거스름돈이 나오고 초기화

 * 일단 돈은 처음 한번만 넣을 수 있도록 해야겠다...

*/

// 돈 투입 (일회용)
// insertCoin.addEventListener("submit", function(e) {
//   e.preventDefault();
//   vm.money = vm.money + Number(ElTfCoin.value);
//   draw(ElMoney, vm.money);
//   ElTfCoin.value = "";
//   this.removeChild(ElTfCoin);
//   this.removeChild(ElBtnInsert);
// });

// el
var ctx = document.querySelector(".container");
// var ElTfCoin = ctx.querySelector(".tf_coin");
// var ElBtnInsert = ctx.querySelector(".btn_insert");
var ElMoney = ctx.querySelector(".txt_money");
var ElItems = ctx.querySelector(".items");
var ElCart = ctx.querySelector(".cart");

var vm = {
	money: 0,
	items: [],
};

var cart = {
	change: 0,
	items: [],
}

function makeItem(name, price) {
	this.name = name;
	this.price = price;
	this.order = 0;
	this.makeBtn = function(className) {
		var ElBtn = document.createElement('button');
		ElBtn.innerHTML = this.name + ' ' + this.price + '원';
		ElBtn.className = className;
		ElItems.appendChild(ElBtn);
    return ElBtn;
	}
	vm.items.push(this);
}

new makeItem('콜라', 700);
new makeItem('사이다', 800);
new makeItem('생수', 100);


// var
// var lowestPrice = vm.items.sort((a, b) => a.price - b.price)[0];

vm.money = Number(window.prompt('투입할 금액을 입력하세요'));
ElMoney.innerHTML = vm.money;
console.log(vm.money);

vm.items.forEach(function(item, i) {
	if (vm.money >= item.price) {
		item.makeBtn('item').addEventListener('click', function() {
			vm.money -= item.price;
			ElMoney.innerHTML = vm.money;
			console.log(vm.money);
		});
	}
})
