class EasyHTTP {
  // Make an HTTP GET Request
  async get(url) {
    let response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      throw Error("TESTING");
    }
  }

  // Make an HTTP POST Request
  async post(url, data) {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw Error("Hopefully works");
    }
  }
  // Make an HTTP PUT Request
  async put(url, data) {
    let response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw Error("Hahahaha Error");
    }
  }
  // Make an HTTP DELETE Request
  async delete(url) {
    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (response.ok) {
      return `Delete complete`;
    } else {
      throw Error("Succkkaaa");
    }
  }
}

export const http = new EasyHTTP();
