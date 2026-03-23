import { d as defineEventHandler, s as setHeader } from '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const robots_txt = defineEventHandler(async (event) => {
  const req = event.node.req;
  const hostUrl = `${req.protocol || "https"}://${req.headers.host}`;
  const robotsTxtContent = `User-agent: *

SiteMap: ${hostUrl}/sitemap.xml

User-agent: BUbiNG
User-agent: Genieo
User-agent: grapeshot
User-agent: JamesBOT
User-agent: ltx71 - (http://ltx71.com/)
User-agent: MJ12bot
User-agent: SeznamBot
User-agent: dotbot
User-agent: CCBot
User-agent: TinEye-bot
User-agent: PubMatic Crawler Bot
User-agent: mappydata
User-agent: Jooblebot
User-agent: grapeshot
User-agent: DomainStatsBot
User-agent: PubMaticCrawlerBot
Disallow: /`;
  setHeader(event, "Content-Type", "text/plain");
  return robotsTxtContent;
});

export { robots_txt as default };
//# sourceMappingURL=robots.txt.mjs.map
