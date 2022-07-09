import { useEffect, useState } from "react";
import { useUserContext } from "../Context/UserContext";
import { useRequest } from "./Request";

export const useSignUp = () => {
    const [form, setform] = useState({ email: "", password: "" });
    const [novalidation, setError] = useState({ email: false, password: false });
    const [loading, setLoading] = useState(false);
    const [btnDisable, setDisable] = useState(false);
    const { Request } = useRequest();
    const { saveUser } = useUserContext();
    useEffect(() => {
        if (form.email != '' || form.password != "") {
            checkForm()
        }
    }, [form])


    const checkForm = () => {
        if (verifyEmail(form.email)) {
            if (!novalidation.password) {
                setDisable(false);
            }
            window.document.getElementsByName('email')[0].style.border = '1px solid #E7ECEC';
        } else {
            setError({ ...novalidation, email: true })
            setDisable(true);
            window.document.getElementsByName('email')[0].style.border = '1px solid #C94043';
        }
        if (checkPassword(form.password)) {
            if (!novalidation.email) {
                setDisable(false);
            }
            window.document.getElementsByName('password')[0].style.border = '1px solid #E7ECEC';
        } else {
            setError({ ...novalidation, password: true })
            setDisable(true);
            window.document.getElementsByName('password')[0].style.border = '1px solid #C94043';
        }
    }


    const onChange = ({ target }) => {
        const { name, value } = target;
        setform({ ...form, [name]: value });
    }

    const submitForm = () => {
        setLoading(true);
        Request({ url: "register/", form }).then((resposen) => {
            setLoading(false);
            if (resposen.status) {
                saveUser(resposen.result);
            }
        })
    }

    return { submitForm, onChange, loading, btnDisable }
}

export const useLogin = () => {
    const { Request } = useRequest();
    const { saveUser } = useUserContext();
    const [form, setform] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const onChange = ({ target }) => {
        const { name, value } = target;
        setform({ ...form, [name]: value });
    }

    const submitForm = () => {
        setLoading(true);
        Request({ url: "auth/jwt/create/", form }).then((resposen) => {
            setLoading(false);
            if (resposen.status) {
                saveUser(resposen.result);
            }
        })
    }
    return { submitForm, onChange, loading }
}

export const useResetPassword = (setpage) => {
    const { Request } = useRequest();
    const [form, setform] = useState({ email: "" });
    const [loading, setLoading] = useState(false);
    const onChange = ({ target }) => {
        const { name, value } = target;
        setform({ ...form, [name]: value });
    }
    const submitForm = () => {
        setLoading(true);
        Request({ url: "auth/users/reset_password/", form }).then((resposen) => {
            setLoading(false);
            if (resposen.status) {
                setpage('successSendLink')
            }
        })
    }
    return { submitForm, onChange, loading }
}

export const useNewPassword = (setpage) => {
    const { params } = useUserContext();
    const { token, uid } = params;
    const [form, setform] = useState({ uid, token, new_password: "", re_new_password: "" });
    const { Request } = useRequest();
    const [loading, setLoading] = useState(false);
    const onChange = ({ target }) => {
        const { name, value } = target;
        setform({ ...form, [name]: value });
    }
    const submitForm = () => {
        setLoading(true);
        Request({ url: "auth/users/reset_password_confirm", form }).then((resposen) => {
            setLoading(false)
            if (resposen.status) {
                setpage('successSetPassword')
            }
        })
    }
    return { onChange, submitForm, loading }
}

export const checkPassword = (password) => {
    let rgx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#^(_)+=$!%*?&])[A-Za-z\d@#^(_)+=$!%*?&]{8,50}$/g;
    return rgx.test(password);
}
export const verifyEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};