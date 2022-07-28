// task 1

const totalBasketballScore = (freeThrows,midRange,threePointers) => {
    
    if(typeof freeThrows === 'number' && typeof midRange === 'number' && typeof threePointers === 'number'){
        
        return ((freeThrows*1) +(midRange*2) + (threePointers*3));

    }
    else{
        console.log("enter valid point");
    }

}
console.log(totalBasketballScore(2,3,4));

// task 2

const itemPrice = (array) => {
    let total = 0;
  for(i= 0; i <= array.length; i++) {

  switch (array[i]) {

    case 'computer':
        total = total + 500;
        break;

    case 'mouse':
        total = total + 10; 
        break

    case 'tablet':
        total = total + 250; 
        break;

    case 'case':
        total = total + 25; 
        break;

    case 'router':
        total = total + 100; 
         break;     
    }
    
  }
  console.log("Total price for computer $" + total);
  
}

itemPrice(['computer','mouse', 'tablet', 'case', 'router']);

// task 3

let restaurants = ['Apllebees','Panera Bread','Popeyes','Chopt','Chick-fil-A','Cheesecake-Factory','Five Guys'];

let randomRestaurantList = [];

const randomResaurants = (numOfRestaurants) => {
    
    for(i = 0; i <numOfRestaurants; i++) {
        
        let rand = Math.floor(Math.random() *restaurants.length);
        
        randomRestaurantList.push(restaurants[rand]);
    }
 console.log(randomRestaurantList);
}
randomResaurants(3);

// task 4

// 
const isLeapYear = year => {
    
    if (year % 100 === 0){
        
        if(year % 400 === 0){
            return true
        }else {
            return false
        }
    }else {
        if (year % 4 === 0){
            return true
        }
    }
}
 console.log(isLeapYear);