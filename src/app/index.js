import $ from 'jquery';
import '../assets/themes/base/styles/base.scss';

//Цвет фона в меню
$('.link').on('focus', function(){
    $( this ).css("background-color", "rgb(42,45,55)").append( "<span class='text _font'> (активная) </span>" );
    $( this ).next().css("background-color", "rgb(31,34,41)");
    $( this).prev().css("background-color", "rgb(31,34,41)");
    });

$('.link').blur('focus', function(){
    $( this ).css("background-color", "").children().remove();
    $( this ).next().css("background-color", "");
    $( this  ).prev().css("background-color", "");
});



//Переход при заполнение номера карты
$('._card').keyup(function() {
    if ($(this).val().length > 3) {
        $(this).next().focus();
    }
});

//Ввод только цифр
$('._card, ._card-code').keyup(function(){
    this.value = this.value.replace(/[^0-9]/, '');
});

//Ввод только латинских букв
$('._name').keyup(function(){
    this.value = this.value.replace(/[^a-zA-Z -]/,'').toUpperCase();
});

//Проверка форм

$('#target').on('submit', function() {

    $('._card, ._name').filter(function(){
        return $(this).toggleClass('empty', !this.value || $(this).val().length < 4)
    });

    $('._card-code').filter(function(){
        return $(this).toggleClass('empty', !this.value || $(this).val().length < 3)
    });

    if( $('input').hasClass('empty')){
        alert("Проверьте правильность введенных данных");
        return false;
    }else{
        alert("Данные отправлены, Спасибо!");
    }
});

