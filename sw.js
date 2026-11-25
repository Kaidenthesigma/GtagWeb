self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).then(response => {
      const headers = new Headers(response.headers);

      if (event.request.url.endsWith('.gz')) {
        headers.set('Content-Encoding', 'gzip');
      }

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: headers
      });
    })
  );
});
