import WPAPI from 'wpapi';

const wp = new WPAPI({
    endpoint: 'http://orchisconseil.fr/wp-json'
});

wp.missions = wp.registerRoute('wp/v2', '/mission/(?P<id>)');
wp.domaines = wp.registerRoute('myroutes', '/domaines_menu');
wp.clients = wp.registerRoute('wp/v2', '/client/(?P<id>)');


const maxPerPage = 100;
export const missions = () => wp.missions().perPage(maxPerPage);
export const domaines = () => wp.domaines();
export const clients = () => wp.clients();
