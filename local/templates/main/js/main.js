$(document).ready(function(){
    /*--Определение двайса--*/
    var state = {
        _device: "",
        _mobInit: function(){
            runMobile();
        },
        _tabletInit: function() {
            runTablet();
        },
        _descInit: function() {
            runDesctop();
        },
        _preWindowWidth: $(window).width(),
        _windowIncreases: function() {
            if(state._preWindowWidth > $(window).width()){
                state._preWindowWidth = $(window).width();
                return false;
            } else if (state._preWindowWidth < $(window).width()){
                state._preWindowWidth = $(window).width();
                return true;
            }
        }
    };

    (function( $ ) {
        $.fn.getDevice = function(braikPointMob,braikPointTablet) {
            Object.defineProperty(state, "device", {

                get: function() {
                    return this._device;
                },

                set: function(value) {
                    this._device = value;
                    if(value == "desctop"){
                        state._descInit();

                    } else if (value == "tablet"){
                        state._tabletInit();
                    } else if (value == "mobile"){
                        state._mobInit();
                    }
                }
            });

            $(this).on("resize load", function(){
                if($(this).width() < braikPointMob && state.device != "mobile"){
                    state.device = "mobile";
                } else if($(this).width() > braikPointMob && $(this).width() < braikPointTablet && state.device != "tablet") {
                    state.device = "tablet";
                }
                else if ($(this).width() > braikPointTablet && state.device != "desctop") {
                    state.device = "desctop";
                }
            });
        };
    })(jQuery);

    function destroySlick(className) {
        if($(className).hasClass('slick-initialized')) {
            $(className).slick('unslick');
        }
    }

    function runMobile(){
        console.log('mobile');
        $('.js-i-block-wrap').slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            adaptiveHeight: true,
            //fade: true,
            draggable: false,
            centerMode: false,
            prevArrow: '<a href=# class="slick-arrow prev-arrow">&#xe809</a>',
            nextArrow: '<a href=# class="slick-arrow next-arrow">&#xe807</a>'
        });
        setTimeout(function(){
            $('.js-i-block-wrap').slick('slickGoTo', 0);
        }, 50);

        $('.js-brands-left').slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            adaptiveHeight: true,
            draggable: false,
            centerMode: false,
            prevArrow: '<a href=# class="slick-arrow prev-arrow">&#xe809</a>',
            nextArrow: '<a href=# class="slick-arrow next-arrow">&#xe807</a>'
        });

    }

    function runTablet(){
        console.log('tablet');
        destroySlick('.js-i-block-wrap');


    }

    function runDesctop(){
        console.log('desctop');
        destroySlick('.js-i-block-wrap');
    }

    $(window).getDevice(768,1024);

    /*--Главная--*/

    $('.js-rec-slider').slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow: '<a href=# class="slick-arrow prev-arrow">&#xe809</a>',
            nextArrow: '<a href=# class="slick-arrow next-arrow">&#xe807</a>'
        }
    );

    $('.js-home-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        fade: true,
        prevArrow: '<a href=# class="slick-arrow prev-arrow">&#xe809</a>',
        nextArrow: '<a href=# class="slick-arrow next-arrow">&#xe807</a>'
        }
    );

    $('.js-bot-link').on('click', function(e){
        e.preventDefault();
        $(this).parent().toggleClass('open');
        $(this).parent().find('.foot-list').slideToggle(150);
    });

    $('.js-category-link').on('click', function(e){
        e.preventDefault();
        var item = $(this).closest('li');
        if (item.hasClass('open')){
            item.find('.category-list').slideUp(150);
            item.removeClass('open');
        } else {
            item.find('.category-list').slideDown(150);
            item.addClass('open');
        }
    });

    $('.js-toggle-catalog').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('open');
        $(this).closest('.catalog-link-wrap').find('.catalog-list').fadeIn(150)
    });

    $(document).mouseup(function (e) {
        var container = $(".catalog-list");
        if (container.has(e.target).length === 0){
            container.hide();
            $('.js-toggle-catalog').removeClass('open');
        }
    });

});