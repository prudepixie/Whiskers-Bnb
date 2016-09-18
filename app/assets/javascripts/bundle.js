/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************!*\
  !*** ./app/assets/frontend/main.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _greet = __webpack_require__(/*! ./greet */ 1);
	
	var _greet2 = _interopRequireDefault(_greet);
	
	var _hosts = __webpack_require__(/*! ./hosts */ 2);
	
	var _hosts2 = _interopRequireDefault(_hosts);
	
	var _openmodal = __webpack_require__(/*! ./openmodal */ 3);
	
	var _openmodal2 = _interopRequireDefault(_openmodal);
	
	var _reservations = __webpack_require__(/*! ./reservations */ 8);
	
	var _reservations2 = _interopRequireDefault(_reservations);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	ReactDOM.render(React.createElement(_hosts2.default, null), document.getElementById('hosts'));
	ReactDOM.render(React.createElement(_openmodal2.default, null), document.getElementById('openmodal'));

/***/ },
/* 1 */
/*!***************************************!*\
  !*** ./app/assets/frontend/greet.jsx ***!
  \***************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Greet = function (_React$Component) {
	  _inherits(Greet, _React$Component);
	
	  function Greet() {
	    _classCallCheck(this, Greet);
	
	    return _possibleConstructorReturn(this, (Greet.__proto__ || Object.getPrototypeOf(Greet)).apply(this, arguments));
	  }
	
	  _createClass(Greet, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "h2",
	        null,
	        "hi wendy"
	      );
	    }
	  }]);
	
	  return Greet;
	}(React.Component);
	
	exports.default = Greet;

/***/ },
/* 2 */
/*!***************************************!*\
  !*** ./app/assets/frontend/hosts.jsx ***!
  \***************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Hosts = function (_React$Component) {
	  _inherits(Hosts, _React$Component);
	
	  function Hosts() {
	    _classCallCheck(this, Hosts);
	
	    var _this = _possibleConstructorReturn(this, (Hosts.__proto__ || Object.getPrototypeOf(Hosts)).call(this));
	
	    _this.state = {
	      hosts: []
	    };
	    return _this;
	  }
	
	  _createClass(Hosts, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      var _this2 = this;
	
	      $.getJSON('/hosts.json', function (data) {
	        _this2.setState({
	          hosts: data
	        });
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var hosts = this.state.hosts.map(function (host) {
	        return React.createElement(
	          "section",
	          { key: host.id, className: "col-md-6" },
	          React.createElement(
	            "div",
	            { className: "panel panel-default" },
	            React.createElement(
	              "a",
	              { href: "/users/" + host.id },
	              React.createElement(
	                "div",
	                { className: "panel-heading" },
	                React.createElement(
	                  "h3",
	                  null,
	                  host.first_name,
	                  " ",
	                  host.last_name
	                )
	              )
	            ),
	            React.createElement(
	              "div",
	              { className: "panel-body" },
	              React.createElement(
	                "p",
	                null,
	                host.email
	              ),
	              React.createElement(
	                "p",
	                null,
	                host.city
	              ),
	              React.createElement(
	                "p",
	                null,
	                host.summary
	              )
	            )
	          )
	        );
	      });
	
	      return React.createElement(
	        "div",
	        null,
	        hosts
	      );
	    }
	  }]);
	
	  return Hosts;
	}(React.Component);
	
	exports.default = Hosts;
	
	
	var documentReady = function documentReady() {
	  ReactDOM.render(React.createElement(Hosts, null), document.getElementById('hosts'));
	};
	
	$(documentReady);

/***/ },
/* 3 */
/*!*******************************************!*\
  !*** ./app/assets/frontend/openmodal.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _NewReservationForm = __webpack_require__(/*! ./NewReservationForm */ 5);
	
	var _NewReservationForm2 = _interopRequireDefault(_NewReservationForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var OpenModal = function (_React$Component) {
	  _inherits(OpenModal, _React$Component);
	
	  function OpenModal() {
	    _classCallCheck(this, OpenModal);
	
	    return _possibleConstructorReturn(this, (OpenModal.__proto__ || Object.getPrototypeOf(OpenModal)).apply(this, arguments));
	  }
	
	  _createClass(OpenModal, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      console.log('hello');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'button',
	          { type: 'button', className: 'btn btn-default', 'data-toggle': 'modal', 'data-target': '#myModal' },
	          'Add New Reservations'
	        ),
	        React.createElement(
	          'div',
	          { className: 'modal fade', id: 'myModal', role: 'dialog', 'aria-labelledby': 'myModalLabel', 'aria-hidden': 'true' },
	          React.createElement(
	            'div',
	            { className: 'modal-dialog', role: 'document' },
	            React.createElement(
	              'div',
	              { className: 'modal-content' },
	              React.createElement(
	                'div',
	                { className: 'modal-header' },
	                React.createElement(
	                  'button',
	                  { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
	                  React.createElement(
	                    'span',
	                    { 'aria-hidden': 'true' },
	                    '×'
	                  )
	                ),
	                React.createElement(
	                  'h4',
	                  { className: 'modal-title', id: 'myModalLabel' },
	                  'New Reservation'
	                )
	              ),
	              React.createElement(
	                'div',
	                { className: 'modal-body' },
	                React.createElement(_NewReservationForm2.default, null)
	              ),
	              React.createElement(
	                'div',
	                { className: 'modal-footer' },
	                React.createElement(
	                  'button',
	                  { type: 'button', className: 'btn btn-secondary', 'data-dismiss': 'modal' },
	                  'Close'
	                ),
	                React.createElement(
	                  'button',
	                  { onClick: this.handleClick, className: 'btn btn-default' },
	                  'Add'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return OpenModal;
	}(React.Component);
	
	exports.default = OpenModal;
	
	
	var documentReady = function documentReady() {
	  ReactDOM.render(React.createElement(OpenModal, null), document.getElementById('open-modal'));
	};
	
	$(documentReady);

/***/ },
/* 4 */,
/* 5 */
/*!****************************************************!*\
  !*** ./app/assets/frontend/NewReservationForm.jsx ***!
  \****************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NewReservationForm = function (_React$Component) {
	  _inherits(NewReservationForm, _React$Component);
	
	  function NewReservationForm() {
	    _classCallCheck(this, NewReservationForm);
	
	    return _possibleConstructorReturn(this, (NewReservationForm.__proto__ || Object.getPrototypeOf(NewReservationForm)).apply(this, arguments));
	  }
	
	  _createClass(NewReservationForm, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        null,
	        React.createElement(
	          "p",
	          null,
	          React.createElement("input", { type: "date", ref: "first_name", placeholder: "Enter Your First Name" })
	        ),
	        React.createElement(
	          "p",
	          null,
	          React.createElement("input", { type: "date", ref: "last_name", placeholder: "Enter Your Last Name" })
	        ),
	        React.createElement(
	          "p",
	          null,
	          React.createElement("input", { type: "number", ref: "rate", placeholder: "Enter Your rate" })
	        ),
	        React.createElement(
	          "p",
	          null,
	          React.createElement("input", { ref: "host_id", placeholder: "Host Id" })
	        )
	      );
	    }
	  }]);
	
	  return NewReservationForm;
	}(React.Component);
	
	exports.default = NewReservationForm;

/***/ },
/* 6 */,
/* 7 */,
/* 8 */
/*!**********************************************!*\
  !*** ./app/assets/frontend/reservations.jsx ***!
  \**********************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Reservations = function (_React$Component) {
	  _inherits(Reservations, _React$Component);
	
	  function Reservations() {
	    _classCallCheck(this, Reservations);
	
	    var _this = _possibleConstructorReturn(this, (Reservations.__proto__ || Object.getPrototypeOf(Reservations)).call(this));
	
	    _this.state = {
	      reservations: []
	    };
	    return _this;
	  }
	
	  _createClass(Reservations, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;
	
	      $.getJSON('/reservations.json', function (data) {
	        console.log('DATA HEREERERER');
	        console.log(data);
	        _this2.setState({
	          reservations: data
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var reservations = this.state.reservations.map(function (reservation) {
	        return React.createElement(
	          'div',
	          { key: reservation.id },
	          React.createElement(
	            'ul',
	            null,
	            React.createElement(
	              'li',
	              null,
	              reservation.beginning_date
	            ),
	            React.createElement(
	              'li',
	              null,
	              reservation.ending_date
	            ),
	            React.createElement(
	              'li',
	              null,
	              reservation.host_id
	            ),
	            React.createElement(
	              'li',
	              null,
	              reservation.rate
	            )
	          )
	        );
	      });
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'h6',
	          null,
	          'List of available reservations '
	        ),
	        reservations
	      );
	    }
	  }]);
	
	  return Reservations;
	}(React.Component);
	
	exports.default = Reservations;
	
	
	var documentReady = function documentReady() {
	  ReactDOM.render(React.createElement(Reservations, null), document.getElementById('reservations'));
	};
	
	$(documentReady);

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map