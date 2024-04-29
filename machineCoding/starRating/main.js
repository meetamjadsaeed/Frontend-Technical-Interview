const stars = {
  fullFilled: "★",
  halfFilled: "✫",
  empty: "☆",
};

function iterateStars(starCount = [1, 3], starType = "empty") {
  const getWrapper = document.getElementById("star__wrapper");
  getWrapper.innerHTML = ""; // Clear previous stars

  for (let count of starCount) {
    getWrapper.innerHTML += stars.fullFilled.repeat(count);
  }
  if (starType !== "none") {
    getWrapper.innerHTML += stars[starType];
  }
}

function fillStars({ rating = 4.5 }) {
  const [fullStar, remainingStar] = rating.toString().split(".");
  const initialStars = Array(Number(fullStar)).fill(1); // Fill the array with 1

  let lastStar;
  if (remainingStar >= 0.75) {
    lastStar = "fullFilled"; // Round up to the next full star
  } else if (remainingStar >= 0.25) {
    lastStar = "halfFilled"; // Add a half-filled star
  } else {
    lastStar = "none"; // Don't add anything
  }

  iterateStars(initialStars, lastStar);
}

fillStars({ rating: 4.9 });
