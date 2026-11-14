import React, { useEffect } from 'react';

export const JOBBER_CLIENTHUB_ID =
  '306a6900-fe95-4c4f-91f5-5aaae2d0586f-4624455';
export const JOBBER_FORM_URL =
  'https://clienthub.getjobber.com/client_hubs/306a6900-fe95-4c4f-91f5-5aaae2d0586f/public/work_request/embedded_work_request_form?form_id=4624455';

export const JOBBER_RENTALS_CLIENTHUB_ID =
  '306a6900-fe95-4c4f-91f5-5aaae2d0586f-5302617';
export const JOBBER_RENTALS_FORM_URL =
  'https://clienthub.getjobber.com/client_hubs/306a6900-fe95-4c4f-91f5-5aaae2d0586f/public/work_request/embedded_work_request_form?form_id=5302617';
const JOBBER_CSS =
  'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css';
const JOBBER_JS =
  'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';

const JobberFormEmbed = ({
  className = '',
  minHeight = 420,
  id,
  mode = 'embed',
  clientHubId = JOBBER_CLIENTHUB_ID,
  formUrl = JOBBER_FORM_URL,
  title = 'Request a quote from NAS Auto Spa',
}) => {
  useEffect(() => {
    if (mode === 'iframe') return;

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
    script.setAttribute('clienthub_id', clientHubId);
    script.setAttribute('form_url', formUrl);
    script.setAttribute('data-jobber', 'script');
    document.body.appendChild(script);
  }, [mode, clientHubId, formUrl]);

  if (mode === 'iframe') {
    return (
      <div
        id={id}
        className={className}
        style={{ scrollMarginTop: '88px', width: '100%' }}
      >
        <iframe
          src={formUrl}
          title={title}
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
      <div id={clientHubId} />
    </div>
  );
};

export default JobberFormEmbed;
