import React, { useState } from 'react'
import Axios from "axios";

export default function Register() {
    const [isNote, setNote] = useState("")

    const handleSubmit = async () => {
        try {
            await Axios.post("http://localhost:1127/api/newNote", {
                note: isNote,
            });
            console.log("Successfully inserted");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form>
                <input type="text" name="note" id="note" onChange={(e) => setNote(e.target.value)} className='bg' />
                <button type='submit' onClick={handleSubmit} className='bg'>whoa</button>
            </form>
        </div>
    )
}
