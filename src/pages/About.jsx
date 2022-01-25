import { FaChalkboardTeacher, FaGithub } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";

function About() {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-6xl mb-4">Github Profile Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. <br />{" "}
        This project is part of the React Front To Back Udemy course by{" "}
        <strong>Brad Traversy</strong>.
      </p>

      <div className="mt-8">
        <h1 className="text-2xl">Links :- </h1>
        <div className="stats w-full rounded-lg shadow-md bg-base-100">
          <div className="stat">
            <h1 className="stat-title text-base flex justify-start items-center">
              <FaGithub className="mr-2" />
              Github
            </h1>
            <div className="stat-value">
              <a
                href="https://github.com/godofwarOP/github-profile-finder"
                target="_blank"
                rel="noreferrer"
                className="text-lg hover:underline"
              >
                Click here!
              </a>
            </div>
          </div>

          <div className="stat">
            <h1 className="stat-title text-base flex justify-start items-center">
              <SiUdemy className="mr-2" />
              Udemy
            </h1>
            <div className="stat-value">
              <a
                href="https://www.udemy.com/course/modern-react-front-to-back/"
                target="_blank"
                rel="noreferrer"
                className="text-lg hover:underline"
              >
                Click here!
              </a>
            </div>
          </div>

          <div className="stat">
            <h1 className="stat-title text-base flex justify-start items-center">
              <FaChalkboardTeacher className="mr-2" />
              Brad Traversy
            </h1>
            <div className="stat-value ">
              <a
                href="https://traversymedia.com"
                target="_blank"
                rel="noreferrer"
                className="text-lg hover:underline"
              >
                Click here!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
