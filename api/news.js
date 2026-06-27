export default async function handler(req, res) {

  res.setHeader("Access-Control-Allow-Origin", "*");

  try {

    const response = await fetch(
      "https://news.google.com/rss/headlines/section/topic/BUSINESS?hl=en-IN&gl=IN&ceid=IN:en"
    );

    const rss = await response.text();

    const items = [...rss.matchAll(/<item>([\s\S]*?)<\/item>/g)];

    const news = items.slice(0, 25).map(item => {

      const block = item[1];

      const title =
        (block.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) ||
         block.match(/<title>(.*?)<\/title>/))?.[1] || "";

      const link =
        (block.match(/<link>(.*?)<\/link>/) || [])[1] || "";

      const pubDate =
        (block.match(/<pubDate>(.*?)<\/pubDate>/) || [])[1] || "";

      const source =
        (block.match(/<source[^>]*>(.*?)<\/source>/) || [])[1] || "";

      return {
        headline: title,
        source: source,
        published: pubDate,
        url: link
      };

    });

    res.status(200).json({
      count: news.length,
      news
    });

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

}
