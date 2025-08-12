import React from 'react';
import './certificate-templates.css';
import DownloadMyCertificate from './Download';

// Helper: default logo placeholder
const DefaultLogo = ({ size = 64 }) => (
  <div className="default-logo" style={{ width: size, height: size }}>
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l3 6 6 .5-4.5 3 1.5 6L12 15l-6 3 1.5-6L3 8.5 9 8 12 2z"
        fill="#9CA3AF"
      />
    </svg>
  </div>
);

// 1) Classic Certificate
function ClassicCertificate({
  recipient = 'Recipient Name',
  event = 'Event / Course',
  date = 'Date',
  issuer = 'Issuer',
  logo = null,
  title = 'Certificate of Achievement',
  subtitle = 'This is to certify that',
}) {
  return (
    <div id='classic' onClick={(e) => DownloadMyCertificate(e.target.id)} className="certificate classic">
      <div className="header">
        <div className="header-left">
          {logo ? (
            <img src={logo} alt="logo" className="logo" />
          ) : (
            <DefaultLogo size={80} />
          )}
          <div>
            <h1 className="issuer">{issuer}</h1>
            <p className="present-text">Proudly Presents</p>
          </div>
        </div>
        <div className="date">{date}</div>
      </div>

      <div className="body">
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
        <h3 className="recipient">{recipient}</h3>
        <p className="event">
          For outstanding performance in <span>{event}</span>
        </p>
      </div>

      <div className="footer">
        <div className="signature-block">
          <div className="line"></div>
          <p className="signature-text">Signature</p>
        </div>
        <div className="certificate-id">
          Certificate ID:{' '}
          <span>
            {Math.random().toString(36).slice(2, 10).toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
}

// 2) Modern Gradient Certificate
function ModernGradient({
  recipient = 'Recipient Name',
  event = 'Event / Course',
  date = 'Date',
  issuer = 'Issuer',
  logo = null,
  title = 'Certificate of Completion',
  subtitle = 'Awarded to',
}) {
  return (
    <div id='modern' onClick={(e) => DownloadMyCertificate(e.target.id)} className="certificate modern-gradient">
      <div className="gradient-header">
        <div>
          <h1 className="issuer">{issuer}</h1>
          <p className="date">{date}</p>
        </div>
        {logo ? (
          <img src={logo} alt="logo" className="logo" />
        ) : (
          <DefaultLogo size={80} />
        )}
      </div>

      <div className="body">
        <p className="subtitle">{subtitle}</p>
        <h2 className="recipient">{recipient}</h2>
        <p className="event">
          has successfully completed <span>{event}</span>
        </p>

        <div className="seal-signature">
          <div className="seal">Seal</div>
          <div className="signature">
            <div className="line"></div>
            <p>Signature</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3) Minimal Elegant Certificate
function MinimalElegant({
  recipient = 'Recipient Name',
  event = 'Event / Course',
  date = 'Date',
  issuer = 'Issuer',
  logo = null,
  title = 'Certificate',
  subtitle = 'This certifies that',
}) {
  return (
    <div id='minimal' onClick={(e) => DownloadMyCertificate(e.target.id)} className="certificate minimal">
      <div className="header">
        <div>
          <h1 className="issuer">{issuer}</h1>
          <p className="date">{date}</p>
        </div>
        {logo ? (
          <img src={logo} alt="logo" className="logo" />
        ) : (
          <DefaultLogo size={64} />
        )}
      </div>

      <div className="body">
        <p className="subtitle">{subtitle}</p>
        <h2 className="recipient">{recipient}</h2>
        <p className="event">for successfully participating in</p>
        <p className="event-name">{event}</p>
      </div>

      <div className="footer">
        <div>
          <p className="label">Issued by</p>
          <p>{issuer}</p>
        </div>
        <div className="signature">
          <p className="label">Authorized Signature</p>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

// 4) Badge Certificate
function BadgeCertificate({
  recipient = 'Recipient Name',
  event = 'Event / Course',
  date = 'Date',
  issuer = 'Issuer',
  logo = null,
  title = 'Award',
}) {
  return (
    <div id='badge' onClick={(e) => DownloadMyCertificate(e.target.id)} className="certificate badge-style">
      <div className="badge-logo">
        <div className="badge-circle">
          {logo ? (
            <img src={logo} alt="logo" className="logo" />
          ) : (
            <DefaultLogo size={80} />
          )}
        </div>
      </div>

      <div className="badge-content">
        <div className="title-date">
          <h3>{title}</h3>
          <span>• {date}</span>
        </div>
        <h2 className="recipient">{recipient}</h2>
        <p className="event">Recognized for {event}</p>

        <div className="footer">
          <div className="signature">
            <div className="line"></div>
            <p>Signature</p>
          </div>
          <div className="issuer-block">
            <p className="label">Issued by</p>
            <p>{issuer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ClassicCertificate, ModernGradient, MinimalElegant, BadgeCertificate };

