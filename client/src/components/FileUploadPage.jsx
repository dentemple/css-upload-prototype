import React, { useState } from "react";

import "./page.css";

export default function FileUploadPage() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    const data = new FormData();

    data.append("file", file);
    data.append("name", "styles");

    fetch("/api/customization", {
      method: "POST",
      body: data
    })
      .then(res => {
        setStatus(res.status);
        return res.json();
      })
      .then(json => void console.log(json))
      .catch(err => void console.log(err));
  }

  return (
    <main>
      <section className="top">
        <h1>Customize Your Privacy Center</h1>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <label>
            Select a custom stylesheet: <br />
            <input type="file" name="styles" onChange={handleChange} />
          </label>
          <br />
          <br />
          <label>
            Select a custom font:{" "}
            <small>
              <i>[TODO]</i>
            </small>
          </label>
          <br />
          <br />

          <input
            type="button"
            name="styles"
            value="Upload"
            onClick={handleUpload}
          />

          <br />
          <br />
          <>
            {status && (
              <>
                <label>
                  Upload status: <strong>{status}</strong>
                </label>
                <br />
              </>
            )}
          </>
          <>
            {status && status === 200 && (
              <label>
                <em>Refresh the app to see the new styles!</em>
              </label>
            )}
          </>
        </form>
      </section>
    </main>
  );
}
