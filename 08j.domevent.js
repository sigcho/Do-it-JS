    var pic = document.querySelector('#pic');
    pic.addEventListener("mouseover", changePic, false);
    pic.addEventListener("mouseout", originPic, false);

    function changePic() {
      pic.src = "08m.boy.png";
    }

    function originPic() {
      pic.src = "08m.girl.png";
    }