import React, { useEffect } from "react";
import "/media/hp/107 GB Volume1/WebDev/Projects/taskio/src/Components/SocialProof/SocialProof.css";
import { Link } from "react-router-dom";
import { BsQuote } from "react-icons/bs";

const SocialProof = () => {
  return (
    <section className="proof pb-lg-14 py-10 ">
      <div className="container px-4 px-lg-0">
        <div className="row">
          <div className="offset-lg-2 col-lg-8 col-md-12">
            <div className="mb-8 ">
              <h2 className="light proof-headline fw-bold display-5 mb-1 text-secondary">
                Discover Success Stories:
              </h2>
              <h2 className="bold proof-headline fw-bold display-5 mb-4 pe-lg-22">
                Hear What Taskio Users Say!
              </h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <h4 className="user-feedback-topic mb-3">
                      Goal Achievement Made Simple
                    </h4>
                    <p className="user-feedback-specs mb-0">
                      Taskio has been instrumental in helping me achieve my
                      goals. Breaking down big tasks into smaller steps and
                      tracking progress has made success feel attainable.
                    </p>
                    <div className=" mt-4">
                      <h4 className="mb-1 fw-bold h5">by Jessica P.</h4>
                      <div className>
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h4 className="user-feedback-topic mb-3">
                      Time Management Mastery
                    </h4>
                    <p className="user-feedback-specs mb-0">
                      Taskio's time-tracking feature has given me a newfound
                      sense of control over my day. I can allocate time to tasks
                      more efficiently and maintain a healthier work-life
                      balance.
                    </p>
                    <div className=" mt-4">
                      <h4 className="mb-1 fw-bold h5">by David H.</h4>
                      <div className>
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-4">
                  <div className="card-body">
                    <h4 className="user-feedback-topic mb-3">
                      Inspiring Productivity
                    </h4>
                    <p className="user-feedback-specs mb-0">
                      Kudos to Taskio for being an inspiration to productivity.
                      The motivational quotes and positive affirmations keep me
                      motivated and ready to conquer my tasks.
                    </p>
                    <div className=" mt-4">
                      <h4 className="mb-1 fw-bold h5">by Olivia S.</h4>
                      <div className>
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <h4 className="user-feedback-topic mb-3">
                      Engaging and Informative Reports
                    </h4>
                    <p className="user-feedback-specs mb-0">
                      Taskio's insightful reports have changed the way I analyze
                      my progress. The visual breakdowns and graphs provide a
                      clear overview, making decision-making a breeze.
                    </p>

                    <div className=" mt-4">
                      <h4 className="mb-1 fw-bold h5">by Ethan W.</h4>
                      <div className>
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-4">
                  <div className="card-body">
                    <h4 className="user-feedback-topic mb-3">
                      User-Centric Support
                    </h4>
                    <p className="user-feedback-specs mb-0">
                      The Taskio support team is a real gem. Their prompt and
                      helpful responses to my queries show that they genuinely
                      care about users' experiences. A+ for customer service!
                    </p>
                    <div className=" mt-4">
                      <h4 className="mb-1 fw-bold h5">by Chloe R.</h4>
                      <div className>
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h4 className="user-feedback-topic mb-3">
                      Stress Reduction
                    </h4>
                    <p className="user-feedback-specs mb-0">
                      Taskio has become my stress-buster! With its reminders and
                      notifications, I no longer worry about missing deadlines.
                      It's like having a personal task assistant.{" "}
                    </p>
                    <div className=" mt-4">
                      <h4 className="mb-1 fw-bold h5">by Michael K.</h4>
                      <div className>
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feedback_btn">
        <Link to="/comingsoon">
          <button type="button" className="btn btn-see-more">
            See more
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SocialProof;
