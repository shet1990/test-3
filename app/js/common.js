$(function() {

    var loader = '<div class="ajax__loader"></div>';

    $('.fa-search').on('click', function () {
        $(this).closest('form').submit();
    })

    /* Меню, меню категорий тестов, языковое меню, личный кабинет в хэдере */
    $('.menu-item-has-children').on('click', function (e) {
        $('.js__full__menu').removeClass('is-active');
        $('.head__lang__wrap').removeClass('is-active');
        $('.login__menu__wrap').removeClass('is-active');
        var title = $(this).children('a').text(),
            list = $(this).children('ul').children('li').clone();
        if($(this).hasClass('is-active')){
        } else {
            e.preventDefault();
            $('.sub__menu ul li').detach();
            var menu = $('<ul class="flex__wrap"></ul>').append(list);
            $('.sub__menu .sub__menu__nav .sub__menu__title').text(title);
            $('.sub__menu .sub__menu__nav').append(menu);
            $('.sub__menu').slideDown('slow');
            $('.sub__menu').addClass('is-active');
            $(this).addClass('is-active');
        }
    });
    $('.js__full__menu .fa-ellipsis-h').on('click', function () {
        $('.sub__menu').removeClass('is-active');
        $('.sub__menu').slideUp('slow');
        $('.head__lang__wrap').removeClass('is-active');
        $('.menu-item-has-children').removeClass('is-active');
        $('.login__menu__wrap').removeClass('is-active');
        var parent = $(this).closest('.js__full__menu'),
            menu = $('.head__nav').children('ul').clone();
        if($(parent).hasClass('is-active')){
            $(parent).removeClass('is-active');
        } else {
            $('.head__nav__sub ul').detach();
            $('.head__nav__sub').append(menu);
            $(parent).addClass('is-active');
        }
    })
    $('.head__lang__active').on('click', function () {
        $('.sub__menu').removeClass('is-active');
        $('.sub__menu').slideUp('slow');
        $('.menu-item-has-children').removeClass('is-active');
        $('.js__full__menu').removeClass('is-active');
        $('.login__menu__wrap').removeClass('is-active');
        var parent = $(this).closest('.head__lang__wrap');
        if($(parent).hasClass('is-active')){
            $(parent).removeClass('is-active');
        } else {
            $(parent).addClass('is-active');
        }
    })
    $('.head__login__btn .fa-user').on('click', function () {
        $('.sub__menu').removeClass('is-active');
        $('.sub__menu').slideUp('slow');
        $('.menu-item-has-children').removeClass('is-active');
        $('.js__full__menu').removeClass('is-active');
        $('.head__lang__wrap').removeClass('is-active');
        var menu = $('.login__menu__wrap');
        if($(menu).hasClass('is-active')){
            $(menu).removeClass('is-active');
        } else {
            $(menu).addClass('is-active');
        }
    })
    /* Конец */

    /* Скрытие всех выпадашек при клике мимо */
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".sub__menu, .menu-item-has-children, .js__full__menu, .head__lang__wrap, .login__menu__wrap, .head__login__btn .fa-user").length) {
            $('.sub__menu').removeClass('is-active');
            $('.sub__menu').slideUp('slow');
            $('.menu-item-has-children').removeClass('is-active');
            $('.js__full__menu').removeClass('is-active');
            $('.head__lang__wrap').removeClass('is-active');
            $('.login__menu__wrap').removeClass('is-active');
        }
        e.stopPropagation();
    });
    /* Конец */

    /* Анимация гамбургера */
    $('header .my__hamburger').on('click', function(){
        //Появление
        if(!$(this).hasClass('is-active')){
            $(this).addClass('is-active');
            $('.head__nav').slideDown();
        } else {
            //Скрытие
            $(this).removeClass('is-active');
            $('.head__nav').slideUp();
        }
    });
    $('.sidebar .my__hamburger').on('click', function(){
        //Появление
        if(!$(this).hasClass('is-active')){
            $(this).addClass('is-active');
            $('.sidebar').addClass('is-active');
        } else {
            //Скрытие
            $(this).removeClass('is-active');
            $('.sidebar').removeClass('is-active');
        }
    });
    /* Конец */

    $('.js__spam').on('click', function () {
        $('.modal__spam__fixed').addClass('is-active');
    })

    /* Плавный перех по буквам в алфавите */
    $('.alfabet__list__nav a').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('.alfabet__list__nav a').removeClass('is-active');
        $(this).addClass('is-active');
        $('body,html').animate({scrollTop: top}, 1000);
    })
    /* Конец */

    /* Ховер-модалка в алфавите */
    $('.alfabet__list__word li').hover(function () {
        var left = $(this).find('a').width() + 20,
            top = '10px',
            width = '600px';
        if($(window).width() < 992){
            left = '0';
            top = 'calc(100%)';
            width = '100%';
        }
        var name = $(this).data('name'),
            desc = $(this).data('desc'),
            src = $(this).data('link'),
            html = `<div class="alfabet__hover__fixed column" style="width: ${width}; top: ${top}; left: ${left}px;">
                            <p><span>${name}</span></p>
                            ${desc}
                            <div class="flex__between">
                                <a href="${src}" class="alfabet__hover__dot"><i class="fas fa-ellipsis-h"></i></a>
                                <a href="${src}" class="alfabet__hover__red">Подробнее</a>
                            </div>
                        </div>`;
        $(this).append(html);
    }, function () {
        $(this).find('.alfabet__hover__fixed').detach();
    });
    /* Конец */

    /* Модалка авторизации и регистрации */
    $('.modal__open__btn').fancybox({
        closeBtn: false,
        padding: 0,
        openEffect: 'fade',
        closeEffect: 'fade',
        beforeClose: function () {
            $('.modal__spam__fixed').removeClass('is-active');
        }
    });

    $('.modal__auth__input.is-error .fa-times').on('click', function () {
        $(this).closest('.modal__auth__input').removeClass('is-error');
        $(this).closest('.modal__auth__input').find('input').val('');
    });
    $('.pass__control').on('click', function () {
        var parent = $(this).closest('.pass__view');
        if($(parent).hasClass('is-view')){
            $(parent).removeClass('is-view');
            $(parent).find('input').attr('type', 'password');
        } else {
            $(parent).addClass('is-view');
            $(parent).find('input').attr('type', 'text');
        }
    });
    /* Конец */

    /* Конец */
    $('.banner__soc__link span').click(function () {
        var parent = $(this).closest('.banner__soc__link');
        if($(parent).hasClass('is-active')){
            $(parent).removeClass('is-active');
        } else {
            $(parent).addClass('is-active')
        }
    })
    /* Конец */

    /* Определение ховер элемента на странице блога */
    if($('.blog__list__small').hasClass('js__hover')){
        hoverBlogItem();
    }
    $(window).on('resize', function () {
        if($('div').hasClass('blog__list__small')){
            hoverBlogItem();
        }
    })
    function hoverBlogItem() {
        $('.blog__list__small .figure').removeClass('is-active');
        var list = $('.blog__list__small');
        $(list).find('.figure').each(function (index) {
            if(index == 0)
                $(this).addClass('is-active');
            if($(window).width() > 1150) {
                if(index % 5 == 0)
                    $(this).addClass('is-active');
            } else if($(window).width() <= 1150 && $(window).width() > 870) {
                if(index % 4 == 0)
                    $(this).addClass('is-active');
            } else if($(window).width() <= 870 && $(window).width() > 580) {
                if(index % 3 == 0)
                    $(this).addClass('is-active');
            } else{
                if((index + 1) % 2 != 0)
                    $(this).addClass('is-active');
            }
        })
    }
    /* Конец */

    /* Слайдер на главной */
    if($('div').hasClass('cat__test__slider')){
        $('.cat__test__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            arrows: true,
            speed: 500,
            prevArrow: '<div class="slider__btn slider__prev flex__center"><span class="fas fa-angle-left"></span></div>',
            nextArrow: '<div class="slider__btn slider__next flex__center"><span class="fas fa-angle-right"></span></div>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 660,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }
    /* Конец */

    /* Слайдер категорий */
    if($('div').hasClass('test__filter__slider')){
        $('.test__filter__slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            arrows: true,
            speed: 500,
            prevArrow: '<div class="slider__btn slider__prev flex__center"><span class="fas fa-angle-left"></span></div>',
            nextArrow: '<div class="slider__btn slider__next flex__center"><span class="fas fa-angle-right"></span></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 620,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 460,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }
    /* Конец */

    /* Клик по звезде */
    $('.figure__star').on('click', function () {
        if($(this).hasClass('is-active')){
            $(this).removeClass('is-active');
        } else {
            $(this).addClass('is-active');
        }
    })
    /* Конец */

    /* Ajax-загрузка тестов */
    $('.test__filter__load').on('click', function () {
        var list = $(this).closest('.test__filter__sect').find('.test__filter__list');
        $(list).html(loader);
        setTimeout(function () {
            $(list).load( './ajax.html');
        }, 2000)
    })
    /* Конец */

    /* Спойлер текста */
    if($('div').hasClass('test__single__spoiler')){
        document.querySelector('.test__single__spoiler__click').addEventListener('click', function (event) {
            var block = event.target.closest('.test__single__spoiler');
            if (block) {
                var elem = block.querySelector('.test__single__spoiler__hidden');

                if (block.classList.contains('is-active')) {
                    elem.style.height = getComputedStyle(elem).height;
                    block.classList.remove('is-active');
                    getComputedStyle(elem).height; // reflow
                    elem.style.height = '';
                } else {
                    block.classList.add('is-active');
                    var h = getComputedStyle(elem).height;
                    elem.style.height = '120px';
                    getComputedStyle(elem).height; // reflow
                    elem.style.height = h;
                    setTimeout(function () { elem.style.height = '' }, 1000); // Когда закончится анимация
                }
            }
        })
    }
    /* Конец */

    /* Работа псевдо-селектов */
    $('.select__tab').on('click', function () {
        let parent = $(this).parent();
        if($(parent).hasClass('is-active')){
            $(parent).removeClass('is-active');
            $(parent).find('.select__hide').slideToggle();
            if($(parent).hasClass('filter__select')){
                filterMultiSelect(parent);
            }
        } else {
            $(parent).addClass('is-active');
            $(parent).find('.select__hide').slideToggle();
        }
    });

    $('.one__option li').on('click', function () {
        let parent = $(this).closest('.select__wrap');
        let text = $(this).text();
        let value = $(this).data('val');
        $(parent).removeClass('is-active');
        $(parent).find('li').removeClass('is-active');
        $(parent).find('.select__tab span').text(text);
        $(parent).find('input').val(value).change();
        $(this).addClass('is-active');
        $(this).parent().slideToggle();
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest(".select__wrap").length) {
            $('.select__wrap').removeClass('is-active');
            $('.select__wrap .select__hide').slideUp();
            $('.filter__select').each(function () {
                filterMultiSelect($(this));
            });
        }
        e.stopPropagation();
    });
    /* Конец */

    /* Удаление элементов выбраного фильтра */
    $('.test__filter__item .fa-times').on('click', function () {
        $(this).closest('.test__filter__item').detach();
    })
    /* Конец */

    /* Анимации и шкала в рейтинге */
    if($('div').hasClass('rating__list__wrap')){
        var moneyMax = 30000;
        $('.rating__list__scale').each(function (e) {
            var moneyCount = $(this).closest('.rating__list__item').find('.c__yellow span').data('num');
            var scaleWidth = (moneyCount / moneyMax) * 100;
            $(this).find('div').css('width', scaleWidth + '%');
        })

        $('.js__count').each(function (e) {

            var res = $(this);
            $({ style: { number: parseFloat(0) } })
                .animate({ number: parseFloat($(this).data('num'))}, {
                duration: 1000,
                easing: 'linear',
                queue: false,
                step: function (now, tween) {
                    res.html( Math.round(now) );
                }
            });
        })
    }
    if($('div').hasClass('js__scale')){
        $('.js__scale').each(function (e) {
            var moneyMax = $(this).data('max');
            var moneyCount = $(this).data('min');
            var scaleWidth = (moneyCount / moneyMax) * 100;
            $(this).find('div').css('width', scaleWidth + '%');
        })
    }
    /* Конец */

    /* Скролл сайдбара */
    var sidebarBlock = document.querySelector('.sidebar__scroll');
    if(sidebarBlock){
        var b = null,
            P = 0;
        window.addEventListener('scroll', Ascroll, false);
        document.body.addEventListener('scroll', Ascroll, false);
        function Ascroll() {
            var mobilePadding = 0;
            if($(window).width() < 768)
                mobilePadding = 0;

            if (b == null) {
                var Sa = getComputedStyle(sidebarBlock, ''), s = '';
                for (var i = 0; i < Sa.length; i++) {
                    if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
                    }
                }
                b = document.createElement('div');
                b.style.cssText = s + ' box-sizing: border-box; width: ' + (sidebarBlock.offsetWidth - mobilePadding) + 'px;';
                sidebarBlock.insertBefore(b, sidebarBlock.firstChild);
                var l = sidebarBlock.childNodes.length;
                for (var i = 1; i < l; i++) {
                    b.appendChild(sidebarBlock.childNodes[1]);
                }
                sidebarBlock.style.height = b.getBoundingClientRect().height + 'px';
                sidebarBlock.style.padding = '0';
                sidebarBlock.style.border = '0';
            }
            var Ra = sidebarBlock.getBoundingClientRect(),
                R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.main__wrap').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
            if ((Ra.top - P) <= 0) {
                if ((Ra.top - P) <= R) {
                    b.className = 'sidebar__scroll__stop';
                    b.style.top = - R +'px';
                } else {
                    b.className = 'sidebar__scroll__sticky';
                    b.style.top = P + 'px';
                }
            } else {
                b.className = '';
                b.style.top = '';
            }
            window.addEventListener('resize', function() {
                sidebarBlock.children[0].style.width = getComputedStyle(sidebarBlock, '').width
            }, false);
        }
    }
    /* Конец */

    /* Переключение табов */
    $('.tabs__btn').on('click', function () {
        let container = $(this).closest('.tabs__wrap'),
            containerBtn = $(this).closest('.tabs__btn__container'),
            tab = $(this).data('tab');
        $(containerBtn).children('.tabs__btn').removeClass('is-active');
        $(container).children('.tabs__block').removeClass('is-active');
        $(container).children('.tabs__block[data-tab="' + tab + '"]').addClass('is-active');
        $(this).addClass('is-active');
    });
    /* Конец */

    /* Удаление элемента таблицы */
    $('.sale__order__delete').on('click', function () {
        $(this).closest('.sale__order__item').detach();
    });
    /* Конец */

});
