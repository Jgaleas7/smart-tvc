/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "Firebase-Demo.html",
    "revision": "8bc70a51e1b467f0ac9a4cbcc298822b"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "43be1bc56d109a362f46d0b52d45d930"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "b707153fc1be7125fd05d72acb3cf6d5"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "7bddb21f17bc4b57a3f49383ec73f8cd"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "ef6201780d7f6dee5fe1d4ce3189aa43"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "4b52411bc58db13c32ce5f16d959e242"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "b66e2beed61219ea2e1c4ba8141b69fa"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "254e2ea141762490668fd69669f73c3f"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "c7407e9c7731f4adf6283bcde5babb30"
  },
  {
    "url": "index.html",
    "revision": "2a475d44535603c117bf2fc9391cf97a"
  },
  {
    "url": "js/adapter.js",
    "revision": "2da5b4d440a8c886826480363b9e1db0"
  },
  {
    "url": "js/coneccion.js",
    "revision": "dfb566220b001588ef8b428b55b4f0d4"
  },
  {
    "url": "js/FirebaseConnection.js",
    "revision": "8f8427627a616f905cbf67b70fd3ca68"
  },
  {
    "url": "js/RTCMultiConnection.js",
    "revision": "dce7181c270735f0bcfa65d2c5553c1d"
  },
  {
    "url": "manifest.json",
    "revision": "6a6aa515542922515a40e58c18a22f8f"
  },
  {
    "url": "materialize/css/bootstrap.min.css",
    "revision": "450fc463b8b1a349df717056fbb3e078"
  },
  {
    "url": "materialize/css/materialize.css",
    "revision": "a493a025029b0a4e35b914f9f68a08a8"
  },
  {
    "url": "materialize/css/materialize.min.css",
    "revision": "4a6a53a36d08266bc471c4288a9ca748"
  },
  
  {
    "url": "recibir.html",
    "revision": "02aaa9c6d482d7ae67e1b3d33b5cdc05"
  },
  {
    "url": "video.css",
    "revision": "07fb8c5e4b46788fc567d25796c656ee"
  },
  {
    "url": "video.js",
    "revision": "87e0627dded8dcb95b4bbdc881786802"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
