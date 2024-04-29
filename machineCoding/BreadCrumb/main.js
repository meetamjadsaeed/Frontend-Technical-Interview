// Define a function to generate dynamic breadcrumbs
function generateBreadcrumbs() {
  var pathArray = window.location.pathname.split("/"); // Split the URL path into an array
  var breadcrumbs = '<a href="/">Home</a>'; // Breadcrumb starts with a link to the home page

  // Iterate through each part of the path
  for (var i = 1; i < pathArray.length; i++) {
    var breadcrumbName = pathArray[i]; // Get the name of the current path segment
    var breadcrumbLink = pathArray.slice(0, i + 1).join("/"); // Construct the link up to the current segment

    // Create the breadcrumb element
    breadcrumbs +=
      ' > <a href="' + breadcrumbLink + '">' + breadcrumbName + "</a>";
  }

  // Display the breadcrumbs in the specified element
  document.getElementById("breadcrumbs").innerHTML = breadcrumbs;
}

// Call the function to generate breadcrumbs when the page loads
window.onload = generateBreadcrumbs;
