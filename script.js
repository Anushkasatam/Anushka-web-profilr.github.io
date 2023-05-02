let section=document.querySelectorAll('header nav a');

window.onscroll=()=>{
   section.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offset height;
    let id= sec.getAttribute(id);

    if(top>=offset && top<offset height){
    navlink.forEach(link=>{
link.classlist.remove('active');
document.querySelector('header nav a
 [href'='+id+']').classList.add
('active');
    });
    };
   });
};