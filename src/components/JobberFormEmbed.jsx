import React, { useEffect, useRef } from 'react';

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

/** One script load at a time per hub id (avoids React StrictMode double iframes). */
const loadByHubId = new Map();

function ensureJobberCss() {
  if (document.querySelector('link[data-jobber="css"]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = JOBBER_CSS;
  link.media = 'screen';
  link.setAttribute('data-jobber', 'css');
  document.head.appendChild(link);
}

function removeJobberScriptsForHub(clientHubId) {
  document
    .querySelectorAll(`script[data-jobber-script="${clientHubId}"]`)
    .forEach((node) => node.remove());
}

function removeDuplicateHubs(keepEl, clientHubId) {
  document.querySelectorAll(`[id="${clientHubId}"]`).forEach((node) => {
    if (node !== keepEl) {
      node.innerHTML = '';
      node.removeAttribute('id');
    }
  });
}

function keepSingleJobberFrame(hub) {
  const frames = hub.querySelectorAll('iframe.jobber-work-request, iframe[src*="clienthub.getjobber"]');
  frames.forEach((frame, index) => {
    if (index > 0) frame.remove();
  });
}

function injectJobberScript(clientHubId, formUrl) {
  const existing = loadByHubId.get(clientHubId);
  if (existing) return existing;

  ensureJobberCss();
  removeJobberScriptsForHub(clientHubId);

  const promise = new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = `${JOBBER_JS}?t=${Date.now()}`;
    script.async = true;
    script.setAttribute('clienthub_id', clientHubId);
    script.setAttribute('form_url', formUrl);
    script.setAttribute('data-jobber-script', clientHubId);
    const finish = () => resolve();
    script.onload = finish;
    script.onerror = finish;
    document.body.appendChild(script);
  }).finally(() => {
    loadByHubId.delete(clientHubId);
  });

  loadByHubId.set(clientHubId, promise);
  return promise;
}

async function mountJobberEmbed(hub, clientHubId, formUrl) {
  hub.innerHTML = '';
  hub.id = clientHubId;
  removeDuplicateHubs(hub, clientHubId);

  await injectJobberScript(clientHubId, formUrl);

  // Script is async; Jobber may still be attaching the iframe.
  for (let i = 0; i < 20; i += 1) {
    keepSingleJobberFrame(hub);
    if (hub.querySelector('iframe')) break;
    await new Promise((r) => setTimeout(r, 100));
  }
  keepSingleJobberFrame(hub);
}

const JobberFormEmbed = ({
  className = '',
  minHeight = 420,
  id,
  mode = 'embed',
  clientHubId = JOBBER_CLIENTHUB_ID,
  formUrl = JOBBER_FORM_URL,
  title = 'Request a quote from NAS Auto Spa',
}) => {
  const hubRef = useRef(null);
  const runIdRef = useRef(0);

  useEffect(() => {
    if (mode === 'iframe') return undefined;

    const hub = hubRef.current;
    if (!hub) return undefined;

    const runId = ++runIdRef.current;
    let cancelled = false;

    (async () => {
      await mountJobberEmbed(hub, clientHubId, formUrl);
      if (cancelled || runId !== runIdRef.current) return;
      keepSingleJobberFrame(hub);
    })();

    return () => {
      cancelled = true;
      hub.innerHTML = '';
      hub.removeAttribute('id');
      removeJobberScriptsForHub(clientHubId);
    };
  }, [mode, clientHubId, formUrl]);

  const frameHeight = Math.max(minHeight, 360);

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
            height: `${frameHeight}px`,
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
      style={{ scrollMarginTop: '88px', minHeight: frameHeight }}
    >
      <div ref={hubRef} className="jobber-embed-host w-full" />
    </div>
  );
};

export default JobberFormEmbed;