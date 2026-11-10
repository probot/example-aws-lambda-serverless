/**
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  app.on("issues.opened", async (context) => {
    return context.octokit.issues.createComment(
      context.issue({ body: "Hello, World!" })
    );
  });
};
