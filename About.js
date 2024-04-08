import React from 'react';

export default function About() {
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <h6 className="mt-bottom">
                        <strong>ABOUT ME  Professional Summary</strong>
                    </h6>
                    <p className="red-text">
                        Looking for a career which offers ample learning opportunities as well as professional growth and to use my abilities and talents to promote a mutually rewarding association between the company and myself.
                    </p>
                </div>
                <div className="card-action">
                    <h6>
                        <strong>PERSONAL INFO</strong>
                    </h6>
                    <div className="row mt">
                        <div className="col xl6 l6 m6 s12">
                            <p>
                                <strong>Address:</strong> 123 Lorem
                            </p>
                            <p>
                                <strong>Email:</strong> test@yahoo.com
                            </p>
                            <p>
                                <strong>Phone:</strong> 123 456 7898
                            </p>
                        </div>
                        <div className="col xl6 l6 m6 s12">
                            <p>
                                <strong>Main Language</strong> - English
                            </p>
                            <p>
                                <strong>Second Language</strong> - Spanish
                            </p>
                            <p>
                                <strong>Third Language</strong> - Chinese
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
