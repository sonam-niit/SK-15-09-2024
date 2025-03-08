function ContactUs() {
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert('Your query submitted successfully')
    }
    return (
        <div class="container">
            <h3 class="p-2 text-center">Contact us</h3>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label class="form-label">Full Name</label>
                    <input type="text" class="form-control" placeholder="John Doe" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" class="form-control" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Phone</label>
                    <input type="text" class="form-control" placeholder="9898123450"/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Example textarea</label>
                    <textarea class="form-control" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary w-100 my-3">Contact Us</button>
            </form>
        </div>
    );
}

export default ContactUs;