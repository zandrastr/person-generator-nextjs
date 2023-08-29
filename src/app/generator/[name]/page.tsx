import axios from 'axios';

const getAge = async (name: string) => {
  const result = await axios.get(`https://api.agify.io?name=${name}`);
  return result.data;
};

const getGender = async (name: string) => {
  const result = await axios.get(`https://api.genderize.io?name=${name}`);
  return result.data;
};

const getCountry = async (name: string) => {
  const result = await axios.get(`https://api.nationalize.io?name=${name}`);
  return result.data;
};

interface Params {
  params: { name: string };
}

export default async function Page({ params }: Params) {
  const ageData = getAge(params.name);
  const genderData = getGender(params.name);
  const countryData = getCountry(params.name);

  const [age, gender, country] = await Promise.all([ageData, genderData, countryData]);

  return (
    <main>
      <h1> Person Generator Result</h1>
      <p>Name: {params.name}</p>
      <p>Age: {age?.age}</p>
      <p>Gender: {gender?.gender}</p>
      <p>Country: {country?.country[0]?.country_id}</p>
    </main>
  );
}
