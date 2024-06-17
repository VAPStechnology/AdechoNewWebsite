import { Link } from "react-router-dom";

function BlogButtonCompo() {
  return (
    <>
    <div className=" flex justify-center items-center space-x-5 p-10">
     <Link to={"/Blog1"}>
     <button className="btn btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <text x="6" y="18" fontSize="16" fontFamily="Arial" fill="currentColor">
              {"<"}
            </text>
        </svg>
      </button>
     </Link>
     <Link to={"/Blog1"}>
     <button className="btn btn-square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <text x="6" y="18" fontSize="16" fontFamily="Arial" fill="currentColor">
              {"1"}
            </text>
        </svg>
      </button>
     </Link> 
     <Link to={"/Blog2"}>
     <button className="btn btn-square ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
        <text x="6" y="18" fontSize="16" fontFamily="Arial" fill="currentColor">
              {"2"}
            </text>
        </svg>
      </button>
     </Link>
     <Link to={"/Blog2"}>
     <button className="btn btn-circle ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
         <text x="6" y="18" fontSize="16" fontFamily="Arial" fill="currentColor">
              {">"}
            </text>
        </svg>
      </button>
     </Link>
      </div>
    </>
  );
}
export default BlogButtonCompo;
