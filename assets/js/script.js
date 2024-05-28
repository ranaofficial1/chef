document.getElementById('toggleButton').addEventListener('click', function(){
    var menu = document.getElementById('menu');
    if(menu.style.display === 'none' || menu.style.display === ''){
        menu.style.display = 'block';
    }
})

document.getElementById('closeMenu').addEventListener('click', function(){
    var menu = document.getElementById('menu');
    if(menu.style.display === 'block'){
        menu.style.display = 'none';
    }
})