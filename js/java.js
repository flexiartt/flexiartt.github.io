// MOBILE MENU
var IsMenuOpen = false;
window.addEventListener('load', function() {
    var menubtn = document.querySelector('#menuicon');
    menubtn.addEventListener("click",OpenMenu);
});

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        closeMenu();
    }
};

function OpenMenu(e) {
    var nav = document.querySelector('header nav');
    var list = document.querySelector('header nav ul');
    var logo = document.querySelector('header nav #logo');
    if(!IsMenuOpen) {
        IsMenuOpen = true;
        e.target.style.backgroundImage = 'url(img/close_icon.png)';
        list.style.opacity = 1;
        logo.style.opacity = 0;
        list.style.display = 'block';
        nav.style.marginTop = '-10px';
    } else {
        IsMenuOpen = false;
        e.target.style.backgroundImage = 'url(img/menu_icon.png)';
        list.style.opacity = 0;
        logo.style.opacity = 1;
        list.style.display = 'none';
        nav.style.marginTop = '0px';
    }
}

function closeMenu() {
    if(IsMenuOpen) {
        var nav = document.querySelector('header nav');
        var menubtn = document.querySelector('#menuicon');
        var list = document.querySelector('header nav ul');
        var logo = document.querySelector('header nav #logo');
        IsMenuOpen = false;
        menubtn.style.backgroundImage = 'url(img/menu_icon.png)';
        list.style.opacity = 0;
        logo.style.opacity = 1;
        nav.style.display = 'flex';
    }
}

// RESIZE
window.addEventListener('resize', function() {
    if(window.innerWidth > 1000) {
        var nav = document.querySelector('header nav');
        var list = document.querySelector('header nav ul');
        var logo = document.querySelector('header nav #logo');
        if(nav.style.display != 'block') {
            nav.style.display = 'block';
            list.style.opacity = 1;
            logo.style.opacity = 1;
            IsMenuOpen = true;
        }
    } else if(window.innerWidth < 1000) {
        closeMenu();
    }
});