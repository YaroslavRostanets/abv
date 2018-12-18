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

    function runMobile(){
        //console.log('mobile');
    }

    function runTablet(){
        //console.log('tablet');

    }

    function runDesctop(){
        //console.log('desctop');
    }

    $(window).getDevice(768,1024);

    $('.js-std-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        infinite: false,
        dots: true
    });

    $('.js-product-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    speed: 100
                }
            }
        ]
    });

    $('.js-product-slider').wrap('<div class="product-slider-wrap" />');

    $('.js-product-slider .slick-arrow').each(function(i, item){
        $(item).appendTo($(this).closest('.product-slider-wrap'));
    });

    $('.js-news-slider').slick({
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    speed: 100
                }
            }
        ]
    });

    $('.js-news-slider .slick-arrow').each(function(i, item){
        $(item).appendTo($(this).closest('.news-slider-wrap'));
    });

    $('[data-styler]').styler();

    if($(window).width() > 576){
        $('.js-custom-scroll').mCustomScrollbar();
    }
    $('.sel-wrap .jq-selectbox__dropdown ul').mCustomScrollbar();

    $('.js-has-dropdown > a').on('click', function(){
        var parent = $(this).parent();
        if (parent.hasClass('open')){
            parent.removeClass('open');
            parent.find('.dropdown-list').fadeOut(100);
        } else {
            $(".js-has-dropdown").removeClass('open');
            $(".dropdown-list").fadeOut(100);
            parent.addClass('open');
            parent.find('.dropdown-list').fadeIn(100);
        }
    });

    $(document).mouseup(function (e) {
        var container = $(".js-has-dropdown");
        if (container.has(e.target).length === 0){
            container.removeClass('open');
            $('.dropdown-list').fadeOut(100);
        }
    });

    $('.city-selector .dropdown-list').mCustomScrollbar();
    $('.right-city .jq-selectbox__dropdown ul').mCustomScrollbar();

    $('.tabs-nav > li > a').on('click', function(e){
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
        var activeTab = $(this).attr('href');
        $(activeTab).fadeIn(300).siblings().hide();
    });

    $('.tabs-nav > .active > a').click();

    $('.js-toggle-hours').on('click', function(){
       $(this).closest('.one-place').toggleClass('open').find('.open-hours').slideToggle();
    });

    $('.mobile-home-slider').slick({
        slidesToShow: 1,
        centerMode: true,
        arrows: false,
        dots: true
    });

    $('.js-open-map').on('click', function(){
        $('.map-search-cont').addClass('showmap');

        $('.js-view-all').parent().hide();
    });

    $('.js-close-map').on('click', function(){
        $('.map-search-cont').removeClass('showmap');

        $('.js-view-all').parent().show();
    });

    $('.js-view-all').on('click', function(){
        $(this).hide();
        $('.js-custom-scroll').css({
            'overflow': 'auto'
        });
    });

    $('div.js-cat-checkbox, label.js-cat-checkbox').on('click', function(){
        if($(this).find('input[type=checkbox]').is( ":checked" )){
            $(this).closest('li').addClass('selected');
        } else {
            $(this).closest('li').removeClass('selected');
        }
    });

    $('.std-dropdown-list').mCustomScrollbar();

    $('.std-dropdown-link').on('click', function(){
        var parent = $(this).closest('.std-dropdown');

        if (parent.hasClass('open')){
            parent.removeClass('open');
            parent.find('.std-dropdown-list').fadeOut(150);
        } else {
            parent.addClass('open');
            parent.find('.std-dropdown-list').fadeIn(150);
        }
    });

    $(document).mouseup(function (e) {
        var container = $(".std-dropdown");
        if (container.has(e.target).length === 0){
            $('.std-dropdown.open').removeClass('open');
            $('.std-dropdown-list').fadeOut(100);
        }
    });

    $('.js-toggle-filter').on('click', function(){
        var parent = $(this).closest('.filter-block');

        if (parent.hasClass('open')){
            parent.removeClass('open');
            parent.find('.filter-block-cont').slideUp({ duration: 600, easing: "easeOutCubic" });
        } else {
            parent.addClass('open');
            parent.find('.filter-block-cont').slideDown({ duration: 600, easing: "easeOutCubic" });
        }

    });

    $('.js-toggle-category').on('click', function(){
        var parent = $(this).closest('li');

        if (parent.hasClass('open')){
            parent.removeClass('open');
            parent.find('.filter-dropdown').slideUp({ duration: 600, easing: "easeOutCubic" });

        } else {
            parent.addClass('open');
            parent.find('.filter-dropdown').slideDown({ duration: 600, easing: "easeOutCubic" });
        }
    });
    $('.filter-list li.open .filter-dropdown').show();

    function countItemsShow() {
        $('[data-items-show]').each(function(i, item){
            var itemsShowCount = +$(this).attr('data-items-show');
            var listHeight = 0;

            for(var j = 0; j < itemsShowCount; j++){
                listHeight += $(this).find('.filter-list > li').eq(j).outerHeight(true);
            }
            if ($(item).find('.filter-list').outerHeight() > listHeight) {
                $(item).find('.filter-list').css({
                    'max-height': listHeight + 'px'
                });
            } else {
                $(this).find('.js-show-all').remove();
            }


        });
    }

    countItemsShow();

    $('.js-show-all').on('click', function(){
        var parent = $(this).closest('.filter-block');
        var toggle = $(this).attr('data-toggle-variant');

        if (parent.hasClass('show-all')){
            parent.removeClass('show-all');
        } else {
            parent.addClass('show-all');
        }
        $(this).attr('data-toggle-variant', $(this).text() );
        $(this).text(toggle);
    });

    /*-- модалка выбрать на карте --*/
    $('.js-view-on-map').on('click', function(e){
        e.preventDefault();
        $('#show-on-map').modal({
            fadeDuration: 100
        });
    });
    /*-- конец модалка выбрать на карте --*/

    /*-- модалка Авторизация --*/
    $('.js-sign-in').on('click', function(){
        $('#sign-in').modal({
            fadeDuration: 200
        });
    });
    /*-- конец модалка Авторизация --*/

    $('#callback-form [name = phone]').mask('+38 (099)-999-99-99');
    // Подписка маска футер
    $('.js-subscribe-in').mask('(099)-999-99-99');

    // Открыть\закрыть фильтры
    $('.js-open-filters').on('click', function(){
        $('.js-catalog-filter').modal({
            fadeDuration: 100
        });
    });
    $('.js-catalog-filter').on($.modal.OPEN, function(event, modal) {
        countItemsShow();
    });

    /*-- Слайдер Линзы каталог --*/

    $('.js-lenses-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        centerMode: false,
        arrows: true,
        infinite: false,
        prevArrow: "<a class='fa fa-angle-left'></a>",
        nextArrow: "<a class='fa fa-angle-right'></a>",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]

    });

    $('.js-hover-color').hover(function(){
        var parent = $(this).closest('.img-slider-wrap');
        var imgSrc = $(this).attr('data-src');
        var oldImgSrc = parent.find('.colors-img-cont img').attr('src');
        parent.attr('data-src', oldImgSrc);
        parent.find('.colors-img-cont img').remove();
        var wrap = parent.find('.colors-img-cont').append(
            '<img src=' + imgSrc + '>'
        );
        wrap.find('img').hide().fadeIn(150);
    }, function(){
        var parent = $(this).closest('.img-slider-wrap');
        var img = parent.attr('data-src');
        $(this).closest('.img-slider-wrap').find('.colors-img-cont img').remove();
        parent.find('.colors-img-cont').append(
            '<img src=' + img + '>'
        );
    });

    /*-- конец Слайдер Линзы каталог --*/

    $('.lenses-buy label').on('click', function(){
        var parent = $(this).closest('tr');
        if($(this).find('input[type=radio]').is( ":checked" )){
            parent.siblings().removeClass('selected');
            parent.addClass('selected');
        } else {

        }
    });

    $('.js-datelist input').on('input', function(){
        var parent = $(this).closest('.std-dropdown');
        if($(this).val().length >= 1){
            parent.find('.std-dropdown-list').fadeIn(100);
        } else {
            parent.find('.std-dropdown-list').fadeOut(100);
        }
    });

    $('.js-datelist input').on('focus', function(){
        $('.std-dropdown-list').fadeOut(100);
    });

    $('[data-show-rows]').each(function(i, item){
        var showRowsCount = $(this).attr('data-show-rows');
        $(item).find('tr').each(function(i, item){
            if(i >= showRowsCount){
                $(item).hide();
            }
        });
    });

    $('.js-show-table').on('click', function(){
        var parent = $('.char-table-wrap');
        var toggle = $(this).attr('data-toggle-variant');

        if(parent.hasClass('open')){
            parent.removeClass('open');
            var showRowsCount = parent.attr('data-show-rows');
            parent.find('tr').each(function(i, item){
                if(i >= showRowsCount){
                    $(item).hide();
                }
            });
        } else {
            parent.addClass('open');
            parent.find('tr').show();
        }

        $(this).attr('data-toggle-variant', $(this).text() );
        $(this).text(toggle);

    });

    $('.box-sel label').on('click', function(){
        var parent = $(this).closest('li');
        var check = $(this).find('input[type=radio]');

        if(check.is( ":checked" )){
            parent.siblings().removeClass('selected');
            parent.addClass('selected');
        }
    });

    $('.js-give-feedback').on('click', function(){
        $('#give-feedback').modal({
            fadeDuration: 200
        });
    });

    $('.js-starrr').starrr({
        rating: 0,
        change: function(e, value){
            console.log('rate value: ' + value);
        }
    });

    $('.js-char-link').on('click', function(e){
        e.preventDefault();
        $(this).closest('li').toggleClass('open');
        $(this).closest('li').find('.one-mobile-tab').slideToggle();
    });

    function glassSliderInit() {
        $('.js-glass-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            dots: true,
            arrows: true,
            infinite: $('.js-glass-slider .glass-item').length > 3 ? true : false,
            responsive: [
                {
                    breakpoint: 1024,
                    speed: 100
                },
                {
                    breakpoint: 576,
                    settings: {
                        dots: false,
                        arrows: false
                    }
                }
            ]
        });
    }

    if ( $('.js-glass-slider .glass-item').length > 3 ) {
        glassSliderInit();
    } else if ($('.js-glass-slider .glass-item').length == 3) {
        $('.js-glass-slider').append('<div class="empty-item"></div>');
        $('.js-glass-slider').on('breakpoint', function(){
            $('.js-glass-slider .slick-dots li:last-child').hide();
        });
        $('.js-glass-slider .slick-dots li:last-child').hide();
        glassSliderInit();
        $('.js-glass-slider .slick-next').off().on('click', function(){
            var slider = $(this).closest('.js-glass-slider');
            if (slider.slick('slickCurrentSlide') < 2) {
                slider.slick('slickNext');
            }
        });
    } else if ($('.js-glass-slider .glass-item').length == 2) {
        $('.js-glass-slider').append('<div class="empty-item"></div><div class="empty-item"></div>');
        glassSliderInit();
        $('.js-glass-slider').on('breakpoint', function(){
            $('.js-glass-slider .slick-dots li:nth-last-child(1), .js-glass-slider .slick-dots li:nth-last-child(2)').hide();
        });
        $('.js-glass-slider .slick-dots li:nth-last-child(1), .js-glass-slider .slick-dots li:nth-last-child(2)').hide();
        $('.js-glass-slider .slick-next').off().on('click', function(){
            var slider = $(this).closest('.js-glass-slider');
            if (slider.slick('slickCurrentSlide') < 1) {
                slider.slick('slickNext');
            }
        });
    } else {
        $('.js-glass-slider').addClass('one-slide-contain');
    }

    $('.js-buy-one-click').on('click', function(){
        $('#buy-one-click').modal({
            fadeDuration: 200
        });
    });

    $('.js-select-color').hover(function(){
        var colorName = $(this).attr('data-color-name');
        var colorSrc = $(this).attr('data-hover-src');

        $('.js-color-name').text(colorName);
        $('.js-hover-img').attr('src', colorSrc);

    }, function(){
        $('.js-color-name').text('');
        $('.js-hover-img').attr('src', $('.js-hover-img').attr('data-src'));
    });

    $('.js-open-menu').on('click', function(){
        $('#mobile-menu').modal({
            fadeDuration: 150
        });
    });

    $('.js-has-dropdown > a').on('click', function(){
        $(this).toggleClass('open');
        $(this).closest('.js-has-dropdown').find('.mobile-dropdown').slideToggle();
    });

    $('.js-search-mobile').on('click', function(){
        $('#mobile-search-modal').modal({
            fadeDuration: 150
        });
    });

    $('.js-search-result').mCustomScrollbar();

    $('.js-go-to-rev').on('click', function(){
        $('[href="#reviews"]').click();
        $([document.documentElement, document.body]).animate({
            scrollTop: $('.vert-tabs').offset().top
        }, 1000);
    });

    (function( $ ) {
        $.fn.readMore = function(options) {
            var separator = options.separator || '<a href="#" class="more">Читать все</a>';
            $(this).each(function(i, item){
                var characters = $(item).data('sym-count');
                var text = $(item).text().trim();
                if ( text.length < +characters ) return false;
                $(item).context.fullText = text;
                $(item).text( text.substring(0,characters) );
                $(item).append(separator);
                $(item).on('click', function(e){
                    e.preventDefault();
                    $(this).text( $(this).context.fullText );
                });
            });

        };
    })(jQuery);

    $('[data-sym-count]').readMore({
        separator: '<span class="rev-read-more">... <a href="#" class="more">Читать все</a></span>'
    });

    /*--Go To Top --*/
    (function( $ ) {
        $.fn.goToTop = function() {
            var _this = $(this);
            $(document).scroll(function(){
                var windowHeigh = $(window).height();
                var contTop = window.pageYOffset ? window.pageYOffset : document.body.scrollTop;
                if (windowHeigh > contTop){
                    _this.fadeOut();
                } else {
                    _this.fadeIn();
                }
            });
            $(this).click(function(){
                var scroll_pos=(0);
                $('html, body').animate({scrollTop:(scroll_pos)}, '4000');
            });
        };
    })(jQuery);

    $('#go-to-top').goToTop();
    /*--Конец Go To Top --*/

    $('.js-brands-slider').slick({
        slidesToShow: 3,
        prevArrow: "<a class='fa fa-angle-left'></a>",
        nextArrow: "<a class='fa fa-angle-right'></a>",
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    infinite: true
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

    $('.js-rev-slider').slick({
        slidesToShow: 3,
        prevArrow: "<a class='fa fa-angle-left'></a>",
        nextArrow: "<a class='fa fa-angle-right'></a>",
        dots: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    $('.js-rev-slider').wrap('<div class="rev-slider-wrap" />');

    $('.js-rev-slider .slick-arrow').each(function(i, item){
        $(item).appendTo($(this).closest('.rev-slider-wrap'));
    });

    $('.js-promo').mask('9999');
    $('.js-phone-mask').mask('(099)-999-99-99');

    $('.js-search-input').on('focus', function(){
       $(this).closest('.search-wrap').addClass('focused');
    });

    /*$('.js-search-input').on('focusout', function(){
        $(this).closest('.search-wrap').removeClass('focused open');
        $(this).closest('.search-wrap').find('.search-result').fadeOut(100);

    });*/

    $('.js-search-input').keyup(function(){
        var result = $(this).closest('.search-wrap').find('.search-result');
        if($(this).val().length > 2){
            $(this).closest('.search-wrap').addClass('open');
            result.fadeIn(100);
        } else {
            result.fadeOut(100);

        }
    });

    $('.js-site-menu > li').hover(function(){
        var item = $(this).closest('li');
        item.find('.drop-down-menu').fadeIn(100);
    }, function(){
        var item = $(this).closest('li');
        item.find('.drop-down-menu').fadeOut(100);
    });

    $('.js-next-item').on('click', function(e){
        e.preventDefault();
        var parent = $(this).closest('.acc-item');

            parent.find('.acc-cont').slideUp(300, function(){
            parent.removeClass('show');
            parent.addClass('is-filled');
            parent.siblings('.acc-item:not(.is-filled)').eq(0).addClass('show');
            parent.siblings('.acc-item:not(.is-filled)').eq(0).find('.acc-cont')
                .slideDown(300, function(){
            });
        });
    });

    $('.js-check-edit').on('click', function(e){
        e.preventDefault();
        var edited = $(this).closest('.acc-item');
        edited.removeClass('is-filled').addClass('show');

        $('.acc-item.show').find('.acc-cont').slideUp(300, function(){
            $('.acc-item.show').removeClass('show');
            edited.find('.acc-cont').slideDown(300);
        });
    });


    $('.js-news-search-result').slick({
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    speed: 100
                }
            }
        ]
    });

    $('.js-news-search-result').wrap('<div class="news-search-slider-wrap" />');

    $('.js-news-slider .slick-arrow').each(function(i, item){
        $(item).appendTo($(this).closest('.news-search-slider-wrap'));
    });

    $('.js-toggle-text').on('click', function(e){
        e.preventDefault();
        var variant = $(this).text();
        $(this).text( $(this).data('variant') );
        $(this).data( 'variant', variant );
        $(this).closest('.descr-text-wrap').toggleClass('show');
    });

    $('.js-ask-question').on('click', function(e){
        e.preventDefault();
        $('#ask-question').modal({
            fadeDuration: 100
        });
    });
    $('.js-product-question').on('click', function(e){
        e.preventDefault();
        $('#product-question').modal({
            fadeDuration: 100
        });
    });

    $('.js-pay-bonuses').on('click', function(){
        $(this).closest('.bonus-method').toggleClass('active');
    });

    $('.page .jq-selectbox__dropdown ul').mCustomScrollbar();

    $('.js-read-order').on('click', function(e){
        e.preventDefault();
        $(this).closest('tr').next('.item-info').toggle();
    });

    $('.js-req-call').on('click', function(){
        $('#callback').modal({
            fadeDuration: 100
        });
    });

    if ( $(window).width() > 768 ) {
        $('.brand-text').mCustomScrollbar();
        $('.action-text').mCustomScrollbar();
        $('.thankyou-page .prod-wrap').mCustomScrollbar();
    }

    $('.mini-basket .products-wrap').mCustomScrollbar();
    $('.mini-wishlist .products-wrap').mCustomScrollbar();

    $('.js-basket-link').hover(function(){
        $(this).addClass('show');
        $(this).find('.mini-basket').fadeIn(101);
    }, function(){
        $(this).removeClass('show');
        $(this).find('.mini-basket').fadeOut(100);
    });

    $('.js-wishlist-link').hover(function(){
        $(this).addClass('show');
        $(this).find('.mini-wishlist').fadeIn(100);
    }, function(){
        $(this).removeClass('show');
        $(this).find('.mini-wishlist').fadeOut(100);
    });

    $('.one-news-cont').each(function(){
       if ( $(this).find('.img-cont').height() < $(this).find('.news-detail').height() ) {
           var height = $(this).find('.img-cont').height();
           $(this).find('.news-detail').attr('data-height', height );
           $(this).find('.news-text').css( {'height': height - 85} );
       } else {
           $(this).find('.js-show-news').remove();
           $(this).addClass('show');
       }
    });

    $('body').on('click', '.js-show-news',  function (e) {
        e.preventDefault();
        var variant = $(this).text();
        $(this).text( $(this).data('variant') );
        $(this).data( 'variant', variant );

        $(this).closest('.one-news-cont').toggleClass('show');
    });

    $('a[href="#footer-feedback"]').on('click', function(e){
        e.preventDefault();
        $('.feedback-form').slideDown();
        if( $(window).width() < 768 ){
            $('html,body').animate({
                scrollTop: $('.feedback-form').offset().top
            }, 'slow');
        }
    });

    $('.js-close-feedback').on('click', function(e){
        e.preventDefault();
        $('.feedback-form').slideUp();
    });

    $('#show-on-map .js-map-show').on('click', function(){
        $(this).closest('#show-on-map').addClass('show-map');
    });

    $('#show-on-map .js-hide-map').on('click', function(){
        $(this).closest('#show-on-map').removeClass('show-map');
    });

    /*-- scroll to map --*/
    $('.scroll-to-map').on('click', function() {
        $('html, body').animate({
            scrollTop: $("#shops_list_main").offset().top
        }, 1000);
    });
    /*-- end scroll to map --*/

    $('a[href="#optics"]').on("click", function (e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#shops_list_main").offset().top
        }, 1100);
    });

});