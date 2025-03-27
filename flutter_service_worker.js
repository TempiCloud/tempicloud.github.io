'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c3bcaaa71d9b70b32fa8d5078c3ee37f",
"version.json": "ac41d82c9541ce3c85ce7c3cf8b371e7",
"index.html": "a5dadf388c86e8a7a208494702159253",
"/": "a5dadf388c86e8a7a208494702159253",
"main.dart.js": "2c752356918b94a986bd0ae45b1b7508",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "ce292fc9412ec9afc58c220810fee700",
"icons/android-chrome-192x192.png": "ce292fc9412ec9afc58c220810fee700",
"icons/apple-touch-icon.png": "b1ed197c7e1cb75f9c057839a3693920",
"icons/android-chrome-512x512.png": "020733daeec23adf92278f855d71192e",
"icons/logo.png": "ce292fc9412ec9afc58c220810fee700",
"manifest.json": "d2a97a0e3e6645b79462022d81c8c0fc",
"assets/AssetManifest.json": "7579d317a59311e5a591585c14f266a7",
"assets/NOTICES": "e7d1966ba651ffde34c1a46e486cdc63",
"assets/FontManifest.json": "20804fc8a541f279edc0485b886ff138",
"assets/AssetManifest.bin.json": "28698ffe699add00a70784510fdbd15a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/hugeicons/lib/fonts/hgi-stroke-rounded.ttf": "7b7e29353cabc1555d2720eb496b805e",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "75a01d0cd1f8d3485db2c14a7be1df11",
"assets/fonts/MaterialIcons-Regular.otf": "e4c858dbb78f5380e65bb075b8b8d1a6",
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
"assets/assets/Fonts/ProductSans/Product%2520Sans%2520Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/Fonts/Roborto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/Fonts/Roborto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/Fonts/Montserrat/static/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/Fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/Fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/Fonts/Barlow/Barlow-Regular.ttf": "9373fb661b5c2954ab84d1b7f42774fe",
"assets/assets/nodata.jpeg": "922116262c5171f6dda0176447761efc",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
