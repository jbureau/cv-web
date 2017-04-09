$.fn.mission = function (options) {
      function Mission(elem) {
            var self = this;

            this.load = function (params) {
                  $(elem).find(".details").slideUp();
                  $(elem).find(".details").addClass("up");
            };

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