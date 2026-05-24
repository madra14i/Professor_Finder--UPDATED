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
let crim = document.getElementById('crim');
let bs_ism = document.getElementById('bs-ism');
let program_name = document.getElementById('program-change');

// FOR ADDING BLOCK WHEN SECTION TEXT CHARACTER IS MORE THAN 10
const section_box = document.querySelectorAll('.section');

// SELECT ALL SECTION NAME
const prog_title = document.querySelectorAll('.prog-title');

// SELECT ALL PROGRAM NAME
const prog_name = document.querySelectorAll('.nameProgram');

// CARD UPDATE
crim.addEventListener('click', () => {
	program_name.innerHTML = 'Criminology'; // CHANGE BTN NAME

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BScrim';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Criminology';
	});
});

bs_ism.addEventListener('click', () => {
	program_name.innerHTML = 'Industrial Security Management'; // CHANGE BTN NAME

	// CHANGES ALL SECTION NAME
	prog_title.forEach((title) => {
		title.innerHTML = 'BSISM';
	});

	// CHANGES ALL PROGRAM NAME
	prog_name.forEach((progName) => {
		progName.innerHTML = 'Industrial Security Management';
	});
});

// YEAR UPDATE
firstYear.addEventListener('click', () => {
	year_name.innerHTML = 'First Year'; // DROPDOWN

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
	year_name.innerHTML = 'Second Year'; // DROPDOWN

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
	year_name.innerHTML = 'Third Year'; // DROPDOWN

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
	year_name.innerHTML = 'Fourth Year'; // DROPDOWN

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

// ==== CARD UPDATE FOR PROF. FINDER ====

// CARD UPDATE
function bscrimSub() {
	program_name.innerHTML = 'Criminology';

	subj_title1.innerHTML = 'Criminology Subject#1';
	subj_title2.innerHTML = 'Criminology Subject#2';
	subj_title3.innerHTML = 'Criminology Subject#3';
	subj_title4.innerHTML = 'Criminology Subject#4';
	subj_title5.innerHTML = 'Criminology Subject#5';
	subj_title6.innerHTML = 'Criminology Subject#6';
	subj_title7.innerHTML = 'Criminology Subject#7';
	subj_title8.innerHTML = 'Criminology Subject#8';
	subj_title9.innerHTML = 'Criminology Subject#9';

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

function bsismSub() {
	program_name.innerHTML = 'Industrial Security Management';

	subj_title1.innerHTML = 'Industrial Security Subject#1';
	subj_title2.innerHTML = 'Industrial Security Subject#2';
	subj_title3.innerHTML = 'Industrial Security Subject#3';
	subj_title4.innerHTML = 'Industrial Security Subject#4';
	subj_title5.innerHTML = 'Industrial Security Subject#5';
	subj_title6.innerHTML = 'Industrial Security Subject#6';
	subj_title7.innerHTML = 'Industrial Security Subject#7';
	subj_title8.innerHTML = 'Industrial Security Subject#8';
	subj_title9.innerHTML = 'Industrial Security Subject#9';

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
