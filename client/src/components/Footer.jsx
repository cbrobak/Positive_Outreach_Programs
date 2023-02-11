import React from 'react';

export default function Footer() {
  return (
    <>
      <footer
        className="text-white text-center container-fluid mt-5 fixed-bottom border">
        <div
          className="row">
          <div
            className="col-4">
            <h3
              className="mt-3 text-warning">
              Address
            </h3>
            <h5
              className="opaque mt-3">1946 W. U.S. Hwy. 40
            <br />
              Greencastle, In
            <br />
              46135
            </h5>

          </div>
          <div
            className="col-4">
            <h3
              className="text-center mt-3 text-warning">
              Around the Web
            </h3>
            <div
              className="d-flex align-items-center text-dark">
              <a
                href="#"
                className="offset-1 col-2 fa-2x fab fa-facebook mx-1">
              </a>
              <a
                href="#"
                className="col-2 fa-2x fab fa-google-plus mx-1">
              </a>
              <a
                href="#"
                className="col-2 fa-2x fab fa-twitter mx-1">
              </a>
              <a
                href="#"
                className="col-2 fa-2x fab fa-linkedin mx-1">
              </a>
              <a
                href="#"
                className="col-2 fa-2x fab fa-dribbble mx-1">
              </a>
            </div>
          </div>
          <div
            className="col-4">
            <h3
              className="mt-3 text-warning">
              About Us
            </h3>
            <h6
              className="opaque col-md-12">
              The Positive Outreach Programs will be a Non-Profit organization committed to the improvement of life through personal responsility.
            </h6>
          </div>
        </div>
        <p>
          <small
            className="text-warning">
            * Disclaimer: The Positive Outreach Program is not intended to treat, diagnose, or prevent any medical condition. *
          </small>
        </p>
        <div
          className="text-warning text-center small fixed-bottom">
          Copyright &copy; Positive Outreach Program 2021
        </div>
      </footer>
    </>
  )
};