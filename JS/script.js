var $Selector = {
    slider: $('#slider'),
    next: $('#next'),
};

var timer = setInterval(function(){
    next();
}, 5000);

function next() {
    var curentSlide = $Selector.slider.find('li.active');
    if (curentSlide.next().length) {
        curentSlide.next().addClass('active');
    } else {
        $Selector.slider.find('li:first-child').addClass('active')
    }
    curentSlide.removeClass('active');
}

$Selector.next.on('click', function () {
    next()
})

var $selectors= {
    name: $('#yourname'),
    email: $('#youremail'),
    yourcomment: $('#yourcomment'),
    submit: $('#sub')
};
 $selectors.submit.on('click' , function (){
     var n1= $selectors.name.val();
     var n2= $selectors.email.val();
     var n3= $selectors.yourcomment.val();
     var n4=$selectors.submit.val();
     console.log(n1,n2,n3)

 });
