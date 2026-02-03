import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function ExportPDF() {
  const downloadPDF = async () => {
    const element = document.body;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
    pdf.save("expense-report.pdf");
  };

  return (
    <button onClick={downloadPDF}
      className="px-4 py-2 bg-indigo-600 rounded-xl">
      Export Report
    </button>
  );
}
