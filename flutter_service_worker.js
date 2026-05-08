'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b2db82e3c92639e582ab1b1c82d6f953",
"version.json": "90376e2293e308c60545a56f00a2dddc",
"index.html": "cc0a337ceaa8c6044bc11902ea647c31",
"/": "cc0a337ceaa8c6044bc11902ea647c31",
"main.dart.js": "dcdfb733fb4a9e091391d1153dd464fb",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "3f5e67e2b5179684019d8e0caa824298",
"icons/Icon-192.png": "86bfb177734cd1fb5a6e504876abfa9d",
"icons/Icon-maskable-192.png": "86bfb177734cd1fb5a6e504876abfa9d",
"icons/Icon-maskable-512.png": "656d06797acba8247d1d37bd2dc038a3",
"icons/Icon-512.png": "656d06797acba8247d1d37bd2dc038a3",
"manifest.json": "c02c2022bea58958908f49b7ed332a16",
".git/ORIG_HEAD": "7cc1a437a8e9c0a7aa802615f0a427db",
".git/config": "680bea3ccbed8d36b152b5dd324f748f",
".git/objects/3e/c50ac270b63c8964897e4cea2a086e66aab3ef": "e058c42679719b84ba080df1c84dfd4f",
".git/objects/3b/a9ed7a4ed2962e87a8e501143ff8d67c2a4c1f": "4efd8aba67aaa145e731bd463f22ace4",
".git/objects/6f/c6824353d98badc08bfe99fe2e43bcd0cb0369": "f7710077a134050f65eafee6d3148406",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3c/6ab27d13fc1902de39402cbe898ebd950abf4a": "3f7cdd6b23362622d8037bd37749d8b3",
".git/objects/0b/c4b78f8ce0d40dd0bba5b80332c3806beb638e": "5f6c78d2543c2f0b7eb96cc81ae9f34e",
".git/objects/60/cacd783e0c18717de0600e8fa172cb91371a79": "81026b8a174c4f3284a1e451101dbd59",
".git/objects/9c/27c9a53bbd17446ce0118b7fbd53beb3a0cea4": "5dca488ba9ce79c60a946bbbbed66cbf",
".git/objects/b2/ae0ad541ebf3753cc4fa4b3da4aca357c1a37f": "1d5a472b57106673bfca0b3da1f3c3b5",
".git/objects/ac/61cec75be465f291eae727aadcbf5fca1ddad0": "e73c95761381eac75702a1835fb1f78a",
".git/objects/ad/830d5453014b6b7bf8ceb7079a835c3daa89b1": "abfccddef69d774f7c5c4a7ded08c964",
".git/objects/ad/35f818ca8ddd857286c2b448e3718eb26cea15": "b5d6cc513fc3e85259604f206e18ae2b",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/52220d3003705b6a7896e8fb9952c0cdcf4244": "7c999cc4ac1c7ada43e3690942985548",
".git/objects/d0/37e5b4257c39e3b59467cc20ec6b6181a912d0": "89fcf5636172983966c1d308f01ff447",
".git/objects/d6/b2880fd59f166eb78d4cebdcc69796e824eeae": "ed658896c3d6750645b0d233d4de26fe",
".git/objects/ab/b06c6efe94d06de9923d512b8a76a59eaca9eb": "a232085786839ed337d24dedac2e07d6",
".git/objects/f3/5566e5bf4deb3677f3ca2a89426403886a51ad": "b4ae4d2cca031fd8cb2d4ef9a2c2f0e7",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/5acf62cd6148a2f854ac323dcb22e60ca69b90": "7833418322036084c2c54d325f02100e",
".git/objects/cf/641720ed356074ec7688541536cb8c48e9d2da": "0add5b5509d9f8cb45d0cfd1f0efddb9",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c6/37c84619d7c62de9efd2499d42b78993abf315": "d72fecfb6a0876cb9be5153b242c2834",
".git/objects/27/4ce3e18cc55c3167577d893f7a317e6f0ad79b": "7bad8aeb4036a1608cac2d10b13c14f6",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/73/554939153392285515e049deec919eafd0f32a": "e5bfa4c2c078ec98bcb7435a3f2020cf",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/88/61a9062fecfeedbca23e91eb78e9257372c459": "3dc83cb981895111731acc862146273d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5b/ed9a91336bd25c6e5dc022c6e86762d794664e": "116b9ee9fd5b4443ab1bf0d14dede52d",
".git/objects/37/19b1aa6c00c7818b262ac4dee93b2f183bbb04": "51e9b845ac077ea395b3a1a101b56d85",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/04a2312c089f48ac2a3ae7bd96b8551e509e7c": "a5423adfb7960fbdc5835426b572ba06",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/db/af0bce7449ad291e96fe6621fd1f01bf038a33": "e58bb28c258bbf83a30f3a94e31cfb93",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ef/e9abce7da7c05df2c23a37d73c0afa1baa6794": "759e9c3f930c43d76ad2bced4009d52a",
".git/objects/f9/4d61929e254e000d11ad6cbf65f523b072daf6": "ba52e3065a8c3fdbff0134381e632e92",
".git/objects/ff/05ff5bc2545b99ab2c4b88924f1036eba5e442": "211a6030079330c5961fc33361a3c7fc",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/263ada4c3b419c61221b8228b7e48f3964d931": "5bca972bbb1781621501abe26ddf82d9",
".git/objects/41/63d24bdc581e7fd3544eaf49255f86cd7f57f7": "7c839dee41171ed690753751d2b389f0",
".git/objects/41/b293d3263da91ccf669e5fc6a134537fb0bc87": "932c1b10f5ef98919bc5133409873576",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/71/268d3d583e451ff93ee8d1a10ff16dea4289c4": "9ddec858da4dab356470220d5de793ef",
".git/objects/76/941c071eb83e84f1c2970067ae7af0316f791b": "61d05cc17a3b9322d289a59c3862cb79",
".git/objects/49/f0a70c1fcbc90fc948c4255ffa968d534d8495": "3e5858d148cad360f69895fd6ab21704",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "121ac7ef1afb1e29c40094cdd184f9a0",
".git/logs/refs/heads/main": "2f9072a0746ef77ac612a6b3cb49bd12",
".git/logs/refs/remotes/origin/main": "0620f191ebdb6698f68d8d6c9b904822",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d49ee6177cad3c849a19d6c33d39dfad",
".git/refs/remotes/origin/main": "d49ee6177cad3c849a19d6c33d39dfad",
".git/index": "ca543b339c4685370c9d901abfb7c327",
".git/COMMIT_EDITMSG": "f835923c6dfd6fe438623126952a4353",
".git/FETCH_HEAD": "225e47ca073def0da2c5282fbcfc71f5",
"assets/AssetManifest.json": "9de9f4eda486d4b6ab1312d8aeac0d06",
"assets/NOTICES": "0073f1c7f2c764b5e1012dee92ce62fb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "98defecd5bdfa232039dda7a786cc8da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f13ec2285605615e8be6e858e577b328",
"assets/fonts/MaterialIcons-Regular.otf": "57a97d3c6b6228413d3fbcb162d6ebcb",
"assets/assets/sprite%2520sheet.png": "98c8c6d0b48f0db415d4605698def1c4",
"assets/assets/home_icon.png": "a516b99a5cd8d7ef7a3f25f9d5c714bb",
"assets/assets/dots.png": "c5c7ebfc6866f6cfb86de58a95ee8883",
"assets/assets/test.png": "2ec89df39c75e6a8e2c9add4a761ee22",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
