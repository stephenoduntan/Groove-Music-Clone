const navWrap = document.querySelector('.nav-wrapper');
const navWrapTab = document.querySelector('.navigation-wrapper--768');
const  menuBtn = document.querySelector('.menu-nav--icon');
const  menuBtnTab = document.querySelectorAll('#menu-icon--768');
const searchBar = document.querySelector('.search--bar');
const searchBarPod = document.querySelector('.search--bar-600');
const searchBtn = document.querySelectorAll('#search');
const searchBtnPod = document.querySelector('#search_600');
const cancelBtnIcon = document.querySelectorAll('#cancel_icon');
const searchInput = document.querySelectorAll('#search--input');
const sideNavItem = document.querySelectorAll('.side-nav--link');
let cancel;


for(i=0; i<cancelBtnIcon.length; i++){
    cancel = cancelBtnIcon[i];
    cancel.style.visibility = 'hidden';
    cancel.onclick = function(){
        searchInput[0].value = '';
        searchInput[0].focus();
        searchInput[1].value = '';
        searchInput[1].focus();
    }
}
for(i=0; i<searchInput.length; i++){
    searchInput[i].onkeypress = function(){
        cancelBtnIcon[0].style.visibility = 'visible';
        cancelBtnIcon[1].style.visibility = 'visible';
    }
}

function navDisplay(){
    if(window.innerWidth < 769){
        navWrap.style.display = 'grid';
        navWrap.style.position = 'absolute';
        navWrap.style.top = '0';
        navWrap.style.bottom = '0';
        navWrap.style.left = '0';
        navWrap.style.zIndex = '20';
        navWrapTab.style.visibility = 'hidden';
    } else if (window.innerWidth > 769){
        navWrap.style.display = 'grid';
        navWrapTab.style.visibility = 'hidden';
    }
}

for(i=0; i<menuBtnTab.length; i++){
    menuBtnTab[i].addEventListener('click', navDisplay);
    if(window.innerWidth < 651){
        menuBtnTab[i].addEventListener('click', function(){
            const navigation = document.querySelector('.navigation');
            navigation.style.display = 'block';
            searchBarPod.style.display = 'none';
        })
    }
}

for(i=0; i<searchBtn.length; i++){
    searchBtn[i].addEventListener('click', navDisplay);
}

menuBtn.addEventListener('click', function(){
    navWrap.style.display = 'none';
    navWrapTab.style.visibility = 'visible';
    navWrapTab.style.display = 'grid';
})

searchBtnPod.onclick = function(){
    searchBarPod.style.display ='grid';
}

//for(i=0; i<sideNavItem.length; i++){
    //const active = document.querySelector('.selected');
    
    // sideNavItem.forEach(element => element.onclick = function(){
    //         if(element.classList.contains('selected')){
    //             element.classList.remove('selected');
    //             //this.classList.add('selected')
    //         }else{
    //           element.classList.add('selected');
    //         }
    //     }
    // )
    // const activeLink = sideNavItem[i];
    // activeLink.onclick = function(){
    //     activeLink.style.borderLeft = '4px solid #089ED6';
    // }
    // sideNavItem[i].onclick = function(e){
    //     sideNavItem[i].style.borderLeft = 'none';
    //     e.target.style.borderLeft = '4px solid #089ED6';
    // }
//}

document.body.onclick = function(){
    cancelBtnIcon[0].style.visibility = 'hidden';
    cancelBtnIcon[1].style.visibility = 'hidden';
}