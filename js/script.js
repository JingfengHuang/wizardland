$(document).ready(function() {
    $("body").addClass("js");

    if (localStorage.getItem('username_input') != null){
        $('#welcome').text('Welcome');
        $('#full_name').text(localStorage.getItem('username_input'));
        $('#serve').text("It's my honor to serve you.");
        $('#user_full_name').text('Switch Account');
    } else{
        $('#welcome').text('Experience');
        $('#full_name').text('REAL MAGIC');
        $('#serve').text("Explore our slideshow and crystal ball");
        $('#user_full_name').text('Log In');
    };

    $("#user_full_name").click(function(event) {
        localStorage.removeItem('username_input');
    });

    $(".click_to_show").click(function(event) {
        $('.information').toggleClass('hidden');

        event.preventDefault();
    });

    $("#submit_book").click(function(event) {

        var complete = true;
		if ($('#name').val()==''){
			complete = false;
			$('#name').addClass('error');
		};

		if ($('#age').val()==''){
			complete = false;
			$('#age').addClass('error');
        };
        
        if ($('#phonenumber').val()==''){
			complete = false;
			$('#phonenumber').addClass('error');
        };

        if ($('#traveldate').val()==''){
			complete = false;
			$('#traveldate').addClass('error');
        };

        if ($('#numberoftravelers').val()==''){
			complete = false;
			$('#numberoftravelers').addClass('error');
        };

        $('#name').keydown(function(){
            $(this).removeClass('error');
        });

        $('#age').keydown(function(){
            $(this).removeClass('error');
        });

        $('#phonenumber').keydown(function(){
            $(this).removeClass('error');
        });

        if(localStorage.getItem('username_input') != $('#name').val()){
            complete = false;
        };

        if (complete == true){
            document.location.href="booking_success.html";
        } else{
            alert("Please make sure all information is entered correctly. Remember to log in to your account before booking.");
        };

        event.preventDefault();
        
    });

    $("#sign_up").click(function(event) {
        var complete = true;

		if ($('#name').val()==''){
			complete = false;
			$('#name').addClass('error');
		};

		if ($('#age').val()==''){
			complete = false;
			$('#age').addClass('error');
        };

        if ($('#email').val()==''){
			complete = false;
			$('#email').addClass('error');
        };
        
        if ($('#phonenumber').val()==''){
			complete = false;
			$('#phonenumber').addClass('error');
        };

        if ($('#pwd').val()==''){
			complete = false;
			$('#pwd').addClass('error');
        };

        if ($('#cpwd').val()==''){
			complete = false;
			$('#cpwd').addClass('error');
        };

        $('#name').keydown(function(){
            $(this).removeClass('error');
        });

        $('#age').keydown(function(){
            $(this).removeClass('error');
        });

        $('#email').keydown(function(){
            $(this).removeClass('error');
        });

        $('#phonenumber').keydown(function(){
            $(this).removeClass('error');
        });

        $('#pwd').keydown(function(){
            $(this).removeClass('error');
        });

        $('#cpwd').keydown(function(){
            $(this).removeClass('error');
        });

        if ($('#name').val()!=''){
			localStorage.setItem('username_create', $('#name').val());
        };

        if (complete == true){
            document.location.href="log_in.html";
        } else{
            alert('Please make sure all information is entered.');
        };

        event.preventDefault();
    });

    $("#sign_in").click(function(event) {

        var complete = true;
		if ($('#name').val()==''){
			complete = false;
			$('#name').addClass('error');
        };

		if ($('#pwd').val()==''){
			complete = false;
			$('#pwd').addClass('error');
        };
        
        $('#name').keydown(function(){
            $(this).removeClass('error');
        });

        $('#pwd').keydown(function(){
            $(this).removeClass('error');
        });

        if ($('#name').val() == localStorage.getItem('username_create')){
			localStorage.setItem('username_input', $('#name').val());
        } else{
            complete = false;
            $('#name').addClass('error');
            $('#pwd').addClass('error');
        };

        if (complete == true){
            alert("Welcome back! " + localStorage.getItem('username_input') + " :)");
            document.location.href="index.html";
        } else{
            alert('Please make sure your full name and password are correct. Sign up before logging in.');
        };

        event.preventDefault();
    });

    $('#submit_feedback').click(function(event){
        alert('Thank you for your submission.');
        document.location.href="feedback_success.html";

        event.preventDefault();
    });

    $("#explore_nav").mouseenter(function(event) {
        $('#explore_second_nav').css('display', 'flex');
    });

    $("#explore_nav").mouseleave(function(event) {
        $(".second_nav").css('display', 'none');
    });

    $("#explore_nav").click(function(event) {
        event.preventDefault();
    });

    $("#account_nav").mouseenter(function(event) {
        $('#account_second_nav').css('display', 'flex');
    });

    $("#account_nav").mouseleave(function(event) {
        $(".second_nav").css('display', 'none');
    });

    $("#account_nav").click(function(event) {
        event.preventDefault();
    });

    $(".second_nav").mouseenter(function(event) {
        $(this).css('display', 'flex');
    });

    $(".second_nav").mouseleave(function(event) {
        $(this).css('display', 'none');
    });

    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

    $("#submitdate").click(function(event) {
        var traveldate = new Date($('#traveldate').val());

        day = traveldate.getDate();
        month = traveldate.getMonth() + 1;
        year = traveldate.getFullYear();

        alert('Checking events in ' + month + '/' + year)

        $('.future_event').css('display', 'flex');

        if(day > 2){
            document.getElementById("flydate").innerHTML = month + "/" + '02' + "/" + year + ' expired';
        } else{document.getElementById("flydate").innerHTML = month + "/" + '02' + "/" + year;}

        if(day > 11){
            document.getElementById("catdate").innerHTML = month + "/" + '11' + "/" + year + ' expired';
        } else{document.getElementById("catdate").innerHTML = month + "/" + '11' + "/" + year;}

        if(day > 23){
            document.getElementById("firedate").innerHTML = month + "/" + '23' + "/" + year + ' expired';
        } else{document.getElementById("firedate").innerHTML = month + "/" + '23' + "/" + year;}

        if(day > 29){
            document.getElementById("chessdate").innerHTML = month + "/" + '29' + "/" + year + ' expired';
        } else{document.getElementById("chessdate").innerHTML = month + "/" + '29' + "/" + year;}
    });
})
