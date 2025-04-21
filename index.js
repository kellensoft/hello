const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || 'Hello, {{input}}!';
const FAILURE_MESSAGE = process.env.FAILURE_MESSAGE || 'Failed to reach target.';
const CALL_TARGET_URL = process.env.CALL_TARGET_URL || '';

function applyMessageTemplate(template, input) {
  return template.replace(/\{\{input\}\}/g, input || '');
}

const server = http.createServer((req, res) => {
  let input = '';

  const respond = (finalMessage) => {
    if (CALL_TARGET_URL) {
      const targetUrl = new URL(CALL_TARGET_URL);
      const options = {
        hostname: targetUrl.hostname,
        port: targetUrl.port || 80,
        path: targetUrl.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
          'Content-Length': Buffer.byteLength(finalMessage)
        }
      };

      const proxy = http.request(options, proxyRes => {
        let data = '';
        proxyRes.on('data', chunk => data += chunk);
        proxyRes.on('end', () => {
          if (proxyRes.statusCode >= 200 && proxyRes.statusCode < 300) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
          } else {
            res.writeHead(proxyRes.statusCode);
            res.end(FAILURE_MESSAGE);
          }
        });
      });

      proxy.on('error', () => {
        res.writeHead(502);
        res.end(FAILURE_MESSAGE);
      });

      proxy.write(finalMessage);
      proxy.end();
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(finalMessage);
    }
  };

  if (req.method === 'GET') {
    const parsedUrl = url.parse(req.url, true);
    input = parsedUrl.query.q || '';
    respond(applyMessageTemplate(MESSAGE, input));

  } else if (req.method === 'POST') {
    req.on('data', chunk => input += chunk);
    req.on('end', () => {
      respond(applyMessageTemplate(MESSAGE, input));
    });
  } else {
    res.writeHead(405);
    res.end('Method Not Allowed');
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});