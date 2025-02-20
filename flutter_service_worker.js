'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1947f682a9f726b047fc331c57669ecd",
"version.json": "ac41d82c9541ce3c85ce7c3cf8b371e7",
"index.html": "e317e4832036fc7f7b62efbd038ab9f2",
"/": "e317e4832036fc7f7b62efbd038ab9f2",
"main.dart.js": "c5b26eaf712aa274087d0dec00301705",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "ce292fc9412ec9afc58c220810fee700",
"icons/android-chrome-192x192.png": "ce292fc9412ec9afc58c220810fee700",
"icons/apple-touch-icon.png": "b1ed197c7e1cb75f9c057839a3693920",
"icons/android-chrome-512x512.png": "020733daeec23adf92278f855d71192e",
"icons/logo.png": "ce292fc9412ec9afc58c220810fee700",
"manifest.json": "c7ab9d615321285a5cc686c4790f8244",
"assets/AssetManifest.json": "d5d4158bf41f84e5be476653b75f163b",
"assets/NOTICES": "ce4dcab1837af5c653328c6db553f237",
"assets/FontManifest.json": "25e578f0d60b24faceedd98a19efccce",
"assets/AssetManifest.bin.json": "814fa814c1118eda173b25ada6ae9f04",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/hugeicons/lib/fonts/hgi-stroke-rounded.ttf": "7b7e29353cabc1555d2720eb496b805e",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2e48ac8917847da4ac2f47eea3b1e43c",
"assets/fonts/MaterialIcons-Regular.otf": "a03d819bc7a7b29797d57db8ee421314",
"assets/assets/locationimage.png": "0fec8ba827408c4859459d59a58e13b0",
"assets/assets/Emojies": "0941a719ea0d2334a97dd3244232945b",
"assets/assets/service_account.json": "aa68ecdb15da1a5dc4a30d774613b7bb",
"assets/assets/Images/VerwaltungDP.webp": "8681caa1bdf24bf84848a1dff8ea06b4",
"assets/assets/Images/ReCover.webp": "9d53b1baf81adb9c0bf685144569b389",
"assets/assets/Images/GSCover.webp": "b532d45348497e1c11c0c1c55c149258",
"assets/assets/Images/bu.webp": "7c63bdd10af818c3431b81af317a27db",
"assets/assets/Images/Tempici/logo_cloud_white_horizontal.png": "2411472a833dac8e775eaacb23ac4e25",
"assets/assets/Images/Tempici/microsoft.webp": "821bd0a2196c274c9b54b266c503afa8",
"assets/assets/Images/Tempici/tempilogo.png": "ced9ad5f795f34592f4dc00937345b04",
"assets/assets/Images/Tempici/microsoft.png": "dd7f946fecb7746c02105a9557b1689d",
"assets/assets/Images/Tempici/google.png": "54d92439140ad747288601dac21b3c88",
"assets/assets/Images/defaultimg.jpeg": "75da9c98f753beeb37a37bdfb11bdea9",
"assets/assets/Images/planzer.webp": "bfb9bde87afa8a155450d60e35bf4ae2",
"assets/assets/Images/tempilogo.png": "467193ca45bc8fb31ee90c420cd0e330",
"assets/assets/Images/GSDP.webp": "cd7508d5a41530bb216c818920f3ffb5",
"assets/assets/Images/bottomsheetcover.webp": "8e1a955d21b890545c40462cb5ae5cf9",
"assets/assets/Images/Tempilogocircle.png": "51d46420cc29c22766498f0b6fe2a75e",
"assets/assets/Images/comingsoon.png": "2945fcb14b9748c57c740af43e26b574",
"assets/assets/Images/RE_Empty_Screen.png": "b0200b503a40e319fc685114d81dd4a5",
"assets/assets/Images/varwaltungCover.webp": "0a1df7533bbd4739ffd29672914c0e19",
"assets/assets/Images/AuCover.webp": "1e68a90a88703240ffad8d42ab96954c",
"assets/assets/Images/LSCover.webp": "9d53b1baf81adb9c0bf685144569b389",
"assets/assets/Images/GS_empty_screen.png": "34592884e619d388d2113540ba4047de",
"assets/assets/userpic.jpeg": "c86ed70611bd3d72e26f5766af9b5e0f",
"assets/assets/tempilogo.png": "467193ca45bc8fb31ee90c420cd0e330",
"assets/assets/profileimage.jpeg": "75da9c98f753beeb37a37bdfb11bdea9",
"assets/assets/cover.jpeg": "aa9f0451b0c27a2c681e1b934f121165",
"assets/assets/image2.jpeg": "eb2043136b167a2d18e3fc33996321bf",
"assets/assets/pic.png": "d0b91930d4a743480f9fe280340ea2bf",
"assets/assets/Fonts/ProductSen/Product%2520Sans%2520Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/Fonts/Montserrat/static/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/Fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/Fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/Fonts/Barlow/Barlow-Regular.ttf": "9373fb661b5c2954ab84d1b7f42774fe",
"assets/assets/nodata.jpeg": "922116262c5171f6dda0176447761efc",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
