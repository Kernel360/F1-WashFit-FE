import { COMPLETE_FIND_ID } from '@constants/completeMessage';
import Confirmation from '@shared/confirmation/Confirmation';
import Header from '@shared/header/Header';

function CompleteFindIdPage() {
  const topMargin = 16;
  const bottomMargin = 66;

  return (
    <>
      <Header />
      <Confirmation
        options={COMPLETE_FIND_ID.options}
        title={COMPLETE_FIND_ID.title}
        description={COMPLETE_FIND_ID.description}
        topMargin={topMargin}
        bottomMargin={bottomMargin}
      />
    </>
  );
}

export default CompleteFindIdPage;
