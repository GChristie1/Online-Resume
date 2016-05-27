var bio = {
		"name": "Gary Christie",
		"role": "Web Developer",
		"contacts": {
			"mobile": "5555555555",
			"email": "garyterellchristie@gmail.com",
			"github": "GChristie1",
			"location": "Orlando, FL",
			"facebook": "GaryTerellChristie"
			},
		"biopic": "images/me.jpg",
		"welcomeMessage": "Hey there",
		"skills": ["Web Developer", "License Insurance Agent", "Fast Typer", "Bishop"]
	};
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedAddress = HTMLlocation.replace("%data%", bio.contacts.location);
	

	$("#header").prepend(formattedName + "<br>", formattedRole + "<br>", formattedPicture + "<br>", formattedWelcome + "<br>");
	$("#topContacts, #footerContacts").append( formattedGitHub, formattedEmail, formattedMobile, formattedAddress);
	
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i ++){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
		}
	}
};
var work = {
	"jobs": [{
		"employer": "None",
		"title": "Unemployment",
		"dates": "3 Months",
		"location": "Orlando, FL",
		"description": "Recently lost my Job as a Liscensed Insurance Agent due to layoff" +
		",and now I'm transitioning into a new career as a Web Developer."


	}, {
		"employer": "Optum Health",
		"title": "Liscensed Insurance Agent",
		"dates": "Aug 2012 - Mar 2016",
		"location": "Orlando, FL",
		"description": "I worked in a call center and took inbound calls, and sold " +
		"Health and Life Insurance."
	}, {
		"employer": "Andrews Security",
		"title": "Security Gaurd",
		"dates": "June 2008 - May 2012",
		"location": "Orlando, FL",
		"description": "I worked as a Security Guard in office buildings."
	}]
};

  work.display = function () {
	for (var job = 0;  job < work.jobs.length; job++){
		$("#workExperience").append(HTMLworkStart);
		var formattedworkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkTitles = formattedworkEmployer + formattedWorkTitle;
		$(".work-entry:last").append(formattedWorkTitles);
		var formattedworkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedworkDate);
		var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedworkLocation);
		var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedworkDescription);
			}
};
var education = {
	"schools": [{
		"name": "Pine Ridge High School",
		"degree":"High School Diploma",
		"dates": "1 Year",
		"location": "Deltona",
		"majors": ["High School Graduate"],
		"url": "pinridgehs.com"
	}, {
		"name": "Seminole State College",
		"degree": "A few credits shy of AA",
		"dates": "2 Years",
		"location": "Sanford",
		"majors":["Associates for General"],
		"url": "scc.com"
	}],
	"onlineCourses": [{
		"title": "Udacity Front-end Nano Degree",
		"school": "Udacity",
		"date": "A few months",
		"url": "udacity.com"
	}, {
		"title": "Javascript",
		"school": "Code Academy",
		"date": "2015",
		"url": "codeacademy.com"
	}]
};

 education.display = function() {
 	if( education.schools.length > 0){
 		$("#education").append(HTMLschoolStart);
		for( var school in education.schools){
		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		//console.log(formattedschoolName);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		 //console.log(formattedDegree);
		var formattedschoolNameDegree = formattedschoolName + formattedDegree;
		$(".education-entry:last").append(formattedschoolNameDegree);
		var formattedschoolDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		console.log(formattedschoolDate);
		$(".education-entry:last").append(formattedschoolDate);
		var formattedschoolCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		console.log(formattedschoolCity);
		$(".education-entry:last").append(formattedschoolCity);
		var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		//console.log(formattedschoolMajor);
		$(".education-entry:last").append(formattedschoolMajor);
		var formattedschoolURL = HTMLschoolURL.replace("%data%", education.schools[school].url);
	}	$(".education-entry:last").append(formattedschoolURL);
}
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);

	if(education.onlineCourses.length > 0){
		for(var school in education.onlineCourses){
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
		var formattedOnlineCourseworks = formattedonlineTitle + formattedonlineSchool;
		$(".education-entry:last").append(formattedOnlineCourseworks);
		var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].date);
		$(".education-entry:last").append(formattedonlineDates);
		var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
		$(".education-entry:last").append(formattedonlineURL);
		}
	}
};
var projects = {
	"projects": [{
		"title": "HTML Mockup Article",
		"dates": "March 2016",
		"description": "Create a HTML document exactly how it looks in the Mockup Article that is provided",
		"images": ["images/me.jpg"]
	},  {
		"title": "Build a Portfolio Site",
		"dates": "April 2016",
		"description": " Build a Portfolio Site with bootstrap based off a mockup model provided. I choose to use muscle cars and included modals for the picture of each car provided with info about them.",
		"images": ["images/me.jpg"]
	},  {
		"title": "Online Resume",
		"dates": "May 2016",
		"description": "Build an online resume that has all of my previous work history that employers may want to see",
		"images": ["images/me.jpg"]
	},	{
		"title": "Classic Arcade Game Clone",
		"dates": "May 2016",
		"description": "Build a Arcade Game Classic Clone version",
		"images": ["images/me.jpg"]
	}, {
		"title": "Website Optimization",
		"dates": "May 2016",
		"description": "You will optimize a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.",
		"images": ["images/me.jpg"]
	}, {
		"title": "Neighborhood Map",
		"dates": "June 2016",
		"description": "You will develop a single-page application featuring a map of your neighborhood or a neighborhood you would like to visit. You will then add additional functionality to this application, including: map markers to identify popular locations or places you’d like to visit, a search function to easily discover these locations, and a listview to support simple browsing of all locations. You will then research and implement third-party APIs that provide additional information about each of these locations (such as StreetView images, Wikipedia articles, Yelp reviews, etc).",
		"images": ["images/me.jpg"]
	}, {
		"title": "Project: Feed Reader Testing",
		"dates": "June 2016",
		"description": 'In this project, you will be learning about testing with Javascript. Testing is an important part of the development process and many organizations practice a standard known as "test-driven development" or TDD. This is when developers write tests first, before they ever start developing their application.',
		"images": ["images/me.jpg"]
	}]
};
 projects.display = function(){
	for(var project = 0; project < projects.projects.length; project++ ){
		$("#projects").append(HTMLprojectStart);
		var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		console.log(formattedprojectTitle);
		$(".project-entry:last").append(formattedprojectTitle);
		var formattedprojectDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		console.log(formattedprojectDate);
		$(".project-entry:last").append(formattedprojectDate);
		var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		console.log(formattedprojectDescription);
		$(".project-entry:last").append(formattedprojectDescription);

		if(projects.projects[project].images.length > 0){
			for(var image in projects.projects[project].images){
			var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			console.log(formattedprojectImage);
			$(".project-entry:last").append(formattedprojectImage);
			}
		}
		
	}
 };

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

$(".main").append(internationalizeButton);

// inName = function(name1,name2){
// 	var rest_of_name = name1.substring(1,name1.length).toLowerCase();
// 	return name1.charAt(0).toUpperCase() + rest_of_name + " " + name2.toUpperCase();
// };
// var newName = inName("TerELL","christie");

bio.display();
work.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap);
// console.log(newName);
