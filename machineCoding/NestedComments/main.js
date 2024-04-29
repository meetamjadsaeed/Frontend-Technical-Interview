// Data structure to hold comments
let comments = [];

// Function to render comments
function renderComments(commentsArray, parentId = null) {
  const commentsContainer = document.getElementById("comments-container");

  commentsArray.forEach((comment) => {
    if (comment.parentId === parentId) {
      // Create a new comment element
      const commentElement = document.createElement("div");
      commentElement.classList.add("comment");
      commentElement.innerHTML = `
                 <p>${comment.text}</p>
                 <button onclick="replyToComment(${comment.id})">Reply</button>
                 <button onclick="editComment(${comment.id})">Edit</button>
                 <button onclick="deleteComment(${comment.id})">Delete</button>
             `;
      commentsContainer.appendChild(commentElement);

      // Render nested comments
      renderComments(commentsArray, comment.id);
    }
  });
}

// Function to add a new comment
function addComment() {
  const commentInput = document.getElementById("comment-input");
  const commentText = commentInput.value.trim();

  if (commentText !== "") {
    // Create a new comment object
    const newComment = {
      id: comments.length + 1,
      parentId: null,
      text: commentText,
    };
    comments.push(newComment);

    // Clear input
    commentInput.value = "";

    // Clear comments container and re-render
    document.getElementById("comments-container").innerHTML = "";
    renderComments(comments);
  }
}

// Function to reply to a comment
function replyToComment(parentId) {
  const replyText = prompt("Enter your reply:");
  if (replyText !== null && replyText.trim() !== "") {
    // Create a new comment object for the reply
    const newComment = {
      id: comments.length + 1,
      parentId: parentId,
      text: replyText,
    };
    comments.push(newComment);

    // Clear comments container and re-render
    document.getElementById("comments-container").innerHTML = "";
    renderComments(comments);
  }
}

// Function to edit a comment
function editComment(commentId) {
  const comment = comments.find((c) => c.id === commentId);
  const newText = prompt("Edit your comment:", comment.text);
  if (newText !== null && newText.trim() !== "") {
    // Update the text of the comment
    comment.text = newText;

    // Clear comments container and re-render
    document.getElementById("comments-container").innerHTML = "";
    renderComments(comments);
  }
}

// Function to delete a comment
function deleteComment(commentId) {
  if (confirm("Are you sure you want to delete this comment?")) {
    // Filter out the comment with the specified ID
    comments = comments.filter((comment) => comment.id !== commentId);

    // Clear comments container and re-render
    document.getElementById("comments-container").innerHTML = "";
    renderComments(comments);
  }
}

// Initial rendering
renderComments(comments);
