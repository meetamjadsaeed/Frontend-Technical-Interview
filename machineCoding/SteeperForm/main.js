document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".step");
  let currentStep = 0;

  function showStep(stepIndex) {
    steps.forEach(function (step, index) {
      if (index === stepIndex) {
        step.style.display = "block";
      } else {
        step.style.display = "none";
      }
    });
  }

  function goToNextStep() {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  }

  function goToPrevStep() {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  }

  function handleSubmit() {
    // Perform form submission logic here
    alert("Form submitted successfully!");
  }

  document.querySelectorAll(".next-btn").forEach(function (btn) {
    btn.addEventListener("click", goToNextStep);
  });

  document.querySelectorAll(".prev-btn").forEach(function (btn) {
    btn.addEventListener("click", goToPrevStep);
  });

  document.querySelectorAll(".submit-btn").forEach(function (btn) {
    btn.addEventListener("click", handleSubmit);
  });
});
