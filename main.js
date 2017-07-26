var foodieApp = angular.module('foodieApp',['ngRoute']);
// console.log(foodieApp);

$('#myCarousel').carousel({
    pause: 'none'
})

foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
  $scope.ingredients = [];
	$scope.restaurantId = $routeParams.id;
  var restaurants = [{
 	name: 'Black Vanilla Goa',
 	address: 'S-4, Ground floor, Landscape Excelsior Building, DB Road',
 	location: 'Panaji',
 	category: 'CAFÉ',
 	vote: '3.9',
 	cuisines: 'Cafe, French',
 	cost:'700',
  id:1,
 	hours:'8 AM to 11 PM (Mon-Sun)',
  bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
},
 	votes:'172',
 	reviews:'200',
 	order: '90min Rs.300',
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
    id:2,
 	hours: '12 Noon to 1 AM (Mon-Sun)',
 	votes:'160',
 	reviews:'700',
 	order: '30min Rs.250',
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
    id:3,
 	hours: '11:30 AM to 11 PM (Mon-Sun)',
 	votes:'152',
 	reviews:'160',
 	order: '50min Rs.600',
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
    id:4,
 	hours: '10 AM to 9 PM (Mon-Sun)',
 	votes:'220',
 	reviews:'580',
 	order: '35min Rs.320',
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
    id:5,
 	hours: '11 AM to 11 PM (Mon-Sun)',
 		votes:'272',
 	reviews:'450',
 	order: '40min Rs.230',
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
    id:6,
 	hours: '11 AM to 11 PM (Mon-Sun)',
 		votes:'197',
 	reviews:'247',
 	order: '60min Rs.430',
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
    id:7,
 	hours: '7 AM to 10 AM, 12 Noon to 3:30 PM, 7 PM to 11:30 PM',
 		votes:'453',
 	reviews:'345',
 	order: '20min Rs.140',
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
    id:8,
 	hours: '11 AM to 11 PM (Mon-Sun)',
     votes:'332',
 	reviews:'140',
 	order: '55min Rs.630',
 	image: 'https://tinyurl.com/y7ax5h7h'
 }
 ]
  $scope.restaurant = restaurants[$routeParams.id - 1];
  $scope.getIngredients = function(url) {
    var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}' //json object
      $http({
          'method': 'POST',   // we are passing the type of http example:- GET POST etc
          'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs', //API url
          'headers': {  //extra information to server
              'Authorization': 'Key a00462778b594eeca109f59c344884af',//here we write key
              'Content-Type': 'application/json'// it tells the browser that which type of format of data
          },
          'data': data,                            // here we put actual data
      //    success: function (response) {            //run the request successfully
      //         var ingredients = response.outputs[0].data.concepts;//it can store the ingredients  recieved from server
      //         var list = '';
      //         for (var i =0;i < ingredients.length;i++) {
      //             list += '<div class="ingredient">' + ingredients[i].name + '</div>'
      //         }
      //         $('.ingredients').html(list);
      //     },
      //     error: function (xhr) {
      //         console.log(xhr);
      //     }
      // })
})
.then(function success(response) {
  var ingredients = response.data.outputs[0].data.concepts;
  var list='';
  var protein=['egg','chicken','oats','cheese','yogurt','milk','brocolo','tuna','lentil','fish','shrimp'];
  var fat=['flaxseed','almond','oil','avocado','walnuts','peanut','cashew','dark chocolate'];
  	for (var i =0;i < ingredients.length;i++) {
  	$scope.ingredients.push(ingredients[i].name);
  	}

    for(var i=0;i<protein.length;i++){
     //check for the protein or carb or fat rich foodieApp
     //console.log($scope.protein);
     if($scope.ingredients.indexOf(protein[i])>-1){
       var info ="<p>Protein Rich </p>";
       console.log("run");
       $(".rest-extra .best-dish").append(info);
       $(".highlight-info").css("background-color","green");
       break;
     }
     else if($scope.ingredients.indexOf(fat[i])>-1){
       var info2 ="<p class='highlight-info'>Fat Rich</p>";
        console.log("fat rich");
        $(".type .best-dish").append(info2);
        $(".highlight-info").css("background-color","yellow");
        break;

     }

    }




  console.log(list);
},
function error(xhr) {
    console.log(xhr);
  });
}
})


foodieApp.config(function ($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl: 'pages/login.html',
    controller: 'loginController'
  })
  .when('/home',{
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })
  .when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})




	    $(function(){
    $(".dropdown").hover(
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");
            });
    });

    foodieApp.controller('loginController',function($scope,$location) {
       $scope.goToHome = function() {
       //console.log('Do Something')
       $location.url('home');
    }
     })




foodieApp.controller('mainController',function($scope) {
 $scope.restaurants = [{
	name: 'Black Vanilla Goa',
	address: 'S-4, Ground floor, Landscape Excelsior Building, DB Road',
	location: 'Panaji',
	category: 'CAFÉ',
	vote: '3.9',
	cuisines: 'Cafe, French',
	cost:'700',
  id:1,
	hours:'8 AM to 11 PM (Mon-Sun)',
	votes:'172',
	reviews:'200',
	order: '90min Rs.300',
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
  id:2,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	votes:'160',
	reviews:'700',
	order: '30min Rs.250',
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
  id:3,
	hours: '11:30 AM to 11 PM (Mon-Sun)',
	votes:'152',
	reviews:'160',
	order: '50min Rs.600',
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
  id:4,
	hours: '10 AM to 9 PM (Mon-Sun)',
	votes:'220',
	reviews:'580',
	order: '35min Rs.320',
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
  id:5,
	hours: '11 AM to 11 PM (Mon-Sun)',
		votes:'272',
	reviews:'450',
	order: '40min Rs.230',
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
  id:6,
	hours: '11 AM to 11 PM (Mon-Sun)',
		votes:'197',
	reviews:'247',
	order: '60min Rs.430',
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
  id:7,
	hours: '7 AM to 10 AM, 12 Noon to 3:30 PM, 7 PM to 11:30 PM',
		votes:'453',
	reviews:'345',
	order: '20min Rs.140',
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
  id:8,
	hours: '11 AM to 11 PM (Mon-Sun)',
    votes:'332',
	reviews:'140',
	order: '55min Rs.630',
	image: 'https://tinyurl.com/y7ax5h7h'
}
]


})
