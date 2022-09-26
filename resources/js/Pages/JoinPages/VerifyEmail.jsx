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
        e.preventDefault();
        post(route('change.email'))
    }

    const CodeSubmitHandler = (e) => {
        e.preventDefault();
        post(route('verification.send'))
    }

    return (
        <>
            <JoinNav to="email" button="back" />
            <section className="mb-5 container-fluid registration fade-in d-flex flex-column p-md-5">
                <div className="container d-flex flex-column-reverse flex-md-row align-items-center">
                    <div className="mb-5 text-center col col-md-7 me-md-5 text-md-start">

                        <h3 className="h1 display-5 fw-bold account-form-label">
                            Enter Verification code
                        </h3>
                        <h2 className="mb-3 account-heading">
                            A verification code was sent to
                        </h2>
                        <h5 className='mb-3 account-heading'>show email here</h5>
                        <form onSubmit={EmailSubmitHandler}>
                            <button className='mt-3 change-email-btn'>Click Here to Change Email</button>
                        </form>
                        <form onSubmit={submit}>

                            <div
                                className="flex-row p-3 my-3 w-75 mt-md-4 registration-name d-flex align-items-center registration-input me-3">
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
                            <InputError message={errors.email_verification_code} className="mt-2" />
                            {data.email_verification_code.length !== 6 ? (
                                <button disabled className="mt-5 btn-registration btn btn-lg">
                                    {Trans("Continue")}
                                    <i className="bi bi-arrow-right ms-5"></i>
                                </button>
                            ) : (
                                <Button processing={processing} className="mt-5 btn-registration btn btn-lg">
                                    {Trans("Continue")}
                                    <i className="bi bi-arrow-right ms-5"></i>
                                </Button>
                            )}
                        </form>
                        <div >
                            <form onSubmit={CodeSubmitHandler}>
                                <button className='px-1 py-1 mt-md-2 Resend-code-btn'> <BsFillEnvelopeFill className='mx-1 envelop-icon w-30' />Resend Code</button>
                            </form>
                        </div>
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
