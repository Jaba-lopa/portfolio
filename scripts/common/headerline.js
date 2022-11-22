window.addEventListener('scroll', function(){
    let progressLine = window.scrollY / (document.body.clientHeight - window.innerHeight) * 100;
    document.querySelector('#headerline').style.width = progressLine+'%';
});