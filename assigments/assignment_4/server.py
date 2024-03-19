#!usr/bin/python
"""Module for creating a basic python server."""

import http.server

PORT = 8000
Handler = http.server.CGIHTTPRequestHandler

with http.server.HTTPServer(("", PORT), Handler) as httpd:
    print(f"Server starting on port {PORT}")
    httpd.serve_forever()
    