import React from 'react'

export default function footer() {
    const date = new Date().getFullYear()
    return (
        <>
            <div style={{ backgroundColor: "#0077b6" }}>
                <div className="container">
                    <div className="row">
                        <div className='py-3'>
                            <p className='text-center mb-0 '>© {date} Bank.Made with ❤ by Nauman Shabbir</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
