import React from "react";

const SideNav = () => {
  return (
    <div className="min-h-screen w-fit bg-dark_sec flex flex-col p-3 justify-between text-center text-2xl ">
      <div className="text-zinc-500 flex flex-col gap-5">
        <a href="">
          <button>
            <img
              src="https://s3-alpha-sig.figma.com/img/188c/86db/e423d3f6e3bbb113ef047122e1a45ae8?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPKax8ytFc2wtxVYJIkgR63kalD3-tGo0q3uAazQHxX-yhXlm7hnpntfY9XKFJU~xa9NDdiyQbihnueNcMJhWwKlZlsPwOFjgb-72IT~gzbNck-MfeimPFaz8onfh0lazoQwfq3EoQWIE6t1FKg54MtefdJw739yTObKYbNbNTTmo9QMZEOeJlmIK0TcXTslTAOnyxeGJZ~lW33ykhTDsNKWZaY~ea3N7MyLk40AyLFkDdxIYgHBBH88uWR4pAmF38T~kdxWAUOJAqpl2z0RemmAlLDBhnP8DxqfbjhDoOcXsCMHvb2WJk4qTsD3s6r27GOzE47PQgmjbuHfz06vcQ__"
              className="hover:text-dark_btn ri-dashboard-fill w-7"
            />
          </button>
        </a>
        <a href="">
          <button>
            <i className="hover:text-dark_btn ri-dashboard-fill"></i>
          </button>
        </a>
        <a href="">
          <button>
            <i className="hover:text-dark_btn ri-survey-line"></i>
          </button>
        </a>
        <a href="">
          <button>
            <i className="hover:text-dark_btn ri-heart-line"></i>
          </button>
        </a>
        <a href="">
          <button>
            <i className="hover:text-dark_btn ri-star-line"></i>
          </button>
        </a>
        <a href="">
          <button>
            <i className="hover:text-dark_btn ri-account-circle-line"></i>
          </button>
        </a>
        <a href="">
          <button>
            <i className="hover:text-dark_btn ri-settings-4-line"></i>
          </button>
        </a>
      </div>
      <a href="">
        <button>
          <i className="text-zinc-400 hover:text-dark_btn ri-logout-box-r-line"></i>
        </button>
      </a>
    </div>
  );
};

export default SideNav;
