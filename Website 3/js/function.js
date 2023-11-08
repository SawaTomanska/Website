

// galeria
$(document).ready(function(){
	var Mymodal = $('#My-modal'); // kontener z obrazkiem
	var Close = $('#close'); // przycisk zamekania
	var thumb = $(".thumb");
	var Send = $(".button"); // przycisk wyślij w formularzu kontaktowym
	
	function closeFunction(){ // funkcja zamekająca
		$('p').remove('#remove');
		$('img').remove('#remove');
    	Mymodal.hide();
	}
	
	function addImg (link) { // funkcja dodawania obrazka
		var img = document.createElement("IMG");
		img.setAttribute("src", link);
		img.setAttribute("width", "900");
    	img.setAttribute("height", "auto");
		img.setAttribute("alt", "Image");
		img.setAttribute("id", "remove");
		Mymodal.append(img);
	}
	
	function addParagraf (name) { // funkcja dodawania paragrafu
		console.log(name);
		var p = document.createElement("p");
		p.setAttribute("id", "remove");
		if (name.indexOf('g') > -1) {
            i = name.indexOf('g');
            nameNew = name.slice(i,name.length);
            console.log(i);
            console.log(nameNew);
            var txt = "Grafika wykonana w Photoshopie CS3"
        } else if (name.indexOf('w') > -1) {
			i = name.indexOf('w');
            nameNew = name.slice(i,name.length);
            console.log(i);
            console.log(nameNew);
			var txt = "Layout Strony wykonany w HTML5, CSS3 i JavaScripcie. Projekt własny"
		} else if (name.indexOf('a') > -1) {
			i = name.indexOf('a');
            nameNew = name.slice(i,name.length);
            console.log(i);
            console.log(nameNew);
			var txt = "Aplikacja webowa Wykonana w HTML5, CSS3, JavaScripcie i PHP. Projekt własny"
		}
		
		p.textContent = txt; 
		$('.caption').append(p);
	}
	
	Mymodal.hide();
	
	thumb.click(function(){
    	 //Mymodal.show();
		
		var id = this.id; // pobranie id miniaturki
		console.log (id);
		Numberid = id.slice(5); // obcieciecie słowa thumb
		console.log (Numberid);
		var idImg = ("img/image-" + Numberid + ".jpg"); // klejenie do nazwy pliku
		console.log (idImg);
		
		addImg(idImg);
		addParagraf(id);
		Mymodal.show();
	});
	
	Close.click(function(){ // funkcja zamekania
		closeFunction();
	});
	
	$(function(){
		autosize($('textarea'));
	});
	
	
	//formularz kontaktowy
	
	//walidacja formularza
	$('#name').on('blur', function() {
		var input = $(this);
		var name_length = input.val().length;
		if(name_length >= 2 && name_length <= 20){
			input.removeClass("invalid").addClass("valid");
			input.next('#nameError').text("").removeClass("Error");
		}
		else{
			input.removeClass("valid").addClass("invalid");
			input.next('#nameError').text("Imie i Nazwisko może zawierać od 2 do 20 znaków.").addClass("Error");
			
		}
	});
	$('#email').on('blur', function() {
		var input = $(this);
		var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		var is_email = pattern.test(input.val());
		if(is_email){
			input.removeClass("invalid").addClass("valid");
			input.next('#emailError').text("").removeClass("Error");
		}
		else{
			input.removeClass("valid").addClass("invalid");
			input.next('#emailError').text("Nie poprawny adres email.").addClass("Error");
		}
	});
	$('#title').on('blur', function() {
		var input = $(this);
		var title_length = input.val().length;
		if(title_length >= 2 && title_length <= 30){
			input.removeClass("invalid").addClass("valid");
			input.next('#titleError').text("").removeClass("Error");
		}
		else{
			input.removeClass("valid").addClass("invalid");
			input.next('#titleError').text("Tytuł może zawierać od 2 do 30 znaków.").addClass("Error");
			
		}
	});
	$('#content').on('blur', function() {
		var input = $(this);
		var content_length = input.val().length;
		if(content_length >= 2 && content_length <= 100){
			input.removeClass("invalid").addClass("valid");
			input.next('#contentError').text("").removeClass("Error");
		
		}
		else{
			input.removeClass("valid").addClass("invalid");
			input.next('#contentError').text("Proszę wipsać wiadomość. Może zawierać do 100 znaków.").addClass("Error");
		}   
	});
	$('#submit button').click(function(event){
			var name = $('#name');
			var email = $('#email');
			var title = $('#title');
			var content = $('#content');
			
			if(name.hasClass('valid') && email.hasClass('valid') && title.hasClass('valid') && content.hasClass('valid')){
				input.next('#News').text("Pomyślnie wysłano formularz.").addClass("ok");
			}
			else {
				event.preventDefault();
				input.next('#News').text("Uzupełnij wszystkie pola!").addClass("Error");
			}
	});
});