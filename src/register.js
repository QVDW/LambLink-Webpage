import { useRef, useState, useEffect } from "react";

const USER_REGEX = /^[a-zA-Z0-9_]{3,20}$/;
const PASS_REGEX = /^[?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})$/;

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatchPwd, setValidMatchPwd] = useState(false);
    const [matchPwdFocus, setMatchPwdFocus] = useState(false);

    const [errmsg, setErrmsg] = useState("");
    const [succes, setValid] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }
        , [user]);

    useEffect(() => {
        const result = PASS_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatchPwd(match);
    }
        , [pwd, matchPwd]);

    useEffect(() => {
        setErrmsg("");
    }, [user, pwd, matchPwd])

    return (
        <section>
            <p ref={errRef} classname={errMSsg ? "errmsg" : "offscreen"} aria-live="assertive">{errmsg}</p>
            <h1>Register</h1>
            <form>
                <label htmlFor="username">
                    Username
                </label>
                <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => serUser(e.target.value)}
                placeholder="Username"
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                >

                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                <label for="email">Email*</label>
                <input type="email" name="email" placeholder="Email" required>
                <label for="password">Password*</label>
                <input type="password" name="password" placeholder="Password" required>
                <label for="repeatPassword">Repeat password*</label>
                <input type="password" name="password" placeholder="Password" required>
                <input type="submit" value="Register" id="registerSubmit">
            </form>
        </section>
    );
}