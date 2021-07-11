async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector('#typeComment').value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  console.log(comment_text)
  console.log(post_id)

  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}
if (document.querySelector('.comment-form')) {
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
}
