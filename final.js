submit.onclick = function() {
    if (survey.classList.contains('hide') == false) {
        survey.classList.add('hide');
        school_name.classList.remove('hide');
        school_img.classList.remove('hide');
        submit.innerHTML = "Restart";
    }
    else {
        survey.classList.remove('hide');
        submit.innerHTML = "Submit";
        school_name.classList.add('hide');
        school_img.classList.add('hide');
    }
}