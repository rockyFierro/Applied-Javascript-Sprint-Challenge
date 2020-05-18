// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(data){
	const header = document.createElement("div");
	const dateHeader = document.createElement("span");
	const titleHeader = document.createElement("h1");
	const heatIndexHeader = document.createElement("span");

	dateHeader.classList.add("date");
	heatIndexHeader.classList.add("temp");

	header.append(
		dateHeader,
		titleHeader,
		heatIndexHeader);

	dateHeader.textContent = data.date;
	titleHeader.textContent = data.title;
	heatIndexHeader.textContent = data.temp;

	return header;
}

const today = {
	"date" : "SMARCH 28th, 2019",//735 described in console, invisible on page.
	"title" : "Lambda Times",
	"temp":"98°" 
};

document.querySelector(".header-container").append(Header(today));