"use-strict"
let start =  Date.now();

//code for loading templates
// TODO: Separate logic and ui code

window.addEventListener('load', () => {
  const el = $('#app');

  // Compile Handlebar Templates
  const errorTemplate = Handlebars.compile($('#error-template').html());
  const featuredTemplate = Handlebars.compile($('#featured-template').html());
  const shopTemplate = Handlebars.compile($('#Shop-template').html());
  const contactTemplate = Handlebars.compile($('#contact-template').html());
  const aboutTemplate = Handlebars.compile($('#about-template').html());

  const router = new Router({
  mode: 'history',
  page404: (path) => {
    const html = errorTemplate({
      color: 'yellow',
      title: 'Error 404 - Page NOT Found!',
      message: `The path '/${path}' does not exist on this site`,
    });
    el.html(html);
  },
});

router.add('/', () => {
  let html = featuredTemplate();
  el.html(html);
  var openMenuBtn = document.getElementById("leftfixedbutton");
  var openCartBtn = document.getElementById("rightfixedbutton");
  var landing = document.getElementById("landing");

  function openNav() {
      document.getElementById("sideNavigation").style.width = "50%";
      document.getElementById("landing").style.marginLeft = "50%";
      document.getElementById("obuttoniconleftwrapper").style.backgroundColor= "black";
      document.getElementById("obuttoniconleftwrapper").style.borderRadius = "50%";
      document.getElementById("leftfixedbutton").style.border = "2px solid #fff";
      document.getElementById("opennavicon").src = "assets/images/menuclosewhite.svg";
      // document.getElementById("obuttoniconleftwrapper").style.zIndex = "5";
      document.getElementById("landing").style.opacity = 0;
  }
  function closeNav() {
      document.getElementById("sideNavigation").style.width = "0";
      document.getElementById("landing").style.marginLeft = "0";
      document.getElementById("leftfixedbutton").style.border = "2px solid #d0d7e5";
      document.getElementById("landing").style.opacity = 1;
      document.getElementById("opennavicon").src = "assets/images/menuicotwo.svg";
      document.getElementById("obuttoniconleftwrapper").style.backgroundColor = "white";
  }

  function openCartCheckout(){
    document.getElementById("cartcheckoutnav").style.width = "70%";
    // document.getElementById("cartcheckoutnav").style.zIndex = "4";
    document.getElementById("obuttoniconrightwrapper").style.backgroundColor = "black";
    document.getElementById("obuttoniconrightwrapper").style.borderRadius = "50%";
    // document.getElementById("buttonrightlabel").style.backgroundColor = "#606266";
    document.getElementById("rightfixedbutton").style.border = "2px solid #fff";
    // document.getElementById("rightfixedbutton").id = "rightfixedbuttonselected";
    document.getElementById("overlay").style.opacity = "1";
    document.getElementById("overlay").style.zIndex = "4";
    var closeico = document.getElementById("opencartcheckouticon").src = "assets/images/menuclosewhite.svg";
    console.log(closeico);
  }

  function closeCartCheckout() {
      document.getElementById("cartcheckoutnav").style.width = "0";
      document.getElementById("landing").style.marginLeft = "0";
      document.getElementById("landing").style.opacity = 1;
      // document.getElementById("rightfixedbuttonselected").id = "rightfixedbutton"
      document.getElementById("rightfixedbutton").style.border = "2px solid #d0d7e5";
      document.getElementById("opencartcheckouticon").src = "assets/images/shoppingbag.svg";
      document.getElementById("obuttoniconrightwrapper").style.backgroundColor = "white";

  }

  var checkoutico = document.getElementById("opencartcheckouticon");
  console.log(typeof(checkoutico));
  function checkForCartNavOpen(){
    if (checkoutico == document.getElementById("opencartcheckouticon") ) {
      openCartBtn.addEventListener('click', openCartCheckout);
    }
    else{
        openCartBtn.addEventListener('click', closeCartCheckout);
    };
  }


  openCartBtn.addEventListener('click', checkForCartNavOpen);

  // var rightBtnSelected = document.getElementById("rightfixedbuttonselected");
  openMenuBtn.addEventListener('click', openNav);
  openMenuBtn.addEventListener('click', closeCartCheckout);
  // openCartBtn.addEventListener('click', openCartCheckout)
  landing.addEventListener('click', closeCartCheckout);
  landing.addEventListener('click', closeNav);

});


router.add('/shop', () => {
  let html = shopTemplate();
  el.html(html);
  console.log("shop directory");
});

router.add('/contact', () => {
  let html = contactTemplate();
  el.html(html);
});

router.add('/about', () => {
  let html = aboutTemplate();
  el.html(html);
});

// Navigate app to current url
router.navigateTo(window.location.pathname);

 // Highlight Active Menu on Refresh/Page Reload
// const link = $(`a[href$='${window.location.pathname}']`);
// link.addClass('active');

$('a').on('click', (event) => {
  // Block browser page load
  event.preventDefault();

  // Highlight Active Menu on Click
  const target = $(event.target);
  $('.item').removeClass('active');
  target.addClass('active');

  router.addUriListener();

  // Navigate to clicked url
  const href = target.attr('href');
  const path = href.substr(href.lastIndexOf('/'));
  router.navigateTo(path);
});
});


// $(document).ready(function(){
//   console.log(start);
//   let timepassed = Date.now() - start;
//   if (timepassed <= 2000) {
//     console.log(timepassed);
//     $('#headingwords span').each(function(i){
//           setTimeout(function(){
//             $('#headingwords span').eq(i).addClass('is-showing');
//           }, 200 * i );
//         });
//   };
// });
// code for tab menu

(function($, document) {

      // get tallest tab__content element
      let height = -1;

		$('.tab__content').each(function() {
			height = height > $(this).outerHeight() ? height : $(this).outerHeight();
         $(this).css('position', 'absolute');
		});

      // set height of tabs + top offset
		$('[data-tabs]').css('min-height', height + 40 + 'px');

}(jQuery, document));



// var openMenuBtn = document.getElementById("leftfixedbutton");
// var openCartBtn = document.getElementById("rightfixedbutton");
// var landing = document.getElementById("landing");
//
// function openNav() {
//     document.getElementById("sideNavigation").style.width = "50%";
//     document.getElementById("landing").style.marginLeft = "50%";
//     document.getElementById("obuttoniconleftwrapper").style.backgroundColor= "black";
//     document.getElementById("obuttoniconleftwrapper").style.borderRadius = "50%";
//     document.getElementById("leftfixedbutton").style.border = "2px solid #fff";
//     document.getElementById("opennavicon").src = "assets/images/menuclosewhite.svg";
//     // document.getElementById("obuttoniconleftwrapper").style.zIndex = "5";
//     document.getElementById("landing").style.opacity = 0;
// }
// function closeNav() {
//     document.getElementById("sideNavigation").style.width = "0";
//     document.getElementById("landing").style.marginLeft = "0";
//     document.getElementById("leftfixedbutton").style.border = "2px solid #d0d7e5";
//     document.getElementById("landing").style.opacity = 1;
//     document.getElementById("opennavicon").src = "assets/images/menuicotwo.svg";
//     document.getElementById("obuttoniconleftwrapper").style.backgroundColor = "white";
// }
//
// function openCartCheckout(){
//   document.getElementById("cartcheckoutnav").style.width = "70%";
//   // document.getElementById("cartcheckoutnav").style.zIndex = "4";
//   document.getElementById("obuttoniconrightwrapper").style.backgroundColor = "black";
//   document.getElementById("obuttoniconrightwrapper").style.borderRadius = "50%";
//   // document.getElementById("buttonrightlabel").style.backgroundColor = "#606266";
//   document.getElementById("rightfixedbutton").style.border = "2px solid #fff";
//   // document.getElementById("rightfixedbutton").id = "rightfixedbuttonselected";
//   document.getElementById("overlay").style.opacity = "1";
//   document.getElementById("overlay").style.zIndex = "4";
//   var closeico = document.getElementById("opencartcheckouticon").src = "assets/images/menuclosewhite.svg";
//   console.log(closeico);
// }
//
// function closeCartCheckout() {
//     document.getElementById("cartcheckoutnav").style.width = "0";
//     document.getElementById("landing").style.marginLeft = "0";
//     document.getElementById("landing").style.opacity = 1;
//     // document.getElementById("rightfixedbuttonselected").id = "rightfixedbutton"
//     document.getElementById("rightfixedbutton").style.border = "2px solid #d0d7e5";
//     document.getElementById("opencartcheckouticon").src = "assets/images/shoppingbag.svg";
//     document.getElementById("obuttoniconrightwrapper").style.backgroundColor = "white";
//
// }
//
// var checkoutico = document.getElementById("opencartcheckouticon");
// console.log(typeof(checkoutico));
// function checkForCartNavOpen(){
//   if (checkoutico == document.getElementById("opencartcheckouticon") ) {
//     openCartBtn.addEventListener('click', openCartCheckout);
//   }
//   else{
//       openCartBtn.addEventListener('click', closeCartCheckout);
//   };
// }
//
//
// openCartBtn.addEventListener('click', checkForCartNavOpen);
//
// // var rightBtnSelected = document.getElementById("rightfixedbuttonselected");
// openMenuBtn.addEventListener('click', openNav);
// openMenuBtn.addEventListener('click', closeCartCheckout);
// // openCartBtn.addEventListener('click', openCartCheckout)
// landing.addEventListener('click', closeCartCheckout);
// landing.addEventListener('click', closeNav);

// rightBtnSelected.addEventListener('click', closeCartCheckout);
// openMenuBtn.addEventListener('click', closeNav);
