import React from "react";

const Overview = () => {
  return (
    <section className="Company-overview">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h2>Company Overview</h2>
            <p>
              Gateway application is a social network that focuses on
              professional use and career development, it can be used by a
              student, teacher, worker, human resource, manager, etc. The user
              can be signed up by creating a new account via inputting personal
              information in fields or by scrapped data from LinkedIn,
              ResearchGate… After logging in, the application offers users the
              opportunity to post problems which they want to find a solution,
              suggest solutions for one of these problems in the Q&A section,
              find a community of people with whom you share interests and rate
              others when they help you to find a solution for your posted
              problem and even search for the jobs available in our platform in
              the job section . With those offered opportunities, our web
              application will speed up hiring for companies and help students
              particularly, to integrate in professional life. Also, users can
              confirm their skills via a calculated score. They can reach
              different levels, which they are used to identify talented users
              in every domain.
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <img src="assets/images/about3.png" alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
