var Body = {
    setColor: function(color) {
        document.querySelector('body').style.color = color;
    },
    setBackGColor: function(color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}
var Link = {
    setColor: function(color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i = i+1;
    }
    }
}

function NightDayHandler(self) {
    var target = document.querySelector('body');
    if(self.value === 'night') {
        Body.setBackGColor('black');
        Body.setColor('white');
        self.value = 'day';
        Link.setColor('powderblue');
    
    }
    else {
        Body.setBackGColor('white');
        Body.setColor('black');
        self.value = 'night';
        Link.setColor('blue');
    }
}
