function fillHTMLobj(fillObj, obj) {
    var returnObj = {};
    if (typeof fillObj === 'object' && typeof obj === 'object') {
        for (var index in fillObj) {
            if (obj.hasOwnProperty(index)) {
                returnObj[index] = fillObj[index].replace("%data%", obj[index]);
            }
        }
    }
    return Object.keys(returnObj).length ? returnObj : fillObj;
}

function joinObject(obj) {
    var stringArray = [];
    if (typeof obj === 'object') {
        for (var index in obj) {
            stringArray.push(obj[index]);
        }
    }
    return stringArray.join("");
}

function fillArrayWithTemplate(arr, template) {
    return Array.isArray(arr) ? arr.map(function(value) {
        return template.replace("%data%", value);
    }) : arr;
}

function displayArrayOfObjects(arrayOfObjects, HTMLStart, HTMLarray,
    arrayInObjName, HTMLelemName, HTMLselector) {
    arrayOfObjects.forEach(function(element) {
        var $HTMLstart = $(HTMLStart);
        var formatedElement = fillHTMLobj(HTMLarray, element);
        $HTMLstart.append(joinObject(formatedElement));
        arrayInObjName && HTMLelemName && element[arrayInObjName].forEach(function(arrayElement) {
            formattedArrayElem = HTMLarray[HTMLelemName].replace("%data%", arrayElement);
            $HTMLstart.append(formattedArrayElem);
        });
        $(HTMLselector).append($HTMLstart);
    });
}

var work = {
    jobs: [{
            employer: "LLC Paida Soft",
            title: "Founder, CEO",
            dates: "2013-now",
            location: "Kyrgyzstan",
            description: "Automated system for management of sales",
            images: ["images/197x148.gif", "images/197x148.gif"]
        },
        {
            employer: "LLC Kyrgyz Concept",
            title: "The external auditor and consultant",
            dates: "2013-2015",
            location: "Kyrgyzstan",
            description: "Implementation of software products",
            images: ["images/197x148.gif", "images/197x148.gif"]
        }
    ],
    display: function() {
        displayArrayOfObjects(this.jobs, HTMLworkStart, HTMLwork,
            "images", "image", "#workExperience");
    }
};

var project = {
    projects: [{
        title: "Electronic Treasury",
        dates: "2014 - 2015",
        description: "Develop a project to implement an Electronic Treasury and the e-Government of the Kyrgyz Republic",
        images: ["images/197x148.gif", "images/197x148.gif"]
    }],
    display: function() {
        displayArrayOfObjects(this.projects, HTMLprojectStart, HTMLproject,
            "images", "image", "#projects");
    }
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
    skills: ["html", "css", "javascript", "jQuery", "Knockout.js", "php",
        "kohana - php framework", "yii - php framework", "sql", "1C"
    ],
    display: function() {
        var formatedHTMLheader = fillHTMLobj(HTMLheader, this);
        var formatedContacts = fillHTMLobj(HTMLcontacts, this.contacts);

        $("#header").prepend(formatedHTMLheader.name, formatedHTMLheader.role);
        $("#topContacts").append(joinObject(formatedContacts));
		$("#footerContacts").append(joinObject(formatedContacts));
        $("#header").append(formatedHTMLheader.biopic, formatedHTMLheader.welcomeMessage, HTMLskillsStart);
        $("#skills").append(fillArrayWithTemplate(bio.skills, HTMLskills).join(""));
    }
};

var education = {
    schools: [{
        name: "Kyrgyz - Russian Slavic University",
        location: "Kyrgyzstan",
        degree: "master",
        dates: "2004-2009",
        url: "http://sometesturl.kg",
        majors: ["test1", "test2"]
    }],
    onlineCourses: [{
        title: "Accounting certificate",
        school: "Jakobs Training",
        dates: "2011",
        url: "http://sometesturl.kg"
    }],
    display: function() {
        displayArrayOfObjects(this.schools, HTMLschoolStart, HTMLschool,
            "majors", "major", "#education");
        $("#education").append(HTMLonlineClasses);
        displayArrayOfObjects(this.onlineCourses, HTMLschoolStart, HTMLonline,
            "", "", "#education");
    }
};