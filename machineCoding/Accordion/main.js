document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  // Add click event listener to each accordion item
  accordionItems.forEach(function (accordionItem) {
    const accordionTitle = accordionItem.querySelector(".accordion-title");
    const accordionContent = accordionItem.querySelector(".accordion-content");

    // Toggle the content when the title is clicked
    accordionTitle.addEventListener("click", function () {
      // Toggle the class to change the arrow icon
      accordionTitle.classList.toggle("active");

      // Toggle the display of the content
      if (accordionContent.style.display === "block") {
        accordionContent.style.display = "none";
      } else {
        accordionContent.style.display = "block";
      }
    });
  });
});
