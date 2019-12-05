whatschool = null;
submit.onclick = function() {
    if (survey.classList.contains('hide') == false) {
        survey.classList.add('hide');
        school_name.classList.remove('hide');
        school_img.classList.remove('hide');
        submit.innerHTML = "Restart";
        whatschool = results(document.getElementById('region').value, document.getElementById('size').value, document.getElementById('type').value);
        school_name.innerHTML = whatname(whatschool);
        school_img.innerHTML = whatimg(whatschool);
    }
    else {
        survey.classList.remove('hide');
        submit.innerHTML = "Submit";
        school_name.classList.add('hide');
        school_img.classList.add('hide');
    }
}
function results(region, size, type) {
    if (region == 'east' && size == 'small' && type == 'private') {
        return 0;
    }
    if (region == 'east' && size == 'small' && type == 'public') {
        return 1;
    }
    if (region == 'east' && size == 'medium' && type == 'private') {
        return 2;
    }
    if (region == 'east' && size == 'medium' && type == 'public') {
        return 3;
    }
    if (region == 'east' && size == 'large' && type == 'private') {
        return 4;
    }
    if (region == 'east' && size == 'large' && type == 'public') {
        return 5;
    }
    if (region == 'south' && size == 'small' && type == 'private') {
        return 6;
    }
    if (region == 'south' && size == 'small' && type == 'public') {
        return 7;
    }
    if (region == 'south' && size == 'medium' && type == 'private') {
        return 8;
    }
    if (region == 'south' && size == 'medium' && type == 'public') {
        return 9;
    }
    if (region == 'south' && size == 'large' && type == 'private') {
        return 10;
    }
    if (region == 'south' && size == 'large' && type == 'public') {
        return 11;
    }
    if (region == 'midwest' && size == 'small' && type == 'private') {
        return 12;
    }
    if (region == 'midwest' && size == 'small' && type == 'public') {
        return 13;
    }
    if (region == 'midwest' && size == 'medium' && type == 'private') {
        return 14;
    }
    if (region == 'midwest' && size == 'medium' && type == 'public') {
        return 15;
    }
    if (region == 'midwest' && size == 'large' && type == 'private') {
        return 16;
    }
    if (region == 'midwest' && size == 'large' && type == 'public') {
        return 17;
    }
    if (region == 'southwest' && size == 'small' && type == 'private') {
        return 18;
    }
    if (region == 'southwest' && size == 'small' && type == 'public') {
        return 19;
    }
    if (region == 'southwest' && size == 'medium' && type == 'private') {
        return 20;
    }
    if (region == 'southwest' && size == 'medium' && type == 'public') {
        return 21;
    }
    if (region == 'southwest' && size == 'large' && type == 'private') {
        return 22;
    }
    if (region == 'southwest' && size == 'large' && type == 'public') {
        return 23;
    }
    if (region == 'west' && size == 'small' && type == 'private') {
        return 24;
    }
    if (region == 'west' && size == 'small' && type == 'public') {
        return 25;
    }
    if (region == 'west' && size == 'medium' && type == 'private') {
        return 26;
    }
    if (region == 'west' && size == 'medium' && type == 'public') {
        return 27;
    }
    if (region == 'west' && size == 'large' && type == 'private') {
        return 28;
    }
    if (region == 'west' && size == 'large' && type == 'public') {
        return 29;
    }
}

function whatname(x) {
    switch(x) {
        case 0:
        return ''
        case 1:
        return ''  
        case 2:
        return ''  
        case 3:
        return ''  
        case 4:
        return ''  
        case 5:
        return ''  
        case 6:
        return ''  
        case 7:
        return ''  
        case 8:
        return ''  
        case 9:
        return ''  
        case 10:
        return ''  
        case 11:
        return ''  
        case 12:
        return ''  
        case 13:
        return ''      
        case 14:
        return ''  
        case 15:
        return ''  
        case 16:
        return ''  
        case 17:
        return ''  
        case 18:
        return ''  
        case 19:
        return ''  
        case 20:
        return ''  
        case 21:
        return ''  
        case 22:
        return ''  
        case 23:
        return ''  
        case 24:
        return ''  
        case 25:
        return ''  
        case 26:
        return ''  
        case 27:
        return ''  
        case 28:
        return ''  
        case 29:
        return ''  
}
}

function whatimg(x) {
    switch(x){
        case 0:
        return ''
        case 1:
        return ''  
        case 2:
        return ''  
        case 3:
        return ''  
        case 4:
        return ''  
        case 5:
        return ''  
        case 6:
        return ''  
        case 7:
        return ''  
        case 8:
        return ''  
        case 9:
        return ''  
        case 10:
        return ''  
        case 11:
        return ''  
        case 12:
        return ''  
        case 13:
        return ''      
        case 14:
        return ''  
        case 15:
        return ''  
        case 16:
        return ''  
        case 17:
        return ''  
        case 18:
        return ''  
        case 19:
        return ''  
        case 20:
        return ''  
        case 21:
        return ''  
        case 22:
        return ''  
        case 23:
        return ''  
        case 24:
        return ''  
        case 25:
        return ''  
        case 26:
        return ''  
        case 27:
        return ''  
        case 28:
        return ''  
        case 29:
        return ''  
}
}