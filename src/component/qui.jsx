import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import htmlToPdfmake from "html-to-pdfmake";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function Qui() {
  const [editorContent, setEditorContent] = useState("");

  const handleDownloadPDF = () => {
    console.log("Editor Content:", editorContent);
    const pdfContent = htmlToPdfmake(editorContent);
    console.log("PDF Content:", pdfContent);

    const docDefinition = { content: pdfContent };
    pdfMake.createPdf(docDefinition).download("document.pdf");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Document Editor</h1>
      <ReactQuill
        value={editorContent}
        onChange={setEditorContent}
        modules={quillModules}
        formats={quillFormats}
        className="mb-4"
      />
      <button
        onClick={handleDownloadPDF}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Download as PDF
      </button>
    </div>
  );
}

const quillModules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    ["link", "image"],
    ["clean"],
  ],
};

const quillFormats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "align",
  "link",
  "image",
];
