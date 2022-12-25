import React from "react";

export const Navbar = () => {
  return (
    <div className>
      <nav className=" navbar navbar-expand bg-white">
        <div className="px-5 py-2">
          <img
            alt=""
            src="//capp.nicepage.com/34e28f3ca3d0db4ae81dc8a781902ebadcdd744e/images/default-logo.png"
            class="u-logo-image u-logo-image-1"
          />
        </div>

        <div class="input-group ">
          <div class=" d-flex ms-auto">
            <input type="search" placeholder="Search" class="form-control" />
            <label class="align items-center" for="form1"></label>
          </div>
          <button type="button" class="btn btn-white">
            {/* <i class="fas fa-search"></i> */}
          </button>
        </div>
      </nav>
    </div>
  );
};
