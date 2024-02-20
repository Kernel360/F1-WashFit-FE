import { COMPLETE_FIND_ID } from '@constants/completeMessage';
import Confirmation from '@shared/confirmation/Confirmation';
import Header from '@shared/header/Header';

const TOP_MARGIN = 16;
const BOTTOM_MARGIN = 66;

function CompleteFindIdPage() {
  return (
    <>
      <Header />
      <Confirmation
        options={COMPLETE_FIND_ID.options}
        title={COMPLETE_FIND_ID.title}
        description={COMPLETE_FIND_ID.description}
        topMargin={TOP_MARGIN}
        bottomMargin={BOTTOM_MARGIN}
        isHeader
      />
    </>
  );
}

export default CompleteFindIdPage;
