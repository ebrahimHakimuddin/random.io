function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}

function NavBar() {
  return (
    <div className="navbar  bg-base-100 p-3 shadow-lg justify-between">
      <div className="">
        <a className="cursor-pointer font-semibold text-xl" href="/">
          random.io
        </a>
      </div>
      <div className="">
        <div className="form-control">
          <div className="">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-[150px] md:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
