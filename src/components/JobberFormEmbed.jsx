import React, { useEffect, useRef } from 'react';

export const JOBBER_CLIENTHUB_ID =
  '306a6900-fe95-4c4f-91f5-5aaae2d0586f-4624455';
export const JOBBER_FORM_URL =
  'https://clienthub.getjobber.com/client_hubs/306a6900-fe95-4c4f-91f5-5aaae2d0586f/public/work_request/embedded_work_request_form?form_id=4624455';
const JOBBER_CSS =
  'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css';
const JOBBER_JS =
  'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';

const JobberFormEmbed = ({
  className = '',
  minHeight = 420,
  id,
  mode = 'embed',
}) => {
  const initialized = useRef(false);

  useEffect(() => {
    if (mode === 'iframe') return;

    if (initialized.current) return;
    initialized.current = true;

    if (!document.querySelector('link[data-jobber]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = JOBBER_CSS;
      link.media = 'screen';
      link.setAttribute('data-jobber', 'css');
      document.head.appendChild(link);
    }

    document.querySelectorAll('script[data-jobber]').forEach((node) => node.remove());

    const script = document.createElement('script');
    script.src = JOBBER_JS;
    script.async = true;
    script.setAttribute('clienthub_id', JOBBER_CLIENTHUB_ID);
    script.setAttribute('form_url', JOBBER_FORM_URL);
    script.setAttribute('data-jobber', 'script');
    document.body.appendChild(script);
  }, [mode]);

  if (mode === 'iframe') {
    return (
      <div
        id={id}
        className={className}
        style={{ scrollMarginTop: '88px', width: '100%' }}
      >
        <iframe
          src={JOBBER_FORM_URL}
          title="Request a quote from NAS Auto Spa"
          style={{
            display: 'block',
            width: '100%',
            height: `${minHeight}px`,
            border: 'none',
            background: 'transparent',
          }}
        />
      </div>
    );
  }

  return (
    <div
      id={id}
      className={className}
      style={{ scrollMarginTop: '88px' }}
    >
      <div id={JOBBER_CLIENTHUB_ID} />
    </div>
  );
};

export default JobberFormEmbed;
