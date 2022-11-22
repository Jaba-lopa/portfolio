window.addEventListener('click', function(event){
    if (event.target.hasAttribute('data-nav')) {
        try {
            const navSection = event.target.innerText.slice(3, event.target.innerText.length).toLowerCase();
            document.querySelector(`.section-${navSection}`).scrollIntoView({block: 'center', behavior: 'smooth'});
        } catch{
            document.querySelector(`.section-name`).scrollIntoView({block: 'center', behavior: 'smooth'});
        }   
    }
});