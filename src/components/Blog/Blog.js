import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="border drop-shadow-lg p-5 w-9/12 mx-auto m-5 rounded-lg">
        <h1 className="text-2xl pb-4">What is the purpose of react router?</h1>
        <p>
          ReactJS Router is mainly used for developing Single Page Web
          Applications. React Router is used to define multiple routes in the
          application. React Router is used to define multiple routes in the
          application. When a user types a specific URL into the browser, and if
          this URL path matches any 'route' inside the router file, the user
          will be redirected to that particular route.
        </p>
      </div>
      <div className="border drop-shadow-lg p-5 w-9/12 mx-auto m-5 rounded-lg">
        <h1 className="text-2xl pb-4">
          Question 2: How does context api works?
        </h1>
        <p>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </div>
      <div className="border drop-shadow-lg p-5 w-9/12 mx-auto m-5 rounded-lg">
        <h1 className="text-2xl pb-4">How useref hook works?</h1>
        <p>
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.If we tried
          to count how many times our application renders using the useState
          Hook, we would be caught in an infinite loop since this Hook itself
          causes a re-render. To avoid this, we can use the useRef Hook.
        </p>
      </div>
    </div>
  );
};

export default Blog;
