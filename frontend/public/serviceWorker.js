const CACHE_NAME = "eventura-cache-v1"
const urlsToCache = [
    "/", 
    "/event1.jpg",
    "/event2.jpg",
    "/e3.jpg",
    "/e4.jpg",
    "/e5.jpg",
]

self.addEventListener( "install" , (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then( (cache) => {
            return cache.addAll(urlsToCache)
        } )
    )
} )

self.addEventListener( "fetch" , (event) => {
    event.respondWith(
        caches.match( event.request ).then( (res) => {
            return res || fetch(event.request)
        } )
    )
} )

self.addEventListener( "activates" , (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => 
        Promise.allSettled(
            keyList.map( (key) => {
                if( key != CACHE_NAME ){
                    return caches.delete(key)
                }
            } )
        ))
    )
} )
