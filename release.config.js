module.exports = {
  branches: ["main"],
  repositoryUrl: "https://github.com/felipe1120gomez/github-actions-react",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github"
  ]
};
