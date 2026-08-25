import React from 'react';

function Banner({ status, numOfGuesses, answer }) {
  const bannerRef = React.useRef(null);

  // The banner is the game's result announcement, so it claims focus as soon
  // as it appears. Without this, focus is still on the input that just got
  // disabled, which drops it to <body> and restarts the next Tab from the top
  // of the document. The ref is only set while a banner is showing, so this
  // is a no-op during play.
  React.useEffect(() => {
    bannerRef.current?.focus();
  }, [status]);

  // Both live regions stay mounted for the whole game. Assistive tech only
  // announces changes made *inside* a region that already existed, so a
  // region inserted together with its own text goes unread.
  return (
    <>
      <div role="status" className="banner-live-region">
        {status === 'won' && (
          <div ref={bannerRef} tabIndex={-1} className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in{' '}
              <strong>
                {numOfGuesses} {numOfGuesses === 1 ? 'guess' : 'guesses'}
              </strong>
              .
            </p>
          </div>
        )}
      </div>
      <div role="alert" className="banner-live-region">
        {status === 'lost' && (
          <div ref={bannerRef} tabIndex={-1} className="sad banner">
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Banner;
