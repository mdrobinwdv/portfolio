import GitHubCalendar from "react-github-calendar";

function GithubGraph() {
  return (
    <section className="mt-28">
      <h2 className="text-4xl font-bold text-center mb-10">
        GitHub Activity
      </h2>

      <div className="overflow-auto flex justify-center">
        <GitHubCalendar username="YOUR_GITHUB_USERNAME" />
      </div>
    </section>
  );
}

export default GithubGraph;