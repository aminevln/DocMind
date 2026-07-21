import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, FileText } from "lucide-react";
import { uploadPdf } from "../services/uploadService";

function UploadCard() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            setFile(acceptedFiles[0]);
            setMessage("");
        }
    }, []);

    const {
        getRootProps,
        getInputProps,
        open,
        isDragActive,
    } = useDropzone({
        onDrop,
        noClick: true,
        accept: {
            "application/pdf": [".pdf"],
        },
    });

    const handleUpload = async () => {
        if (!file) {
            setMessage("Select a PDF first.");
            return;
        }

        try {
            setLoading(true);

            const response = await uploadPdf(file);

            setMessage(response.message);

            console.log(response);

        } catch (error) {
            console.error(error);

            setMessage("Upload failed.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="mb-16 w-full max-w-3xl">
            <div
                {...getRootProps()}
                className={`
                    rounded-3xl
                    border-2
                    border-dashed
                    p-10
                    transition-all
                    duration-300
                    backdrop-blur-xl

                    ${
                        isDragActive
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-slate-700 bg-slate-900/60 hover:border-blue-500"
                    }
                `}
            >
                <input {...getInputProps()} />

                <div className="flex flex-col items-center">

                    <div className="mb-5 rounded-full bg-blue-500/20 p-5">
                        <Upload
                            size={42}
                            className="text-blue-400"
                        />
                    </div>

                    <h2 className="mb-2 text-2xl font-bold">
                        Upload your PDF
                    </h2>

                    <p className="mb-8 text-center text-slate-400">
                        Drag & Drop your PDF here
                    </p>

                    {file && (
                        <div className="mb-8 flex items-center gap-3 rounded-xl bg-slate-800 px-5 py-3">
                            <FileText className="text-blue-400" />
                            <span>{file.name}</span>
                        </div>
                    )}

                    <div className="flex gap-4">

                        <button
                            onClick={open}
                            className="rounded-xl bg-slate-700 px-6 py-3 font-semibold transition hover:bg-slate-600"
                        >
                            Select PDF
                        </button>

                        <button
                            onClick={handleUpload}
                            disabled={loading}
                            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500 disabled:opacity-50"
                        >
                            {loading ? "Uploading..." : "Upload"}
                        </button>

                    </div>

                    {message && (
                        <p className="mt-6 text-green-400">
                            {message}
                        </p>
                    )}

                </div>
            </div>
        </section>
    );
}

export default UploadCard;