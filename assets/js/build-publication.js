// Tools to build the publication tables. Called in publications.html.
function buildTable(publications, tablename) {
  var tbody = document.getElementById(tablename).getElementsByTagName('tbody')[0];
  for (let i = 0; i < publications.length; i++) {
    addTableRow(publications[i], tbody);
  }
}

function addTableRow(publication, tbody) {
  // Build the row content for the publication.
  var text = ""

  // Lead image.
  text += "<td style='width: 25%; padding-right: 2em; padding-bottom: 2em'><a href='" + publication.thumblink + "'  ><img src='images/publications/" + publication.thumbimage + "' style='width: 100%' alt=" + publication.title + "'></span></a></td>";

  // Authors.
  text += "<td style='width: 75%; vertical-align: top; padding-bottom: 2em; line-height: 1.4em'>";
  for (let i = 0; i < publication.authors.length; i++) {
    // Separators.
    if (i > 0) {
      if (publication.authors.length > 2) {
        text += ", ";
      } else {
        text += " ";
      }
    }
    if (i == publication.authors.length - 1 && i > 0) {
      text += "and ";
    }

    // Highlights.
    var name_check = publication.authors[i].toLowerCase();
    if (name_check == "a. fontan" || name_check == "alejandro fontan" || name_check == "fontan, a." || name_check == "fontan, alejandro") {
      text += "<strong>" + publication.authors[i];
      if (publication.sharedfirst) {
        text += "*";
      }
      text += "</strong>";
    } else {
      text += publication.authors[i];
    }
  }

  // Title and reference.
  text += "<br><span style='font-weight: bold; color: rgb(80, 100, 200);'>" + publication.title + "</span><br>" + publication.venue + ", ";
  if (publication.pages != "") {
    text += publication.pages + ", ";
  }
  text += publication.year + ".<br>";

  // Links.
  if (publication.links != undefined && publication.links.length > 0) {
    for (let i = 0; i < publication.links.length; i++) {
      text += "[<a href=" + publication.links[i].link + " >" + publication.links[i].name + "</a>]&nbsp;";
    }
  }

  // Awards.
  let awards = publication.awards;
  if (awards != undefined && awards.length > 0) {
    for (let i = 0; i < publication.awards.length; i++) {
      text += "[<span style='font-weight: bold; color: rgb(255, 180, 0);'>\u{1F3C6}" + publication.awards[i] + "</span>]&nbsp;";
    }
  }

  // Stars.
  let stars = publication.stars;
  if (stars != undefined && stars.length > 0) {
    for (let i = 0; i < publication.stars.length; i++) {
      text += "[<span style='font-weight: bold; color: rgb(255, 180, 0);'>\u2B50" + publication.stars[i] + "</span>]&nbsp;";
    }
  }

  // Citations.
  let citations = publication.citations;
  if (citations != undefined && citations.length > 0) {
    for (let i = 0; i < publication.citations.length; i++) {
      text += "[<span style='color: #1a0dab; text-decoration: underline;'>Cited by " +
              publication.citations[i] +
              "</span>]&nbsp;";
    }
  }

  text += "</div></td>"

  // Add the data to the table.
  tbody.insertRow().innerHTML = text;
}

