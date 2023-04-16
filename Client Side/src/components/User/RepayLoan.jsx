import React, { useState } from 'react'
import UserNav from './UserNav';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../common.css";


const RepayLoan = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(
        {
            senderid: "",
            Loan: "",
            amount: "",
        }
    );
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setData({ ...data, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(data.senderid, data.amount);

        /* now to do validation wait for backend */
        const found_data = await axios.post("http://localhost:5000/", data).then(function (response) {
            console.log("response found");
            console.log(response);
        }).catch(function (error) {
            console.log("error occured in REGISTER");
        });

        // it will return true or false

        // return a component of yes or no

    }


    return (
        <>
            <UserNav></UserNav>
            <div className='form-group box'>
                <h1> RepayLoan </h1>
                <form onSubmit={handleSubmit}>
                    <div className='field'>
                        <label htmlFor='senderid'>sender id</label>
                        <input className='form-control' type='text' autoComplete='off' name='senderid' id='senderid' value={data.senderid} onChange={handleInput}></input>
                    </div>

                    <div className='field'>
                        <label htmlFor='Loan'>loan id</label>
                        <input className='form-control' type='text' autoComplete='off' name='Loan' id='Loan' value={data.Loan} onChange={handleInput}></input>
                    </div>

                    <div>
                        <label htmlFor='amount'>amount</label>
                        <input className='form-control' type='text' autoComplete='off' name='amount' id='amount' value={data.amount} onChange={handleInput}></input>
                    </div>

                    <button type='submit' className='btn btn-primary'>check</button>
                </form>
            </div>
        </>

    )

}

export default RepayLoan
