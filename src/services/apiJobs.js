const baseURL = '';

export const getJobs = async () => {
  try {
    const res = await fetch(`${baseURL}/jobs`);
    if (!res.ok) throw new Error('Jobs could not be loaded!');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getJob = async (jobId) => {
  try {
    const res = await fetch(`${baseURL}/jobs/${jobId}`);
    if (!res.ok) throw new Error('Jobs could not be loaded!');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getApplications = async () => {
  try {
    const res = await fetch(`${baseURL}/jobs/applications`);
    if (!res.ok) throw new Error('Applications could not be loaded!');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOffers = async () => {
  try {
    const res = await fetch(`${baseURL}/jobs/offers`);
    if (!res.ok) throw new Error('Offers could not be loaded!');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async ({ id }) => {
  try {
    const res = await fetch(`${baseURL}/users/${id}`);
    if (!res.ok) throw new Error('Offers could not be loaded!');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
