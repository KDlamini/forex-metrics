const url = 'https://....';

const getData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchFxPrices = () => getData(url);

export default fetchFxPrices;
