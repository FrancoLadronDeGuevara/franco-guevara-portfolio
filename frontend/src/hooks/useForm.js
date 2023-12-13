import { useState } from "react"


export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validateForm(form));

        if (Object.keys(errors).length === 0) {
            const url = "https://formsubmit.co/ajax/francoguevara93@gmail.com";
            setLoading(true)

            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            })
                .then((res) => {
                    setLoading(false);
                    setResponse(true);
                    setForm(initialForm);

                    setTimeout(()=>{
                        setResponse(false)
                    }, 3000)
                })
        } else {
            return;
        }
    }

    return {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
    }
}