import React, { useState } from "react";

export const NewFile = () => {

    const [files, setFiles] = useState(null);

    const uploadImage = evt => {
        evt.preventDefault();
        // we are about to send this to the backend.
        console.log("This are the files", files);
        let body = new FormData();
        body.append("photo", files[0]);
        const options = {
            body,
            method: "POST",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }

        };
        // you need to have the user_id in the localStorage

        fetch(`${process.env.BACKEND_URL}/api/region/photo`, options)
            .then(resp => resp.json())
            .then(data => console.log("Success!!!!", data))
            .catch(error => console.error("ERRORRRRRR!!!", error));
    };

    const uploadLogoRegion = evt => {
        evt.preventDefault();
        // we are about to send this to the backend.
        console.log("This are the files", files);
        let body = new FormData();
        body.append("logo", files[0]);
        const options = {
            body,
            method: "POST",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }

        };
        // you need to have the user_id in the localStorage

        fetch(`${process.env.BACKEND_URL}/api/region/logo`, options)
            .then(resp => resp.json())
            .then(data => console.log("Success!!!!", data))
            .catch(error => console.error("ERRORRRRRR!!!", error));
    };

    return (
        <div className="container">
            <form onSubmit={uploadImage}>
                <input type="file" onChange={e => setFiles(e.target.files)} />
                <button>Upload Image</button>
            </form>
            <form onSubmit={uploadLogoRegion}>
                <input type="file" onChange={e => setFiles(e.target.files)} />
                <button>Upload Logo</button>
            </form>
        </div>
    );
}