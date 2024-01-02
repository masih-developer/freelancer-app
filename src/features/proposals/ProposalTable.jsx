import ErrorTitle from "../../ui/ErrorTitle";
import PageLoading from "../../ui/PageLoading";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
import useProposals from "./useProposals";

const ProposalTable = () => {
  const { proposals, isLoading } = useProposals();

  if (isLoading) {
    return <PageLoading offsetTop={156} />;
  }

  if (!proposals.length)
    return <ErrorTitle title="هنوز هیچ پیشنهادی به ثبت نرسیده است." />;

  return (
    <>
      <Table className="w-full text-secondary-700">
        <Table.Header>
          <Table.Row className="thead-row">
            <th>#</th>
            <th>توضیحات</th>
            <th>زمان تحویل</th>
            <th>هزینه</th>
            <th>وضعیت</th>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {proposals.map((proposal, index) => (
            <ProposalRow key={proposal._id} index={index} proposal={proposal} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default ProposalTable;
