let cacheName = "meujogodavelha";
let filesToCache = ["/", "/index.html",
"/css/syle/.css", "/js/main.js"];

self.addEventListener("intall", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(function(cache){

        })
    )
});
 
self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});