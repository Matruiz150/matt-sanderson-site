var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.Checked;
    if (id==true){
        location.href="/en/"
    } else{
        location.href="../index.html"
    }
}
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});
