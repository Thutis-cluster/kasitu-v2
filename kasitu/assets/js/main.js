(function(){
var y=document.getElementById('y');if(y)y.textContent=new Date().getFullYear();
var b=document.querySelector('.menu'),m=document.getElementById('m');
if(b&&m){b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});}
var sel=document.getElementById('plan');
document.querySelectorAll('[data-plan]').forEach(function(a){
 if(sel){a.addEventListener('click',function(){sel.value=a.dataset.plan})}
 else{a.href='contact.html?plan='+encodeURIComponent(a.dataset.plan)}});
if(sel){var p=new URLSearchParams(location.search).get('plan');if(p)sel.value=p}
var f=document.getElementById('f');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);
var t='Hi KASITU Webs, my name is '+d.get('n')+'.\nI am interested in: '+d.get('p')+'.\n\n'+d.get('m');
window.open('https://wa.me/27794380103?text='+encodeURIComponent(t),'_blank')});
})();