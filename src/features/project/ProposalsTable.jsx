import { useState } from "react";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";

const ProposalsTable = ({ proposals }) => {
  const [isChangeModal, setIsChangeModal] = useState(false);
  const [proposalInfo, setProposalInfo] = useState({});

  if (!proposals.length) return "Empty";
  return (
    <>
      <Table className="w-full text-secondary-700">
        <Table.Header>
          <Table.Row className="thead-row">
            <th>#</th>
            <th>فریلنسر</th>
            <th>توضیحات</th>
            <th>زمان تحویل</th>
            <th>هزینه</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {proposals.map((proposal, index) => (
            <ProposalRow
              key={proposal._id}
              index={index}
              proposal={proposal}
              setIsChangeModal={setIsChangeModal}
              setProposalInfo={setProposalInfo}
            />
          ))}
        </Table.Body>
      </Table>
      <Modal
        title="تغییر وضعیت"
        open={isChangeModal}
        onClose={() => setIsChangeModal(false)}
      >
        <ChangeProposalStatus
          proposalId={proposalInfo._id}
          onClose={() => setIsChangeModal(false)}
        />
      </Modal>
    </>
  );
};

export default ProposalsTable;
