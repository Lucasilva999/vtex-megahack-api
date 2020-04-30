module.exports = (dao) => {
  const createCandidateAccount = async (body) => {
    await dao.createCandidate(body);
    return body;
  };

  return {
    createCandidateAccount,
  };
};
