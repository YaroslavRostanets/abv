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

        $('.i-block').each(function(i, item){
            $(item).css({
                'width': $('.i-block-wrap').width() + 'px'
            })
        });

        $('.js-i-block-wrap').slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            adaptiveHeight: true,
            //fade: true,
            draggable: false,
            centerMode: false,
            variableWidth: true,
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

        if( $(window).width() < 576 ) {
            $('.nav-link[href="#accessories-tab"]').click();

        }

    }

    function runTablet(){
        console.log('tablet');
        destroySlick('.js-i-block-wrap');
        destroySlick('.js-brands-left');

    }

    function runDesctop(){
        console.log('desctop');
        destroySlick('.js-i-block-wrap');
        destroySlick('.js-brands-left');
    }

    $(window).getDevice(768,1024);

    /*--Главная--*/

    $('[data-styler]').styler();

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
        item.siblings().find('.category-list').slideUp(150);
        item.siblings().removeClass('open');
        item.find('.category-list').slideDown(150);
        item.addClass('open');

    });

    $('.js-toggle-catalog').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $(this).closest('.catalog-link-wrap').find('.catalog-list').fadeToggle(150);
    });

    $(document).mouseup(function (e) {
        var container = $(".catalog-link-wrap");
        if (container.has(e.target).length === 0){
            container.find('.catalog-list').hide();
            $('.js-toggle-catalog').removeClass('open');
        }
    });

    $('.js-mobile-catalog').on('click', function(){
        var item = $(this).closest('.catalog-link-wrap');

        if( item.find('.second-level-contain').length ) {
            var html = item.find('.second-level-contain').clone(true);
            console.log(html);

            $('.menu-second-level').html('').append(html);
            setTimeout(function(){
                $('.menu-first-level').animate({
                    opacity: 0,
                    marginLeft: '-50px'
                }, 300, 'linear', function() {
                    $('.menu-second-level').attr('style','');
                    $(this).hide();
                });
            },300);
        }
    });

    $('.second-level-contain > .js-back-btn').on('click', function(){
        $('.menu-second-level').animate({
            opacity: 0,
            marginLeft: '50px'
        }, 300, 'linear', function() {
            $('.menu-first-level').attr('style','');
        });
    });

    $('.js-show-third-level').on('click', function () {
        var item = $(this).closest('li');

        if( item.find('.third-level-contain').length ){
            var html = item.find('.third-level-contain').clone(true);
            $('.menu-third-level').html('').append(html);
            setTimeout(function(){
                $('.menu-second-level').animate({
                    opacity: 0,
                    marginLeft: '-50px'
                }, 300, 'linear', function() {
                    $('.menu-third-level').attr('style','');
                    $(this).hide();
                });
            },300);
        }
    });

    $('.third-level-contain > .back-btn').on('click', function(){
        $('.menu-third-level').animate({
            opacity: 0,
            marginLeft: '50px'
        }, 300, 'linear', function() {
            $('.menu-second-level').attr('style','');
        });
    });

    $('.js-mobile-menu').on('click', function(){
        $('body').toggleClass('lock');
        $('.mobile-menu').fadeToggle(150);
    });

    /*--Детальная --*/

    $('.js-prod-slider').slick({
        slidesToShow: 1,
        asNavFor: '.js-prod-slider-nav',
        prevArrow: '<a href=# class="slick-arrow prev-arrow">&#xe809</a>',
        nextArrow: '<a href=# class="slick-arrow next-arrow">&#xe807</a>'
    });

    $('.js-prod-slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.js-prod-slider',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        variableWidth: true,
        prevArrow: '<a href=# class="slick-arrow prev-arrow">&#xe809</a>',
        nextArrow: '<a href=# class="slick-arrow next-arrow">&#xe807</a>'
    });

    $('.product-page a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
        console.log('show');
        destroySlick('.js-accessories');
        $('.js-accessories').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '<a href=# class="slick-arrow prev-arrow">&#xe809</a>',
            nextArrow: '<a href=# class="slick-arrow next-arrow">&#xe807</a>',
            responsive: [
                {
                    breakpoint: 1240,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        e.target
        e.relatedTarget
    });

    $('video').parent().click(function () {
        if($(this).children("video").get(0).paused){
            $(this).children("video").get(0).play();
            $(this).children(".playpause").fadeOut();
        }else{
            $(this).children("video").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });

    $('.js-char-toggle').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('open');
        $('#characteristic-tab').slideToggle();
    });

    /*-- Каталог --*/

    $('.js-toggle-category').on('click', function (e) {
        e.preventDefault();
        var parent = $(this).closest('li');
        parent.siblings().removeClass('open');
        parent.siblings().find('.cat-list-cont').slideUp(150);
        parent.toggleClass('open');
        parent.find('.cat-list-cont').slideToggle(150);
    });

    $('.js-foldable-filter .filter-title span').on('click', function(e){
        e.preventDefault();
        var parent = $(this).closest('.js-foldable-filter');
        parent.find('.filter-list').slideToggle(150);
        parent.toggleClass('list-hidden');
    });

});