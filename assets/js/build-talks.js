// Tools to build the talks tables. Called in biography.html.
function buildTalks(publications, listname) {
  var list = document.getElementById(listname);
  for (let i = 0; i < publications.length; i++) {
    addTalkItem(publications[i], list);
  }
}

function addTalkItem(publication, list) {
  // Build the row content for the talk.
  // Date.
  var text = "<a class='highlight'>" + publication.month + "/" + publication.year + "</a> "

  if (publication.month < 10) {
    text += "&nbsp"
  }

  // Title.
  text += " <strong>" + publication.title + "</strong>";

  // Venue.
  text += ", presented at <i>" + publication.venue + "</i>, " + publication.location + ".";

  // Link.
  if (publication.link != undefined) {
    text += " [<a href='" + publication.link + "'>Recording</a>]";
  } 


  // Add the data to the table.
  var entry = document.createElement('li');
  entry.innerHTML = text;
  list.appendChild(entry);
}

