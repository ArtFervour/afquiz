$('#q1container').hide();
$('#q2container').hide();
$('#q3container').hide();
$('#emailcontainer').hide();
$('#endingcontainer').hide();

$('#sitetitle').text(d.site.title);

$('#headernav').append(`<img src="./img/af-logo.png" id="aflogonav">`);

$('#cityh').text(d.cities.heading);
$('#cityrow').html(d.cities.citylist.reduce(function (acc, c) {
    return acc + 
        `<div class="col-sm" align="center">
            <div class="card city" id="${c.name}">
                <img class="card-img-top" src="./img/${c.name}/${c.img}">
                <h5>${c.displayname}</h5>
            </div>
            <br>
        </div>`;
}, ''));

$('#q1h').text(d.q1.heading);
$('#q1row').html(d.q1.answerlist.reduce(function (acc, c) {
    return acc + 
        `<div class="col-sm" align="center">
            <div class="card q1" id="${c.id}">
                <img class="card-img-top" src="./img/${c.img}">
            </div>
            <br>
        </div>`;
}, ''));

$('#q2h').text(d.q2.heading);
$('#q2row').html(d.q2.answerlist.reduce(function (acc, c) {
    return acc + 
        `<div class="col-sm" align="center">
            <div class="card q2" id="${c.id}">
                <img class="card-img-top" src="./img/${c.img}">
            </div>
            <br>
        </div>`;
}, ''));

$('#q3h').text(d.q3.heading);
$('#q3row').html(d.q3.answerlist.reduce(function (acc, c) {
    return acc + 
        `<div class="col-sm" align="center">
            <div class="card q3" id="${c.id}">
                <img class="card-img-top" src="./img/${c.img}">
            </div>
            <br>
        </div>`;
}, ''));

$('#emailh').text(d.emailform.heading);

$( document ).ready(function() {
    var q = ['', '', ''];
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var city = '';
    var type = '';
    var emailcollected = window.location.search.includes('collected');
    $('.city').click(function() {
        city = $(this).attr('id');
        $('#citycontainer').hide(400);
        $('#q1container').show(800);
        $('#headernav').append(`<img src="${$(this).find(`img`).attr('src')}" id="aflogonav">`);
    });
    $('.q1').click(function() {
        q[0] = $(this).attr('id');
        $('#q1container').hide(400);
        $('#q2container').show(800);
        $('#headernav').append(`<img src="${$(this).find(`img`).attr('src')}" id="aflogonav">`);
    });
    $('.q2').click(function() {
        q[1] = $(this).attr('id');
        $('#q2container').hide(400);
        $('#q3container').show(800);
        $('#headernav').append(`<img src="${$(this).find(`img`).attr('src')}" id="aflogonav">`);
    });
    $('.q3').click(function() {
        q[2] = $(this).attr('id');
        $('#q3container').hide(400);
        if (emailcollected) {
            $('#endingcontainer').show(800);
        } else {
            $('#emailcontainer').show(800);
        }
        $('#headernav').append(`<img src="${$(this).find(`img`).attr('src')}" id="aflogonav">`);
        var o1 = d.outcomes[0];
        var o2 = d.outcomes[1];
        var o3 = d.outcomes[2];
        console.log(q);
        console.log(o1.rr);
        console.log(o1.rr);
        if (o1.rr[0].indexOf(q[0]) != -1 && o1.rr[1].indexOf(q[1]) != -1 && o1.rr[2].indexOf(q[2]) != -1) {
            $('#endingh').text(o1.heading);
            $('#endingp').text(o1.paragraph);
            $('#guideimg').prop('src', './img/' + city + '/' + o1.img);
        } else if (o2.rr[0].indexOf(q[0]) != -1 && o2.rr[1].indexOf(q[1]) != -1 && o2.rr[2].indexOf(q[2]) != -1) {
            $('#endingh').text(o2.heading);
            $('#endingp').text(o2.paragraph);
            $('#guideimg').prop('src', './img/' + city + '/' + o2.img);
        } else {
            $('#endingh').text(o3.heading);
            $('#endingp').text(o3.paragraph);
            $('#guideimg').prop('src', './img/' + city + '/' + o3.img);
        }
    });
    $('#submitemail').prop('disabled', true);
    $('#inputemail').keyup(function() {
        var email = String($(this).val());
        if (re.test(email.toLowerCase())) {
            $('#submitemail').prop('disabled', false);
        }
    });
    $('#emailform').submit(function(e) {
        e.preventDefault();
        var $form = $(this);
        $.post($form.attr("action"), $form.serialize()).then(function() {
            emailcollected = true;
            $('#emailcontainer').hide(40);
            $('#endingcontainer').show(800);
        });
    });
    $('#restart').click(function() {
        q = ['', '', ''];
        $('#endingcontainer').hide();
        $('#citycontainer').show();
        $('#headernav').empty();
        $('#headernav').append(`<img src="./img/af-logo.png" id="aflogonav">`);
    })
});