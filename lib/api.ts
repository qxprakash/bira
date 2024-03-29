const fetcher = async ({ url, method, body, json = true }) => {
    const res = await fetch(url, {
      method,
      // ...(body && JSON.stringify(body)),
      // body: JSON.stringify(body),
      body: body && JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("API Error");
    }

    if (json) {
      const data = await res.json();
      return data;
    }
  };

  export const register = async (user) => {
    return fetcher({
      url: "/api/register",
      method: "POST",
      body: user,
      json: false
    });
  };

  export const signin = async (user) => {
    return fetcher({
      url: "/api/signin",
      method: "POST",
      body: user,
      json: false
    });
  };


  export const createNewProject = async (name) => {
    return fetcher({
      url: '/api/project',
      method: 'POST',
      body: {name},
      json: true
    })
  }

  export const createNewTask = async (name , projectId) => {
    return fetcher({
      url: '/api/task',
      method: 'POST',
      body: {name , projectId},
      json: true
    })
  }


  // export const createNewTask = async (name)