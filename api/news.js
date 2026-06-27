export default async function handler(req, res) {

  res.setHeader("Access-Control-Allow-Origin", "*");

  try {

    const response = await fetch(
      "https://news.google.com/rss/search?q=Indian+stock+market&hl=en-IN&gl=IN&ceid=IN:en"
    );

    const rss = await response.text();

    res.status(200).send(rss);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

}
