(function(){
var y=document.getElementById('y');if(y)y.textContent=new Date().getFullYear();
var b=document.querySelector('.menu'),m=document.getElementById('m'),ly=0;
function setMenu(o){m.classList.toggle('open',o);b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');ly=window.scrollY}
if(b&&m){
 b.addEventListener('click',function(e){e.stopPropagation();setMenu(!m.classList.contains('open'))});
 window.addEventListener('scroll',function(){if(m.classList.contains('open')&&Math.abs(window.scrollY-ly)>8)setMenu(false)},{passive:true});
 document.addEventListener('click',function(e){if(!m.contains(e.target))setMenu(false)});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false)});
 m.addEventListener('click',function(e){if(e.target.closest('a'))setMenu(false)});
}
var sel=document.getElementById('plan');
function key(t){return (t||'').split(' (')[0].replace(/&amp;/g,'&').trim().toLowerCase()}
function pick(v){if(!sel||!v)return;var k=key(v);for(var i=0;i<sel.options.length;i++){if(key(sel.options[i].text)===k){sel.selectedIndex=i;return}}}
document.querySelectorAll('[data-plan]').forEach(function(a){
 if(sel){a.addEventListener('click',function(e){e.preventDefault();pick(a.dataset.plan);var c=document.getElementById('contact');if(c)c.scrollIntoView({behavior:'smooth'})})}
 else{a.href='contact.html?plan='+encodeURIComponent(a.dataset.plan)}});
if(sel){pick(new URLSearchParams(location.search).get('plan'))}
var f=document.getElementById('f');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);
var t='Hi KASITU Webs, my name is '+d.get('n')+'.\nI am interested in: '+d.get('p')+'.\n\n'+d.get('m');
window.open('https://wa.me/27794380103?text='+encodeURIComponent(t),'_blank')});
var em=document.getElementById('em');
if(em&&f)em.addEventListener('click',function(){if(!f.reportValidity())return;var d=new FormData(f);
location.href='mailto:info@kasituwebs.co.za?subject='+encodeURIComponent('Quote request: '+d.get('p'))+'&body='+encodeURIComponent('Name: '+d.get('n')+'\n\n'+d.get('m'))});
})();