import ProposalTable from "../features/proposals/ProposalTable";

const Proposals = () => {
  return (
    <div className="mt-5">
      <h1 className="mb-8 text-xl font-bold text-secondary-700">
        پیشنهادات شما:
      </h1>
      <ProposalTable />
    </div>
  );
};

export default Proposals;
