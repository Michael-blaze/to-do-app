function getTitle() {
	let value = document.getElementsByName("title")[0].value;
	if (value === undefined)
		return "";
	else
		return value;
}

function getDescription() {
	let value = document.getElementsByName("description")[0].value;
	if (value === undefined)
		return "";
	else
		return value;
}

function createNote() {
	let title       = getTitle();
	let description = getDescription();

	let note   = document.createElement('ul');
	let date   = new Date();
	let day    = date.getDay();
	let month  = date.getMonth();
	let year   = date.getYear();
	let hour   = date.getHours();
	let minute = date.getMinutes();

	note.innerHTML = `<li><h2>${title}</h2></li>`;
	note.innerHTML += `<li>${description}</li>`;

	note.innerHTML += `<li> Created at: ${day}.${month}.${year} ${hour}:${minute}`;

	note.innerHTML += `<li><button class="button-style" onclick="deleteNote(this)">Delete Note</button></li>`;

	note.className = "sticky-note col-2 h-100";

	document.getElementById("notes").appendChild(note);
}

function deleteNote(elem) {
	elem.parentNode.parentNode.remove();
}