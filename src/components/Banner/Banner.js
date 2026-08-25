import React from 'react';

function Banner({ status, numOfGuesses, answer }) {
  const bannerRef = React.useRef(null);
  const isGameOver = status === 'won' || status === 'lost';

  // Disabling the input drops focus onto <body>, so pull it back to the
  // result — otherwise the next Tab restarts from the top of the document.
  React.useEffect(() => {
    if (isGameOver) {
      bannerRef.current.focus();
    }
  }, [isGameOver]);

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
