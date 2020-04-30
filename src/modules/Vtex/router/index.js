const router = require("express").Router();

module.exports = ({ get, post, put, del }) => () => {
  router.post("/account/create/candidate", async (req, res) => {
    try {
      const data = await post.createCandidateAccount(req.body);
      res.status(201).json({
        data,
      });
    } catch (error) {
      console.log(error);
    }
  });

  router.post("/account/create/company", async (req, res) => {
    const data = await post.createCompanyAccount(req.body);

    res.status(201).json({
      data,
    });
  });

  router.put("/account/update", async (req, res) => {
    const data = await put.updateAccount(req.body);

    res.status(200).json({
      data,
    });
  });

  router.put("/account/change-password", async (req, res) => {
    const data = await put.changePassword(req.body);

    res.status(200).json({
      data,
    });
  });

  router.post("/account/login", async (req, res) => {
    const data = await post.authorizeLogin(req.body);

    res.status(200).json({
      data,
    });
  });

  router.post("/job/create", async (req, res) => {
    const data = await post.createJob(req.body);

    res.status(201).json({
      data,
    });
  });

  router.put("/job/update", async (req, res) => {
    const data = await put.updateJob(req.body);

    res.status(200).json({
      data,
    });
  });

  router.delete("/job/remove", async (req, res) => {
    const data = await del.removeJob(req.body);

    res.status(200).json({
      data,
    });
  });

  router.post("/job/apply", async (req, res) => {
    const data = await post.applyToJob(req.body);

    res.status(200).json({
      data,
    });
  });

  router.post("/job/cancel-application", async (req, res) => {
    const data = await post.cancelJobApplication(req.body);

    res.status(200).json({
      data,
    });
  });

  router.get("/job/list", async (req, res) => {
    const data = await get.listAllJobs();

    res.status(200).json({
      data,
    });
  });

  return { router, endpoint: "/" };
};
