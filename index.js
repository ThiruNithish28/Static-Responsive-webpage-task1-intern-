
//  nav tabs
const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})


// 
var article_toggle = document.querySelector('.toggles');
var toggle_content = document.querySelector('.toggle-option');
let isclicked = true;
let showtoggle = function() {

    if (isclicked) {
        toggle_content.style.display = "block";
        isclicked=false;
    } else {
        toggle_content.style.display = "none";
        isclicked=true;
    }
};