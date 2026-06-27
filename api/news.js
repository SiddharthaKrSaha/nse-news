export default async function handler(req, res) {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  res.status(200).json({

    lastUpdated: "2026-06-29T08:00:00+05:30",

    news: [

      {
        symbol: "SBIN",
        headline: "SBI approves fund raise of ₹25,000 crore",
        category: "Fund Raise",
        source: "Moneycontrol",
        url: "https://example.com/news1"
      },

      {
        symbol: "RAMCOCEM",
        headline: "Elixir buys 2.7 lakh shares at ₹712",
        category: "Bulk Deal",
        source: "NSE Bulk Deals",
        url: "https://example.com/news2"
      },

      {
        symbol: "RBA",
        headline: "HRTI sells 29 lakh shares at ₹80.20",
        category: "Block Deal",
        source: "NSE Block Deals",
        url: "https://example.com/news3"
      }

    ]

  });

}
