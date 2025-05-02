const fetch = require("node-fetch");

class Lugatify {
  constructor(apiKey) {
    if (!apiKey) throw new Error("API açarı tələb olunur.");
    this.apiKey = apiKey;
    this.baseUrl = "https://lugatifyapi.vercel.app";
  }

  async checkWord(word) {
    if (!word) throw new Error("Söz parametri tələb olunur.");
    const url = `${this.baseUrl}/checkword?word=${encodeURIComponent(word)}&key=${this.apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Xəta baş verdi.");
    return data;
  }

  async getRandomWord(options = {}) {
    let url = `${this.baseUrl}/random?key=${this.apiKey}`;
    if (options.length) url += `&length=${options.length}`;
    if (options.nitq_hissesi)
      url += `&nitq_hissesi=${encodeURIComponent(options.nitq_hissesi)}`;

    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Xəta baş verdi.");
    return data;
  }
}

module.exports = Lugatify;
