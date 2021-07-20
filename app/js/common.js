$('.filter-btn').on('click', function (){
    $('.filter td').toggleClass('show')
})
$('.open-this').on('click', function (evt){
    evt.preventDefault();
    $(this).siblings('.info').toggleClass('show');
})
$('.burger').on('click', function (){
    $(this).toggleClass('open')
    $('.menu-nav').toggleClass('open')
    $('body').toggleClass('fixed')
})
var wrap = $('#wrapper'),
    btn = $('.open-modal-btn');

btn.on('click', function() {
    var modalId = $(this).data('modal');
    var modal = $('#' + modalId);
    modal.fadeIn();
});

// close modal
$('.modal').click(function() {
    wrap.on('click', function(event) {
        var select = $('.modal_content');
        if ($(event.target).closest(select).length) return;
        var modal = $('.modal:visible');
        modal.fadeOut();
        wrap.unbind('click');
    });
});
$('.selection .item > span').on('click', function (){
    $(this).toggleClass('open');
    $(this).siblings('.actions').toggleClass('open')

})
