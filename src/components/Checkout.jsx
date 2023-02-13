export default function Checkout({onSubmit}){
    return (
        <form className="Checkout">
            <label htmlFor="first">First Name:</label>
            <input type='text' name='first' id='first'  />
            <label htmlFor="last">Last Name:</label>
            <input type='text' name='last' id='last'  />
            <label htmlFor="email">Email:</label>
            <input type='email' name='email' id='email'  />
            <label htmlFor="zip">Zip Code:</label>
            <input type='number' name='zip' id='zip'  />
            <br></br>
            <input type='submit' onClick={onSubmit}/>
        </form>
    )
}