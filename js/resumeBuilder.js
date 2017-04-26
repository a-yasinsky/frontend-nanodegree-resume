function fillHTMLobj(fillObj, obj) {
	var returnObj = {};
	if(typeof fillObj === 'object' && typeof obj === 'object') {
		for(var index in fillObj) {
			if (obj.hasOwnProperty(index)) {
				returnObj[index] = fillObj[index].replace("%data%",obj[index]);
			}
		};
	}
	return Object.keys(returnObj).length ? returnObj : fillObj;
}

function joinObject(obj) {
	var stringArray = [];
	if(typeof obj === 'object') {
		for(var index in obj) {
			stringArray.push(obj[index]);
		}
	}
	return stringArray.join();
}

function fillArrayWithTemplate(arr,template) {
	return Array.isArray(arr) ? arr.map(function(value){
		return template.replace("%data%",value);
	}) : arr;
}

var work = {
	jobs: [
	  {
		employer: "LLC Kyrgyz Concept",
		title: "The external auditor and consultant",
		dates: "2013-2015",
		description: "wwww",
		location: "Kyrgyzstan",
		images: [],
	  },
	  {
		employer: "LLC Paida Soft",
		title: "Founder, CEO",
		dates: "2013-now",
		description: "wwww",
		location: "Kyrgyzstan",
		images: [],
	  },
	],
};

var project = {
	projects: [
	  {
		title: "",
		dates: "",
		description: "",
		images: [],
	  },
	]
};

var bio = {
	name: "Anatoly Yasinsky",
	role: "Web Developer",
	welcomeMessage: "hi there!",
	biopic: "images/fry.jpg",
	contacts: {
		mobile: "+996772002003",
		email: "anatoly@yasinsky.pro",
		github: "a-yasinsky",
		location: "Bishkek, Kyrgyzstan",
	},
	skills: ["html","css","javascript","jQuery","Knockout.js","php",
	         "kohana - php framework","yii - php framework", "sql", "1C"],
	display: function() {
		var formatedHTMLheader = fillHTMLobj(HTMLheader, this);
		var formatedContacts = fillHTMLobj(HTMLcontacts, this.contacts);
		
		$("#header").prepend(formatedHTMLheader.name,formatedHTMLheader.role);
		$("#topContacts").append(joinObject(formatedContacts));
		$("#header").append(formatedHTMLheader.biopic,formatedHTMLheader.welcomeMessage,HTMLskillsStart);
		$("#skills").append(fillArrayWithTemplate(bio.skills,HTMLskills).join("")); 
	}
};

var education = {
	schools: [
	  {
		name: "",
		location: "",
        degree: "",
        dates: "",
		url: "",
		majors: [],
	  },
	],
	onlineCourses: [
	  {
		title: "",
		school: "",
		dates: "",
		url: "",
	  },
	]
};

bio.display();

/*if (bio.skills.length > 0) {
	var formattedSkill = "";
	$("#header").append(HTMLskillsStart);
	
	for (var i = 0; i < bio.skills.length; i++) {
	  formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	  $("#skills").append(formattedSkill);
	}
}

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formatedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formatedEmployerTitle);
	var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedWorkDates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}*/