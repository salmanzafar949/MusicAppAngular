var app = angular.module('songsapp',['ngRoute','angularSoundManager']);
app.config(function($routeProvider)
	{
		$routeProvider
		              .when('/',
		              {

		              	templateUrl: 'home.html'
		              	})
		              .when('/songs',
		              {
		              	templateUrl: 'songs.html'
		              })
		              .when('/aboutus',
		              {
		              	templateUrl: 'aboutus.html'
		              })
		              .otherwise(
		              {
		              	redirectTo: '/'
		              });
	});
app.controller('sctrl', function($scope, $location, $http, $timeout)
	{
		$scope.c = {

			background: 'url(c.jpg)'
		};

		console.log($scope.c);
		

		var slidesInSlideshow = 6;
       var slidesTimeIntervalInMs = 3000; 

 $scope.slideshow = 1;
 var slideTimer =
 $timeout(function interval() 
 {
     $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
     slideTimer = $timeout(interval, slidesTimeIntervalInMs);
     }, 
     slidesTimeIntervalInMs);



 $scope.songs = [
            {
                id: 'one',
                title: 'tere Sang yara-Atif Aslam-Rustom',
                url: 'songs/Tere Sang Yaara _ Rustom.mp3'
            },
            {
                id: 'two',
                title: 'Toota jo kabhi tara-Atif Aslam(Flying jatt)',
                url: 'songs/Toota Jo Kabhi Taara (A Flying Jatt) -Atif Aslam.mp3'
            },
            {
                id: 'three',
                title: 'Dil Dancer-Atif Aslam',
                url: 'songs/Dil-Dancer-Atif Aslam.mp3'
            },
            {
                id: 'four',
                title: 'Khair mangda-Atif Aslam',
            	url: 'songs/Khair Mangda.mp3'
            },
            {
                id: 'five',
                title: 'Tere Liye-ankit Tiwari (sanam re)',
                url: 'songs/Tere Liye (Sanam Re).mp3'
            },
            {
                id: 'six',
                title: 'Sang Hoon tere-Jannat2',
                url: 'songs/sang hoon tere.mp3'
            },
            {
            	id: 'seven',
            	title: 'Tere bin mai dekhon na-Sonu nigam',
            	url: 'songs/sonu-nigam-tere-bin-main-dekhu.mp3'
            }
        ];
         


	});

