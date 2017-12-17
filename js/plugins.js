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
                  $(elem).find(".plus").show();
                  $(elem).find(".less").hide();
            };

            elem.on("load-domaine", function (event, domaine, color) {
                  if (elem.attr("data-domaine").indexOf(domaine) != -1 && domaine !== "*") {
                        $(elem).find(".domaines").append("<div class=\"little_domaine\" " +
                              "style=\"border-left: 10px solid " + color + ";\">" + domaine + "</div>");
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
                  const elem = $(event.target).closest(".desc");
                  const details = elem.find(".details");
                  const summary = elem.find(".summary");
                  if (details.hasClass("up")) {
                        summary.slideUp(100, () => { // TODO animation a revoir
                              details.slideDown(500);
                              details.removeClass("up");
                        });
                  } else {
                        details.slideUp(100, () => {
                              summary.slideDown(500);
                              details.addClass("up");
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