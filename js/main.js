// DARK MODE
document.getElementById("darkBtn")?.addEventListener("click", function() {
  document.body.classList.toggle("dark");
});

// COUNTERS
function counter(id, target) {
  let c = 0;
  let interval = setInterval(() => {
    c++;
    document.getElementById(id).innerHTML = c;
    if (c == target) clearInterval(interval);
  }, 20);
}

counter("count1", 120);
counter("count2", 350);
counter("count3", 48);
counter("count4", 12);

// CONTACT FORM
let form = document.getElementById("contactForm");
if(form){
  form.onsubmit = function(e){
    e.preventDefault();
    alert("تم إرسال الرسالة بنجاح");
  }
}

// jQuery Animation
$(document).ready(function(){
  $(".service-box").hide().fadeIn(1500);
});
