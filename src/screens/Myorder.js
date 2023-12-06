
import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import Footerb from "../components/Footerb";
import Navbar from "../components/Navbar";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Myorder() {
    const [myOrderData, setMyOrderData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pdfFileUrl, setPdfFileUrl] = useState("");

    const fetchMyorder = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/myorderData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: localStorage.getItem("userEmail"),
                }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            setMyOrderData(data);

            // Replace 'pdfUrl' with the actual key in your data where the PDF URL is stored
            setPdfFileUrl(data.pdfUrl);
        } catch (error) {
            console.error("Error fetching my order data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMyorder();
    }, []);

    const downloadPDF = async () => {
        try {
            // Fetch the PDF file as a blob
            const response = await fetch(pdfFileUrl);

            if (!response.ok) {
                throw new Error(
                    `Failed to fetch PDF. Server responded with status ${response.status}`
                );
            }

            const blob = await response.blob();

            // Create an object URL from the blob
            const url = URL.createObjectURL(blob);

            // Create an anchor element and trigger a click event to download the file
            const a = document.createElement("a");
            a.href = url;
            a.download = "myOrderData.pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            // Revoke the object URL to free up resources
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error downloading PDF:", error);
        }
    };

    return (
        <>
            <div>
                <Navbar />
            </div>

            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        {/* Render the raw JSON data as a string */}
                        <pre>{JSON.stringify(myOrderData, null, 2)}</pre>

                        {/* Add a button to download the PDF */}
                        <button onClick={downloadPDF}>Download PDF</button>

                        {/* Render PDF using react-pdf */}
                        {pdfFileUrl && (
                            <Document file={pdfFileUrl}>
                                <Page pageNumber={1} />
                            </Document>
                        )}
                    </>
                )}
            </div>
        </>
    );
}
