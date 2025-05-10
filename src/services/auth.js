export const login = async ({ email, password }) => {
  if (email && password) {
    try {
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          username: 'emilys',
          password,
        }),
      });

      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(errorResponse?.message || 'Login failed!');
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};
