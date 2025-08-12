// SHow.jsx
import React from 'react';

import './certificate-templates.css'; // make sure styling is applied
import { BadgeCertificate, ClassicCertificate, MinimalElegant, ModernGradient } from './Template';

function SHow() {
  return (
    <>
        <ClassicCertificate />
        <ModernGradient />
        <MinimalElegant />
        <BadgeCertificate />
    </>
  );
}

export default SHow;
