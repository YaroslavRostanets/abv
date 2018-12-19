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
        console.log('mobile');
    }

    function runTablet(){
        console.log('tablet');

    }

    function runDesctop(){
        console.log('desctop');
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



});