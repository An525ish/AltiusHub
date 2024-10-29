import { useEffect, useState } from "react"

const AvatarInput = ({ setAvatar }) => {
    const [file, setFile] = useState(null)
    const [previewUrl, setPreviewUrl] = useState("https://picsum.photos/200/300")

    useEffect(() => {
        if (!file) {
            return
        }

        const reader = new FileReader()

        reader.onloadend = () => {
            setPreviewUrl(reader.result)
        }

        setAvatar(file)

        reader.readAsDataURL(file)
    }, [file, setAvatar])


    return (
        <div className="overflow-hidden">
            <label htmlFor="avatar">
                <img src={previewUrl} alt="avatar image" className="w-32 h-32 mx-auto border-2 border-blue rounded-full cursor-pointer" />
            </label>
            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden"
                name="avatar"
                id="avatar"
                accept="image/*"
            />
        </div>
    )
}

export default AvatarInput