import { useForm } from '@inertiajs/inertia-react';
import { Link } from '@inertiajs/inertia-react';
import JoinNav from "./JoinNav";
import JoinRightWrapper from "./JoinRightWrapper";
import imgSignup from "../../images/Registration/img-signup-6.webp";
import padlock from "../../images/Registration/padlock.svg";
import Input from "@/Components/Input";
import { Trans } from "@/Pages/Localization/Trans";
import Button from "@/Components/Button";
import InputError from "@/Components/InputError";
import { BsFillEnvelopeFill } from "react-icons/bs";
import route from 'vendor/tightenco/ziggy/src/js';

const VerifyEmail = (props) => {

    const { data, setData, post, processing, errors, reset } = useForm({
        email_verification_code: '',
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('verify'));
    };

    const EmailSubmitHandler = (e) => {
        e.preventDefaultDfault();
        post(route('change.email'))
    }

    const CodeSubmitHandler = (e) => {
        e.preventDefault();
        post(route('verification.send'))
    }

    return (
        <>
            <JoinNav to="email" button="back" />
            <section className="container-fluid registration fade-in d-flex flex-column p-md-5 mb-5">
                <div className="container d-flex flex-column-reverse flex-md-row  align-items-center">
                    <div className="col col-md-7 me-md-5 text-center text-md-start mb-5">

                        <h3 className="h1 display-5 fw-bold account-form-label">
                            Enter Verification code
                        </h3>
                        <h2 className="account-heading mb-3">
                            A verification code was sent to
                        </h2>
                        <h5 className='account-heading mb-3'>show email here</h5>
                        <form onSubmit={EmailSubmitHandler}>
                            <button className='change-email-btn mt-3'>Click Here to Change Email</button>
                        </form>
                        <form onSubmit={submit}>

                            <div
                                className="w-75 my-3 mt-md-4 p-3 registration-name d-flex flex-row align-items-center registration-input me-3">
                                <img
                                    className="me-3"
                                    src={padlock}
                                    alt="@"
                                    width="24"
                                    height="24"
                                />
                                <Input
                                    type="number"
                                    name="email_verification_code"
                                    value={data.email_verification_code}
                                    className="d-block text-input"
                                    autoComplete="off"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    placeholder="Enter Email Verification Code"
                                />

                            </div>
                            <div >
                                <form onSubmit={CodeSubmitHandler}>
                                    <button className='mt-md-2 px-1 py-1 Resend-code-btn'> <BsFillEnvelopeFill className='envelop-icon w-30 mx-1' />Resend Code</button>
                                </form>
                            </div>

                            <InputError message={errors.email_verification_code} className="mt-2" />
                            {data.email_verification_code.length !== 6 ? (
                                <button disabled className="btn-registration btn btn-lg mt-5">
                                    {Trans("Continue")}
                                    <i className="bi bi-arrow-right ms-5"></i>
                                </button>
                            ) : (
                                <Button processing={processing} className="btn-registration btn btn-lg mt-5">
                                    {Trans("Continue")}
                                    <i className="bi bi-arrow-right ms-5"></i>
                                </Button>
                            )}
                        </form>
                    </div>
                    <div className="col col-md-5">
                        <JoinRightWrapper src={imgSignup} alt="person using laptop" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default VerifyEmail;
