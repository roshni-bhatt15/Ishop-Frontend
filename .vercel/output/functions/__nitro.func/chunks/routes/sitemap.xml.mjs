import { d as defineEventHandler, s as setHeader, a as sendError, c as createError, b as useRuntimeConfig } from '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const sitemap_xml = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e;
  try {
    const data = await fetchDataFromAPI();
    const hostUrl = ((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.client_base) || "https://example.com";
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`;
    (_c = (_b = data == null ? void 0 : data.data) == null ? void 0 : _b.categories) == null ? void 0 : _c.forEach((i) => {
      sitemap += `
  <url>
    <loc>${hostUrl}/all/${i.slug}</loc>
    <lastmod>${i.updated_at}</lastmod>
  </url>`;
    });
    (_e = (_d = data == null ? void 0 : data.data) == null ? void 0 : _d.products) == null ? void 0 : _e.forEach((i) => {
      sitemap += `
  <url>
    <loc>${hostUrl}/${i.slug}/product/${i.id}</loc>
    <lastmod>${i.updated_at}</lastmod>
  </url>`;
    });
    sitemap += `
</urlset>`;
    setHeader(event, "Content-Type", "application/xml");
    return sitemap;
  } catch (error) {
    return sendError(event, createError({ statusCode: 500, statusMessage: error.message }));
  }
});
async function fetchDataFromAPI() {
  try {
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBase;
    const result = await fetch(`${baseUrl}api/v1/page/sitemap`);
    return result.json();
  } catch {
    throw new Error("Failed to fetch data from the API");
  }
}

export { sitemap_xml as default };
//# sourceMappingURL=sitemap.xml.mjs.map
