import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewBlog = () => {
    const navigate = useNavigate();
    const [Title, setTitle] = useState("");
    const [Body, setBody] = useState("");

    const stripHtmlEntities = (str) => {
        return String(str)
            .replace(/\n/g, "<br> <br>")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    };

    const onChange = (event, setFunction) => {
        setFunction(event.target.value);
      };
    
      const onSubmit = (event) => {
        event.preventDefault();
        const url = "/api/v1/blogs/create";
    
        if (Title.length == 0 || Body.length == 0)
          return;
    
        const formbody = {
            BlogID: 0,
            UserID: 0,
            Title,
            Body: stripHtmlEntities(Body)
        };
    
        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
          method: "POST",
          headers: {
            "X-CSRF-Token": token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formbody),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then((response) => navigate(`/blog/${response.id}`))
          .catch((error) => console.log(error.message));
      };

      return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-12 col-lg-6 offset-lg-3">
              <h1 className="font-weight-normal mb-5">
                Add a new blog to our awesome blog collection.
              </h1>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="blogTitle">Blog Title</label>
                  <input
                    type="text"
                    name="name"
                    id="blogTitle"
                    className="form-control"
                    required
                    onChange={(event) => onChange(event, setTitle)}
                  />
                </div>
                <label htmlFor="instruction">Blog Post</label>
                <textarea
                  className="form-control"
                  id="Body"
                  name="Body"
                  rows="5"
                  required
                  onChange={(event) => onChange(event, setBody)}
                />
                <button type="submit" className="btn custom-button mt-3">
                  Create Recipe
                </button>
                <Link to="/blogs" className="btn btn-link mt-3">
                  Back to blogs
                </Link>
              </form>
            </div>
          </div>
        </div>
      );
  };
  
  export default NewBlog;