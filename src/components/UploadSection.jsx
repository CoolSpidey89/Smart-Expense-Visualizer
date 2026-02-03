import { parseCSV } from "../utils/parseCSV";

export default function UploadSection({ setData }) {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) parseCSV(file, setData);
  };

  return (
    <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
      <input type="file" accept=".csv" onChange={handleFile} />
    </div>
  );
}
