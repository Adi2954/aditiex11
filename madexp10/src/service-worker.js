/* eslint-disable no-undef */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js');


// eslint-disable-next-line no-restricted-globals
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

// Cache API requests
workbox.routing.registerRoute(
  // new RegExp('https://jsonplaceholder.typicode.com/posts'),
  new RegExp('http://127.0.0.1:8080/index.html'),
  new workbox.strategies.NetworkFirst()
);
