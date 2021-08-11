$(function() {

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active')
            .closest('div.tabs-2').find('div.tabs__content2').removeClass('active').eq($(this).index()).addClass('active');
    });

});

$('.filter-btn').on('click', function (){
    $('.filter td').toggleClass('show')
})
$('.filter-mob .close').on('click', function (){
    $(this).closest('.filter-mob').removeClass('open')
})
$(".filter-mob-btn > div:first-of-type").on('click', function (e){
    $('.filter-mob').toggleClass('open')
})

$('.open-this').on('click', function (evt){
    evt.preventDefault();
    $(this).siblings('.info').toggleClass('show');
})
$('.open-modal-btn').on('click', function (e){
    e.preventDefault()
    $('body').toggleClass('fixed')
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
$('.modal').click(function(e) {
    wrap.on('click', function(event) {
        $('body').toggleClass('fixed')
        var select = $('.modal_content');
        if ($(event.target).closest(select).length) return;
        var modal = $('.modal:visible');
        modal.fadeOut();
        wrap.unbind('click');
    });
});
$('.modal .close').on('click', function (e){

    $(this).closest('.modal').hide()
    $('body').removeClass('fixed')
})
$('.modal .bg-close').on('click', function (){
    $(this).closest('.modal').hide()
    $('body').removeClass('fixed')
})
$('.users-page .left-col .banks .item .green-header').on('click', function (){
    $(this).siblings('.info').toggleClass('open')
    $(this).toggleClass('open')

})
$('.sort > img').on('click', function (){
    $(this).siblings('.sort-filter').toggleClass('open')

})
$('.sort .sort-filter .close-btn').on('click', function (){
    $(this).closest('.sort-filter').toggleClass('open')

})
$('.users-page .table-block .users-table-mob .all-managers').on('click', function (e){
    e.preventDefault()
    $(this).siblings('.all-mng-info').toggleClass('open')
    $(this).toggleClass('open')


})
$('.users-page .table-block .users-table-mob .table-mob .item>span:nth-of-type(1)').on('click', function (){
    $(this).siblings('.info').toggleClass('open')
    $(this).toggleClass('open')

})
$('.migration-page .migration-table-mob .table-mob .item>span:nth-of-type(1)').on('click', function (){
    $(this).siblings('.info').toggleClass('open')
    $(this).toggleClass('open')

})
$('.modal:not(*)').on('click', function (){
    $(this).hide()
})
$('.selection .item > span').on('click', function (){
    $(this).toggleClass('open');
    $(this).siblings('.actions').toggleClass('open')

})
$('.users-page .left-col .banks .item .info>div:nth-of-type(1) >     a').on('click', function (e){
    e.preventDefault()
    $(this).parent().toggleClass('open');
    $(this).siblings('.actions').toggleClass('open');
})
$('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450; // длительность анимации

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });

});
jQuery(document).ready(function() {
    jQuery('.btrn-1').on('click', function() {
        jQuery('.btr-1')[0].click();
    });
});
jQuery(document).ready(function() {
    jQuery('.btrn-2').on('click', function() {
        jQuery('.btr-2')[0].click();
    });
});
jQuery(document).ready(function() {
    jQuery('.btrn-3').on('click', function() {
        jQuery('.btr-3')[0].click();
    });
});
