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

document.getElementById('region').onchange = function() {
switch(document.getElementById('region') {
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
        return 'Simmons University'
        case 1:
        return 'Northen Vermont University'  
        case 2:
        return 'Tufts University'  
        case 3:
        return 'University of Massachusetts Boston'  
        case 4:
        return 'Northeastern University'  
        case 5:
        return 'University of Connecticut'  
        case 6:
        return 'King University'  
        case 7:
        return 'Kentucky State University'  
        case 8:
        return 'Duke University'  
        case 9:
        return 'College of William and Mary'  
        case 10:
        return 'Keiser University'  
        case 11:
        return 'Auburn University'  
        case 12:
        return 'Lake Forest College'  
        case 13:
        return 'Mayville State University'      
        case 14:
        return 'Bradley University'  
        case 15:
        return 'Black Hills State University'  
        case 16:
        return 'Creighton University'  
        case 17:
        return 'University of Minnesota: Twin Cities'  
        case 18:
        return 'Amberton University'  
        case 19:
        return 'Western New Mexico University'  
        case 20:
        return 'Rice University'  
        case 21:
        return 'Arkansas Tech University'  
        case 22:
        return 'Texas Christian University'  
        case 23:
        return 'Texas A & M University'  
        case 24:
        return 'California Institute of Technology'  
        case 25:
        return 'Western State Colorado University'  
        case 26:
        return 'Gonzaga University'  
        case 27:
        return 'Colorado School of Mines'  
        case 28:
        return 'University of Southern California'  
        case 29:
        return 'University of Colorado Boulder'  
}
}

function whatimg(x) {
    switch(x){
        case 0:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/1375_Photo.jpg" alt="" >'
        case 1:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/3124_Photo.jpg" alt="northernVermontUniversity">'  
        case 2:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/1245_Photo.jpg" alt="" >'  
        case 3:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/3567_Photo.jpg" alt="" >'
        case 4:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/2802_Photo.jpg" alt="" >'  
        case 5:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/492_Photo.jpg" alt="" >'  
        case 6:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/3319_Photo.jpg" alt="" >'  
        case 7:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/3244_Photo.jpg" alt="" >'  
        case 8:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/535_Photo.jpg" alt="" >'  
        case 9:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/3090_Photo.jpg" alt="" >'  
        case 10:
        return '<img src="https://res.cloudinary.com/highereducation/image/upload/w_740,h_416,c_fill,f_auto,fl_lossy,q_auto/v1/TheBestSchools.org/keiser-university.jpg" alt="" >'  
        case 11:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/1608_Photo.jpg" alt="" >'  
        case 12:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/4238_Photo.jpg" alt="" >'  
        case 13:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/75_Photo.jpg" alt="" >'      
        case 14:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/1869_Photo.jpg" alt="" >'  
        case 15:
        return '<img src="https://www.bhsu.edu/portals/0/Images/Rooftop_4.jpg?ver=2018-01-05-184926-087" alt="" >'  
        case 16:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/2147_Photo.jpg" alt="" >'  
        case 17:
        return '<img src="https://collegesimply.firebaseapp.com/img/primary/university-of-minnesota-twin-cities-174066.jpg" alt="" >'  
        case 18:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/344_Photo.jpg" alt="" >'  
        case 19:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/3274_Photo.jpg" alt="" >'  
        case 20:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/2569_Photo.jpg" alt="" >'  
        case 21:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/404_Photo.jpg" alt="" >'  
        case 22:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/2438_Photo.jpg" alt="" >'  
        case 23:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/397_Photo.jpg" alt="" >'  
        case 24:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/4214_Photo.jpg" alt="" >'  
        case 25:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/3981_Photo.jpg" alt="" >'  
        case 26:
        return '<img src="https://www.gonzaga.edu/-/media/Website/Images/Wide-Header/About/Our-Campus-and-Location/wide-drone-hemmingson-header-image.ashx?h=600&w=1440&la=en&hash=F15FC462B8350E0FFE14304794B3770D411C2473" alt="" >'  
        case 27:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/1300_Photo.jpg" alt="" >'  
        case 28:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/3341_Photo.jpg" alt="" >'  
        case 29:
        return '<img src="https://secure-media.collegeboard.org/CollegePlanning/media/image/photo/994_Photo.jpg" alt="" >'  
}
}