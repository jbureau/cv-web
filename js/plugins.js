import $ from 'jquery';

/**
 * Plugins for cv-app: JQuery events
 */

export function mission() {
      function Mission(elem) {
            this.load = () => {
                  $(elem).find('.details').slideUp();
                  $(elem).find('.details').addClass('up');
                  $(elem).find('.plus').show();
                  $(elem).find('.less').hide();
            };

            elem.on('load-domaine', (event, domaine, color) => {
                  if (elem.attr('data-domaine').indexOf(domaine) != -1 && domaine !== '*') {
                        $(elem).find('.domaines').append(
                              '<div class="little_domaine" ' +
                              'style="border-left: 10px solid ' + color +
                              ';">' + domaine + '</div>');
                  }
            });

            elem.on('filter-domaine', (event, domaine) => {
                  const toggleTime = 500;
                  if (elem.attr('data-domaine').indexOf(domaine) != -1 || domaine === '*') {
                        elem.show(toggleTime);
                  } else {
                        elem.hide(toggleTime);
                  }
            });

            elem.on('click', '.desc', event => {
                  const elem = $(event.target).closest('.desc');
                  const details = elem.find('.details');
                  const summary = elem.find('.summary');
                  const openToggleTime = 100;
                  const closeToggleTome = 500;
                  if (details.hasClass('up')) {
                        summary.slideUp(openToggleTime, () => { // REVIEW animation a revoir
                              details.slideDown(closeToggleTome);
                              details.removeClass('up');
                        });
                  } else {
                        details.slideUp(openToggleTime, () => {
                              summary.slideDown(closeToggleTome);
                              details.addClass('up');
                        });
                  }
            });

            this.load();
      }
      return $(this).each(() => {
            if (!$.data(this, 'Mission')) {
                  $.data(this, 'Mission', new Mission($(this)));
            }
      }).data('Mission');
}

export function domaine() {
      function Domaine(elem) {
            this.load = () => {
                  $('.mission').trigger('load-domaine', [elem.attr('data-domaine'),
                  elem.attr('data-color')]);
            };

            elem.on('click', () => {
                  $('.mission').trigger('filter-domaine', elem.attr('data-domaine'));
                  $('.domaine').trigger('filter-domaine', elem.attr('data-domaine'));
            });

            elem.on('filter-domaine', (event, domaine) => {
                  if (elem.attr('data-domaine') !== domaine && elem.hasClass('filter-selected')) {
                        elem.removeClass('filter-selected');
                  } else if (elem.attr('data-domaine') === domaine
                        && !elem.hasClass('filter-selected')) {
                        elem.addClass('filter-selected');
                  }
            });

            this.load();
      }
      return $(this).each(() => {
            if (!$.data(this, 'Domaine')) {
                  $.data(this, 'Domaine', new Domaine($(this)));
            }
      }).data('Domaine');
}