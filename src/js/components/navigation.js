(function (){
  'use strict';

  let navigation = function (icon = '.nav-icon', menu = '.navigation', backdrop = '.nav-backdrop'){
    // Vars
    let navMenu = '';
    let navIcon = '';
    let caret = ' <i class="fas fa-caret-down"></i>';

    // Check menu
    if ($(menu).length < 1) {
      console.error('Navigation not found!');
      return;
    } else if ($(menu).length > 1) {
      console.warn('There are duplicated navigations.');
      navMenu = menu;
    } else {
      navMenu = menu;
    }
    let navElement = $(navMenu).first();

    // Check sub function
    let checkSub = function (menu){
      let subMenu = $(menu + ' ul li').has('ul');
      let icon = 'sub-icon';
      subMenu.addClass('has-sub');
      subMenu.append('<span class="' + icon + '"> + </span>');
      subMenu.children('.nav-link').append(caret);
      let subIcon = $(menu + ' .' + icon);
      // Sub icon click fn
      subIcon.click(function() {
        const listSub = $(this).closest('.has-sub').siblings();
        listSub.removeClass('has-sub--open');
        listSub.find('.sub-icon').removeClass('open').text('+');
        if ($(this).hasClass('open')) {
          $(this).removeClass('open');
          $(this).text('+');
          $(this).parent().removeClass('has-sub--open');
        } else {
          $(this).addClass('open');
          $(this).text('-');
          $(this).parent().addClass('has-sub--open');
        }
      });
    }
    checkSub(navMenu);
    
    // Toggle nav function
    let navToggle = function (){
      if (!navElement.hasClass('nav-open')){
        navElement.addClass('nav-open');
        navBackdrop.show();
      } else {
        navElement.removeClass('nav-open');
        navBackdrop.hide();
      }
    }
    
    // Add icon
    let addIcon = false;
    if ($(icon).length < 1){
      addIcon = true;
      // console.log('icon added');
    }
    if (addIcon){
      let navIconText = '<div class="' + icon.replace(/\.|\#/g, ' ') + '"><span></span></div>';
      navElement.prepend(navIconText);
      navIcon = $(icon);
    }

    // Add backdrop
    let navBackdropText = '<div class="' + backdrop.replace(/\.|\#/g, ' ') + '"></div>';
    navElement.append(navBackdropText);
    let navBackdrop = $(backdrop);
    if (navElement.hasClass('nav-open')){
      navBackdrop.show();
    } else {
      navBackdrop.hide();
    }

    // call toggle
    navIcon.click(function (){
      navToggle();
    });
    navBackdrop.click(function (){
      navToggle();
    });
  }

  navigation();
})();