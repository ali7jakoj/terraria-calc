let input = document.querySelector('.ginput');
let input1 = document.querySelector('.ginput1');
let input2 = document.querySelector('.ginput2');
let li = document.querySelectorAll('.dropdown li');
let li1 = document.querySelectorAll('.dropdown1 li');
let li2 = document.querySelectorAll('.dropdown2 li');
let ul = document.querySelector('.dropdown');
let ul1 = document.querySelector('.dropdown1');
let ul2 = document.querySelector('.dropdown2');
let sub = document.querySelector(".sub")
let res = document.querySelector(".math")

let guid, jungle, map, math;

// التعامل مع الضغط على كل عنصر من عناصر القوائم
li.forEach(function(item) {
  item.onclick = function() {
    guid = item.getAttribute('value');
    input.value = item.innerText;
    ul.style.display = 'none';
    console.log("Selected guid value:", guid);
  };
});

li1.forEach(function(item) {
  item.onclick = function() {
    map = item.innerHTML
    input1.value = item.innerText;
    ul1.style.display = 'none';
    console.log("Selected map value:", map);
  };
});

li2.forEach(function(item) {
  item.onclick = function() {
    jungle = item.innerHTML
    input2.value = item.innerText;
    ul2.style.display = 'none';
    console.log("Selected jungle value:", jungle);
  };
});

// إظهار القوائم عند الضغط على الانبت المناسب
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('ginput')) {
    ul.style.display = 'flex';
  } else {
    ul.style.display = 'none';
  }

  if (e.target.classList.contains('ginput1')) {
    ul1.style.display = 'flex';
  } else {
    ul1.style.display = 'none';
  }

  if (e.target.classList.contains('ginput2')) {
    ul2.style.display = 'flex';
  } else {
    ul2.style.display = 'none';
  }
});

sub.onclick = function() {
  if(map == "Small" && jungle == "Left"){
    math = 3800-524*guid +"West"
  }
  if(map == "Small" && jungle == "Right"){
    math = 3276+524*guid +"East"
  }
  if(map == "Medium" && jungle == "Left"){
    math = 6000-1008*guid +"West"

  }
  if(map == "Medium" && jungle == "Right"){
    math = 4992+1008*guid +"East"
  }
  if(map == "Large" && jungle == "Left"){
    math = 8000-1448*guid +"West"
  }
  if(map == "Large" && jungle == "Right"){
    math = 6552+1448*guid +"East"
  }
  console.log(res)
  res.innerHTML = math
}
