import { Editor } from "@tinymce/tinymce-react";
import { Notyf } from "notyf";
import BASE_API_URL from "../../BASE_API_URL";

const notyf = new Notyf();

const TextBox = ({ handleContentChange }) => {
    const handleEditorChange = (e) => {
        handleContentChange(e.target.getContent());
    };

    return (
        <div className="textbox-wrapper">
            <input type="file" id="imgupload" style={{ display: "none" }} />
            <Editor
                onChange={handleEditorChange}
                apiKey="c9p4pywnbq8txxusovcgkjacj2gpqa4ppqwnz5grbpt1q8yk"
                init={{
                    setup: function (editor) {
                        editor.ui.registry.addButton("imageUploadButton", {
                            icon: "image",
                            tooltip: "Insert/edit image",
                            onAction: function (_) {
                                const uploadElement =
                                    document.getElementById("imgupload");
                                uploadElement.click();
                                uploadElement.onchange = () => {
                                    const inputFile = uploadElement.files[0];
                                    const allowedExt = ["png", "jpg", "jpeg"];
                                    if (
                                        allowedExt.includes(
                                            inputFile.name
                                                .split(".")[1]
                                                .toLowerCase()
                                        )
                                    ) {
                                        notyf.success("Uploading...");
                                        let reader = new FileReader();
                                        reader.readAsDataURL(inputFile);
                                        reader.onload = () => {
                                            const b64 =
                                                reader.result.split(
                                                    "base64,"
                                                )[1];
                                            fetch(
                                                `${BASE_API_URL}/api/image/upload`,
                                                {
                                                    // Adding method type
                                                    method: "POST",

                                                    // Adding body or contents to send
                                                    body: JSON.stringify({
                                                        b64,
                                                    }),

                                                    // Adding headers to the request
                                                    headers: {
                                                        "Content-type":
                                                            "application/json; charset=UTF-8",
                                                        "Access-Control-Allow-Origin":
                                                            "*",
                                                    },
                                                }
                                            )
                                                .then(async (response) => {
                                                    const resp =
                                                        await response.json();
                                                    editor.insertContent(
                                                        `<img title="${inputFile.name}" src="${resp.link}" alt="" />`
                                                    );
                                                    notyf.dismissAll();
                                                    notyf.open({
                                                        type: "success",
                                                        message:
                                                            "Uploaded successfully!",
                                                        duration: 2000,
                                                    });
                                                })
                                                .catch((error) =>
                                                    console.log(error)
                                                );
                                        };
                                    } else {
                                        notyf.open({
                                            type: "error",
                                            message: "Invalid image format",
                                        });
                                    }
                                };
                            },
                        });
                    },
                    width: "100%",
                    min_height: 500,
                    menubar: false,
                    statusbar: false,
                    selector: "textarea",
                    paste_block_drop: false,
                    paste_enable_default_filters: false,
                    plugins: "image code autoresize paste",
                    toolbar:
                        "bold italic underline strike | alignleft aligncenter alignright | imageUploadButton",
                    content_style: `
                        @import url('https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,600,700,800,900'); 
                        body { font-family: Roboto }
                        #tinymce { color: #000; }
                        #mce-toolbar-grp {
                            background-color: #000 !important; /* uses !important or override .mce-panel background-color/image */
                            background-image: none !important;
                        }
                        img {
                            max-height: 25vw;
                            max-width: 25vw;
                        }`,
                    object_resizing: true,
                }}
            />
        </div>
    );
};

export default TextBox;
