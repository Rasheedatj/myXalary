export const getJobs = async () => {
  try {
    const res = await fetch(
      'https://my-json-server.typicode.com/Rasheedatj/myXalary/jobs'
    );
    if (!res.ok) throw new Error('Jobs could not be fetched!');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
