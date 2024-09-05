window.onscroll = () =>{
    if(scrollY > 250){
        document.querySelector('.gotop').classList.add('active');
    }else{
        document.querySelector('.gotop').classList.remove('active');
    }
    document.querySelector('.navbar').classList.remove('active');
}

let menu = document.querySelector('.menubtn');
menu.onclick = () =>{
    document.querySelector('.navbar').classList.toggle('active');
}
let menu = document.querySelector('.menubtn');
menu.onclick = () =>{
    document.querySelector('.navbar').classList.toggle('active');
}

    
      document.querySelectorAll('.service').forEach(service => {
        service.addEventListener('click', function() {
       
          document.querySelectorAll('.service').forEach(s => s.classList.remove('enlarged'));

          
          this.classList.toggle('enlarged');
        });
      });
      this.classList.add('enlarged');