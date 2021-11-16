const getData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchFxPrices = () => getData('https://financialmodelingprep.com/api/v3/fx?apikey=5d89975d35c10fcf5353706439854000');

export const fetchCommodities = () => getData('https://financialmodelingprep.com/api/v3/symbol/available-commodities?apikey=5d89975d35c10fcf5353706439854000');

export const fetchCryptos = (symbol) => getData(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=5d89975d35c10fcf5353706439854000`);

export const fetchStocks = (symbol) => getData(`https://financialmodelingprep.com/api/v3/quote-short/${symbol}?apikey=5d89975d35c10fcf5353706439854000`);
