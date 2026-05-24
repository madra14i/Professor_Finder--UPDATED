// ID GETTER FOR PROF. FINDER
let subj_title1 = document.getElementById('subj-title1');
let subj_title2 = document.getElementById('subj-title2');
let subj_title3 = document.getElementById('subj-title3');
let subj_title4 = document.getElementById('subj-title4');
let subj_title5 = document.getElementById('subj-title5');
let subj_title6 = document.getElementById('subj-title6');
let subj_title7 = document.getElementById('subj-title7');
let subj_title8 = document.getElementById('subj-title8');
let subj_title9 = document.getElementById('subj-title9');

let nameSubject1 = document.getElementById('nameSubject1');
let nameSubject2 = document.getElementById('nameSubject2');
let nameSubject3 = document.getElementById('nameSubject3');
let nameSubject4 = document.getElementById('nameSubject4');
let nameSubject5 = document.getElementById('nameSubject5');
let nameSubject6 = document.getElementById('nameSubject6');
let nameSubject7 = document.getElementById('nameSubject7');
let nameSubject8 = document.getElementById('nameSubject8');
let nameSubject9 = document.getElementById('nameSubject9');

let prof1 = document.querySelectorAll('.prof1');
let prof2 = document.querySelectorAll('.prof2');
let prof3 = document.querySelectorAll('.prof3');
let prof4 = document.querySelectorAll('.prof4');
let prof5 = document.querySelectorAll('.prof5');

// YEAR LEVEL DROPDOWN
let firstYear = document.getElementById('1st-year');
let secondYear = document.getElementById('2nd-year');
let thirdYear = document.getElementById('3rd-year');
let fourthYear = document.getElementById('4th-year');
let year_name = document.getElementById('year-change');

// YEAR AND SECTION IN TITLE
let yearLevel = document.querySelectorAll('.yearLevel');
let year_section1 = document.getElementById('year-title1');
let year_section2 = document.getElementById('year-title2');
let year_section3 = document.getElementById('year-title3');
let year_section4 = document.getElementById('year-title4');
let year_section5 = document.getElementById('year-title5');
let year_section6 = document.getElementById('year-title6');
let year_section7 = document.getElementById('year-title7');
let year_section8 = document.getElementById('year-title8');

// TOGGLE DROPDOWNW VARIABLES
let prog_dropdown = document.querySelector('.program-dropdown');
let year_dropdown = document.querySelector('.year-dropdown');

// TOGGLE BUTTON FOR PROGRAM AND YEAR
prog_dropdown.addEventListener('click', () => {
	prog_dropdown.classList.toggle('active');

	if (year_dropdown.classList.contains('active'));
	year_dropdown.classList.remove('active');
});
year_dropdown.addEventListener('click', () => {
	year_dropdown.classList.toggle('active');

	if (prog_dropdown.classList.contains('active'));
	prog_dropdown.classList.remove('active');
});

// PROGRAM DROPDOWN VARIABLES
let accountancy = document.getElementById('accountancy');
let businessManagement = document.getElementById('bsm');
let developmentManagement = document.getElementById('dvm');
let economics = document.getElementById('econ');
let internationalStudies = document.getElementById('is');
let officeAdministration = document.getElementById('oa');
let program_name = document.getElementById('program-change');

// FOR ADDING BLOCK WHEN SECTION TEXT CHARACTER IS MORE THAN 10
const section_box = document.querySelectorAll('.section');

// SELECT ALL SECTION NAME
const prog_title = document.querySelectorAll('.prog-title');

// SELECT ALL PROGRAM NAME
const prog_name = document.querySelectorAll('.nameProgram');

// CARD UPDATE
accountancy.addEventListener('click', () => {
	program_name.innerHTML = 'Accountancy'; // CHANGE BTN NAME

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSA';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Accountancy';
	});
});

businessManagement.addEventListener('click', () => {
	program_name.innerHTML = 'Business Management'; // CHANGE BTN NAME

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSBM';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Business Management';
	});
});

developmentManagement.addEventListener('click', () => {
	program_name.innerHTML = 'Development Management'; // CHANGE BTN NAME

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSDM';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Development Management';
	});
});

economics.addEventListener('click', () => {
	program_name.innerHTML = 'Economics'; // CHANGE BTN NAME

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSE';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Economics';
	});
});

internationalStudies.addEventListener('click', () => {
	program_name.innerHTML = 'International Studies'; // CHANGE BTN NAME

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSIS';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'International Studies';
	});
});

officeAdministration.addEventListener('click', () => {
	program_name.innerHTML = 'Office Administration'; // CHANGE BTN NAME

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSOA';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Office Administration';
	});
});

// YEAR UPDATE
firstYear.addEventListener('click', () => {
	year_name.innerHTML = 'First Year';

	yearLevel.forEach((level) => {
		level.innerHTML = '1st Year';
	});

	year_section1.innerHTML = '1-1';
	year_section2.innerHTML = '1-2';
	year_section3.innerHTML = '1-3';
	year_section4.innerHTML = '1-4';
	year_section5.innerHTML = '1-5';
	year_section6.innerHTML = '1-6';
	year_section7.innerHTML = '1-7';
	year_section8.innerHTML = '1-8';
});

secondYear.addEventListener('click', () => {
	year_name.innerHTML = 'Second Year';

	yearLevel.forEach((level) => {
		level.innerHTML = '2nd Year';
	});

	year_section1.innerHTML = '2-1';
	year_section2.innerHTML = '2-2';
	year_section3.innerHTML = '2-3';
	year_section4.innerHTML = '2-4';
	year_section5.innerHTML = '2-5';
	year_section6.innerHTML = '2-6';
	year_section7.innerHTML = '2-7';
	year_section8.innerHTML = '2-8';
});

thirdYear.addEventListener('click', () => {
	year_name.innerHTML = 'Third Year';

	yearLevel.forEach((level) => {
		level.innerHTML = '3rd Year';
	});

	year_section1.innerHTML = '3-1';
	year_section2.innerHTML = '3-2';
	year_section3.innerHTML = '3-3';
	year_section4.innerHTML = '3-4';
	year_section5.innerHTML = '3-5';
	year_section6.innerHTML = '3-6';
	year_section7.innerHTML = '3-7';
	year_section8.innerHTML = '3-8';
});

fourthYear.addEventListener('click', () => {
	year_name.innerHTML = 'Fourth Year';

	yearLevel.forEach((level) => {
		level.innerHTML = '4th Year';
	});

	year_section1.innerHTML = '4-1';
	year_section2.innerHTML = '4-2';
	year_section3.innerHTML = '4-3';
	year_section4.innerHTML = '4-4';
	year_section5.innerHTML = '4-5';
	year_section6.innerHTML = '4-6';
	year_section7.innerHTML = '4-7';
	year_section8.innerHTML = '4-8';
});

function accountancySub() {
	program_name.innerHTML = 'Accountancy';

	subj_title1.innerHTML = 'Accountancy Subject#1';
	subj_title2.innerHTML = 'Accountancy Subject#2';
	subj_title3.innerHTML = 'Accountancy Subject#3';
	subj_title4.innerHTML = 'Accountancy Subject#4';
	subj_title5.innerHTML = 'Accountancy Subject#5';
	subj_title6.innerHTML = 'Accountancy Subject#6';
	subj_title7.innerHTML = 'Accountancy Subject#7';
	subj_title8.innerHTML = 'Accountancy Subject#8';
	subj_title9.innerHTML = 'Accountancy Subject#9';

	nameSubject1.innerHTML = 'Art Appreciation';
	nameSubject2.innerHTML = 'Ethics';
	nameSubject3.innerHTML = 'Mathematics in the Modern World';
	nameSubject4.innerHTML = 'Purposive Communication';
	nameSubject5.innerHTML = 'Science, Technology, and Society';
	nameSubject6.innerHTML = 'Understanding The Self';
	nameSubject7.innerHTML = 'Movement Enhanecment';
	nameSubject8.innerHTML = 'National Traning Service Program 1';
	nameSubject9.innerHTML = 'Institutional Orientation';

	prof1.forEach((prof) => {
		prof.innerHTML = '202512352 - Alice Mae';
	});

	prof2.forEach((prof) => {
		prof.innerHTML = '202512350 - Ferrero Rochelle';
	});

	prof3.forEach((prof) => {
		prof.innerHTML = '202512351 - Raiden Ei';
	});

	prof4.forEach((prof) => {
		prof.innerHTML = '202512349 - Joshua Garcia';
	});

	prof5.forEach((prof) => {
		prof.innerHTML = '202512353 - Miguel Tan Felix';
	});
}

function bsbmSub() {
	program_name.innerHTML = 'Business Management';

	subj_title1.innerHTML = 'BSBM Subject#1';
	subj_title2.innerHTML = 'BSBM Subject#2';
	subj_title3.innerHTML = 'BSBM Subject#3';
	subj_title4.innerHTML = 'BSBM Subject#4';
	subj_title5.innerHTML = 'BSBM Subject#5';
	subj_title6.innerHTML = 'BSBM Subject#6';
	subj_title7.innerHTML = 'BSBM Subject#7';
	subj_title8.innerHTML = 'BSBM Subject#8';
	subj_title9.innerHTML = 'BSBM Subject#9';

	nameSubject1.innerHTML = 'Dalumat Ng/Sa Filipino';
	nameSubject2.innerHTML = 'Purposive Communication';
	nameSubject3.innerHTML = 'Kontekstwalisadong Komunikasyon sa Filipino';
	nameSubject4.innerHTML = 'Art Appreciation';
	nameSubject5.innerHTML = 'Ethics';
	nameSubject6.innerHTML = 'Institutional Orientation';
	nameSubject7.innerHTML = 'Understanding The Self';
	nameSubject8.innerHTML = 'Movement Enhanecment';
	nameSubject9.innerHTML = 'National Traning Service Program 1';

	prof1.forEach((prof) => {
		prof.innerHTML = '202512339 - Christine Prestine';
	});

	prof2.forEach((prof) => {
		prof.innerHTML = '202512340 - Daniel Padilla';
	});

	prof3.forEach((prof) => {
		prof.innerHTML = '202512341 - Justin Bieber';
	});

	prof4.forEach((prof) => {
		prof.innerHTML = '202512342 - Nicole Ann';
	});

	prof5.forEach((prof) => {
		prof.innerHTML = '202512343 - Gabriel Flores';
	});
}

function bsdmSub() {
	program_name.innerHTML = 'Development Management';

	subj_title1.innerHTML = 'BSDM Subject#1';
	subj_title2.innerHTML = 'BSDM Subject#2';
	subj_title3.innerHTML = 'BSDM Subject#3';
	subj_title4.innerHTML = 'BSDM Subject#4';
	subj_title5.innerHTML = 'BSDM Subject#5';
	subj_title6.innerHTML = 'BSDM Subject#6';
	subj_title7.innerHTML = 'BSDM Subject#7';
	subj_title8.innerHTML = 'BSDM Subject#8';
	subj_title9.innerHTML = 'BSDM Subject#9';

	nameSubject1.innerHTML = 'Dalumat Ng/Sa Filipino';
	nameSubject2.innerHTML = 'Purposive Communication';
	nameSubject3.innerHTML = 'Kontekstwalisadong Komunikasyon sa Filipino';
	nameSubject4.innerHTML = 'Art Appreciation';
	nameSubject5.innerHTML = 'Ethics';
	nameSubject6.innerHTML = 'Institutional Orientation';
	nameSubject7.innerHTML = 'Understanding The Self';
	nameSubject8.innerHTML = 'Movement Enhanecment';
	nameSubject9.innerHTML = 'National Traning Service Program 1';

	prof1.forEach((prof) => {
		prof.innerHTML = '202512339 - Christine Prestine';
	});

	prof2.forEach((prof) => {
		prof.innerHTML = '202512340 - Daniel Padilla';
	});

	prof3.forEach((prof) => {
		prof.innerHTML = '202512341 - Justin Bieber';
	});

	prof4.forEach((prof) => {
		prof.innerHTML = '202512342 - Nicole Ann';
	});

	prof5.forEach((prof) => {
		prof.innerHTML = '202512343 - Gabriel Flores';
	});
}

function bseSub() {
	program_name.innerHTML = 'Economics';

	subj_title1.innerHTML = 'Economics Subject#1';
	subj_title2.innerHTML = 'Economics Subject#2';
	subj_title3.innerHTML = 'Economics Subject#3';
	subj_title4.innerHTML = 'Economics Subject#4';
	subj_title5.innerHTML = 'Economics Subject#5';
	subj_title6.innerHTML = 'Economics Subject#6';
	subj_title7.innerHTML = 'Economics Subject#7';
	subj_title8.innerHTML = 'Economics Subject#8';
	subj_title9.innerHTML = 'Economics Subject#9';

	nameSubject1.innerHTML = 'Dalumat Ng/Sa Filipino';
	nameSubject2.innerHTML = 'Purposive Communication';
	nameSubject3.innerHTML = 'Kontekstwalisadong Komunikasyon sa Filipino';
	nameSubject4.innerHTML = 'Art Appreciation';
	nameSubject5.innerHTML = 'Ethics';
	nameSubject6.innerHTML = 'Institutional Orientation';
	nameSubject7.innerHTML = 'Understanding The Self';
	nameSubject8.innerHTML = 'Movement Enhanecment';
	nameSubject9.innerHTML = 'National Traning Service Program 1';

	prof1.forEach((prof) => {
		prof.innerHTML = '202512339 - Christine Prestine';
	});

	prof2.forEach((prof) => {
		prof.innerHTML = '202512340 - Daniel Padilla';
	});

	prof3.forEach((prof) => {
		prof.innerHTML = '202512341 - Justin Bieber';
	});

	prof4.forEach((prof) => {
		prof.innerHTML = '202512342 - Nicole Ann';
	});

	prof5.forEach((prof) => {
		prof.innerHTML = '202512343 - Gabriel Flores';
	});
}

function bsisSub() {
	program_name.innerHTML = 'International Studies';

	subj_title1.innerHTML = 'BSCS Subject#1';
	subj_title2.innerHTML = 'BSCS Subject#2';
	subj_title3.innerHTML = 'BSCS Subject#3';
	subj_title4.innerHTML = 'BSCS Subject#4';
	subj_title5.innerHTML = 'BSCS Subject#5';
	subj_title6.innerHTML = 'BSCS Subject#6';
	subj_title7.innerHTML = 'BSCS Subject#7';
	subj_title8.innerHTML = 'BSCS Subject#8';
	subj_title9.innerHTML = 'BSCS Subject#9';

	nameSubject1.innerHTML = 'Dalumat Ng/Sa Filipino';
	nameSubject2.innerHTML = 'Purposive Communication';
	nameSubject3.innerHTML = 'Kontekstwalisadong Komunikasyon sa Filipino';
	nameSubject4.innerHTML = 'Art Appreciation';
	nameSubject5.innerHTML = 'Ethics';
	nameSubject6.innerHTML = 'Institutional Orientation';
	nameSubject7.innerHTML = 'Understanding The Self';
	nameSubject8.innerHTML = 'Movement Enhanecment';
	nameSubject9.innerHTML = 'National Traning Service Program 1';

	prof1.forEach((prof) => {
		prof.innerHTML = '202512339 - Alicia White';
	});

	prof2.forEach((prof) => {
		prof.innerHTML = '202512340 - Mae Houston';
	});

	prof3.forEach((prof) => {
		prof.innerHTML = '202512341 - Bruno Mars';
	});

	prof4.forEach((prof) => {
		prof.innerHTML = '202512342 - Taylor Swift';
	});

	prof5.forEach((prof) => {
		prof.innerHTML = '202512343 - Luther King';
	});
}

function bsoaSub() {
	program_name.innerHTML = 'Office Administration';

	subj_title1.innerHTML = 'BSOA Subject#1';
	subj_title2.innerHTML = 'BSOA Subject#2';
	subj_title3.innerHTML = 'BSOA Subject#3';
	subj_title4.innerHTML = 'BSOA Subject#4';
	subj_title5.innerHTML = 'BSOA Subject#5';
	subj_title6.innerHTML = 'BSOA Subject#6';
	subj_title7.innerHTML = 'BSOA Subject#7';
	subj_title8.innerHTML = 'BSOA Subject#8';
	subj_title9.innerHTML = 'BSOA Subject#9';

	nameSubject1.innerHTML = 'Dalumat Ng/Sa Filipino';
	nameSubject2.innerHTML = 'Purposive Communication';
	nameSubject3.innerHTML = 'Kontekstwalisadong Komunikasyon sa Filipino';
	nameSubject4.innerHTML = 'Art Appreciation';
	nameSubject5.innerHTML = 'Ethics';
	nameSubject6.innerHTML = 'Institutional Orientation';
	nameSubject7.innerHTML = 'Understanding The Self';
	nameSubject8.innerHTML = 'Movement Enhanecment';
	nameSubject9.innerHTML = 'National Traning Service Program 1';

	prof1.forEach((prof) => {
		prof.innerHTML = '202512339 - Ace Banzuelo';
	});

	prof2.forEach((prof) => {
		prof.innerHTML = '202512340 - Janine Berdin';
	});

	prof3.forEach((prof) => {
		prof.innerHTML = '202512341 - Enchong Dee';
	});

	prof4.forEach((prof) => {
		prof.innerHTML = '202512342 - Rob Deniel';
	});

	prof5.forEach((prof) => {
		prof.innerHTML = '202512343 - Arthur Nery';
	});
}

function first_Year() {
	year_name.innerHTML = 'First Year';

	yearLevel.forEach((level) => {
		level.innerHTML = '1st Year';
	});
}
function second_Year() {
	year_name.innerHTML = 'Second Year';

	yearLevel.forEach((level) => {
		level.innerHTML = '2nd Year';
	});
}
function third_Year() {
	year_name.innerHTML = 'Third Year';

	yearLevel.forEach((level) => {
		level.innerHTML = '3rd Year';
	});
}
function fourth_Year() {
	year_name.innerHTML = 'Fourth Year';

	yearLevel.forEach((level) => {
		level.innerHTML = '4th Year';
	});
}

// =====SCHEDULE PAGE FUNCTION=====

// Schedules

const schedules = {
	// === BSA ===
	// 1ST YEARS

	'BSA 1-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 1-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 1-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 1-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 1-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 1-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 1-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 1-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 2ND YEARS
	'BSA 2-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 2-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 2-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 2-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 2-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 2-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 2-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 2-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 3RD YEARS
	'BSA 3-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 3-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 3-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 3-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 3-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 3-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 3-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 3-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 4TH YEARS
	'BSA 4-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 4-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 4-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 4-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 4-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 4-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 4-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSA 4-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// === BSBM ===
	// 1ST YEARS

	'BSBM 1-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 1-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 1-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 1-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 1-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 1-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 1-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 1-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 2ND YEARS
	'BSBM 2-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 2-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 2-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 2-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 2-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 2-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 2-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 2-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 3RD YEARS
	'BSBM 3-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 3-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 3-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 3-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 3-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 3-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 3-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 3-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 4TH YEARS
	'BSBM 4-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 4-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 4-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 4-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 4-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 4-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 4-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSBM 4-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// === BSDM ===
	// 1ST YEARS
	'BSDM 1-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 1-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 1-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 1-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 1-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 1-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 1-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 1-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 2ND YEARS
	'BSDM 2-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 2-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 2-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 2-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 2-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 2-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 2-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 2-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 3RD YEARS
	'BSDM 3-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 3-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 3-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 3-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 3-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 3-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 3-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 3-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 4TH YEARS
	'BSDM 4-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 4-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 4-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 4-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 4-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 4-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 4-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSDM 4-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// === BSE ===
	// 1ST YEARS
	'BSE 1-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 1-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 1-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 1-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 1-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 1-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 1-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 1-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 2ND YEARS
	'BSE 2-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 2-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 2-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 2-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 2-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 2-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 2-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 2-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 3RD YEARS
	'BSE 3-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 3-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 3-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 3-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 3-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 3-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 3-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 3-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 4TH YEARS
	'BSE 4-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 4-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 4-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 4-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 4-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 4-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 4-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSE 4-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// === BSIS ===
	// 1ST YEARS
	'BSIS 1-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 1-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 1-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 1-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 1-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 1-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 1-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 1-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 2ND YEARS
	'BSIS 2-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 2-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 2-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 2-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 2-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 2-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 2-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 2-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 3RD YEARS
	'BSIS 3-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 3-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 3-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 3-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 3-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 3-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 3-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 3-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 4TH YEARS
	'BSIS 4-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 4-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 4-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 4-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 4-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 4-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 4-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSIS 4-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// === BSOA ===
	// 1ST YEARS
	'BSOA 1-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 1-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 1-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 1-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 1-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 1-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 1-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 1-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 2ND YEARS
	'BSOA 2-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 2-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 2-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 2-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 2-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 2-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 2-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 2-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 3RD YEARS
	'BSOA 3-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 3-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 3-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 3-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 3-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 3-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 3-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 3-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	// 4TH YEARS
	'BSOA 4-1': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 4-2': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 4-3': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 4-4': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 4-5': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 4-6': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 4-7': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},

	'BSOA 4-8': {
		subjects: [
			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},

			{
				code: '0000000000',
				course: 'Course title',
				schedule: 'Unknown',
				room: 'Unknown',
			},
		],
	},
};
// Book Button

const bookButtons = document.querySelectorAll('.book');

bookButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const card = button.closest('.section-box');
		const program = card.querySelector('.prog-title').textContent;
		const year = card.querySelector('.year-title').textContent;

		const section = `${program} ${year}`;

		showSchedule(section);
	});
});

// MAIN FUNCTION

function showSchedule(section) {
	document.getElementById('homePage').style.display = 'none';
	document.getElementById('dropdown').style.display = 'none';
	document.getElementById('schedulePage').style.display = 'block';

	const data = schedules[section].subjects;

	const container = document.getElementById('scheduleContainer');
	const subjectName = document.querySelector('.subject-name');

	container.innerHTML = '';

	data.forEach((subjects) => {
		subjectName.innerHTML = section;
		container.innerHTML += `
		<div class="grid-box">
			<div class="schedule-row">
				<div class="vr"></div>
				<p>${subjects.code}</p>
				<div class="vr"></div>
				<p>${subjects.course}</p>
				<div class="vr"></div>
				<p>${subjects.schedule}</p>
				<div class="vr"></div>
				<p>${subjects.room}</p>
				<div class="vr"></div>
			</div>
		</div>

		
		`;
	});
}

function goBack() {
	document.getElementById('homePage').style.display = 'grid';
	document.getElementById('dropdown').style.display = 'flex';
	document.getElementById('schedulePage').style.display = 'none';
}
