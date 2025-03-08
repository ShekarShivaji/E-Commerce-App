import "./index.css"
import { useState } from "react"

const CompanyDetails = () => {
    const [companyName, setCompanyName] = useState("")
    const [address, setAddress] = useState("")
    const [number, setNumber] = useState("")
    const [gmail, setGmail] = useState("")

    const onChangeCompanyName = (event) => {
        setCompanyName(event.target.value)
    }
    const onChangeAddress = (event) => {
        setAddress(event.target.value)
    }
    const onChangeNumber = (event) => {
        setNumber(event.target.value)
    }
    const onChangeGamil = (event) => {
        setGmail(event.target.value)
    }

    const onSubmitCompanyDetails = (event) => {
        event.preventDefault()
        const details = {
            CompanyName: companyName,
            Address: address,
            Number: number,
            Gmail: gmail
        }
        localStorage.setItem("companyDetails" , JSON.stringify(details))
    }

    return (
        <div className="company-details-container">
            <h1>Company Details</h1>
            <form onClick={onSubmitCompanyDetails}>
                <label className="label" htmlFor="name">Comapany name</label>
                <input id="name" type="text" value={companyName} onChange={onChangeCompanyName} className="text-input" />
                <label className="label" htmlFor="Address">Address</label>
                <input  id="Address" type="text" value={address} onChange={onChangeAddress} className="text-input" />
                <label className="label" htmlFor="Number">Number</label>
                <input id="Number" type="number" value={number} onChange={onChangeNumber} className="text-input" />
                <label className="label" htmlFor="Gmail">Gmail</label>
                <input id="Gmail" type="email" value={gmail} onChange={onChangeGamil} className="text-input" />
                <button type="submit" style={{marginTop: "15px"}} className="button" >Submit</button>
            </form>
        </div>
    )
}

export default CompanyDetails