var app = angular.module("app",['ngMaterial','ngAnimate']);

app.controller("testCtrl",testCtrl);
app.controller("programsListCtrl",programsList);
app.controller("personalRecoList",personalRecoList);
app.controller("coursesList",coursesList);
app.controller("sliderController",sliderController);

function testCtrl($scope){
	$scope.msg = "hell0";
	$scope.images =[
		"android.png",
		"https://pluralsight.imgix.net/paths/python-7be70baaac.png",
		"https://cdn-images-1.medium.com/max/2000/1*iIXOmGDzrtTJmdwbn7cGMw.png",
		"https://cdn-images-1.medium.com/max/1200/1*rchGC6ySU1CEezcLEMJkzg.jpeg",
		"https://i-cdn.phonearena.com//images/article/100355-image/Bizarre-chapter-in-Apple-iPhone-history-ends-with-iOS-11.2-update.jpg",
	]
}
function programsList($scope){
	$scope.programs = [
		{	logo:"android.png",name : "Machine"+'\n'+"Learning",count : 5,url:$scope.images[0]},
		{	logo:"android.png",name : "Data Science "+'\n'+"& Analysis",count : 1 ,url:$scope.images[1]},
		{	logo:"android.png",name : "Artificial"+'\n'+"Intelligence",count : 6 ,url:$scope.images[2]},
		{	logo:"android.png",name : "Mobile"+'\n'+"Development",count : 8 ,url:$scope.images[3]},
		{	logo:"android.png",name : "Web"+'\n'+"Development",count : 3 ,url:$scope.images[4]},
		{	logo:"android.png",name : "Autonomos"+'\n'+"System",count : 2 ,url:$scope.images[0]}
	]
}

function personalRecoList($scope){
	$scope.personalRecoList = [
		{	title : "Become an Android"+'\n'+"Developer",activity : "recently viewed this Nanodegree"},
		{	title : "Become an iOS"+'\n'+"Developer",activity : "recently viewed this Nanodegree"},
		{	title : "Learn to Code",activity : "recently viewed this Nanodegree"},
		{	title : "Become an Front End"+'\n'+"Developer",activity : "recently viewed this Nanodegree"},
	]
}

function coursesList($scope){
	$scope.coursesList = [
		{title:"VR Foundations" , by:"Unity",url:$scope.images[0]},
		{title:"Android" ,by:"Google",url:$scope.images[1]},
		{title:"SQlite" ,by:"Oracle",url:$scope.images[2]},
		{title:"Angular JS", by:"Google",url:$scope.images[3]},
	]
}

function sliderController($scope,$timeout,$interval){
	var count = 0
	$scope.currentPage = 0;
	console.log("sliderController called : "+count);
	$scope.slidesList = [
		{url:"https://png.pngtree.com/thumb_back/fh260/back_pic/00/15/30/4656e81f6dc57c5.jpg",description:"Image"},
		{url:"https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg?cs=srgb&dl=light-road-dawn-1146708.jpg&fm=jpg",description:"Image"},
		{url:"https://s3.envato.com/files/248419285/Preview%20Image.jpg",description:"Image"}
	];

	// $timeout(function() {
	// 	console.log("timeout called : "+count);
	// 	if (count <= $scope.slidesList.length) {
	// 		$scope.currentPage = count + 1;
	// 	}else{
	// 		$scope.currentPage = 0;
	// 	}
		
	// }, 3000);

	$interval(function(){
		console.log("slidesList.length : "+$scope.slidesList.length);
		console.log("count before : "+count);
		if (count < $scope.slidesList.length) {
			count = count + 1;
		}else{
			count = 0;
		}
		console.log("count : "+count);
		$scope.currentPage = count;
	},5000);

	$interval(function(){
		//console.log("Doing");
	},5000);

}