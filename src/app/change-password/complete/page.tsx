import { COMPLETE_CHANGE_PW } from '@constants/completeMessage';
import Confirmation from '@shared/confirmation/Confirmation';
import Header from '@shared/header/Header';

function CompleteChangePasswordPage() {
  const topMargin = 16;
  const bottomMargin = 66;

  return (
    <>
      <Header />
      <Confirmation
        options={COMPLETE_CHANGE_PW.options}
        title={COMPLETE_CHANGE_PW.title}
        description={COMPLETE_CHANGE_PW.description}
        topMargin={topMargin}
        bottomMargin={bottomMargin}
      />
    </>
  );
}

export default CompleteChangePasswordPage;
