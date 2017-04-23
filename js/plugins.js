$.fn.mission = function (options) {
      function Mission(elem) {
            var self = this;

            this.load = function (params) {
                  $(elem).find(".details").slideUp();
                  $(elem).find(".details").addClass("up");
            };

            elem.on("filter-domaine", function (event, domaine) {
                  if (elem.attr("data-domaine").indexOf(domaine) != -1) {
                        // $.when($(".dates", elem).show(500))
                        // .then(function() {
                        //       $(".desc", elem).show(500);
                        // });
                        elem.show(500);
                  } else {
                        // $.when($(".desc", elem).toggle(500))
                        // .then(function() {
                        //       $(".dates", elem).toggle(500);
                        // });
                        elem.toggle(500);
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

$.fn.domaine = function (options) {
      function Domaine(elem) {
            var self = this;

            elem.on('click', function (event) {
                  if (elem.hasClass("filter-selected")) {
                        elem.removeClass("filter-selected");
                  } else {
                        elem.addClass("filter-selected");
                  }
                  $('.mission').trigger("filter-domaine", elem.attr("data-domaine"));
            });
      }
      return $(this).each(function () {
            if (!$.data(this, 'Domaine')) {
                  $.data(this, 'Domaine', new Domaine($(this)));
            }
      }).data('Domaine');
};