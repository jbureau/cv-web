import $ from 'jquery';

/**
 * Plugins for cv-app: JQuery events
 */

export function mission() {
      function Mission(elem) {
            var self = this;

            this.load = function () {
                  $(elem).find(".details").slideUp();
                  $(elem).find(".details").addClass("up");
            };

            elem.on("load-domaine", function (event, domaine, color) {
                  if (elem.attr("data-domaine").indexOf(domaine) != -1 && domaine !== "*") {
                        $(elem).find(".domaines").append("<div class=\"little_domaine\" " +
                              "style=\"background: " + color + ";\">" + domaine + "</div>");
                  }
            });

            elem.on("filter-domaine", function (event, domaine) {
                  if (elem.attr("data-domaine").indexOf(domaine) != -1 || domaine === "*") {
                        elem.show(500);
                  } else {
                        elem.hide(500);
                  }
            });

            elem.on('click', '.desc', function (event) {
                  var elem = $(event.target).closest(".desc").find(".details");
                  if (elem.hasClass("up")) {
                        elem.slideDown(500, function () {
                              elem.removeClass("up");
                        });
                  } else {
                        elem.slideUp(500, function () {
                              elem.addClass("up");
                        });
                  }
            });

            this.load();
      }
      return $(this).each(function () {
            if (!$.data(this, 'Mission')) {
                  $.data(this, 'Mission', new Mission($(this)));
            }
      }).data('Mission');
};

export function domaine() {
      function Domaine(elem) {
            var self = this;

            this.load = function () {
                  $('.mission').trigger("load-domaine", [elem.attr("data-domaine"), elem.attr("data-color")]);
            };

            elem.on('click', function (event) {
                  $('.mission').trigger("filter-domaine", elem.attr("data-domaine"));
                  $('.domaine').trigger("filter-domaine", elem.attr("data-domaine"));
            });

            elem.on('filter-domaine', function (event, domaine) {
                  if (elem.attr("data-domaine") !== domaine && elem.hasClass("filter-selected")) {
                        elem.removeClass("filter-selected");
                  } else if (elem.attr("data-domaine") === domaine && !elem.hasClass("filter-selected")) {
                        elem.addClass("filter-selected");
                  }
            });

            this.load();
      }
      return $(this).each(function () {
            if (!$.data(this, 'Domaine')) {
                  $.data(this, 'Domaine', new Domaine($(this)));
            }
      }).data('Domaine');
};