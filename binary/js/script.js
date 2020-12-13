/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./#src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./#src/js/files/filter.js":
/*!*********************************!*\
  !*** ./#src/js/files/filter.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function filter() {

	const tabs = document.querySelectorAll('.nav__wrapper_portfolio a'),
			contents  = document.querySelectorAll('.content__item');
	console.log(tabs[0])
	tabs.forEach(tab => {

		tab.addEventListener('click', (e) => {
			e.preventDefault();

			tabs.forEach(tab => {
				tab.classList.remove('_active');
			});
			e.target.classList.add('_active');

			new Promise((resolve) => {

				contents.forEach(content => {
					content.classList.add('fadeOut');
					content.classList.remove('fadeIn');
				});

				const idInter = setInterval(() => {

					contents.forEach(content => {

						if(+getComputedStyle(content).opacity === 0){
							contents.forEach(content => {
								content.style.display = 'none';
							});

							clearInterval(idInter);
							resolve(true);
						}
					});
				
				},10);
			})
			.then(() => {
				
				contents.forEach(content => {
							
					const contentCategory = content.dataset.categ.toLowerCase();
					
					if(contentCategory === tab.textContent.toLowerCase()) {
						
						content.style.display = 'block';
						content.classList.remove('fadeOut');
						content.classList.add('fadeIn');
						
					}else if(tab.textContent.toLowerCase() === 'all'){
					
						contents.forEach(content => {
							content.style.display = 'block';
							content.classList.remove('fadeOut');
							content.classList.add('fadeIn');
						});
					}else if(tab.textContent.toLowerCase() === 'other') {
						
						for(let i = 0; i < contents.length; i++){

							let isCategory = false;

							for(let k = 0; k < tabs.length; k++){

								if(tabs[k].textContent.toLowerCase() != 'all' || tabs[k].textContent.toLowerCase() != 'other'){
									
									if(contents[i].dataset.categ.toLowerCase() == tabs[k].textContent.toLowerCase()){
													
										isCategory = true;
									}
								}	
							}
							if(!isCategory){
								contents[i].style.display = 'block';
								contents[i].classList.remove('fadeOut');
								contents[i].classList.add('fadeIn');
							}
						}	
					}
				});
			});
			
		});
	});

	
}
/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./#src/js/files/fixedMenu.js":
/*!************************************!*\
  !*** ./#src/js/files/fixedMenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function fixedMenu () {
	const menu = document.querySelector('.nav'),
			header = document.querySelector('.header'),
			emptyElem = document.createElement('div'),
			heightWindowUser = document.documentElement.clientHeight;
	
			emptyElem.style.height = menu.offsetHeight + 'px';

	window.addEventListener('scroll', () => {
		
		if(window.pageYOffset > heightWindowUser ) {
			
			menu.classList.add('fixed');
			menu.classList.add('fadeIn');
			header.appendChild(emptyElem);
			

		}else{
			menu.classList.remove('fixed');
			menu.classList.remove('fadeIn');
			emptyElem.remove();
		}
	});

}
/* harmony default export */ __webpack_exports__["default"] = (fixedMenu);

/***/ }),

/***/ "./#src/js/files/form.js":
/*!*******************************!*\
  !*** ./#src/js/files/form.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function forms () {
	const allforms = document.querySelectorAll('form'),
		allInputs = document.querySelectorAll('input'),
		statusPost = document.querySelector('.form__button-message'),
		textarea = document.querySelectorAll('textarea'),
		informMessageArray = {
			loading: 'loading...',
			success: "We'll contact you shortly",
			failure: 'something went wrong'
	  };

	allInputs.forEach(input => {
		input.addEventListener('input', () => {
			input.classList.remove('_error');
		
		});
	});

	allforms.forEach(form => {

	form.addEventListener('submit', (e) => {

		let required = true;

		allInputs.forEach(input => {

			if(input.classList.contains('req')){
			
				 if(input.value === ''){
				
					input.classList.add('_error');
					required = false;
					e.preventDefault();
				}
			}
		});

		if(required){
			e.preventDefault();

			const postData = async (url, data) => {
						const result = await fetch(url, data);
						return await result.text();
					},
					cleanInput = () => {
						allInputs.forEach(input => input.value = '');
						textarea.forEach(area => area.value = '');
				  };
			
			statusPost.textContent = informMessageArray.loading;
			statusPost.style.color = 'green';

			const formData = new FormData(form);

			postData('server.php', {
				 method: 'POST',
				 body: formData
			})
			.then((res) => {
				 console.log(res);
				 statusPost.textContent = informMessageArray.success;
				 statusPost.style.color = 'green';
			})
			.catch(() => {
				 statusPost.textContent = informMessageArray.failure;
				 statusPost.style.color = 'red';
			})
			.finally(() => {
				 	cleanInput();
				 	setTimeout(() => {
					  statusPost.textContent = '';
				 	}, 5000);
				});
			}
		});
	});
}
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./#src/js/files/imageToBackground.js":
/*!********************************************!*\
  !*** ./#src/js/files/imageToBackground.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isIE__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isIE */ "./#src/js/files/isIE.js");


function ibg(){
	const ibg = document.querySelectorAll('.img-bg');
	
	for (var i = 0; i < ibg.length; i++) {

		if(Object(_isIE__WEBPACK_IMPORTED_MODULE_0__["default"])()){

			if(ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {

				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
				ibg[i].querySelector('img').style.width = '0px';
				ibg[i].querySelector('img').style.height = '0px';

			}
		}else if(ibg[i].querySelector('source') && ibg[i].querySelector('source').getAttribute('srcset') != null){
			
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('source').getAttribute('srcset') + ')';
			ibg[i].querySelector('img').style.width = '';
			ibg[i].querySelector('img').style.height = '';
		}	
	}
}
/* harmony default export */ __webpack_exports__["default"] = (ibg); 


/***/ }),

/***/ "./#src/js/files/isIE.js":
/*!*******************************!*\
  !*** ./#src/js/files/isIE.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isIE() {
	var ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
/* harmony default export */ __webpack_exports__["default"] = (isIE);

/***/ }),

/***/ "./#src/js/files/isSupportWebp.js":
/*!****************************************!*\
  !*** ./#src/js/files/isSupportWebp.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function testWebp () {
	function test(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	test(function (support) {
	
		if (support == true) {
			document.querySelector('body').classList.add('_webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
}
/* harmony default export */ __webpack_exports__["default"] = (testWebp);

/***/ }),

/***/ "./#src/js/files/menuToggleActive.js":
/*!*******************************************!*\
  !*** ./#src/js/files/menuToggleActive.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function menuToggleActive(){
	const menu = document.querySelectorAll('.nav a'),
			sections = document.querySelectorAll('.section'),
			menuWrapper = document.querySelector('.nav');

	function toggleMenu (target) {

		menu.forEach(item => {
			item.classList.remove('_active');
		});
		target.classList.add('_active');
	}

	menu.forEach(item => item.addEventListener('click', (e) => toggleMenu (e.target)));

	function calculCoordElemen (elem) {
		return {top: elem.getBoundingClientRect().top + window.pageYOffset - menuWrapper.offsetHeight};
	}

	window.addEventListener('scroll', () => {
		sections.forEach(section => {

			if(calculCoordElemen(section).top -100 < window.pageYOffset) {

				menu.forEach(item => {
					if(item.dataset.value == section.dataset.value) {
						toggleMenu (item);
					}
				});
			}
		});
	});
}
/* harmony default export */ __webpack_exports__["default"] = (menuToggleActive); 

/***/ }),

/***/ "./#src/js/files/parallaxHeader.js":
/*!*****************************************!*\
  !*** ./#src/js/files/parallaxHeader.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function parallaxHeader() {
	const header = document.querySelector('.header__img');

	window.addEventListener('scroll', () => {

		const scrollTop = window.pageYOffset,
				divider = scrollTop / 2;
				
		header.style.transform = `translate(${0}, ${-divider}px)`;
	});
}
/* harmony default export */ __webpack_exports__["default"] = (parallaxHeader);

/***/ }),

/***/ "./#src/js/files/scrollProcess.js":
/*!****************************************!*\
  !*** ./#src/js/files/scrollProcess.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function scrollProcess (){
	const scrollBar = document.querySelector('.nav__process span');

	function calcHeightDoc (){
		return Math.max(
					document.body.scrollHeight, document.documentElement.scrollHeight,
					document.body.offsetHeight, document.documentElement.offsetHeight,
					document.body.clientHeight, document.documentElement.clientHeight) -
					document.documentElement.clientHeight;
	}

	function calcWidthDoc () {
		return document.documentElement.clientWidth;
	}	

	calcHeightDoc ();
	calcWidthDoc ();
	
	window.addEventListener('resize', () => {
		calcHeightDoc ();
		calcWidthDoc ();
	});

	window.addEventListener('scroll', () => {
		const	widthScrollBar = window.pageYOffset * (calcWidthDoc () / calcHeightDoc ());
			scrollBar.style.width = `${widthScrollBar}px`;
	});

}


/* harmony default export */ __webpack_exports__["default"] = (scrollProcess);

/***/ }),

/***/ "./#src/js/files/scrolling.js":
/*!************************************!*\
  !*** ./#src/js/files/scrolling.js ***!
  \************************************/
/*! exports provided: smoothScrolling, smoothScrollV2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScrolling", function() { return smoothScrolling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScrollV2", function() { return smoothScrollV2; });
const toggleUpButton = (buttons) => {
	
    buttons.forEach(linkElem => {
        
        if(linkElem.getAttribute('data-up')){
           
            window.addEventListener('scroll', () => {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
               
                if(scrollTop > 1000){
                    linkElem.classList.add('animated', 'fadeIn');
                    linkElem.classList.remove('fadeOut');
                }else{
                    linkElem.classList.add('fadeOut');
                    linkElem.classList.remove('fadeIn');
                }
            });
        }
    });
};

const smoothScrolling = (linkSelector) => {
    const linkElements = document.querySelectorAll(linkSelector);
    
    toggleUpButton(linkElements);

    function calcAnchorTop() {

        linkElements.forEach(linkElem  => {
            linkElem.addEventListener('click', function(e) {

            let linkTop =  document.documentElement.scrollTop || document.body.scrollTop,
                anchorTop = 0,
                anchorElement;
                
            if(this.hash){
                e.preventDefault();
                    
                anchorElement = document.querySelector(this.hash);
                
                while(anchorElement.offsetParent){
                    anchorTop += anchorElement.offsetTop;
                    anchorElement = anchorElement.offsetParent;
                }
                
                anchorTop = Math.round(anchorTop);
            }
                moveScroll(linkTop, anchorTop, this.hash);
            });
        });
    }

    function moveScroll(fromLink, toAnchor, hash) {
        let interval = 1,
            speed = (fromLink > toAnchor) ? -30 : 30,
            prevScrollTop,

            move = setInterval(() => {

                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

                if( prevScrollTop === scrollTop ||
                   (fromLink < toAnchor && scrollTop >= toAnchor) ||
                   (fromLink > toAnchor && scrollTop <= toAnchor) 
                ){
                    clearInterval(move);
                    // history.replaceState(null, document.title, location.href.replace(/#.*$/g, '') + hash);
                    location.hash = hash;
                }else{
                    document.documentElement.scrollTop += speed;
                    document.body.scrollTop += speed;
                    prevScrollTop = scrollTop;
                }

            }, interval);
    }
    calcAnchorTop();  
};

const smoothScrollV2 = (linkSelector) => {
     
    const links = document.querySelectorAll(linkSelector);

    toggleUpButton(links);

    links.forEach(link => {
        link.addEventListener('click', function() {
            const hash = this.hash,
                  distanceToAnchor = document.querySelector(hash).getBoundingClientRect().top,
                  speed = 0.3,
                  scrollTop = document.documentElement.scrollTop;
            
            let start = null;

            requestAnimationFrame(step);
            
            function step(time){
               start = start === null ? time : start;

                let progress = time - start,
                    stepAnimation;

                if(distanceToAnchor < 0){
                    stepAnimation = Math.max(scrollTop - progress/speed, scrollTop + distanceToAnchor);
                }else{
                    stepAnimation = Math.min(scrollTop + progress/speed, scrollTop + distanceToAnchor);
                }

                document.documentElement.scrollTo(0, stepAnimation);

                if(stepAnimation != scrollTop + distanceToAnchor){
                    requestAnimationFrame(step);
                }else{
                    location.hash = hash;
                }
            }
        });
    });
};


/***/ }),

/***/ "./#src/js/main.js":
/*!*************************!*\
  !*** ./#src/js/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _files_imageToBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files/imageToBackground */ "./#src/js/files/imageToBackground.js");
/* harmony import */ var _files_isSupportWebp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files/isSupportWebp */ "./#src/js/files/isSupportWebp.js");
/* harmony import */ var _files_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./files/filter */ "./#src/js/files/filter.js");
/* harmony import */ var _files_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files/form */ "./#src/js/files/form.js");
/* harmony import */ var _files_fixedMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files/fixedMenu */ "./#src/js/files/fixedMenu.js");
/* harmony import */ var _files_parallaxHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./files/parallaxHeader */ "./#src/js/files/parallaxHeader.js");
/* harmony import */ var _files_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./files/scrolling */ "./#src/js/files/scrolling.js");
/* harmony import */ var _files_menuToggleActive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./files/menuToggleActive */ "./#src/js/files/menuToggleActive.js");
/* harmony import */ var _files_scrollProcess__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./files/scrollProcess */ "./#src/js/files/scrollProcess.js");













	
	
	Object(_files_imageToBackground__WEBPACK_IMPORTED_MODULE_0__["default"])();
	Object(_files_isSupportWebp__WEBPACK_IMPORTED_MODULE_1__["default"])();
	Object(_files_filter__WEBPACK_IMPORTED_MODULE_2__["default"])();
	baguetteBox.run('.gallery', {});
	Object(_files_form__WEBPACK_IMPORTED_MODULE_3__["default"])();
	Object(_files_fixedMenu__WEBPACK_IMPORTED_MODULE_4__["default"])(); 
	Object(_files_parallaxHeader__WEBPACK_IMPORTED_MODULE_5__["default"])();
	Object(_files_scrolling__WEBPACK_IMPORTED_MODULE_6__["smoothScrolling"])('.scroll');
	Object(_files_menuToggleActive__WEBPACK_IMPORTED_MODULE_7__["default"])();
	Object(_files_scrollProcess__WEBPACK_IMPORTED_MODULE_8__["default"])();


/***/ })

/******/ });
//# sourceMappingURL=script.js.map