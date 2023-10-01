document.getElementById('homenavbtnslide').style.display = 'none'
function homenavbtnf() {
    let homenavbtnslide1 = document.getElementById('homenavbtnslide')

    if(homenavbtnslide1.style.display == 'none'){
        homenavbtnslide1.style.display = 'block'
    }
    else{
        homenavbtnslide1.style.display = 'none'
    }
}