import { COMPLETE_CHANGE_PW } from '@constants/completeMessage';
import Confirmation from '@shared/confirmation/Confirmation';
import Header from '@shared/header/Header';

const TOP_MARGIN = 16;
const BOTTOM_MARGIN = 66;

function CompleteChangePasswordPage() {
  return (
    <>
      <Header />
      <Confirmation
        options={COMPLETE_CHANGE_PW.options}
        title={COMPLETE_CHANGE_PW.title}
        description={COMPLETE_CHANGE_PW.description}
        topMargin={TOP_MARGIN}
        bottomMargin={BOTTOM_MARGIN}
        isHeader
      />
    </>
  );
}

export default CompleteChangePasswordPage;
