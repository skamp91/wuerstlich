import './menu.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { useState, useEffect } from 'react';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function Menu() {
	const [numPages, setNumPages] = useState(null);
	const [file, setFile] = useState('/speisekarte-2023.pdf');

	const options = {
		cMapUrl: 'cmaps/',
		cMapPacked: true,
		standardFontDataUrl: 'standard_fonts/',
	};

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	useEffect(() => {
		pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
	}, []);
	return (
		<section id='menu' className='menu'>
			{/* <div>
				<Document
					file={file}
					onLoadSuccess={onDocumentLoadSuccess}
					options={options}
				>
					{Array.from(new Array(numPages), (el, index) => {
						return (
							<Page
								key={`page_${index + 1}`}
								pageNumber={index + 1}
							/>
						);
					})}
				</Document>
			</div> */}
		</section>
	);
}

/**
 * import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import './Sample.css';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};

export default function Sample() {
  const [file, setFile] = useState('./sample.pdf');
  const [numPages, setNumPages] = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="Example">
      <header>
        <h1>react-pdf sample page</h1>
      </header>
      <div className="Example__container">
        <div className="Example__container__load">
          <label htmlFor="file">Load from file:</label>{' '}
          <input onChange={onFileChange} type="file" />
        </div>
        <div className="Example__container__document">
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}
 */
