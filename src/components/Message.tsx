const phone = '(844) 998-1033'
// const email = ''
function Message() {
    return (
        <>
            <div className="msg">
                <h3>A new site is under development, it will be ready soon.</h3>
                <p>
                    In the meantime, you can always reach us via phone or email.
                </p>
                <p>Tel: {phone}</p>
                {/*<p>Email: {email}</p> */}
            </div>
        </>
    )
}

export default Message
