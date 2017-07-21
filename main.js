var foodieApp = angular.module('foodieApp',[]);
 console.log(foodieApp);








foodieApp.controller('mainController',function($scope) {
 $scope.restaurants = [{
	name: 'Black Vanilla Goa',
	address: 'S-4, Ground floor, Landscape Excelsior Building, DB Road',
	location: 'Panaji',
	category: 'CAFÉ',
	vote: '3.9',
	cuisines: 'Cafe, French',
	cost:'700',
	hours:'8 AM to 11 PM (Mon-Sun)',
	
	image: 'https://goagrapevinedotcom.files.wordpress.com/2016/06/bv-2.jpg'
},
{
	name: 'Holy Chopsticks',
	address: 'S-17/317 Nadesar Main Road, Near Badi Masjid, Varanasi',
	location: 'Nadesar',
	category: 'CASUAL DINING',
	vote: '3.6',
	cuisines: 'Chinese, Thai',
	cost: '600',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://tinyurl.com/y75bq4es'
},
{
	name: 'Crystal Dew',
	address: '201, C 21 Mall, Hoshangabad Road, Gulmohar Colony',
	location: 'C 21 Mall, Gulmohar Colony',
	category: 'FINE DINING',
	vote: '3.5',
	cuisines: 'North Indian',
	cost: '1000',
	hours: '11:30 AM to 11 PM (Mon-Sun)',
	image: 'https://tinyurl.com/y8yv8pnv'
},
{
	name: 'Panchi Petha Store',
	address: 'Taj Road, Sadar Bazaar, Agra Cantt, Agra',
	location: 'Agra Cantt',
	category: 'DESSERT PARLOR,SWEET SHOP',
	vote: '-',
	cuisines: 'Desserts',
	cost: '300',
	hours: '10 AM to 9 PM (Mon-Sun)',
	image: 'https://tinyurl.com/y9fjpwqy'
},
{
	name: 'Mamma Mia - Mayfair Lagoon',
	address: 'Mayfair Lagoon, 8-B, Jayadev Vihar, Bhubaneshwar',
	location: 'Mayfair Lagoon, Jayadev Vihar',
	category: 'CAFÉ,BAKERY',
	vote: '4.1',
	cuisines: 'Cafe, Italian, Mexican, Bakery',
	cost: '1400',
	hours: '11 AM to 11 PM (Mon-Sun)',
	image: 'https://tinyurl.com/y9uxhm89'
},
{
	name: 'Dominos Pizza',
	address: 'SCO-29, Sector 15 C, Sector 15, Chandigarh',
	location: 'Sector 15, Chandigarh',
	category: 'QUICK BITES',
	vote: '3.6',
	cuisines: 'Pizza, Fast Food',
	cost: '700',
	hours: '11 AM to 11 PM (Mon-Sun)',
	image: 'https://tinyurl.com/y766q8ll'
},
{
	name: 'Buff Buffet Buff',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'BluPetal Hotel, Koramangala',
	category: 'CASUAL DINING',
	vote: '4.3',
	cuisines: 'North Indian, Chinese, Continental, Thai',
	cost: '1500',
	hours: '7 AM to 10 AM, 12 Noon to 3:30 PM, 7 PM to 11:30 PM',
	image: 'https://tinyurl.com/y739eosa'
},
{
	name: 'Singh Delight Restaurant',
	address: 'Shop 15, First Floor, Shiva Complex, Near Hyderabad Gate, ',
	location: 'Lanka',
	category: 'CASUAL DINING',
	vote: '3.7',
	cuisines: 'Chinese, North Indian',
	cost: '700',
	hours: '11 AM to 11 PM (Mon-Sun)',
	image: 'https://tinyurl.com/y7ax5h7h'
}
]


})