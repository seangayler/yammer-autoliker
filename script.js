const p2_btn_copy = document.getElementById('program-2-button-copy'); // button for copying program text
const p2_btn_show = document.getElementById('program-2-button-show'); // button from showing program text
// Add program text to its element
const p2_text = document.getElementById('program-2-text');
p2_text.textContent = `javascript:(${p2})()`;
// Copy text when button clicked
p2_btn_copy.addEventListener('click', () => {
  if (p2_text.classList.contains('hidden')) {
    p2_btn_show.click();
  }
  p2_text.select();
  document.execCommand('copy');
});

// Show program 2 text when button clicked
p2_btn_show.addEventListener('click', () => {
  p2_text.classList.toggle('hidden');
});

// Program 2 definition
function p2() {
  let showRepliesButtons = document.getElementsByClassName('yj-show-older-replies');
  Array.from(showRepliesButtons).forEach(button => button.click());
  window.setTimeout(() => {
    let postLikeButtons = document.getElementsByClassName('yj-message-list-item--action-list-link yj-message-list-item--like-link yj-like');
    Array.from(postLikeButtons).forEach(button => button.click());
  }, 3000);
}