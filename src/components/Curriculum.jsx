import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const Curriculum = () => {
  const CV = '/assets/CV.pdf';

  const width = 800;
  const scale = 1.2; 

  return (
    <div className='pdf'>
      <h2 id="cv">Mon curriculum vitae</h2>
      <Document file={CV}>
        <Page pageNumber={1} width={width} scale={scale} />
      </Document>
    </div>
  );
};

export default Curriculum;