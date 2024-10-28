// app/upload/page.tsx
"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState } from "react";

const UploadPage = () => {
  const { data: session, status } = useSession();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return (
      <div>
        <p>Please sign in to upload your resume.</p>
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      </div>
    );
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
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <div>
      <p>Signed in as {session.user?.email}</p>
      <button onClick={() => signOut()}>Sign out</button>

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
