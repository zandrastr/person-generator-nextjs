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
    <main className='h-full flex flex-col items-center justify-center'>
      <div className='p-8 rounded-lg bg-blue-950 shadow-xl'>
        <h1 className='text-4xl font-bold tracking-wide uppercase'> Person Generator</h1>
        <h2 className='text-l font-bold tracking-wide uppercase mb-8'>- Result -</h2>
        <p>
          <span className='font-bold'>Name:</span> {params.name}
        </p>
        <p>
          <span className='font-bold'>Age:</span> {age?.age}
        </p>
        <p>
          <span className='font-bold'>Gender:</span> {gender?.gender}
        </p>
        <p>
          <span className='font-bold'>Country:</span> {country?.country[0]?.country_id}
        </p>
      </div>
    </main>
  );
}
