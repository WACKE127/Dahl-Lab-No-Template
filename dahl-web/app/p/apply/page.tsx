"use client";

import { useSession } from "next-auth/react";
import React, { useState } from "react";
import AuthButton from "../../components/authbutton";

const UploadPage = () => {
  const { data: session, status } = useSession();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <AuthButton />;
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", selectedFile);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
        // Handle errors
    }).catch((error) => {
      console.error("Error uploading file:", error);
      alert("An error occurred while uploading the file.");
    });

    if (response && response.ok) {
      const result = await response.json();
      alert(result.message);
    } else {
      alert("Failed to upload the file.");
    }
  };

  return (
    <div>
      <AuthButton />

      <h1>Upload Your Resume</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="file"
          name="resume"
          accept=".doc,.docx,.pdf"
          onChange={handleFileChange}
          required
        />
        <button type="submit">Submit Resume</button>
      </form>
    </div>
  );
};

export default UploadPage;
