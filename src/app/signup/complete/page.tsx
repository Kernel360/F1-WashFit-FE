import { COMPLETE_SIGNUP } from '@constants/completeMessage';
import Confirmation from '@shared/confirmation/Confirmation';

export default function page() {
  const topMargin = 80;
  const bottomMargin = 66;

  return (
    <Confirmation
      options={COMPLETE_SIGNUP.options}
      title={COMPLETE_SIGNUP.title}
      description={COMPLETE_SIGNUP.description}
      topMargin={topMargin}
      bottomMargin={bottomMargin}
    />
  );
}
