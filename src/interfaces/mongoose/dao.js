const candidateAccount = require("../../infra/database/mongoose/models/CandidateAccount");
const companyAccount = require("../../infra/database/mongoose/models/CompanyAccount");

module.exports = () => {
  const createCandidate = async (candidateData) => {
    console.log(candidateData);
    const candidate = await candidateAccount.create(candidateData);
    return candidate;
  };

  const createCompany = async (companyData) => {
    const company = await companyAccount.create(companyData);
    return company;
  };

  return {
    createCandidate,
    createCompany,
  };
};
