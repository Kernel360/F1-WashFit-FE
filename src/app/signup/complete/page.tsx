import { COMPLETE_SIGNUP } from '@constants/completeMessage';
import Confirmation from '@shared/confirmation/Confirmation';
import Spacing from '@shared/spacing/Spacing';

export default function page() {
  const topMargin = 80;
  const bottomMargin = 66;

  const mainContainerStyle = {
    height: `calc(100vh - ${topMargin + bottomMargin}px)`,
  };

  return (
    <>
      <Spacing size={topMargin} />
      <main className="mainContainer" style={mainContainerStyle}>
        <Confirmation
          options={COMPLETE_SIGNUP.options}
          title={COMPLETE_SIGNUP.title}
          description={COMPLETE_SIGNUP.description}
        />
      </main>
      <Spacing size={bottomMargin} />
    </>
  );
}
